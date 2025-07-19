const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-ping"></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-pink-400 rounded-full opacity-80 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-70 animate-bounce"></div>
    </div>
  );
};

export default FloatingParticles;
