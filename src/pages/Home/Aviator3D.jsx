import { useEffect, useState } from "react";
import img from "../../assets/img";

const Aviator3D = ({ showAnimation, isCrashGame }) => {
  const [backgroundPosition, setBackgroundPosition] = useState(0);

  useEffect(() => {
    if (showAnimation) {
      const interval = setInterval(() => {
        setBackgroundPosition((prev) => {
          const decrement = isCrashGame ? 0.1 : 1;
          return Number((prev - decrement).toFixed(2));
        });
      }, 100);

      return () => clearInterval(interval);
    } else {
      setBackgroundPosition(0);
    }
  }, [showAnimation, isCrashGame]);

  return (
    <div
      className={`h-52 md:h-80 lg:h-96 relative select-none flex overflow-hidden transition-all ease-linear items-center justify-center w-full shadow-inner border-[1px] border-brandBorder rounded-2xl false false false false aviator-bg ${
        isCrashGame ? "vibrate-container" : ""
      }`}
      style={{
        backgroundPositionY: `${
          backgroundPosition > 0 ? `-${backgroundPosition}` : backgroundPosition
        }%`,
        imageRendering: "pixelated",
        zIndex: 999,
      }}
    >
      <div className="absolute flex items-center gap-1 top-2 right-2">
        <div className="flex relative items-center gap-1 p-1 text-white text-xs font-semibold z-40 cursor-pointer rounded-lg border-t-0 border-r-0 border-[1px] border-white/30 backdrop-blur-lg bg-gray-600/20">
          <div className="py-1 px-2 rounded-md false">Simple</div>
          <div className="py-1 px-2 rounded-md bg-gray-100/40">Animated</div>
        </div>
        <div className="p-2 z-40 cursor-pointer rounded-full border-t-0 border-r-0 border-[1px] border-white/30 backdrop-blur-lg bg-gray-600/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-white"
          >
            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />
          </svg>
        </div>
      </div>
      <div className="absolute top-2 left-2 flex items-center gap-1 py-1 px-2 text-white text-xs font-semibold z-40 cursor-pointer rounded-lg border-t-0 border-l-0 border-[1px] border-white/30 backdrop-blur-lg bg-slate-500/20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 text-green-500"
        >
          <path
            fillRule="evenodd"
            d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
          />
        </svg>
        Provably Fair
      </div>
      <div className="absolute flex flex-col z-30 items-center p-4 mx-auto text-slate-50 top-10 text-5xl">
        <div className="relative flex flex-col items-center drop-shadow-md font-black text-white">
          <div className="flex items-end gap-1 w-42">9.88 x</div>
        </div>
      </div>
      <div className="absolute flex flex-col items-start justify-end gap-1 bottom-2 left-2">
        <div className="flex flex-col items-start justify-end w-full h-24 overflow-hidden sm:h-36" />
        <div className="flex items-center cursor-pointer gap-1 py-1 px-2 text-white text-xs font-semibold z-40 rounded-lg border-t-0 border-l-0 border-[1px] border-white/30 backdrop-blur-lg bg-gray-600/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
            width={12}
            height={12}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 3v18h18" />
            <path d="M9 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M19 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M14 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M10.16 10.62l2.34 2.88" />
            <path d="M15.088 13.328l2.837 -4.586" />
          </svg>
          Show chart
        </div>
      </div>
      <div
        className={`${
          isCrashGame ? "rotate_animation" : ""
        } relative mx-auto object-cover w-32 h-32 transition-all ease-linear duration-500`}
      >
        <div
          className={`flex flex-col items-center -gap-4 absolute top-0 left-0 z-10 ${
            isCrashGame ? "grayscale" : "slide"
          } `}
        >
          <div className="flex flex-col items-center w-32 mt-5 lg:mt-auto">
            <svg
              width={55}
              height={6}
              viewBox="0 0 55 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animation-div"
            >
              <path
                d="M0 1.90496C4.4112 1.57077 9.29025 1.27001 13.7349 1.0695C14.8711 1.00267 16.0073 0.935825 17.1769 0.83557C19.4828 0.668479 21.7552 0.83557 24.0277 1.16975C25.1639 1.33684 26.3001 1.57077 27.4697 1.90496V2.13888C24.0945 3.07459 20.6524 3.40877 17.1769 3.20826C15.2053 3.04117 12.3313 2.9075 10.3262 2.80725C6.9844 2.60674 3.34181 2.37281 0.0334151 2.13888C-3.06002e-06 2.13888 0 1.90496 0 1.90496Z"
                fill="#ED1C24"
              />
              <path
                d="M54.9395 2.13857C50.5283 2.47275 45.6492 2.77351 41.2046 2.97402C40.0684 3.04086 38.9322 3.10769 37.7625 3.20795C35.4567 3.37504 33.1842 3.20795 30.9118 2.87377C29.7756 2.70668 28.6394 2.47275 27.4697 2.13857V1.90464C30.845 0.968934 34.287 0.634748 37.7625 0.835257C39.7342 1.00235 42.6082 1.13602 44.6132 1.23628C47.9551 1.43679 51.5977 1.67072 54.9061 1.90464C54.9395 1.90464 54.9395 2.13857 54.9395 2.13857Z"
                fill="#ED1C24"
              />
              <path
                d="M27.6703 5.74793H27.3027C26.8014 5.74793 26.4004 5.34691 26.4004 4.84564V0.902295C26.4004 0.401022 26.8014 0 27.3027 0H27.6703C28.1716 0 28.5726 0.401022 28.5726 0.902295V4.84564C28.5392 5.34691 28.1381 5.74793 27.6703 5.74793Z"
                fill="url(#paint0_linear_304_667)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_304_667"
                  x1="26.397"
                  y1="2.87493"
                  x2="28.5454"
                  y2="2.87493"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.3461" stopColor="#D1D8C6" />
                  <stop offset="0.3463" stopColor="#D1D8C6" />
                  <stop offset="0.3685" stopColor="#E7EADE" />
                  <stop offset="0.3909" stopColor="#F7F7EE" />
                  <stop offset="0.4137" stopColor="#FFFEF5" />
                  <stop offset="0.4793" stopColor="#DEE2D6" />
                  <stop offset="0.5751" stopColor="#BEC4B5" />
                  <stop offset="0.6272" stopColor="#B2B9A9" />
                  <stop offset="0.7269" stopColor="#76786C" />
                  <stop offset="0.8606" stopColor="#3D4038" />
                  <stop offset="0.9548" stopColor="#1A251F" />
                  <stop offset={1} stopColor="#0A1A17" />
                </linearGradient>
              </defs>
            </svg>
            <img src={img.plane} className="w-36 h-36" />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center gap-1 bottom-2 right-2">
        <div className="flex items-center gap-1 py-1 px-2 text-white text-xs font-semibold z-40 rounded-lg border-t-0 border-l-0 border-[1px] border-white/30 backdrop-blur-lg bg-gray-600/20">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-green-500" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500" />
          </span>
          Connected
        </div>
        <div className="flex items-center gap-1 py-1 px-2 text-white text-xs font-semibold z-40 rounded-lg border-t-0 border-l-0 border-[1px] border-white/30 backdrop-blur-lg bg-gray-600/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-white"
          >
            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
            <path
              fillRule="evenodd"
              d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
              clipRule="evenodd"
            />
          </svg>
          255
        </div>
      </div>
    </div>
  );
};

export default Aviator3D;
