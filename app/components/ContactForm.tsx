import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col gap-6 items-start justify-center">
      <div className="space-y-2">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
          >
            <g clip-path="url(#clip0_232_471)">
              <path
                d="M56 23.0115C57.1 23.0115 58 23.9119 58 25.0125V49.0245C58 50.1251 57.1 51.0255 56 51.0255H52.19C51.1 51.0255 50.21 51.8959 50.19 52.9865L50.09 57.989L43.12 51.5558C42.75 51.2156 42.27 51.0255 41.76 51.0255H19.99C18.89 51.0255 17.99 50.1251 17.99 49.0245V25.0125C17.99 23.9119 18.89 23.0115 19.99 23.0115H55.99M55.99 21.0105H20C17.79 21.0105 16 22.8014 16 25.0125V49.0245C16 51.2356 17.79 53.0265 20 53.0265H41.77L48.86 59.5798C49.24 59.8699 49.67 60.01 50.08 60.01C51.1 60.01 52.06 59.2196 52.09 58.049L52.19 53.0265H56C58.21 53.0265 60 51.2356 60 49.0245V25.0125C60 22.8014 58.21 21.0105 56 21.0105H55.99Z"
                fill="#014F52"
              />
              <path
                d="M11.7198 45.0225C11.0598 45.0225 10.3698 44.5222 10.3498 43.6918L10.2398 37.7689C10.2298 37.2286 9.77977 36.7884 9.23977 36.7884H4.73977C2.67977 36.7884 1.00977 35.1175 1.00977 33.0665V4.72235C1.00977 2.67132 2.67977 1.00049 4.73977 1.00049H47.2898C49.3498 1.00049 51.0198 2.67132 51.0198 4.72235V33.0665C51.0198 35.1175 49.3498 36.7884 47.2898 36.7884H21.5598C21.3098 36.7884 21.0698 36.8784 20.8798 37.0485L12.4998 44.7824C12.3198 44.9224 12.0298 45.0225 11.7298 45.0225H11.7198Z"
                fill="#F9EFEE"
              />
              <path
                d="M47.27 2.001C48.77 2.001 50 3.22161 50 4.72236V33.0665C50 34.5673 48.78 35.7879 47.27 35.7879H21.54C21.04 35.7879 20.55 35.978 20.18 36.3182L11.88 43.972C11.82 44.012 11.77 44.022 11.71 44.022C11.62 44.022 11.34 43.952 11.34 43.6718L11.23 37.7489C11.21 36.6583 10.32 35.7879 9.23 35.7879H4.73C3.23 35.7879 2 34.5673 2 33.0665V4.72236C2 3.22161 3.22 2.001 4.73 2.001H47.28M47.28 0H4.73C2.12 0 0 2.11106 0 4.72236V33.0665C0 35.6778 2.12 37.7889 4.73 37.7889H9.23L9.34 43.7119C9.37 45.0925 10.51 46.023 11.71 46.023C12.2 46.023 12.71 45.8629 13.16 45.5128L21.54 37.7789H47.27C49.88 37.7789 52 35.6678 52 33.0565V4.72236C52 2.11106 49.88 0 47.27 0L47.28 0Z"
                fill="#C05E51"
              />
              <path
                d="M10.5 11.0055H41.5"
                stroke="#C05E51"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 19.0095H41.5"
                stroke="#C05E51"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 27.0135H25.5"
                stroke="#C05E51"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_232_471">
                <rect width="60" height="60" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div>
          <p className="text-xl font-bold">Chat with us</p>
          <p className="text-sm ">Our friendly team is here to help</p>
          <p className="text-sm font-bold text-[#C05E51]">sales@nomadory.com</p>
        </div>
      </div>

      {/*  */}
      <div className="space-y-2">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
          >
            <path
              d="M52.5 59C24.1 59 1 35.9 1 7.5C1 5.85 2.12 4.38 3.72 3.94L14.03 1.13C14.35 1.04 14.68 1 15 1C16.47 1 17.78 1.86 18.36 3.2C18.36 3.23 18.38 3.25 18.39 3.28L23.08 14.53C23.71 16.04 23.28 17.76 22.01 18.8L16.23 23.52C15.87 23.81 15.76 24.31 15.96 24.72C19.96 33.17 26.82 40.03 35.27 44.03C35.41 44.09 35.55 44.13 35.7 44.13C35.99 44.13 36.28 44 36.47 43.76L41.2 37.98C41.9 37.12 42.94 36.63 44.05 36.63C44.54 36.63 45.02 36.73 45.47 36.91L56.72 41.6C58.43 42.31 59.35 44.18 58.86 45.97L56.05 56.28C55.61 57.88 54.14 59 52.49 59H52.5Z"
              fill="#F9EFEE"
            />
            <path
              d="M15.01 2C16.06 2 17.01 2.61 17.44 3.56C17.45 3.59 17.47 3.63 17.48 3.66L22.17 14.91C22.63 16.01 22.32 17.26 21.39 18.02L15.61 22.74C14.9 23.32 14.67 24.31 15.07 25.14C19.17 33.8 26.19 40.83 34.85 44.92C35.12 45.05 35.42 45.11 35.7 45.11C36.29 45.11 36.86 44.85 37.25 44.38L41.99 38.59C42.49 37.97 43.25 37.61 44.06 37.61C44.42 37.61 44.76 37.68 45.09 37.82L56.34 42.51C57.58 43.02 58.25 44.39 57.89 45.69L55.08 56C54.76 57.17 53.69 57.99 52.48 57.99C24.65 58 2 35.35 2 7.5C2 6.29 2.82 5.23 3.98 4.91L14.29 2.1C14.52 2.04 14.76 2 15 2M15 0C14.59 0 14.17 0.05 13.76 0.17L3.46 2.98C1.42 3.54 0 5.39 0 7.5C0 36.49 23.51 60 52.5 60C54.61 60 56.46 58.58 57.02 56.54L59.83 46.23C60.45 43.96 59.29 41.58 57.11 40.68L45.86 35.99C45.28 35.75 44.66 35.63 44.06 35.63C42.68 35.63 41.34 36.24 40.44 37.35L35.71 43.13C27.46 39.23 20.78 32.55 16.88 24.3L22.66 19.58C24.27 18.27 24.82 16.06 24.02 14.15L19.33 2.9C18.59 1.1 16.86 0 15.01 0L15 0Z"
              fill="#C05E51"
            />
          </svg>
        </div>
        <div>
          <p className="text-xl font-bold">Contact</p>
          <p className="text-sm ">Mon-Fri from 9am-5pm</p>
          <p className="text-sm font-bold text-[#C05E51]">+1 213 44215512</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
