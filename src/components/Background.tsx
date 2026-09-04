export function Background() {
  return (
    <>
      {/* Grid */}
      <div className="fixed inset-0 grid-bg animate-grid-fade pointer-events-none z-0" />

      {/* Gradient blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-accent-600/15 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-[30%] right-[-10%] w-[35rem] h-[35rem] bg-cyan2-500/10 rounded-full blur-[120px] animate-blob [animation-delay:4s]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[30rem] h-[30rem] bg-indigo-700/10 rounded-full blur-[120px] animate-blob [animation-delay:8s]" />
      </div>

      {/* Radial vignette */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, rgba(7,7,16,0.4) 70%, rgba(7,7,16,0.8) 100%)',
        }}
      />

      {/* Noise */}
      <div className="noise" />
    </>
  );
}
