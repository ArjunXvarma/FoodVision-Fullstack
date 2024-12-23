import React from "react"

interface ImageViewerProps {
  previewUrl: string
}

const ImageViewer: React.FC<ImageViewerProps> = ({ previewUrl }) => {
    return previewUrl ? (
        <img
            src={previewUrl}
            alt="Preview"
            className="img-fluid rounded shadow-lg"
            style={{ maxHeight: "90%", maxWidth: "90%" }}
        />
    ) : (
        <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{
                height: "90%",
                border: "2px dashed lightgray",
                borderRadius: "8px",
                width: "90%",
            }}
        >
            <p className="text-muted">No image selected</p>
        </div>
    )
}

export default ImageViewer
