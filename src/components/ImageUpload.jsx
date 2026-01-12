import { useState } from "react";
import { UploadCloud, Image as ImageIcon } from "lucide-react";

const ImageUpload = ({ uploadImageHandler }) => {
  const [fileName, setFileName] = useState("");

  const handleFile = (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file (jpg, png, webp).");
      return;
    }

    setFileName(file.name);
    uploadImageHandler(file);
  };

  const showImageHandler = (e) => {
    const file = e.target.files?.[0];
    handleFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    handleFile(file);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-6 sm:p-8"
      >
        <label
          htmlFor="fileInput"
          className="group block cursor-pointer rounded-2xl border-2 border-dashed border-white/20 bg-white/5 hover:bg-white/10 transition-all p-8 text-center"
        >
          <input
            type="file"
            id="fileInput"
            className="hidden"
            accept="image/*"
            onChange={showImageHandler}
          />

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:scale-105 transition">
              <UploadCloud className="text-white/80" size={28} />
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-white">
                Click to upload{" "}
                <span className="text-white/50 font-medium">
                  or drag & drop
                </span>
              </h2>
              <p className="mt-1 text-sm text-white/50">
                PNG, JPG, JPEG, WEBP supported
              </p>
            </div>

            {fileName && (
              <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">
                <ImageIcon size={18} className="text-white/70" />
                <span className="truncate max-w-55 sm:max-w-xs">
                  {fileName}
                </span>
              </div>
            )}
          </div>
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;
