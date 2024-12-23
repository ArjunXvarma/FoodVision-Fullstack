import React from "react"
import PredictionField from "./PredictionField"

interface Prediction {
    class: string
    confidence: number
}

interface PredictionResultProps {
    mainPrediction: Prediction
    otherPredictions: Prediction[]
    inferenceTime: number
    responseTime: number
}

const PredictionResult: React.FC<PredictionResultProps> = ({ mainPrediction, otherPredictions, inferenceTime, responseTime }) => {
    return (
        <div className="w-75">
            {/* Main Prediction */}
            <div className="mb-5"> {/* Increased spacing */}
                <h5 className="text-center fw-bold">Main Prediction</h5>
                <div className="w-100 d-flex align-items-center justify-content-between">
                    <PredictionField label="Prediction" value={mainPrediction.class} align="left" colour="#f8f9fa"/>
                    <PredictionField
                        label="Confidence"
                        value={(mainPrediction.confidence * 100).toFixed(1).toString() + "%"}
                        align="right"
                        colour="#f8f9fa"
                    />
                </div>
            </div>

            {/* Other Predictions */}
            <div className="mb-3">
                <h5 className="text-center fw-bold">Other Top 3 Predictions</h5>
                {otherPredictions.map((prediction, index) => (
                <div key={index} className="w-100 d-flex align-items-center justify-content-between mb-2">
                    <PredictionField label="Prediction" value={prediction.class} align="left" colour="#f8f9fa"/>
                    <PredictionField
                    label="Confidence"
                    value={(prediction.confidence * 100).toFixed(2).toString() + "%"}
                    align="right"
                    colour="#f8f9fa"
                    />
                </div>
                ))}
            </div>

            {/* Inference Time */}
            <div className="d-flex justify-content-between mb-2">
                <span className="fw-bold">Inference Time:</span>
                <span>{inferenceTime.toFixed(3)} s</span>
            </div>

            {/* Response Time */}
            <div className="d-flex justify-content-between">
                <span className="fw-bold">Response Time:</span>
                <span>{responseTime.toFixed(3)} s</span>
            </div>
        </div>
    )
}

export default PredictionResult
