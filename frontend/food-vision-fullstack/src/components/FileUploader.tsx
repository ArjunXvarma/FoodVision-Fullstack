import React, { ChangeEvent } from "react"

interface FileUploaderProps {
  onFileChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileChange }) => {
  return (
    <div className="mb-4 w-75">
        <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={onFileChange}
            style={{
                backgroundColor: "#343a40",
                color: "white",
                border: "1px solid #495057",
            }}
        />
    </div>
  )
}

export default FileUploader
