import React, { useState, ChangeEvent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageViewer from "./components/ImageViewer";
import BottomSection from "./components/BottomSection"
import TopSection from "./components/TopSection"

interface Prediction {
  class: string;
  confidence: number;
}

const classNameMapping: { [key: string]: string } = {
  chicken_curry: "Chicken Curry",
  chicken_wings: "Chicken Wings",
  fried_rice: "Fried Rice",
  grilled_salmon: "Grilled Salmon",
  hamburger: "Hamburger",
  ice_cream: "Ice Cream",
  pizza: "Pizza",
  ramen: "Ramen",
  steak: "Steak",
  sushi: "Sushi",
};

const App: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [mainPrediction, setMainPrediction] = useState<Prediction>({ class: "", confidence: 0 });
  const [otherPredictions, setOtherPredictions] = useState<Prediction[]>([]);
  const [inferenceTime, setInferenceTime] = useState<number>(0);
  const [responseTime, setResponseTime] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handlePredict = async () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    setLoading(true);
    const startTime = performance.now();

    try {
      const response = await fetch("http://localhost:3000/predict", {
        method: "POST",
        body: formData,
      });
      const endTime = performance.now();
      const data = await response.json();

      if (response.ok) {
        setMainPrediction({
          class: classNameMapping[data.class] || data.class,
          confidence: data.confidence,
        });
        setOtherPredictions(
          (data.other_possible_classes || []).map((prediction: Prediction) => ({
            class: classNameMapping[prediction.class] || prediction.class,
            confidence: prediction.confidence,
          }))
        );
        setInferenceTime(data.inference_time || 0);
        setResponseTime((endTime - startTime) / 1000);
      } else {
        alert(data.error || "An error occurred while predicting.");
        resetState();
      }
    } catch (error) {
      alert("An error occurred while connecting to the server.");
      console.error(error);
      resetState();
    } finally {
      setLoading(false);
    }
  };

  const resetState = () => {
    setMainPrediction({ class: "", confidence: 0 });
    setOtherPredictions([]);
    setInferenceTime(0);
    setResponseTime(0);
  };

  return (
    <div className="container-fluid bg-dark text-light vh-100 vw-100 d-flex flex-column p-0">
      <div className="row h-100 w-100">
        {/* Left Side: Image Viewer */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <ImageViewer previewUrl={previewUrl} />
        </div>
        {/* Right Side: Top and Bottom Sections */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <TopSection />
          <BottomSection
            handleFileChange={handleFileChange}
            handlePredict={handlePredict}
            loading={loading}
            mainPrediction={mainPrediction}
            otherPredictions={otherPredictions}
            inferenceTime={inferenceTime}
            responseTime={responseTime}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
