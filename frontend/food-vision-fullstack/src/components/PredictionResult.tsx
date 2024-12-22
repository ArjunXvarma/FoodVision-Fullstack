import React from "react"

interface PredictionResultProps {
  result: string
}

const PredictionResult: React.FC<PredictionResultProps> = ({ result }) => {
    return (
        <textarea
            className="form-control text-center fw-bold w-75"
            readOnly
            value={result}
            style={{
                backgroundColor: "green",
                color: "white",
                textAlign: "center",
                fontSize: "1.2rem",
                resize: "none", 
                overflow: "hidden",
                height: "50px",
                border: "none"
            }}
        />
    )
}

export default PredictionResult
