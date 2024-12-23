import React from "react"

interface PredictButtonProps {
  onPredict: () => void
}

const PredictButton: React.FC<PredictButtonProps> = ({ onPredict }) => {
    return (
        <button className="btn btn-primary btn-lg mb-4" onClick={onPredict}>
            Predict
        </button>
    )
}

export default PredictButton
