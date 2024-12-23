import React from "react"
import FileUploader from "./FileUploader"
import PredictButton from "./PredictButton"
import PredictionResult from "./PredictionResult"

interface BottomSectionProps {
    handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handlePredict: () => void
    loading: boolean
    mainPrediction: { class: string; confidence: number }
    otherPredictions: { class: string; confidence: number }[]
    inferenceTime: number
    responseTime: number
}

const BottomSection: React.FC<BottomSectionProps> = ({
    handleFileChange,
    handlePredict,
    loading,
    mainPrediction,
    otherPredictions,
    inferenceTime,
    responseTime,
}) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center flex-grow-2 gap-4">
            <FileUploader onFileChange={handleFileChange} />
            <PredictButton onPredict={handlePredict} />
            {loading ? (
                <p>Loading prediction...</p>
            ) : (
                <PredictionResult
                mainPrediction={mainPrediction}
                otherPredictions={otherPredictions}
                inferenceTime={inferenceTime}
                responseTime={responseTime}
                />
            )}
        </div>
    )
}

export default BottomSection
