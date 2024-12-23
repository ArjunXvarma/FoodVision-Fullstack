import React from "react"

interface PredictionFieldProps {
    label: string
    value: string
    align: "left" | "right"
    colour: string
}  

const PredictionField: React.FC<PredictionFieldProps> = ({ label, value, align }) => {
    return (
        <div className={`d-flex align-items-center ${align === "right" ? "justify-content-end" : "justify-content-start"}`} style={{ flex: 1 }}>
            <label
                htmlFor={label.toLowerCase() + "-input"}
                className={`fw-bold me-3 ${align === "right" ? "text-end" : "text-start"}`}
                style={{ minWidth: "30%" }}
                >
                {label}
            </label>
            <input
                id={label.toLowerCase() + "-input"}
                type="text"
                className="form-control text-center"
                value={value}
                readOnly
                style={{
                    backgroundColor: "transparent", /* Made transparent */
                    color: "white", /* Font color set to white */
                    fontSize: "1.2rem",
                    border: "none", /* Removed all borders */
                    borderBottom: "1px solid rgba(255, 255, 255, 0.5)", /* Added subtle white bottom border */
                    width: align === "right" ? "35%" : "70%",
                    height: "30px",
                    borderRadius: "0"
                }}
                aria-readonly="true"
            />
        </div>
    )
}

export default PredictionField
