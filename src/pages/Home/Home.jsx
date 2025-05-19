import img from "../../assets/img";

const Home = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "#0a0928" }}
        className="theme-aviator flex flex-col w-full h-full"
      >
        <div className="w-full h-full overflow-x-auto scrollbar-none">
          <div className="flex items-center justify-between w-full px-2 py-1 sm:px-4 sm:py-3 max-w-7xl mx-auto border-b-[1px] border-b-brandBorder">
            <div className="flex items-center gap-2 text-lg font-black text-slate-50 width-full">
              <span className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-200"
                >
                  <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </svg>
              </span>
              <span className="hidden sm:block">Aviator 3D</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-2 py-1 bg-[#334155]/20 border-[1px] border-brandBorder rounded-lg">
                <span className="text-xs font-semibold text-slate-50">
                  member502
                </span>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_78_631)">
                    <path
                      d="M7.40625 0.21875V0.25C10.7597 0.25 13.8752 2.14133 15.0608 5.375C16.2855 8.71525 14.9828 12.5255 12.0312 14.4896C11.3106 14.9691 10.4011 15.4453 9.53125 15.5625C9.69322 15.6257 9.92916 15.5361 10.0938 15.4959C10.5973 15.373 11.0938 15.197 11.5625 14.9756C13.6265 14.0007 15.128 12.1587 15.7367 9.96875C16.7265 6.40812 14.8909 2.45833 11.5312 0.915897C10.1733 0.292441 8.86716 0.218591 7.40625 0.21875Z"
                      fill="#BF9101"
                    />
                    <path
                      d="M14.375 12.0312H14.3438C13.8381 12.9395 13.043 13.7505 12.1875 14.333C10.809 15.2715 9.14766 15.8222 7.46879 15.7487C2.80303 15.5444 -0.71979 11.0669 0.193781 6.49995C0.387179 5.53314 0.776964 4.6017 1.32295 3.7812C1.99518 2.771 2.88113 1.92313 3.93754 1.32123C5.16338 0.622785 6.53016 0.278942 7.93754 0.281201C9.11091 0.283083 10.3475 0.641307 11.375 1.1971C11.8276 1.4419 12.2223 1.76092 12.6563 2.0312C12.4971 1.7178 11.9855 1.47884 11.6875 1.30777C10.6716 0.724544 9.54444 0.364148 8.37504 0.278427C4.07335 -0.0368994 0.191852 3.30376 0.00126514 7.6562C-0.196773 12.1788 3.7621 16.1986 8.34379 15.7553C10.2078 15.5749 11.9423 14.8406 13.2813 13.5C13.6523 13.1284 14.2511 12.5586 14.375 12.0312Z"
                      fill="#D9A509"
                    />
                    <path
                      d="M7.3124 0.29457C5.48412 0.534623 3.84821 1.09275 2.46865 2.37785C1.79462 3.00573 1.24638 3.7709 0.835935 4.59381C-1.33307 8.94243 1.19696 14.3423 5.90615 15.5196C6.84831 15.7551 7.82034 15.8051 8.78115 15.6787C12.4462 15.1968 15.3369 12.0376 15.4987 8.34381C15.6619 4.61568 12.9731 1.17607 9.3124 0.443802C8.67446 0.316192 7.96278 0.209175 7.3124 0.29457Z"
                      fill="#E9C34F"
                    />
                    <path
                      d="M7.28115 1.35706C5.84243 1.54597 4.51712 1.96855 3.38815 2.9286C2.78206 3.44405 2.29598 4.09027 1.91052 4.7813C0.408863 7.47336 1.02839 11.096 3.38815 13.1027C4.79999 14.3034 6.72771 14.8675 8.5624 14.6474C9.57015 14.5265 10.5516 14.1848 11.4061 13.6347C14.6256 11.5621 15.4526 6.86149 13.0296 3.84993C12.1775 2.79078 11.0138 2.0226 9.71865 1.62428C8.96184 1.39152 8.07246 1.25317 7.28115 1.35706Z"
                      fill="#D7A301"
                    />
                    <path
                      d="M7.50001 1.607C6.20355 1.77731 5.01136 2.13744 3.95595 2.94815C3.32748 3.43089 2.80582 4.04808 2.3883 4.71874C0.719752 7.39889 1.38964 11.0165 3.82577 13.0087C5.23927 14.1647 7.10986 14.652 8.90626 14.3973C9.79714 14.271 10.6418 13.9292 11.4063 13.4624C12.0165 13.0897 12.5524 12.5914 12.9934 12.0312C15.1887 9.24302 14.6797 4.95908 11.7813 2.85703C11.1681 2.41233 10.479 2.06212 9.75002 1.85283C9.0463 1.65079 8.2327 1.51075 7.50001 1.607Z"
                      fill="#E9C34F"
                    />
                    <path
                      d="M14.375 4C14.6393 4.72619 15.0532 5.36197 15.2536 6.125C15.6394 7.594 15.5485 9.13191 15.0518 10.5625C14.8736 11.0756 14.5582 11.5281 14.375 12.0312C14.7509 11.7093 14.961 10.9904 15.1146 10.5312C15.6392 8.96303 15.681 7.23447 15.1666 5.65625C15.0022 5.15206 14.7884 4.35412 14.375 4Z"
                      fill="#D9A505"
                    />
                    <path
                      d="M7.78125 4.78125C7.88447 5.22069 8.26534 5.68734 8.49656 6.07578C8.75509 6.51006 8.95641 7.01825 9.28125 7.40625C9.32491 7.18031 9.11791 6.93744 9.00628 6.75C8.72981 6.28581 8.47538 5.80859 8.19991 5.34375C8.09453 5.16597 7.989 4.84622 7.78125 4.78125Z"
                      fill="#BF8F01"
                    />
                    <path
                      d="M7.75 4.8125L6.75437 6.59375L6.34375 7.375L6.28125 7.3125C6.09009 7.41744 5.7565 7.24328 5.5625 7.18669C5.01294 7.02634 4.31912 6.73528 3.75 6.71875V6.8125C3.99241 6.95006 4.10478 7.41284 4.22647 7.65625L5.22647 9.65625C5.33019 9.86369 5.45294 10.3026 5.64491 10.4366C5.76159 10.5181 6.01972 10.4688 6.15625 10.4688C6.59553 10.4688 7.03016 10.4373 7.46875 10.4375C8.07094 10.4377 8.67672 10.4688 9.28125 10.4688C9.47578 10.4688 9.81025 10.5334 9.98781 10.4499C10.2088 10.3459 10.3848 9.74625 10.4923 9.53125C10.8038 8.90816 11.0948 8.27528 11.4143 7.65625C11.5684 7.35775 11.8151 7.01944 11.875 6.6875C11.7643 6.702 11.5792 6.72097 11.5625 6.84375C11.2646 6.79094 10.9401 6.94366 10.6562 7.03047C10.1923 7.17238 9.71753 7.27537 9.25 7.40625C9.15216 7.07362 8.89272 6.76431 8.72206 6.46387C8.42516 5.94116 8.16544 5.24663 7.75 4.8125Z"
                      fill="#D7A301"
                    />
                    <path
                      d="M3.65625 6.59375C3.77322 6.77938 4.15813 6.81853 4.36175 6.8775C4.98469 7.05788 5.63888 7.28056 6.28125 7.375C6.16034 7.21547 5.78363 7.17466 5.59375 7.12063C4.98556 6.9475 4.28828 6.62263 3.65625 6.59375Z"
                      fill="#BF8F01"
                    />
                    <path
                      d="M11.9062 6.65625C11.4668 7.57931 10.9964 8.49144 10.539 9.40625C10.4082 9.66781 10.2359 10.2784 9.98781 10.4366C9.74106 10.594 9.07294 10.4688 8.78125 10.4688H5.59375V10.5C6.68903 10.5 7.78116 10.5312 8.875 10.5312H9.71875C9.82141 10.5312 9.98484 10.5612 10.0738 10.4991C10.3247 10.324 10.4961 9.71072 10.6327 9.4375C11.0875 8.52803 11.6093 7.626 12 6.6875L11.9062 6.65625Z"
                      fill="#BF9101"
                    />
                    <path
                      d="M3.75 6.8125C4.26331 8.04541 4.92066 9.31553 5.59375 10.4688H5.625C5.52834 10.1333 5.31994 9.81191 5.16397 9.5L4.25772 7.6875C4.14478 7.46166 3.99822 6.89728 3.75 6.8125Z"
                      fill="#DFB123"
                    />
                    <path
                      d="M6.90625 10.4375V10.4688H7.78125L6.90625 10.4375Z"
                      fill="#E3B735"
                    />
                    <path
                      d="M5.59375 10.5V10.5312H7.84375L7.125 10.5H5.59375Z"
                      fill="#D9AD25"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_78_631">
                      <rect width={16} height={16} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-base font-bold text-green-500">
                  20117.00
                </span>
              </div>
              <div className="relative" style={{ zIndex: 1000 }}>
                <button className="p-1" type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
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
          <div className="flex flex-col w-screen gap-2 p-1 sm:p-3 max-w-7xl lg:flex-row lg:mx-auto">
            <div className="flex flex-col w-full">
              <div
                className="h-52 md:h-80 lg:h-96 relative select-none flex overflow-hidden transition-all ease-linear items-center justify-center w-full shadow-inner border-[1px] border-brandBorder rounded-2xl false false false false aviator-bg"
                style={{
                  backgroundPositionY: "-7%",
                  imageRendering: "pixelated",
                  zIndex: 999,
                }}
              >
                <div className="absolute flex items-center gap-1 top-2 right-2">
                  <div className="flex relative items-center gap-1 p-1 text-white text-xs font-semibold z-40 cursor-pointer rounded-lg border-t-0 border-r-0 border-[1px] border-white/30 backdrop-blur-lg bg-gray-600/20">
                    <div className="py-1 px-2 rounded-md false">Simple</div>
                    <div className="py-1 px-2 rounded-md bg-gray-100/40">
                      Animated
                    </div>
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
                <div className="false relative mx-auto object-cover w-32 h-32 transition-all ease-linear duration-500">
                  <div className="flex flex-col items-center -gap-4 absolute top-0 left-0 z-10 slide">
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
                <audio src="https://cdn.mac1j.com/fawk/Music/explosion.wav" />
                <audio src="https://cdn.mac1j.com/fawk/Music/rocket.wav" />
              </div>
              <div className="hidden lg:block">
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
                          <strong>Thrilling Timing:</strong> Test your instincts
                          by placing bets before the number crashes, aiming to
                          cash out at the perfect moment for maximum rewards.
                        </li>
                        <li>
                          <strong>Risk and Reward:</strong> Decide whether to
                          cash out early for guaranteed winnings or stay in the
                          game and risk losing it all for a chance at bigger
                          prizes.
                        </li>
                        <li>
                          <strong>Customizable Bets:</strong> With minimum and
                          maximum bet limits, tailor your wagers to suit your
                          comfort level and playing style.
                        </li>
                        <li>
                          <strong>Continuous Action:</strong> Experience the
                          excitement of non-stop rounds, with each new round
                          offering fresh opportunities to test your luck and
                          strategy.
                        </li>
                        <li>A player can win up to a maximum of 99.99x.</li>
                        <li>
                          Session token expires after 45 minutes - you ll need
                          to refresh to continue playing
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
            </div>
            <div
              className="flex w-full gap-2 mx-auto select-none drop-shadow-xl lg:flex-col lg:overflow-y-auto"
              style={{ zIndex: 999 }}
            >
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
                    <h2 className="text-xs font-bold text-slate-50">
                      Dashboard
                    </h2>
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
                                    <path
                                      stroke="none"
                                      d="M0 0h24v24H0z"
                                      fill="none"
                                    />
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
                                <button className="relative z-30 w-full rounded-[16px] flex justify-center items-center flex-grow px-5 py-2.5 overflow-hidden group bg-green-500 text-white transition-all ease-out duration-300">
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
                                    <path
                                      stroke="none"
                                      d="M0 0h24v24H0z"
                                      fill="none"
                                    />
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
                                <button className="relative z-30 w-full rounded-[16px] flex justify-center items-center flex-grow px-5 py-2.5 overflow-hidden group bg-green-500 text-white transition-all ease-out duration-300">
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
              <div className="flex-col hidden w-1/2 h-full lg:w-full lg:flex">
                <div className="translate-y-[1.5px] mt-2 flex items-center gap-1 p-2 w-fit border-[1px] border-brandBorder border-b-0 bg-cardBg rounded-t-lg">
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
                <div className="h-fit rounded-tl-none flex border-[1px] border-brandBorder bg-cardBg rounded-3xl overflow-hidden w-full flex-col gap-3">
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
            </div>
            <div>
              <div className="react-joyride" />
            </div>
          </div>
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
                      placing bets before the number crashes, aiming to cash out
                      at the perfect moment for maximum rewards.
                    </li>
                    <li>
                      <strong>Risk and Reward:</strong> Decide whether to cash
                      out early for guaranteed winnings or stay in the game and
                      risk losing it all for a chance at bigger prizes.
                    </li>
                    <li>
                      <strong>Customizable Bets:</strong> With minimum and
                      maximum bet limits, tailor your wagers to suit your
                      comfort level and playing style.
                    </li>
                    <li>
                      <strong>Continuous Action:</strong> Experience the
                      excitement of non-stop rounds, with each new round
                      offering fresh opportunities to test your luck and
                      strategy.
                    </li>
                    <li>A player can win up to a maximum of 99.99x.</li>
                    <li>
                      Session token expires after 45 minutes - you ll need to
                      refresh to continue playing
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
          <div className="flex items-center justify-center w-full gap-2 m-4 mx-auto font-medium text-slate-300">
            Powered by
            <img
              alt="Aura Logo"
              loading="lazy"
              width={70}
              height={50}
              decoding="async"
              data-nimg={1}
              className
              src="https://aura-lobby-banners.s3.ap-south-1.amazonaws.com/aura.svg"
              style={{ color: "transparent" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
