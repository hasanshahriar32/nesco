import React from "react";

const VideoBanner = () => {
  return (
    <div>
      <div class="pb-12 mt-5 ">
        <div class="relative">
          <div class="absolute w-[95vw] left-[2.5vw] right-[2.5vw] bg-gradient-to-r from-gray-800 via-gray-500 to-gray-900 blur-lg filter opacity-30  h-full inset-0 bg-gray-50"></div>
          <div class="relative  mx-auto">
            <div class="lg:max-w-5xl py-5  mx-6  lg:py-10 lg:mx-auto">
              <div
                class="embed-responsive my-3 embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
                style={{ "padding-top": "56.25%" }}
              >
                <iframe
                  class="embed-responsive-item  absolute top-0  bottom-0 w-full h-full"
                  title="youtube"
                  src="https://www.youtube.com/embed/E3Bx-l1DOws?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
                  allowfullscreen=""
                  data-gtm-yt-inspected-2340190_699="true"
                  id="240632615"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
