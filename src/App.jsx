import Home from "./components/Home";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 px-4 py-10">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute top-32 -right-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/80 text-sm">
            ✨ AI Powered Enhancement
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            AI Image Enhancer
          </h1>

          <p className="mt-4 text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
            Upload your image and let AI upscale + enhance it in seconds with
            better clarity and sharpness.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-6 sm:p-10">
          <Home />

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
            <p>Powered by AI • Built by Aarsh</p>
            <p className="text-white/40">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
