const BetSlip = ({ handlePlaceBet }) => {
  return (
    <div className="w-full">
      <div className="flex items-end gap-2">
        <div className="translate-y-[1.5px] border-b-0 transition-all ease-in-out duration-100 cursor-pointer flex items-center gap-1 p-2 border-[1px] border-brandBorder bg-cardBg rounded-t-lg">
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.21 5.056C8.13 2.58867 11.13 1 14.5 1C14.6326 1 14.7598 1.05268 14.8536 1.14645C14.9473 1.24021 15 1.36739 15 1.5C15 4.87067 13.4113 7.87 10.944 9.79067C11.0466 10.4335 11.0085 11.0909 10.8324 11.7176C10.6563 12.3443 10.3463 12.9253 9.92377 13.4205C9.50129 13.9158 8.97639 14.3135 8.38529 14.5862C7.79419 14.8588 7.15097 15 6.5 15C6.36739 15 6.24022 14.9473 6.14645 14.8536C6.05268 14.7598 6 14.6326 6 14.5V11.746C5.35195 11.2342 4.76617 10.6482 4.25467 10H1.5C1.36739 10 1.24021 9.94732 1.14645 9.85355C1.05268 9.75979 1 9.63261 1 9.5C0.999947 8.84897 1.14116 8.20568 1.41388 7.61453C1.68661 7.02337 2.08435 6.49843 2.57967 6.07594C3.07499 5.65345 3.65608 5.34346 4.28285 5.16737C4.90961 4.99128 5.56712 4.95328 6.21 5.056ZM10 4.5C9.60218 4.5 9.22064 4.65804 8.93934 4.93934C8.65804 5.22064 8.5 5.60218 8.5 6C8.5 6.39782 8.65804 6.77936 8.93934 7.06066C9.22064 7.34196 9.60218 7.5 10 7.5C10.3978 7.5 10.7794 7.34196 11.0607 7.06066C11.342 6.77936 11.5 6.39782 11.5 6C11.5 5.60218 11.342 5.22064 11.0607 4.93934C10.7794 4.65804 10.3978 4.5 10 4.5Z"
              fill="#F7F9FB"
            />
            <path
              d="M3.50669 11.4947C3.55935 11.4554 3.60376 11.4062 3.63739 11.3498C3.67101 11.2933 3.69319 11.2308 3.70267 11.1658C3.71214 11.1008 3.70871 11.0346 3.69259 10.9709C3.67646 10.9072 3.64796 10.8474 3.60869 10.7947C3.56943 10.742 3.52017 10.6976 3.46374 10.664C3.40732 10.6304 3.34482 10.6082 3.27982 10.5987C3.21481 10.5893 3.14858 10.5927 3.08491 10.6088C3.02123 10.6249 2.96135 10.6534 2.90869 10.6927C2.39728 11.0731 1.99963 11.5861 1.75875 12.1762C1.51786 12.7663 1.44292 13.4111 1.54202 14.0407C1.55814 14.1456 1.6072 14.2426 1.6821 14.3177C1.75701 14.3929 1.85387 14.4423 1.95869 14.4587C2.58838 14.5577 3.23316 14.4827 3.82327 14.2417C4.41338 14.0007 4.92636 13.6029 5.30669 13.0914C5.34722 13.0389 5.37689 12.9788 5.39398 12.9147C5.41107 12.8506 5.41523 12.7837 5.40622 12.718C5.39721 12.6523 5.37521 12.589 5.34151 12.5319C5.3078 12.4747 5.26306 12.4249 5.20989 12.3852C5.15673 12.3455 5.09619 12.3168 5.03182 12.3008C4.96745 12.2847 4.90053 12.2816 4.83496 12.2917C4.76939 12.3018 4.70648 12.3248 4.64989 12.3594C4.5933 12.394 4.54417 12.4396 4.50536 12.4934C4.27287 12.806 3.97041 13.0599 3.62219 13.2347C3.27397 13.4096 2.88966 13.5004 2.50002 13.5C2.50002 12.68 2.89469 11.9514 3.50669 11.4947Z"
              fill="#F7F9FB"
            />
          </svg>
          <h2 className="text-xs font-bold text-slate-50">Dashboard</h2>
        </div>
        <div className="lg:hidden translate-y-[1px] transition-all ease-in-out duration-100 cursor-pointer flex items-center gap-1 p-2 border-[1px] border-brandBorder bg-cardBg rounded-t-lg">
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.5 4.5C5.5 3.83696 5.76339 3.20107 6.23223 2.73223C6.70107 2.26339 7.33696 2 8 2C8.66304 2 9.29893 2.26339 9.76777 2.73223C10.2366 3.20107 10.5 3.83696 10.5 4.5C10.5 5.16304 10.2366 5.79893 9.76777 6.26777C9.29893 6.73661 8.66304 7 8 7C7.33696 7 6.70107 6.73661 6.23223 6.26777C5.76339 5.79893 5.5 5.16304 5.5 4.5ZM10.5 6.5C10.5 5.96957 10.7107 5.46086 11.0858 5.08579C11.4609 4.71071 11.9696 4.5 12.5 4.5C13.0304 4.5 13.5391 4.71071 13.9142 5.08579C14.2893 5.46086 14.5 5.96957 14.5 6.5C14.5 7.03043 14.2893 7.53914 13.9142 7.91421C13.5391 8.28929 13.0304 8.5 12.5 8.5C11.9696 8.5 11.4609 8.28929 11.0858 7.91421C10.7107 7.53914 10.5 7.03043 10.5 6.5ZM1.5 6.5C1.5 5.96957 1.71071 5.46086 2.08579 5.08579C2.46086 4.71071 2.96957 4.5 3.5 4.5C4.03043 4.5 4.53914 4.71071 4.91421 5.08579C5.28929 5.46086 5.5 5.96957 5.5 6.5C5.5 7.03043 5.28929 7.53914 4.91421 7.91421C4.53914 8.28929 4.03043 8.5 3.5 8.5C2.96957 8.5 2.46086 8.28929 2.08579 7.91421C1.71071 7.53914 1.5 7.03043 1.5 6.5ZM4.20667 10.078C4.6133 9.44068 5.17405 8.91617 5.83708 8.55296C6.50011 8.18975 7.24401 7.99957 8 8C8.63321 7.99942 9.25941 8.13259 9.8376 8.39077C10.4158 8.64896 10.9329 9.02636 11.3552 9.49824C11.7774 9.97013 12.0952 10.5259 12.2878 11.1291C12.4804 11.7323 12.5434 12.3694 12.4727 12.9987C12.464 13.0768 12.4371 13.1519 12.394 13.2177C12.3509 13.2835 12.2929 13.3382 12.2247 13.3773C10.939 14.115 9.48223 14.5021 8 14.5C6.46333 14.5 5.02 14.092 3.77533 13.3773C3.70713 13.3382 3.64912 13.2835 3.60603 13.2177C3.56294 13.1519 3.53598 13.0768 3.52733 12.9987C3.41537 11.9764 3.65497 10.9465 4.20667 10.0787V10.078Z"
              fill="#F7F9FB"
            />
            <path
              d="M3.38805 9.50269C2.73056 10.5176 2.42422 11.7202 2.51605 12.926C2.11572 12.8653 1.72199 12.7671 1.34005 12.6327L1.26339 12.606C1.19498 12.5817 1.13509 12.5382 1.09095 12.4805C1.04682 12.4229 1.02034 12.3537 1.01472 12.2814L1.00805 12.2007C0.981124 11.866 1.02189 11.5293 1.12792 11.2107C1.23396 10.8921 1.40308 10.5982 1.6252 10.3464C1.84733 10.0946 2.1179 9.89007 2.42077 9.74512C2.72365 9.60017 3.05262 9.51772 3.38805 9.50269ZM13.4841 12.926C13.5759 11.7202 13.2695 10.5176 12.6121 9.50269C12.9475 9.51772 13.2765 9.60017 13.5793 9.74512C13.8822 9.89007 14.1528 10.0946 14.3749 10.3464C14.597 10.5982 14.7662 10.8921 14.8722 11.2107C14.9782 11.5293 15.019 11.866 14.9921 12.2007L14.9854 12.2814C14.9796 12.3536 14.9531 12.4226 14.909 12.4801C14.8649 12.5376 14.805 12.5811 14.7367 12.6054L14.6601 12.632C14.2821 12.7654 13.8894 12.8647 13.4841 12.926Z"
              fill="#F7F9FB"
            />
          </svg>
          <h2 className="flex items-center gap-2 text-xs font-bold text-slate-50">
            Lucky Players<span className="text-green-500">0</span>
          </h2>
        </div>
        <span className="flex items-center justify-end flex-grow pb-1 pr-2 text-xs text-slate-50">
          #143056219
        </span>
      </div>
      <div className="border-[1px] border-brandBorder bg-cardBg rounded-tl-none rounded-tr-none sm:rounded-tr-2xl rounded-2xl p-2 w-full flex flex-col gap-3 false">
        <div className="flex flex-col items-center w-full gap-2">
          <div className="relative flex items-start justify-between gap-2 w-full">
            <div className="flex flex-col items-center w-full h-full gap-2 md:gap-2 rounded-[14px] shadowDiv p-1">
              <div className="flex flex-col items-center justify-between w-full gap-1">
                <div className="relative w-full h-full">
                  <div
                    id="betAmount"
                    className="items-center justify-between gap-0 p-1 bg-slate-900/20 rounded-[16px] border-[1px] border-brandBorder w-full h-9 sm:h-auto mb-1 flex"
                  >
                    <button disabled>
                      <svg
                        width={28}
                        height={40}
                        viewBox="0 0 28 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-all ease-in-out cursor-pointer active:translate-y-1"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.75 20C5.75 19.8011 5.82902 19.6103 5.96967 19.4697C6.11032 19.329 6.30109 19.25 6.5 19.25H21.5C21.6989 19.25 21.8897 19.329 22.0303 19.4697C22.171 19.6103 22.25 19.8011 22.25 20C22.25 20.1989 22.171 20.3897 22.0303 20.5303C21.8897 20.671 21.6989 20.75 21.5 20.75H6.5C6.30109 20.75 6.11032 20.671 5.96967 20.5303C5.82902 20.3897 5.75 20.1989 5.75 20Z"
                          fill="#F7F9FB"
                        />
                      </svg>
                    </button>
                    <input
                      className="w-24 text-2xl font-semibold text-center bg-transparent no-arrows sm:w-40 min-w-xs text-slate-50 focus:outline-none"
                      type="number"
                      defaultValue={50}
                      min={50}
                    />
                    <button>
                      <svg
                        width={28}
                        height={40}
                        viewBox="0 0 28 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-all ease-in-out cursor-pointer active:translate-y-1"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14 11.75C14.1989 11.75 14.3897 11.829 14.5303 11.9697C14.671 12.1103 14.75 12.3011 14.75 12.5V19.25H21.5C21.6989 19.25 21.8897 19.329 22.0303 19.4697C22.171 19.6103 22.25 19.8011 22.25 20C22.25 20.1989 22.171 20.3897 22.0303 20.5303C21.8897 20.671 21.6989 20.75 21.5 20.75H14.75V27.5C14.75 27.6989 14.671 27.8897 14.5303 28.0303C14.3897 28.171 14.1989 28.25 14 28.25C13.8011 28.25 13.6103 28.171 13.4697 28.0303C13.329 27.8897 13.25 27.6989 13.25 27.5V20.75H6.5C6.30109 20.75 6.11032 20.671 5.96967 20.5303C5.82902 20.3897 5.75 20.1989 5.75 20C5.75 19.8011 5.82902 19.6103 5.96967 19.4697C6.11032 19.329 6.30109 19.25 6.5 19.25H13.25V12.5C13.25 12.3011 13.329 12.1103 13.4697 11.9697C13.6103 11.829 13.8011 11.75 14 11.75Z"
                          fill="#F7F9FB"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="sticky flex flex-col w-full gap-0">
                    <div className="grid-cols-2 gap-2 sm:grid-cols-3 overflow-hidden p-2 grid">
                      <button className="active:translate-y-1 flex false false text-xs sm:text-base font-bold text-slate-100 items-center justify-center gap-1 sm:gap-2 px-1 py-1 md:hover:scale-110 hover:bg-brandBg transition-all ease-in-out border-[1px] border-brandBorder rounded-lg">
                        <span className="text-base">+</span>
                        <span className="flex items-center ml-0 text-xs font-bold sm:text-base text-slate-100">
                          100
                        </span>
                      </button>
                      <button className="active:translate-y-1 flex false false text-xs sm:text-base font-bold text-slate-100 items-center justify-center gap-1 sm:gap-2 px-1 py-1 md:hover:scale-110 hover:bg-brandBg transition-all ease-in-out border-[1px] border-brandBorder rounded-lg">
                        <span className="text-base">+</span>
                        <span className="flex items-center ml-0 text-xs font-bold sm:text-base text-slate-100">
                          500
                        </span>
                      </button>
                      <button className="active:translate-y-1 flex false false text-xs sm:text-base font-bold text-slate-100 items-center justify-center gap-1 sm:gap-2 px-1 py-1 md:hover:scale-110 hover:bg-brandBg transition-all ease-in-out border-[1px] border-brandBorder rounded-lg">
                        <span className="text-base">+</span>
                        <span className="flex items-center ml-0 text-xs font-bold sm:text-base text-slate-100">
                          1000
                        </span>
                      </button>
                      <button className="active:translate-y-1 flex false false text-xs sm:text-base font-bold text-slate-100 items-center justify-center gap-1 sm:gap-2 px-1 py-1 md:hover:scale-110 hover:bg-brandBg transition-all ease-in-out border-[1px] border-brandBorder rounded-lg">
                        <span className="text-base">+</span>
                        <span className="flex items-center ml-0 text-xs font-bold sm:text-base text-slate-100">
                          2000
                        </span>
                      </button>
                    </div>
                    <div className="items-center gap-1 justify-between flex">
                      <button className="flex flex-grow justify-center active:translate-y-1 md:hover:scale-105 transition-all ease-in-out items-center gap-2 p-2 m-1 bg-[#334155]/20 border-[1px] border-green-500 rounded-lg">
                        <span className="text-xs font-semibold text-green-500 sm:text-base">
                          Max
                        </span>
                      </button>
                      <button className="flex flex-grow justify-center active:translate-y-1 md:hover:scale-105 transition-all ease-in-out items-center gap-2 p-2 m-1 border-[1px] border-orange-500 rounded-lg">
                        <span className="text-xs font-semibold text-orange-500 sm:text-base">
                          Reset
                        </span>
                      </button>
                      <button className="bg-slate-500 overflow-hidden md:hover:scale-110 p-2 w-8 h-8 sm:w-10 sm:h-10 sm:text-base flex font-bold justify-center active:translate-y-1 transition-all ease-in-out items-center gap-2 rounded-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#ffffff"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                          <path d="M13.5 6.5l4 4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-auto" id="placebet">
                <div className="bottom-20 sticky w-full mx:flex">
                  <div
                    className="flex flex-col items-center w-full gap-2"
                    style={{ zIndex: 1000 }}
                  >
                    <div className="w-full flex justify-center items-center flex-grow">
                      <button
                        onClick={handlePlaceBet}
                        className="relative z-30 w-full rounded-[16px] flex justify-center items-center flex-grow px-5 py-2.5 overflow-hidden group bg-green-500 text-white transition-all ease-out duration-300"
                      >
                        <span className="shimmer" />
                        <span className="text-lg font-semibold text-slate-50">
                          Next Bet
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center w-full gap-2 space-x-4 text-sm font-semibold rounded-[16px] text-slate-100 space-x">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input className="sr-only peer" type="checkbox" />
                  <div className="border-red-500 w-11 h-6 border-2 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[20px] after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500" />{" "}
                </label>
                <span className="flex items-center justify-between w-full">
                  Auto Bet
                </span>
              </div>
              <div className="flex items-center w-full gap-2 space-x-4 text-sm font-semibold rounded-[16px] text-slate-100 space-x">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input className="sr-only peer" type="checkbox" />
                  <div className="border-red-500 w-11 h-6 border-2 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[20px] after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500" />{" "}
                </label>
                Auto Cashout
              </div>
            </div>
            <div className="flex flex-col items-center w-full h-full gap-2 md:gap-2 rounded-[14px] shadowDiv p-1">
              <div className="flex flex-col items-center justify-between w-full gap-1">
                <div className="relative w-full h-full">
                  <div
                    id="betAmount"
                    className="items-center justify-between gap-0 p-1 bg-slate-900/20 rounded-[16px] border-[1px] border-brandBorder w-full h-9 sm:h-auto mb-1 flex"
                  >
                    <button disabled>
                      <svg
                        width={28}
                        height={40}
                        viewBox="0 0 28 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-all ease-in-out cursor-pointer active:translate-y-1"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.75 20C5.75 19.8011 5.82902 19.6103 5.96967 19.4697C6.11032 19.329 6.30109 19.25 6.5 19.25H21.5C21.6989 19.25 21.8897 19.329 22.0303 19.4697C22.171 19.6103 22.25 19.8011 22.25 20C22.25 20.1989 22.171 20.3897 22.0303 20.5303C21.8897 20.671 21.6989 20.75 21.5 20.75H6.5C6.30109 20.75 6.11032 20.671 5.96967 20.5303C5.82902 20.3897 5.75 20.1989 5.75 20Z"
                          fill="#F7F9FB"
                        />
                      </svg>
                    </button>
                    <input
                      className="w-24 text-2xl font-semibold text-center bg-transparent no-arrows sm:w-40 min-w-xs text-slate-50 focus:outline-none"
                      type="number"
                      defaultValue={50}
                      min={50}
                    />
                    <button>
                      <svg
                        width={28}
                        height={40}
                        viewBox="0 0 28 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-all ease-in-out cursor-pointer active:translate-y-1"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14 11.75C14.1989 11.75 14.3897 11.829 14.5303 11.9697C14.671 12.1103 14.75 12.3011 14.75 12.5V19.25H21.5C21.6989 19.25 21.8897 19.329 22.0303 19.4697C22.171 19.6103 22.25 19.8011 22.25 20C22.25 20.1989 22.171 20.3897 22.0303 20.5303C21.8897 20.671 21.6989 20.75 21.5 20.75H14.75V27.5C14.75 27.6989 14.671 27.8897 14.5303 28.0303C14.3897 28.171 14.1989 28.25 14 28.25C13.8011 28.25 13.6103 28.171 13.4697 28.0303C13.329 27.8897 13.25 27.6989 13.25 27.5V20.75H6.5C6.30109 20.75 6.11032 20.671 5.96967 20.5303C5.82902 20.3897 5.75 20.1989 5.75 20C5.75 19.8011 5.82902 19.6103 5.96967 19.4697C6.11032 19.329 6.30109 19.25 6.5 19.25H13.25V12.5C13.25 12.3011 13.329 12.1103 13.4697 11.9697C13.6103 11.829 13.8011 11.75 14 11.75Z"
                          fill="#F7F9FB"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="sticky flex flex-col w-full gap-0">
                    <div className="grid-cols-2 gap-2 sm:grid-cols-3 overflow-hidden p-2 grid">
                      <button className="active:translate-y-1 flex false false text-xs sm:text-base font-bold text-slate-100 items-center justify-center gap-1 sm:gap-2 px-1 py-1 md:hover:scale-110 hover:bg-brandBg transition-all ease-in-out border-[1px] border-brandBorder rounded-lg">
                        <span className="text-base">+</span>
                        <span className="flex items-center ml-0 text-xs font-bold sm:text-base text-slate-100">
                          100
                        </span>
                      </button>
                      <button className="active:translate-y-1 flex false false text-xs sm:text-base font-bold text-slate-100 items-center justify-center gap-1 sm:gap-2 px-1 py-1 md:hover:scale-110 hover:bg-brandBg transition-all ease-in-out border-[1px] border-brandBorder rounded-lg">
                        <span className="text-base">+</span>
                        <span className="flex items-center ml-0 text-xs font-bold sm:text-base text-slate-100">
                          500
                        </span>
                      </button>
                      <button className="active:translate-y-1 flex false false text-xs sm:text-base font-bold text-slate-100 items-center justify-center gap-1 sm:gap-2 px-1 py-1 md:hover:scale-110 hover:bg-brandBg transition-all ease-in-out border-[1px] border-brandBorder rounded-lg">
                        <span className="text-base">+</span>
                        <span className="flex items-center ml-0 text-xs font-bold sm:text-base text-slate-100">
                          1000
                        </span>
                      </button>
                      <button className="active:translate-y-1 flex false false text-xs sm:text-base font-bold text-slate-100 items-center justify-center gap-1 sm:gap-2 px-1 py-1 md:hover:scale-110 hover:bg-brandBg transition-all ease-in-out border-[1px] border-brandBorder rounded-lg">
                        <span className="text-base">+</span>
                        <span className="flex items-center ml-0 text-xs font-bold sm:text-base text-slate-100">
                          2000
                        </span>
                      </button>
                    </div>
                    <div className="items-center gap-1 justify-between flex">
                      <button className="flex flex-grow justify-center active:translate-y-1 md:hover:scale-105 transition-all ease-in-out items-center gap-2 p-2 m-1 bg-[#334155]/20 border-[1px] border-green-500 rounded-lg">
                        <span className="text-xs font-semibold text-green-500 sm:text-base">
                          Max
                        </span>
                      </button>
                      <button className="flex flex-grow justify-center active:translate-y-1 md:hover:scale-105 transition-all ease-in-out items-center gap-2 p-2 m-1 border-[1px] border-orange-500 rounded-lg">
                        <span className="text-xs font-semibold text-orange-500 sm:text-base">
                          Reset
                        </span>
                      </button>
                      <button className="bg-slate-500 overflow-hidden md:hover:scale-110 p-2 w-8 h-8 sm:w-10 sm:h-10 sm:text-base flex font-bold justify-center active:translate-y-1 transition-all ease-in-out items-center gap-2 rounded-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#ffffff"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                          <path d="M13.5 6.5l4 4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-auto" id="placebet">
                <div className="bottom-20 sticky w-full mx:flex">
                  <div
                    className="flex flex-col items-center w-full gap-2"
                    style={{ zIndex: 1000 }}
                  >
                    <div className="w-full flex justify-center items-center flex-grow">
                      <button
                        onClick={handlePlaceBet}
                        className="relative z-30 w-full rounded-[16px] flex justify-center items-center flex-grow px-5 py-2.5 overflow-hidden group bg-green-500 text-white transition-all ease-out duration-300"
                      >
                        <span className="shimmer" />
                        <span className="text-lg font-semibold text-slate-50">
                          Next Bet
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center w-full gap-2 space-x-4 text-sm font-semibold rounded-[16px] text-slate-100 space-x">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input className="sr-only peer" type="checkbox" />
                  <div className="border-red-500 w-11 h-6 border-2 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[20px] after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500" />{" "}
                </label>
                <span className="flex items-center justify-between w-full">
                  Auto Bet
                </span>
              </div>
              <div className="flex items-center w-full gap-2 space-x-4 text-sm font-semibold rounded-[16px] text-slate-100 space-x">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input className="sr-only peer" type="checkbox" />
                  <div className="border-red-500 w-11 h-6 border-2 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[20px] after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500" />{" "}
                </label>
                Auto Cashout
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-[1px] h-96 border-brandBorder bg-cardBg rounded-3xl rounded-tl-none overflow-hidden w-full flex flex-col gap-3 hidden">
        <div className="relative flex flex-col w-full h-96">
          <div className="pb-4 overflow-auto scrollbar-sm">
            <table className="w-full text-sm text-left">
              <thead className="sticky top-0 z-30 text-xs text-white uppercase bg-gray-200/20 backdrop-blur-md">
                <tr>
                  <th scope="col" className="px-4 py-2">
                    user
                  </th>
                  <th scope="col" className="px-4 py-2">
                    <span className="flex gap-1">
                      <span>bet</span>
                      <span className="font-semibold text-green-500" />
                    </span>
                  </th>
                  <th scope="col" className="px-4 py-2">
                    X
                  </th>
                  <th scope="col" className="px-4 py-2">
                    win
                  </th>
                </tr>
              </thead>
              <tbody />
            </table>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-10 rounded-b-3xl bg-gradient-to-t from-cardBg" />
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
