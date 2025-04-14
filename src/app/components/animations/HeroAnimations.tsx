'use client';

const HeroAnimations = () => {
  return (
    <style jsx>{`
      @keyframes float-1 {
        0%, 100% { transform: translateY(0) rotate(0); }
        50% { transform: translateY(-20px) rotate(10deg); }
      }
      @keyframes float-2 {
        0%, 100% { transform: translateY(0) rotate(0); }
        50% { transform: translateY(20px) rotate(-10deg); }
      }
      @keyframes float-3 {
        0%, 100% { transform: translateX(0) rotate(0); }
        50% { transform: translateX(-20px) rotate(-5deg); }
      }
      @keyframes float-4 {
        0%, 100% { transform: translateX(0) rotate(0); }
        50% { transform: translateX(20px) rotate(5deg); }
      }
      @keyframes float-5 {
        0%, 100% { transform: translate(0, 0) rotate(0); }
        50% { transform: translate(-15px, -15px) rotate(10deg); }
      }
      @keyframes float-6 {
        0%, 100% { transform: translate(0, 0) rotate(0); }
        50% { transform: translate(15px, 15px) rotate(-10deg); }
      }
      @keyframes gradient-x {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
      .animate-float-2 { animation: float-2 7s ease-in-out infinite; }
      .animate-float-3 { animation: float-3 5s ease-in-out infinite; }
      .animate-float-4 { animation: float-4 8s ease-in-out infinite; }
      .animate-float-5 { animation: float-5 9s ease-in-out infinite; }
      .animate-float-6 { animation: float-6 7s ease-in-out infinite; }
      .animate-gradient-x { 
        background-size: 200% 200%;
        animation: gradient-x 15s ease infinite;
      }
    `}</style>
  );
};

export default HeroAnimations; 