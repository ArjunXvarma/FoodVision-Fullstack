import React, { useState, ChangeEvent } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import ImageViewer from "./components/ImageViewer"
import FileUploader from "./components/FileUploader"
import PredictionResult from "./components/PredictionResult"
import PredictButton from "./components/PredictButton"
import ColourText from "./components/ColourText"

const App: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string>("")
    const [result, setResult] = useState<object | string>("")

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null
        if (file) {
            setSelectedFile(file)
            setPreviewUrl(URL.createObjectURL(file))
        }
    }

    const handlePredict = async () => {
        if (!selectedFile) {
            alert("Please select a file first.")
            return
        }

        const formData = new FormData()
        formData.append("file", selectedFile)

        try {
            const response = await fetch("http://localhost:3000/predict", {
                method: "POST",
                body: formData,
            })
            const data = await response.json()
            if (response.ok) {
                setResult(data.class || { message: "Prediction received successfully" })
            } else {
                setResult(data.error || { error: "An error occurred while predicting." })
            }
        } catch (error) {
            setResult({ error: "An error occurred while connecting to the server." })
            console.error(error)
        }
    }

    return (
        <div
            className="container-fluid bg-dark text-light vh-100 vw-100 d-flex flex-column"
            style={{ padding: 0, margin: 0 }}
        >
            <div className="row h-100">
                {/* Left Side: Image Viewer */}
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <ImageViewer previewUrl={previewUrl} />
                </div>
                {/* Right Side: Controls */}
                <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <FileUploader onFileChange={handleFileChange} />
                    <PredictButton onPredict={handlePredict} />
                    {/* <PredictionResult
                        result={result}
                        backgroundColor="#343a40" 
                        textColor="#ffffff" 
                    /> */}
                    <ColourText result={result}></ColourText>
                </div>
            </div>
        </div>
    )
}

export default App
