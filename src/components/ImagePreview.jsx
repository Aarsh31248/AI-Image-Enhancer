import Loading from "./Loading";

const ImagePreview = ({ uploaded, enhanced, loading }) => {
  return (
    <div className="mt-10 w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur shadow-xl rounded-2xl overflow-hidden border border-gray-200">
          <div className="flex items-center justify-between px-4 py-3 bg-gray-900 text-white">
            <h2 className="text-lg font-semibold">Original Image</h2>
            {uploaded && (
              <a
                href={uploaded}
                download="original.png"
                className="text-sm bg-white/15 hover:bg-white/25 px-3 py-1 rounded-lg transition"
              >
                Download
              </a>
            )}
          </div>

          <div className="h-80 bg-gray-100 flex items-center justify-center overflow-hidden">
            {uploaded ? (
              <img
                src={uploaded}
                alt="Original"
                className="w-full h-full object-cover hover:scale-105 transition duration-300 cursor-pointer"
                onClick={() => window.open(uploaded, "_blank")}
              />
            ) : (
              <div className="text-gray-500 font-medium">No Image Selected</div>
            )}
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur shadow-xl rounded-2xl overflow-hidden border border-gray-200">
          <div className="flex items-center justify-between px-4 py-3 bg-linear-to-r from-blue-700 to-indigo-700 text-white">
            <h2 className="text-lg font-semibold">Enhanced Image</h2>

            {enhanced && !loading && (
              <a
                href={enhanced}
                download="enhanced.png"
                className="text-sm bg-white/15 hover:bg-white/25 px-3 py-1 rounded-lg transition"
              >
                Download
              </a>
            )}
          </div>

          <div className="h-80 bg-gray-100 flex items-center justify-center overflow-hidden">
            {loading ? (
              <div className="flex flex-col items-center justify-center gap-3">
                <Loading />
                <p className="text-gray-600 font-medium">Enhancing Image...</p>
              </div>
            ) : enhanced ? (
              <img
                src={enhanced}
                alt="Enhanced"
                className="w-full h-full object-cover hover:scale-105 transition duration-300 cursor-pointer"
                onClick={() => window.open(enhanced, "_blank")}
              />
            ) : (
              <div className="text-gray-500 font-medium">No Enhanced Image</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
