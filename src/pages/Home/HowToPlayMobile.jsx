const HowToPlayMobile = () => {
  return (
    <div className="lg:hidden">
      <div className="flex flex-col justify-center gap-2 p-4 mx-auto text-white max-w-7xl lg:mt-4">
        <div className="flex gap-2">
          <h1 className="text-lg font-bold py-1 px-2 rounded-lg cursor-pointer bg-white/0">
            How to Play
          </h1>
          <h1 className="text-lg font-bold py-1 px-2 rounded-lg cursor-pointer bg-white/10">
            Description
          </h1>
        </div>
        <div className="w-full p-4 text-white">
          <div className="mb-6">
            <ul className="ml-4 list-disc">
              <li>
                <strong>Thrilling Timing:</strong> Test your instincts by
                placing bets before the number crashes, aiming to cash out at
                the perfect moment for maximum rewards.
              </li>
              <li>
                <strong>Risk and Reward:</strong> Decide whether to cash out
                early for guaranteed winnings or stay in the game and risk
                losing it all for a chance at bigger prizes.
              </li>
              <li>
                <strong>Customizable Bets:</strong> With minimum and maximum bet
                limits, tailor your wagers to suit your comfort level and
                playing style.
              </li>
              <li>
                <strong>Continuous Action:</strong> Experience the excitement of
                non-stop rounds, with each new round offering fresh
                opportunities to test your luck and strategy.
              </li>
              <li>A player can win up to a maximum of 99.99x.</li>
              <li>
                Session token expires after 45 minutes - you ll need to refresh
                to continue playing
              </li>
              <li>
                <div>
                  <strong>Return to Player (RTP):</strong> 95%
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlayMobile;
