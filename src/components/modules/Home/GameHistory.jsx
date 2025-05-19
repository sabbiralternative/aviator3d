const GameHistory = () => {
  return (
    <div
      id="step-gameHistory"
      className="relative flex items-center w-screen gap-2 px-3 py-1 mx-auto sm:py-2 max-w-7xl"
    >
      <div className="flex items-center justify-center gap-1 px-2 py-[6px] text-xs font-bold rounded-lg cursor-pointer text-slate-50 bg-slate-400/40">
        <svg
          width={14}
          height={13}
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 0C3.41 0 0.5 2.91 0.5 6.5C0.5 10.09 3.41 13 7 13C10.59 13 13.5 10.09 13.5 6.5C13.5 2.91 10.59 0 7 0ZM7.5 2.5C7.5 2.36739 7.44732 2.24021 7.35355 2.14645C7.25979 2.05268 7.13261 2 7 2C6.86739 2 6.74022 2.05268 6.64645 2.14645C6.55268 2.24021 6.5 2.36739 6.5 2.5V6.5C6.5 6.776 6.724 7 7 7H10C10.1326 7 10.2598 6.94732 10.3536 6.85355C10.4473 6.75979 10.5 6.63261 10.5 6.5C10.5 6.36739 10.4473 6.24022 10.3536 6.14645C10.2598 6.05268 10.1326 6 10 6H7.5V2.5Z"
            fill="#ffffff"
          />
        </svg>
        <span className="hidden sm:flex">History</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
      <div className="flex items-center flex-grow gap-2 overflow-y-auto scrollbar-none">
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          3.81
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          2.35
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          5.17
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.67
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          2.47
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.24
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.11
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          5.46
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.25
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-white golden-card goldShimmer col-span-2 rounded-lg">
          <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
          >
            <g clipPath="url(#clip0_67_1813)">
              <mask
                id="mask0_67_1813"
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={18}
                height={18}
              >
                <path d="M18 0H0V18H18V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_67_1813)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.75 3.99985C0.75 3.20435 1.82554 2.95613 2.17415 3.67118L4.16003 7.74448C4.44089 8.32057 5.26818 8.30175 5.52257 7.7135L8.31161 1.26384C8.5724 0.660752 9.4276 0.660751 9.68839 1.26384L12.4774 7.71349C12.7318 8.30175 13.5591 8.32057 13.84 7.74448L15.8259 3.67118C16.1745 2.95613 17.25 3.20435 17.25 3.99985V11.2501C17.25 11.8714 16.7463 12.3751 16.125 12.3751H1.875C1.25368 12.3751 0.75 11.8714 0.75 11.2501V3.99985ZM0.75 14.2501C0.75 13.6288 1.25368 13.1251 1.875 13.1251H16.125C16.7463 13.1251 17.25 13.6288 17.25 14.2501V15.0001C17.25 16.2427 16.2426 17.2501 15 17.2501H3C1.75736 17.2501 0.75 16.2427 0.75 15.0001V14.2501Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_67_1813">
                <rect width={18} height={18} fill="white" />
              </clipPath>
            </defs>
          </svg>
          12.41
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.4
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-white golden-card goldShimmer col-span-2 rounded-lg">
          <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
          >
            <g clipPath="url(#clip0_67_1813)">
              <mask
                id="mask0_67_1813"
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={18}
                height={18}
              >
                <path d="M18 0H0V18H18V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_67_1813)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.75 3.99985C0.75 3.20435 1.82554 2.95613 2.17415 3.67118L4.16003 7.74448C4.44089 8.32057 5.26818 8.30175 5.52257 7.7135L8.31161 1.26384C8.5724 0.660752 9.4276 0.660751 9.68839 1.26384L12.4774 7.71349C12.7318 8.30175 13.5591 8.32057 13.84 7.74448L15.8259 3.67118C16.1745 2.95613 17.25 3.20435 17.25 3.99985V11.2501C17.25 11.8714 16.7463 12.3751 16.125 12.3751H1.875C1.25368 12.3751 0.75 11.8714 0.75 11.2501V3.99985ZM0.75 14.2501C0.75 13.6288 1.25368 13.1251 1.875 13.1251H16.125C16.7463 13.1251 17.25 13.6288 17.25 14.2501V15.0001C17.25 16.2427 16.2426 17.2501 15 17.2501H3C1.75736 17.2501 0.75 16.2427 0.75 15.0001V14.2501Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_67_1813">
                <rect width={18} height={18} fill="white" />
              </clipPath>
            </defs>
          </svg>
          33.92
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-white golden-card goldShimmer col-span-2 rounded-lg">
          <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
          >
            <g clipPath="url(#clip0_67_1813)">
              <mask
                id="mask0_67_1813"
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={18}
                height={18}
              >
                <path d="M18 0H0V18H18V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_67_1813)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.75 3.99985C0.75 3.20435 1.82554 2.95613 2.17415 3.67118L4.16003 7.74448C4.44089 8.32057 5.26818 8.30175 5.52257 7.7135L8.31161 1.26384C8.5724 0.660752 9.4276 0.660751 9.68839 1.26384L12.4774 7.71349C12.7318 8.30175 13.5591 8.32057 13.84 7.74448L15.8259 3.67118C16.1745 2.95613 17.25 3.20435 17.25 3.99985V11.2501C17.25 11.8714 16.7463 12.3751 16.125 12.3751H1.875C1.25368 12.3751 0.75 11.8714 0.75 11.2501V3.99985ZM0.75 14.2501C0.75 13.6288 1.25368 13.1251 1.875 13.1251H16.125C16.7463 13.1251 17.25 13.6288 17.25 14.2501V15.0001C17.25 16.2427 16.2426 17.2501 15 17.2501H3C1.75736 17.2501 0.75 16.2427 0.75 15.0001V14.2501Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_67_1813">
                <rect width={18} height={18} fill="white" />
              </clipPath>
            </defs>
          </svg>
          10.22
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          2.14
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.03
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.88
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          2.12
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.66
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          3.91
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.78
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.11
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          5.7
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.16
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          5.89
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          2.05
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.13
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.94
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          5.85
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.42
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          3.1
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          2.97
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          2.44
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          3.36
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.08
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.23
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          2.98
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          5.11
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.92
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.95
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.06
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          2.78
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.01
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.37
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.47
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          2.45
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          9.83
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-white golden-card goldShimmer col-span-2 rounded-lg">
          <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
          >
            <g clipPath="url(#clip0_67_1813)">
              <mask
                id="mask0_67_1813"
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={18}
                height={18}
              >
                <path d="M18 0H0V18H18V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_67_1813)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.75 3.99985C0.75 3.20435 1.82554 2.95613 2.17415 3.67118L4.16003 7.74448C4.44089 8.32057 5.26818 8.30175 5.52257 7.7135L8.31161 1.26384C8.5724 0.660752 9.4276 0.660751 9.68839 1.26384L12.4774 7.71349C12.7318 8.30175 13.5591 8.32057 13.84 7.74448L15.8259 3.67118C16.1745 2.95613 17.25 3.20435 17.25 3.99985V11.2501C17.25 11.8714 16.7463 12.3751 16.125 12.3751H1.875C1.25368 12.3751 0.75 11.8714 0.75 11.2501V3.99985ZM0.75 14.2501C0.75 13.6288 1.25368 13.1251 1.875 13.1251H16.125C16.7463 13.1251 17.25 13.6288 17.25 14.2501V15.0001C17.25 16.2427 16.2426 17.2501 15 17.2501H3C1.75736 17.2501 0.75 16.2427 0.75 15.0001V14.2501Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_67_1813">
                <rect width={18} height={18} fill="white" />
              </clipPath>
            </defs>
          </svg>
          26.9
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          2.41
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.5
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.13
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.13
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          2.57
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          2.99
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-white golden-card goldShimmer col-span-2 rounded-lg">
          <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
          >
            <g clipPath="url(#clip0_67_1813)">
              <mask
                id="mask0_67_1813"
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={18}
                height={18}
              >
                <path d="M18 0H0V18H18V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_67_1813)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.75 3.99985C0.75 3.20435 1.82554 2.95613 2.17415 3.67118L4.16003 7.74448C4.44089 8.32057 5.26818 8.30175 5.52257 7.7135L8.31161 1.26384C8.5724 0.660752 9.4276 0.660751 9.68839 1.26384L12.4774 7.71349C12.7318 8.30175 13.5591 8.32057 13.84 7.74448L15.8259 3.67118C16.1745 2.95613 17.25 3.20435 17.25 3.99985V11.2501C17.25 11.8714 16.7463 12.3751 16.125 12.3751H1.875C1.25368 12.3751 0.75 11.8714 0.75 11.2501V3.99985ZM0.75 14.2501C0.75 13.6288 1.25368 13.1251 1.875 13.1251H16.125C16.7463 13.1251 17.25 13.6288 17.25 14.2501V15.0001C17.25 16.2427 16.2426 17.2501 15 17.2501H3C1.75736 17.2501 0.75 16.2427 0.75 15.0001V14.2501Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_67_1813">
                <rect width={18} height={18} fill="white" />
              </clipPath>
            </defs>
          </svg>
          13.37
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.23
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.21
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.18
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          3.99
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.11
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.64
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.41
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.87
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.83
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.93
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          5.31
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          6.5
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.26
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          2.29
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-white golden-card goldShimmer col-span-2 rounded-lg">
          <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
          >
            <g clipPath="url(#clip0_67_1813)">
              <mask
                id="mask0_67_1813"
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={18}
                height={18}
              >
                <path d="M18 0H0V18H18V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_67_1813)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.75 3.99985C0.75 3.20435 1.82554 2.95613 2.17415 3.67118L4.16003 7.74448C4.44089 8.32057 5.26818 8.30175 5.52257 7.7135L8.31161 1.26384C8.5724 0.660752 9.4276 0.660751 9.68839 1.26384L12.4774 7.71349C12.7318 8.30175 13.5591 8.32057 13.84 7.74448L15.8259 3.67118C16.1745 2.95613 17.25 3.20435 17.25 3.99985V11.2501C17.25 11.8714 16.7463 12.3751 16.125 12.3751H1.875C1.25368 12.3751 0.75 11.8714 0.75 11.2501V3.99985ZM0.75 14.2501C0.75 13.6288 1.25368 13.1251 1.875 13.1251H16.125C16.7463 13.1251 17.25 13.6288 17.25 14.2501V15.0001C17.25 16.2427 16.2426 17.2501 15 17.2501H3C1.75736 17.2501 0.75 16.2427 0.75 15.0001V14.2501Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_67_1813">
                <rect width={18} height={18} fill="white" />
              </clipPath>
            </defs>
          </svg>
          12.66
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          5.42
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          2.48
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.55
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          2.33
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.83
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          2.16
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.57
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          6.72
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          3.93
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          5.6
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          3.06
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.48
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.51
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.04
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          8.25
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-white golden-card goldShimmer col-span-2 rounded-lg">
          <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
          >
            <g clipPath="url(#clip0_67_1813)">
              <mask
                id="mask0_67_1813"
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={18}
                height={18}
              >
                <path d="M18 0H0V18H18V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_67_1813)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.75 3.99985C0.75 3.20435 1.82554 2.95613 2.17415 3.67118L4.16003 7.74448C4.44089 8.32057 5.26818 8.30175 5.52257 7.7135L8.31161 1.26384C8.5724 0.660752 9.4276 0.660751 9.68839 1.26384L12.4774 7.71349C12.7318 8.30175 13.5591 8.32057 13.84 7.74448L15.8259 3.67118C16.1745 2.95613 17.25 3.20435 17.25 3.99985V11.2501C17.25 11.8714 16.7463 12.3751 16.125 12.3751H1.875C1.25368 12.3751 0.75 11.8714 0.75 11.2501V3.99985ZM0.75 14.2501C0.75 13.6288 1.25368 13.1251 1.875 13.1251H16.125C16.7463 13.1251 17.25 13.6288 17.25 14.2501V15.0001C17.25 16.2427 16.2426 17.2501 15 17.2501H3C1.75736 17.2501 0.75 16.2427 0.75 15.0001V14.2501Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_67_1813">
                <rect width={18} height={18} fill="white" />
              </clipPath>
            </defs>
          </svg>
          14.49
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          2.76
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          3.42
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.11
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          6.97
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          4.31
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-white golden-card goldShimmer col-span-2 rounded-lg">
          <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
          >
            <g clipPath="url(#clip0_67_1813)">
              <mask
                id="mask0_67_1813"
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={18}
                height={18}
              >
                <path d="M18 0H0V18H18V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_67_1813)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.75 3.99985C0.75 3.20435 1.82554 2.95613 2.17415 3.67118L4.16003 7.74448C4.44089 8.32057 5.26818 8.30175 5.52257 7.7135L8.31161 1.26384C8.5724 0.660752 9.4276 0.660751 9.68839 1.26384L12.4774 7.71349C12.7318 8.30175 13.5591 8.32057 13.84 7.74448L15.8259 3.67118C16.1745 2.95613 17.25 3.20435 17.25 3.99985V11.2501C17.25 11.8714 16.7463 12.3751 16.125 12.3751H1.875C1.25368 12.3751 0.75 11.8714 0.75 11.2501V3.99985ZM0.75 14.2501C0.75 13.6288 1.25368 13.1251 1.875 13.1251H16.125C16.7463 13.1251 17.25 13.6288 17.25 14.2501V15.0001C17.25 16.2427 16.2426 17.2501 15 17.2501H3C1.75736 17.2501 0.75 16.2427 0.75 15.0001V14.2501Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_67_1813">
                <rect width={18} height={18} fill="white" />
              </clipPath>
            </defs>
          </svg>
          22.39
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
          5.05
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.53
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.38
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
          1.84
        </div>
        <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-white golden-card goldShimmer col-span-2 rounded-lg">
          <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
          >
            <g clipPath="url(#clip0_67_1813)">
              <mask
                id="mask0_67_1813"
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={18}
                height={18}
              >
                <path d="M18 0H0V18H18V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_67_1813)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.75 3.99985C0.75 3.20435 1.82554 2.95613 2.17415 3.67118L4.16003 7.74448C4.44089 8.32057 5.26818 8.30175 5.52257 7.7135L8.31161 1.26384C8.5724 0.660752 9.4276 0.660751 9.68839 1.26384L12.4774 7.71349C12.7318 8.30175 13.5591 8.32057 13.84 7.74448L15.8259 3.67118C16.1745 2.95613 17.25 3.20435 17.25 3.99985V11.2501C17.25 11.8714 16.7463 12.3751 16.125 12.3751H1.875C1.25368 12.3751 0.75 11.8714 0.75 11.2501V3.99985ZM0.75 14.2501C0.75 13.6288 1.25368 13.1251 1.875 13.1251H16.125C16.7463 13.1251 17.25 13.6288 17.25 14.2501V15.0001C17.25 16.2427 16.2426 17.2501 15 17.2501H3C1.75736 17.2501 0.75 16.2427 0.75 15.0001V14.2501Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_67_1813">
                <rect width={18} height={18} fill="white" />
              </clipPath>
            </defs>
          </svg>
          10.09
        </div>
      </div>
      <span className="absolute right-0 w-24 h-full -translate-x-3 bg-gradient-to-l from-brandBg" />
      <dialog
        id="my_modal_3"
        className="border-2 rounded-lg shadow-md modal bg-brandBg border-cardBg"
      >
        <form method="dialog" className="modal-box">
          <button className="absolute p-2 px-3 text-white rounded-full btn btn-sm btn-circle right-2 top-2 bg-cardBg">
            ✕
          </button>
          <h3 className="text-lg font-bold text-white">Last 50 Rounds</h3>
          <div className="grid grid-cols-5 gap-2 mt-2 sm:grid-cols-10">
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
                3.81
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
                2.35
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
                5.17
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
                1.67
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
                2.47
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
                1.24
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
                1.11
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
                5.46
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
                1.25
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-white golden-card goldShimmer col-span-2 rounded-lg">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                >
                  <g clipPath="url(#clip0_67_1813)">
                    <mask
                      id="mask0_67_1813"
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={18}
                      height={18}
                    >
                      <path d="M18 0H0V18H18V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_67_1813)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.75 3.99985C0.75 3.20435 1.82554 2.95613 2.17415 3.67118L4.16003 7.74448C4.44089 8.32057 5.26818 8.30175 5.52257 7.7135L8.31161 1.26384C8.5724 0.660752 9.4276 0.660751 9.68839 1.26384L12.4774 7.71349C12.7318 8.30175 13.5591 8.32057 13.84 7.74448L15.8259 3.67118C16.1745 2.95613 17.25 3.20435 17.25 3.99985V11.2501C17.25 11.8714 16.7463 12.3751 16.125 12.3751H1.875C1.25368 12.3751 0.75 11.8714 0.75 11.2501V3.99985ZM0.75 14.2501C0.75 13.6288 1.25368 13.1251 1.875 13.1251H16.125C16.7463 13.1251 17.25 13.6288 17.25 14.2501V15.0001C17.25 16.2427 16.2426 17.2501 15 17.2501H3C1.75736 17.2501 0.75 16.2427 0.75 15.0001V14.2501Z"
                        fill="white"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_67_1813">
                      <rect width={18} height={18} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                12.41
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
                1.4
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-white golden-card goldShimmer col-span-2 rounded-lg">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                >
                  <g clipPath="url(#clip0_67_1813)">
                    <mask
                      id="mask0_67_1813"
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={18}
                      height={18}
                    >
                      <path d="M18 0H0V18H18V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_67_1813)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.75 3.99985C0.75 3.20435 1.82554 2.95613 2.17415 3.67118L4.16003 7.74448C4.44089 8.32057 5.26818 8.30175 5.52257 7.7135L8.31161 1.26384C8.5724 0.660752 9.4276 0.660751 9.68839 1.26384L12.4774 7.71349C12.7318 8.30175 13.5591 8.32057 13.84 7.74448L15.8259 3.67118C16.1745 2.95613 17.25 3.20435 17.25 3.99985V11.2501C17.25 11.8714 16.7463 12.3751 16.125 12.3751H1.875C1.25368 12.3751 0.75 11.8714 0.75 11.2501V3.99985ZM0.75 14.2501C0.75 13.6288 1.25368 13.1251 1.875 13.1251H16.125C16.7463 13.1251 17.25 13.6288 17.25 14.2501V15.0001C17.25 16.2427 16.2426 17.2501 15 17.2501H3C1.75736 17.2501 0.75 16.2427 0.75 15.0001V14.2501Z"
                        fill="white"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_67_1813">
                      <rect width={18} height={18} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                33.92
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-white golden-card goldShimmer col-span-2 rounded-lg">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                >
                  <g clipPath="url(#clip0_67_1813)">
                    <mask
                      id="mask0_67_1813"
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={18}
                      height={18}
                    >
                      <path d="M18 0H0V18H18V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_67_1813)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.75 3.99985C0.75 3.20435 1.82554 2.95613 2.17415 3.67118L4.16003 7.74448C4.44089 8.32057 5.26818 8.30175 5.52257 7.7135L8.31161 1.26384C8.5724 0.660752 9.4276 0.660751 9.68839 1.26384L12.4774 7.71349C12.7318 8.30175 13.5591 8.32057 13.84 7.74448L15.8259 3.67118C16.1745 2.95613 17.25 3.20435 17.25 3.99985V11.2501C17.25 11.8714 16.7463 12.3751 16.125 12.3751H1.875C1.25368 12.3751 0.75 11.8714 0.75 11.2501V3.99985ZM0.75 14.2501C0.75 13.6288 1.25368 13.1251 1.875 13.1251H16.125C16.7463 13.1251 17.25 13.6288 17.25 14.2501V15.0001C17.25 16.2427 16.2426 17.2501 15 17.2501H3C1.75736 17.2501 0.75 16.2427 0.75 15.0001V14.2501Z"
                        fill="white"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_67_1813">
                      <rect width={18} height={18} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                10.22
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
                2.14
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
                1.03
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
                1.88
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
                2.12
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
                1.66
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
                3.91
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
                1.78
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
                1.11
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
                5.7
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
                1.16
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
                5.89
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
                2.05
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
                1.13
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
                1.94
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
                5.85
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
                1.42
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
                3.1
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
                2.97
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
                2.44
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
                3.36
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
                1.08
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
                1.23
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
                2.98
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
                5.11
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
                1.92
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
                1.95
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
                1.06
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
                2.78
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
                1.01
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
                1.37
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
                1.47
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
                2.45
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
                9.83
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-white golden-card goldShimmer col-span-2 rounded-lg">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                >
                  <g clipPath="url(#clip0_67_1813)">
                    <mask
                      id="mask0_67_1813"
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={18}
                      height={18}
                    >
                      <path d="M18 0H0V18H18V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_67_1813)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.75 3.99985C0.75 3.20435 1.82554 2.95613 2.17415 3.67118L4.16003 7.74448C4.44089 8.32057 5.26818 8.30175 5.52257 7.7135L8.31161 1.26384C8.5724 0.660752 9.4276 0.660751 9.68839 1.26384L12.4774 7.71349C12.7318 8.30175 13.5591 8.32057 13.84 7.74448L15.8259 3.67118C16.1745 2.95613 17.25 3.20435 17.25 3.99985V11.2501C17.25 11.8714 16.7463 12.3751 16.125 12.3751H1.875C1.25368 12.3751 0.75 11.8714 0.75 11.2501V3.99985ZM0.75 14.2501C0.75 13.6288 1.25368 13.1251 1.875 13.1251H16.125C16.7463 13.1251 17.25 13.6288 17.25 14.2501V15.0001C17.25 16.2427 16.2426 17.2501 15 17.2501H3C1.75736 17.2501 0.75 16.2427 0.75 15.0001V14.2501Z"
                        fill="white"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_67_1813">
                      <rect width={18} height={18} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                26.9
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-green-100 border border-green-500 rounded-lg">
                2.41
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
                1
              </div>
            </div>
            <div>
              <div className="px-3 py-1 text-sm flex gap-1 items-center justify-center drop-shadow-sm font-bold relative text-orange-100 border border-orange-500 rounded-lg">
                1.5
              </div>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default GameHistory;
