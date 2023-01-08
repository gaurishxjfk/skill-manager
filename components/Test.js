import React from "react";

const Test = () => {
  return (
    <div class="sm:px-6 sm:py-10 p-4 bg-gray-gray0 border-b border-primaryBorder">
      <div class="flex items-start justify-between">
        <div class="flex flex-col justify-between text-primary lg:pr-20 my-4 lg:my-0 w-full">
          <div class="flex md:flex-row flex-col-reverse md:items-center">
            <h1 class="font-semibold text-2xl leading-[36px] mt-2 md:mt-0">
              Gaurish Naik
            </h1>
            <div class="md:ml-8 md:block flex items-start justify-between">
              <div class="md:hidden">
                <div class="w-16 h-16 rounded-full overflow-hidden">
                  <img
                    alt="Gaurish Naik"
                    src="d"
                    width="64"
                    height="64"
                    decoding="async"
                    data-nimg="1"
                    class="w-16 h-16 rounded-full bg-center bg-no-repeat bg-cover bg-white flex justify-center items-center object-cover hover:opacity-90 transition-opacity border border-primaryBorder rounded-full"
                    loading="lazy"
                    style="color: transparent"
                  />
                </div>
              </div>
              <a
                class="border font-medium text-center tracking-wide transition-all ease-in duration-75 disabled:opacity-50 disabled:cursor-not-allowed flex items-center leading-120 select-none rounded-full justify-center text-xs h-6 w-6 bg-white text-primary border-gray-gray3 hover:bg-gray-gray1 flex md:hidden"
                type="button"
                href="/user/settings/profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-pencil"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <desc>
                    Download more icon variants from
                    https://tabler-icons.io/i/pencil
                  </desc>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                </svg>
              </a>
              <a
                class="border font-medium text-center tracking-wide transition-all ease-in duration-75 disabled:opacity-50 disabled:cursor-not-allowed flex items-center leading-120 select-none rounded text-xs h-6 px-3 bg-white text-primary border-gray-gray3 hover:bg-gray-gray1 hidden md:flex"
                type="button"
                href="/user/settings/profile"
              >
                Edit Profile
              </a>
            </div>
          </div>
          <h2 class="text-sm lg:text-base leading-[22px] font-normal text-primary mt-2">
            SDE @ Afour Technologies | React Js
          </h2>
          <div class="lg:my-10 my-6">
            <div class="flex flex-wrap items-center overflow-x-scroll lg:overscroll-auto">
              <button type="button">
                <span class="bg-white inline-flex text-primary py-0.5 px-3 items-center justify-between text-xs capitalize border border-primaryBorder rounded-full hover:bg-gray-gray1 mb-2 mr-2">
                  <img
                    alt=" "
                    srcset="
                  https://d26c7l40gvbbg2.cloudfront.net/tool_icons/javascript.svg 1x,
                  https://d26c7l40gvbbg2.cloudfront.net/tool_icons/javascript.svg 2x
                "
                    src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/javascript.svg"
                    width="16"
                    height="16"
                    decoding="async"
                    data-nimg="1"
                    class="object-cover w-4 h-4 mr-1"
                    loading="lazy"
                    style="color: transparent"
                  />
                  <span class="capitalize lg:inline leading-5">JavaScript</span>
                </span>
              </button>
              <button type="button">
                <span class="bg-white inline-flex text-primary py-0.5 px-3 items-center justify-between text-xs capitalize border border-primaryBorder rounded-full hover:bg-gray-gray1 mb-2 mr-2">
                  <img
                    alt=" "
                    srcset="
                  https://d26c7l40gvbbg2.cloudfront.net/tool_icons/adobe_photoshop.svg 1x,
                  https://d26c7l40gvbbg2.cloudfront.net/tool_icons/adobe_photoshop.svg 2x
                "
                    src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/adobe_photoshop.svg"
                    width="16"
                    height="16"
                    decoding="async"
                    data-nimg="1"
                    class="object-cover w-4 h-4 mr-1"
                    loading="lazy"
                    style="color: transparent"
                  />
                  <span class="capitalize lg:inline leading-5">
                    Adobe Photoshop
                  </span>
                </span>
              </button>
              <button type="button">
                <span class="bg-white inline-flex text-primary py-0.5 px-3 items-center justify-between text-xs capitalize border border-primaryBorder rounded-full hover:bg-gray-gray1 mb-2 mr-2">
                  <img
                    alt=" "
                    srcset="
                  https://d26c7l40gvbbg2.cloudfront.net/tool_icons/figma.svg 1x,
                  https://d26c7l40gvbbg2.cloudfront.net/tool_icons/figma.svg 2x
                "
                    src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/figma.svg"
                    width="16"
                    height="16"
                    decoding="async"
                    data-nimg="1"
                    class="object-cover w-4 h-4 mr-1"
                    loading="lazy"
                    style="color: transparent"
                  />
                  <span class="capitalize lg:inline leading-5">Figma</span>
                </span>
              </button>
              <button type="button">
                <span class="bg-white inline-flex text-primary py-0.5 px-3 items-center justify-between text-xs capitalize border border-primaryBorder rounded-full hover:bg-gray-gray1 mb-2 mr-2">
                  <img
                    alt=" "
                    srcset="
                  https://d26c7l40gvbbg2.cloudfront.net/tool_icons/reactjs.svg 1x,
                  https://d26c7l40gvbbg2.cloudfront.net/tool_icons/reactjs.svg 2x
                "
                    src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/reactjs.svg"
                    width="16"
                    height="16"
                    decoding="async"
                    data-nimg="1"
                    class="object-cover w-4 h-4 mr-1"
                    loading="lazy"
                    style="color: transparent"
                  />
                  <span class="capitalize lg:inline leading-5">ReactJS</span>
                </span>
              </button>
              <button type="button">
                <span class="bg-white inline-flex text-primary py-0.5 px-3 items-center justify-between text-xs capitalize border border-primaryBorder rounded-full hover:bg-gray-gray1 mb-2 mr-2">
                  <img
                    alt=" "
                    srcset="
                  https://d26c7l40gvbbg2.cloudfront.net/tool_icons/postgresql.svg 1x,
                  https://d26c7l40gvbbg2.cloudfront.net/tool_icons/postgresql.svg 2x
                "
                    src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/postgresql.svg"
                    width="16"
                    height="16"
                    decoding="async"
                    data-nimg="1"
                    class="object-cover w-4 h-4 mr-1"
                    loading="lazy"
                    style="color: transparent"
                  />
                  <span class="capitalize lg:inline leading-5">PostgreSQL</span>
                </span>
              </button>
            </div>
          </div>
          <div class="font-medium flex items-center lg:gap-8 gap-4 flex-wrap">
            <p class="text-primary font-semibold text-xs capitalize flex items-center text-gray">
              <span class="mr-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 10C20 14.418 12 22 12 22C12 22 4 14.418 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10V10Z"
                    stroke-width="2"
                    stroke="currentColor"
                  ></path>
                  <path
                    d="M12 11C12.2652 11 12.5196 10.8946 12.7071 10.7071C12.8946 10.5196 13 10.2652 13 10C13 9.73478 12.8946 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9C11.7348 9 11.4804 9.10536 11.2929 9.29289C11.1054 9.48043 11 9.73478 11 10C11 10.2652 11.1054 10.5196 11.2929 10.7071C11.4804 10.8946 11.7348 11 12 11Z"
                    fill="#212121"
                    stroke-width="2"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
              sanquelim, india
            </p>
            <a class="flex" target="_self" href="/user/settings/profile">
              <p class="text-primary font-semibold text-xs hover:underline flex items-center text-gray">
                <span class="mr-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_16580_41593)">
                      <path
                        d="M7.45898 4.5L8.77148 3.1875C9.05875 2.90023 9.39979 2.67236 9.77512 2.51689C10.1505 2.36143 10.5527 2.28141 10.959 2.28141C11.3652 2.28141 11.7675 2.36143 12.1429 2.51689C12.5182 2.67236 12.8592 2.90023 13.1465 3.1875C13.4338 3.47477 13.6616 3.8158 13.8171 4.19113C13.9726 4.56647 14.0526 4.96874 14.0526 5.375C14.0526 5.78126 13.9726 6.18354 13.8171 6.55887C13.6616 6.9342 13.4338 7.27523 13.1465 7.5625L11.834 8.875M9.20898 11.5L7.89648 12.8125C7.60922 13.0998 7.26818 13.3276 6.89285 13.4831C6.51752 13.6386 6.11524 13.7186 5.70898 13.7186C4.88851 13.7186 4.10165 13.3927 3.52148 12.8125C2.94132 12.2323 2.61539 11.4455 2.61539 10.625C2.61539 9.80453 2.94132 9.01766 3.52148 8.4375L4.83398 7.125"
                        stroke="#444D56"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M6.58398 9.75L10.084 6.25"
                        stroke="#444D56"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_16580_41593">
                        <rect
                          width="14"
                          height="14"
                          fill="white"
                          transform="translate(1.33398 1)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span class="hover:underline">Add Website</span>
              </p>
            </a>
            <button
              type="button"
              class="break-words cursor-pointer font-medium"
            >
              <p class="text-primary font-semibold text-xs flex items-center text-gray">
                <span class="mr-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2.66683V1.3335M10 2.66683V4.00016M10 2.66683H7M2 6.66683V4.00016C2 3.64654 2.14048 3.3074 2.39052 3.05735C2.64057 2.80731 2.97971 2.66683 3.33333 2.66683H4.66667M4.66667 1.3335V4.00016M14 6.66683V4.00016C14 3.64654 13.8595 3.3074 13.6095 3.05735C13.3594 2.80731 13.0203 2.66683 12.6667 2.66683H12.3333M2 6.66683V12.6668C2 13.0205 2.14048 13.3596 2.39052 13.6096C2.64057 13.8597 2.97971 14.0002 3.33333 14.0002H12.6667C13.0203 14.0002 13.3594 13.8597 13.6095 13.6096C13.8595 13.3596 14 13.0205 14 12.6668V6.66683H2Z"
                      stroke="currentColor"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
                <span class="hover:underline">Add Calendar</span>
              </p>
            </button>
            <div class="relative">
              <div role="none">
                <p class="text-primary font-semibold text-xs cursor-pointer hover:underline transition flex items-center text-gray">
                  <span class="mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-chevron-down"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <desc>
                        Download more icon variants from
                        https://tabler-icons.io/i/chevron-down
                      </desc>
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                  <span>Social Links</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
