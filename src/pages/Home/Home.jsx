import { useState } from "react";
import Aviator3D from "./Aviator3D";
import BetSlip from "./BetSlip";
import Footer from "./Footer";
import GameHistory from "./GameHistory";
import Header from "./Header";
import History from "./History";
import HowToPlayDesktop from "./HowToPlayDesktop";
import HowToPlayMobile from "./HowToPlayMobile";

const Home = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const [isCrashGame, setIsCrashGame] = useState(false);

  const handlePlaceBet = () => {
    setIsCrashGame(false);
    setShowAnimation(true);
  };

  const handleCrashGame = () => {
    setIsCrashGame(true);

    setTimeout(() => {
      setShowAnimation(false);
      setIsCrashGame(false);
    }, 3000);
  };

  return (
    <div
      style={{ backgroundColor: "#0a0928" }}
      className="theme-aviator flex flex-col w-full h-full"
    >
      <div className="w-full h-full overflow-x-auto scrollbar-none">
        <Header />
        <GameHistory />
        <div className="flex flex-col w-screen gap-2 p-1 sm:p-3 max-w-7xl lg:flex-row lg:mx-auto">
          <div className="flex flex-col w-full">
            <Aviator3D
              isCrashGame={isCrashGame}
              showAnimation={showAnimation}
            />
            <HowToPlayDesktop handleCrashGame={handleCrashGame} />
          </div>
          <div
            className="flex w-full gap-2 mx-auto select-none drop-shadow-xl lg:flex-col lg:overflow-y-auto"
            style={{ zIndex: 999 }}
          >
            <BetSlip handlePlaceBet={handlePlaceBet} />
            <History />
          </div>
          <div>
            <div className="react-joyride" />
          </div>
        </div>
        <HowToPlayMobile />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
