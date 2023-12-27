/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

function SidebarResident({ tab }) {
  const navigate = useNavigate();
  return (
    <div id="NewRootRoot" className="flex flex-row w-[18%] items-start">
      <div className="bg-white flex flex-col gap-16 w-full items-start pt-4 pb-4">
        <div className="flex flex-col gap-6 items-start">
          <div
            className={
              tab == "Trang chủ"
                ? "bg-[#99b7f0] items-center flex flex-row gap-6 w-full h-16 px-4 cursor-pointer text-white"
                : "flex text-[#a3a0a0] flex-row px-4 gap-6 items-center py-4 cursor-pointer w-full hover:bg-[#99b7f0] bg-white hover:text-white"
            }
            onClick={() => navigate("/homepageResident")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 50 50"
              fill="none"
              className={tab == "Trang chủ" ? "none" : "fill-gray-400"}
            >
              <path
                d="M6.25 18.75L25 4.16663L43.75 18.75V41.6666C43.75 42.7717 43.311 43.8315 42.5296 44.6129C41.7482 45.3943 40.6884 45.8333 39.5833 45.8333H10.4167C9.3116 45.8333 8.25179 45.3943 7.47039 44.6129C6.68899 43.8315 6.25 42.7717 6.25 41.6666V18.75Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.75 45.8333V25H31.25V45.8333"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span id="TrangCh" className="font-semibold mt-1">
              Trang chủ
            </span>
          </div>
          <div
            className={
              tab == "Nộp phí"
                ? "bg-[#99b7f0] text-white items-center flex flex-row gap-6 w-full h-16 px-4 cursor-pointer"
                : "flex flex-row text-[#a3a0a0] px-4 gap-6 items-center py-4 cursor-pointer w-full hover:bg-[#99b7f0] hover:text-white"
            }
            onClick={() => navigate("/listofFees")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 50 50"
              fill="none"
              className={tab == "Nộp phí" ? "none" : "fill-gray-400"}
            >
              <path
                d="M29.177 20.6976C28.7588 20.6976 28.4198 21.0873 28.4198 21.5682V28.0721C28.4198 28.553 28.7588 28.9428 29.177 28.9428H45.8354C46.2536 28.9428 46.5926 28.553 46.5926 28.0721V21.5682C46.5926 21.0873 46.2536 20.6976 45.8354 20.6976H29.177ZM39.3902 0.00231126C41.695 0.131161 43.3537 0.667462 44.4017 1.8023C45.4396 2.92619 45.9734 4.55392 46.0778 6.70598V12.8729C46.0778 13.9548 45.315 14.8318 44.3741 14.8318C43.4331 14.8318 42.6704 13.9548 42.6704 12.8729L42.6732 6.81799C42.6173 5.69727 42.3908 5.00656 42.0656 4.65434C41.7504 4.31308 40.7917 4.0031 39.3074 3.91781L6.61816 3.91634C5.27384 3.97628 4.40218 4.2757 3.97924 4.70174C3.65399 5.02938 3.41015 5.92978 3.4074 7.48542L3.39982 42.1022C3.52441 43.6156 3.80849 44.6227 4.17045 45.1269C4.44492 45.5093 5.298 45.8932 6.55214 46.0782L39.3424 46.0786C40.8773 46.1148 41.783 45.8445 42.0868 45.482C42.4239 45.0798 42.6704 44.0212 42.6704 42.2868V36.2746C42.6704 35.1928 43.4331 34.3157 44.3741 34.3157C45.315 34.3157 46.0778 35.1928 46.0778 36.2746V42.2868C46.0778 44.938 45.6173 46.9157 44.5403 48.2006C43.4301 49.5252 41.6651 50.0521 39.3074 49.996L6.35123 49.9823C4.1083 49.6761 2.49765 48.9512 1.54265 47.621C0.675121 46.4125 0.190639 44.6949 0 42.2868V7.48143C0.00455925 4.90597 0.529292 2.96831 1.73385 1.75491C2.84073 0.639906 4.43279 0.0930376 6.55214 0L39.3902 0.00231126ZM45.8354 16.7797C48.1354 16.7797 50 18.9236 50 21.5682V28.0721C50 30.7167 48.1354 32.8606 45.8354 32.8606H29.177C26.877 32.8606 25.0124 30.7167 25.0124 28.0721V21.5682C25.0124 18.9236 26.877 16.7797 29.177 16.7797H45.8354ZM33.3416 22.4836C32.1916 22.4836 31.2593 23.5416 31.2593 24.8467C31.2593 26.1518 32.1916 27.2098 33.3416 27.2098C34.4916 27.2098 35.4239 26.1518 35.4239 24.8467C35.4239 23.5416 34.4916 22.4836 33.3416 22.4836Z"
                fill="white"
                className={tab == "Nộp phí" ? "none" : "fill-gray-400"}
              />
            </svg>
            <span className="mb-2 font-semibold">Nộp phí</span>
            <img
              src="https://file.rendit.io/n/GvjZN3Kb66bw6pP6Nbix.svg"
              alt="Ellipse"
              id="Ellipse"
              className="ml-2 w-4"
            />
          </div>
          <div
            className={
              tab == "Lịch sử"
                ? "bg-[#99b7f0] text-white items-center flex flex-row gap-6 w-full h-16 px-4 cursor-pointer"
                : "flex flex-row text-[#a3a0a0] px-4 gap-6 items-center py-4 cursor-pointer w-full hover:bg-[#99b7f0] hover:text-white"
            }
            onClick={() => navigate("/history")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M25.0657 12.5445C24.5119 12.5445 23.9808 12.7647 23.5893 13.1568C23.1977 13.5489 22.9777 14.0807 22.9777 14.6352V25.0889C22.9778 25.6434 23.1979 26.1751 23.5895 26.5671L29.8537 32.8393C30.2475 33.2202 30.7749 33.4309 31.3224 33.4262C31.8699 33.4214 32.3936 33.2015 32.7808 32.8139C33.1679 32.4262 33.3875 31.9018 33.3923 31.3537C33.397 30.8055 33.1865 30.2773 32.8062 29.883L27.1538 24.2234V14.6352C27.1538 14.0807 26.9338 13.5489 26.5422 13.1568C26.1506 12.7647 25.6195 12.5445 25.0657 12.5445ZM49.7299 21.1834C49.0132 16.6378 47.0616 12.3772 44.0887 8.86761C41.1158 5.35807 37.2361 2.73485 32.8741 1.28497C28.5122 -0.164911 23.836 -0.3856 19.3572 0.647048C14.8784 1.6797 10.7695 3.9259 7.48008 7.1399V2.09075C7.48008 1.53625 7.26008 1.00446 6.8685 0.612365C6.47691 0.220274 5.9458 0 5.39201 0C4.83822 0 4.30712 0.220274 3.91553 0.612365C3.52394 1.00446 3.30395 1.53625 3.30395 2.09075V10.4537C3.30395 11.5627 3.74393 12.6263 4.52711 13.4105C5.31028 14.1947 6.3725 14.6352 7.48008 14.6352H15.8323C16.3861 14.6352 16.9172 14.4149 17.3088 14.0229C17.7004 13.6308 17.9204 13.099 17.9204 12.5445C17.9204 11.99 17.7004 11.4582 17.3088 11.0661C16.9172 10.674 16.3861 10.4537 15.8323 10.4537H10.0881C13.4248 7.06176 17.8187 4.91305 22.5419 4.36358C27.2651 3.81411 32.034 4.89687 36.0586 7.43247C40.0831 9.96806 43.1217 13.8043 44.6709 18.3056C46.2201 22.8069 46.1869 27.703 44.5769 32.1829C42.9668 36.6627 39.8765 40.4573 35.818 42.938C31.7595 45.4187 26.9763 46.4365 22.261 45.8229C17.5457 45.2093 13.1813 43.0011 9.89081 39.5641C6.60036 36.1272 4.58139 31.6677 4.16841 26.9246C4.11426 26.415 3.87171 25.9441 3.48843 25.6044C3.10514 25.2647 2.60884 25.0809 2.09705 25.0889C1.80502 25.0897 1.51636 25.1514 1.24946 25.2701C0.982556 25.3887 0.743261 25.5617 0.546823 25.7781C0.350384 25.9944 0.20111 26.2494 0.10851 26.5267C0.0159107 26.804 -0.0179836 27.0976 0.00898715 27.3888C0.339184 30.7202 1.33194 33.9518 2.92875 36.8932C4.52557 39.8345 6.69416 42.4261 9.30676 44.5153C11.9194 46.6045 14.9231 48.149 18.1411 49.0578C21.3591 49.9667 24.7261 50.2214 28.044 49.8072C31.3618 49.3929 34.5633 48.3179 37.4597 46.6456C40.3562 44.9733 42.8892 42.7374 44.9093 40.0697C46.9295 37.4021 48.396 34.3566 49.2225 31.1126C50.0489 27.8687 50.2186 24.492 49.7216 21.1813L49.7299 21.1834Z"
                fill="white"
                className={tab == "Lịch sử" ? "none" : "fill-gray-400"}
              />
            </svg>
            <span className="font-semibold">Lịch sử đóng phí</span>
          </div>
          <div
            className={
              tab == "Vắng trú"
                ? "bg-[#99b7f0] text-white items-center flex flex-row gap-6 w-full h-16 px-4 cursor-pointer"
                : "flex flex-row text-[#a3a0a0] px-4 gap-6 items-center py-4 cursor-pointer w-full hover:bg-[#99b7f0] hover:text-white"
            }
            onClick={() => navigate("/residenceAbsence")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M49.9319 27.4892C49.8877 24.5387 49.828 21.5883 49.828 18.6336C49.828 15.4953 49.8088 12.3612 49.7088 9.22287C49.6781 8.29425 49.0281 7.52181 48.1608 7.52181C48.0897 7.52181 48.0262 7.55768 47.957 7.56824C47.7609 7.45638 47.5474 7.38462 47.3147 7.39518C46.5802 7.43528 45.8571 7.39307 45.1283 7.33608C45.0764 6.99418 44.936 6.68394 44.7053 6.45179C44.4476 6.02969 44.038 5.71733 43.5573 5.71733C43.5438 5.71733 43.5284 5.71733 43.515 5.71733C42.3939 5.75743 41.269 5.79542 40.1498 5.84396C39.3595 5.87984 38.5672 5.86929 37.7788 5.86085C37.3173 5.8524 36.8519 5.84818 36.3904 5.84818C36.1827 5.84818 35.9847 5.90095 35.802 5.98959C35.0982 6.09089 34.4636 6.75359 34.5021 7.56402C34.5021 7.57457 34.5021 7.58301 34.504 7.59356C34.1425 7.59778 33.781 7.59778 33.4195 7.60201C33.3406 5.91361 33.3541 4.22099 33.306 2.52837C33.381 2.39541 33.4598 2.26245 33.4983 2.1105C33.6021 1.68207 33.5502 1.21987 33.3464 0.839978C33.2118 0.590939 33.0329 0.394663 32.806 0.246928C32.5753 0.0991935 32.3214 0.0211054 32.0503 0.0211054C31.9061 0.00633197 31.7599 0 31.6138 0C31.2811 0 30.9446 0.0295474 30.6158 0.0358788C30.0312 0.0527628 29.4466 0.0527624 28.862 0.0696463C27.7256 0.0949723 26.591 0.105525 25.4546 0.118188C24.2527 0.130851 23.0528 0.16673 21.8509 0.187835C20.5299 0.213161 19.2069 0.204719 17.8858 0.200498C17.2051 0.200498 16.6513 0.764 16.5263 1.47524C16.4455 1.67573 16.3994 1.89734 16.4013 2.12738C16.4128 3.29659 16.4244 4.46581 16.4417 5.63291C16.4532 6.35681 16.4417 7.07649 16.4359 7.79828C16.1705 7.79828 15.9052 7.79828 15.6398 7.80039C15.634 7.55346 15.6417 7.30654 15.6321 7.06172C15.5994 6.15421 14.9725 5.39865 14.1207 5.39865C13.888 5.39865 13.6668 5.47674 13.4592 5.59281C12.4919 5.68145 11.5324 5.7701 10.5728 5.7912C9.26904 5.82497 7.95951 5.73844 6.65574 5.66879C6.34999 5.65191 6.07886 5.78065 5.83656 5.96004C5.29237 6.19853 4.9097 6.78102 4.89432 7.45849C4.88855 7.83838 4.89047 8.21827 4.88662 8.59816C4.0636 8.65303 3.23865 8.70368 2.41947 8.77122C2.01757 8.79866 1.66375 8.92107 1.37338 9.24397C1.35415 9.26508 1.34646 9.29462 1.32915 9.31784C0.583047 9.49934 0.00423709 10.2064 0.000391177 11.0695C-0.00730065 14.8241 0.100385 18.5766 0.152305 22.329C0.204225 25.7945 0.115769 29.2684 0.283066 32.7296C0.350369 34.0254 0.421519 35.3213 0.454209 36.615C0.483053 37.8771 0.486899 39.1455 0.509975 40.4075C0.550357 42.8557 0.621506 45.3166 0.550357 47.7626C0.538819 48.1763 0.698424 48.5456 0.936871 48.839C1.17147 49.4827 1.74644 49.9048 2.4137 49.9512C3.9886 50.061 5.56735 49.9554 7.1461 49.9259C8.71715 49.8942 10.2882 49.9006 11.8554 49.8984C12.3092 49.8984 12.765 49.8984 13.2188 49.8984C14.3553 49.9027 15.4937 49.9069 16.6301 49.8731C18.1569 49.8372 19.6838 49.7549 21.2106 49.7423C22.2451 49.7338 23.2855 49.738 24.3239 49.738C26.4391 49.7465 28.5582 49.7507 30.6735 49.6515C32.2484 49.5777 33.8271 49.5207 35.402 49.4911C36.9212 49.4616 38.4441 49.47 39.9633 49.3962C42.54 49.2695 45.1206 49.3096 47.6897 49.0859C48.1262 49.0458 48.5012 48.9192 48.8223 48.5709C48.9819 48.3958 49.0973 48.1805 49.1762 47.9526C49.5338 47.6634 49.78 47.2181 49.7934 46.6968C49.8377 45.1161 49.953 43.5416 49.98 41.9609C50.0069 40.3949 49.9915 38.8226 49.9992 37.2566C50.005 34.0022 49.98 30.7457 49.9319 27.4892ZM40.0921 9.00759C40.6613 8.97805 41.2324 8.95061 41.8016 8.93373C41.9439 8.93162 42.0881 8.93373 42.2304 8.93373C42.2093 10.295 42.1881 11.6584 42.1593 13.0175C42.1304 14.2437 42.1612 15.4763 42.217 16.7046C42.0805 16.7088 41.9439 16.713 41.8093 16.7151C41.2959 16.7278 40.7844 16.751 40.2709 16.7932C39.3941 16.8565 38.5191 16.8418 37.6423 16.8207C37.5788 15.5966 37.5653 14.3661 37.5423 13.1399C37.5211 11.7892 37.498 10.4406 37.4692 9.0899C38.3461 9.07091 39.2191 9.05403 40.0921 9.00759ZM25.2353 3.11931C26.3776 3.12353 27.5217 3.1362 28.6601 3.15941C29.2274 3.17208 29.7985 3.1763 30.3677 3.18896C30.3966 3.78412 30.4273 4.37928 30.4562 4.97233C30.4985 5.85452 30.5446 6.73881 30.5408 7.62311C29.1447 7.63577 27.7487 7.65688 26.3526 7.65688C24.9008 7.65688 23.4451 7.66532 21.9932 7.7012C21.1164 7.72019 20.2414 7.73919 19.3646 7.76029C19.3588 7.05328 19.3453 6.34415 19.3626 5.63502C19.3799 4.83937 19.3896 4.04371 19.4011 3.24805C20.1376 3.2164 20.8741 3.18896 21.6106 3.16363C22.8182 3.11931 24.0258 3.11509 25.2353 3.11931ZM10.4843 9.08146C11.217 9.0878 11.9516 9.01815 12.6842 8.95483C12.7015 9.33683 12.7284 9.71883 12.7361 10.1008C12.7515 10.9915 12.7246 11.8821 12.7092 12.7769C12.6861 14.1825 12.6919 15.5818 12.7111 16.9853C11.8958 17.0296 11.0824 17.0781 10.2671 17.0845C9.44018 17.0887 8.61139 17.0676 7.78452 17.0507C7.71337 15.7443 7.68645 14.4316 7.68452 13.1273C7.6826 11.7723 7.73452 10.4216 7.78837 9.07091C8.20757 9.07302 8.62677 9.08357 9.04598 9.08146C9.52287 9.08146 10.0036 9.07724 10.4843 9.08146ZM38.4345 46.0236C36.9308 46.0806 35.4289 46.089 33.929 46.1164C32.3214 46.1523 30.7158 46.2811 29.1101 46.3127C25.9853 46.3781 22.8624 46.3169 19.7376 46.3781C18.1704 46.4098 16.6032 46.4794 15.0341 46.4794C13.4284 46.4794 11.8247 46.4626 10.219 46.471C8.97483 46.4794 7.7326 46.4879 6.4846 46.5195C5.51928 46.5491 4.55587 46.5428 3.59247 46.509C3.61363 43.586 3.61555 40.6629 3.5694 37.742C3.54248 35.9966 3.44633 34.2555 3.39441 32.5101C3.33864 30.7077 3.36749 28.9053 3.37903 27.0988C3.39056 24.5577 3.37903 22.0188 3.32711 19.482C3.27326 16.9621 3.30403 14.4442 3.33095 11.9264C3.84438 11.8758 4.35589 11.8209 4.86739 11.7787C4.86739 12.2282 4.8597 12.6777 4.85778 13.1252C4.85393 14.8959 4.89816 16.6771 5.05392 18.4415C5.04623 18.5027 5.01931 18.5576 5.01931 18.6209C5.01931 19.4883 5.67888 20.2185 6.46729 20.2143C7.69606 20.2059 8.92099 20.1531 10.1498 20.1489C11.4304 20.1447 12.7073 20.0624 13.9841 20.056C14.6668 20.0518 15.2244 19.4946 15.3533 18.7792C15.4533 18.5703 15.5206 18.3423 15.5148 18.0933C15.4552 15.7401 15.5686 13.389 15.6244 11.0358C17.0686 10.9957 18.5127 10.8965 19.9588 10.8395C21.3952 10.7825 22.8336 10.7952 24.27 10.791C27.0852 10.7741 29.9043 10.8163 32.7233 10.8648C33.3579 10.8775 33.9963 10.8796 34.6348 10.8838C34.6655 11.6035 34.7078 12.3211 34.7251 13.0386C34.7482 13.8638 34.7559 14.6869 34.7655 15.5079C34.7771 16.3162 34.7694 17.1267 34.8559 17.9265C34.8674 18.0384 34.8963 18.1334 34.9155 18.2368C34.9059 18.3107 34.8751 18.3761 34.8751 18.4521C34.8751 19.3469 35.5597 20.1109 36.3827 20.1067C38.7364 20.0814 41.0824 19.9484 43.4381 20.0497C44.2726 20.0898 44.9726 19.2562 44.9726 18.3655C44.9726 18.3571 44.9687 18.3508 44.9687 18.3423C44.9995 18.2136 45.0399 18.0869 45.0303 17.9455C44.9033 16.3078 44.9707 14.6679 44.9591 13.0218C44.9533 12.2282 44.9918 11.4347 45.0322 10.6411C45.5706 10.6749 46.111 10.6622 46.6513 10.639C46.759 13.6676 46.8398 16.6919 46.8551 19.7226C46.8705 22.9474 47.0032 26.1744 47.0705 29.3992C47.134 32.3623 47.1532 35.3297 47.1628 38.2949C47.1667 39.7005 47.1936 41.1103 47.1513 42.5159C47.1244 43.5501 47.0474 44.5906 46.9725 45.6268C45.6014 45.745 44.2303 45.8357 42.8573 45.8505C41.3805 45.8632 39.9094 45.9708 38.4345 46.0236Z"
                fill="white"
                className={tab == "Vắng trú" ? "none" : "fill-gray-400"}
              />
            </svg>
            <span className="font-semibold w-full text-left">
              Tạm trú tạm vắng
            </span>
          </div>
          <div className="text-[#a3a0a0] hover:text-white flex flex-row gap-6 items-center cursor-pointer w-full px-4 py-4 hover:bg-[#99b7f0]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M25 31.25C28.4518 31.25 31.25 28.4518 31.25 25C31.25 21.5482 28.4518 18.75 25 18.75C21.5482 18.75 18.75 21.5482 18.75 25C18.75 28.4518 21.5482 31.25 25 31.25Z"
                stroke="#A3A0A0"
                strokeWidth="3.75"
              />
              <path
                d="M7.76518 22.165C8.80937 22.7835 9.48122 23.8373 9.48122 24.9998C9.4812 26.1625 8.80934 27.2162 7.76518 27.8348C7.05463 28.2556 6.59682 28.592 6.27111 28.9923C5.55758 29.8691 5.24268 30.977 5.39568 32.0727C5.51041 32.8943 6.0252 33.735 7.05478 35.4164C8.08439 37.0977 8.59918 37.9383 9.29658 38.4429C10.2265 39.1156 11.4017 39.4125 12.5638 39.2683C13.0942 39.2025 13.632 38.9968 14.3738 38.6273C15.4642 38.0839 16.7683 38.0623 17.8364 38.6437C18.9043 39.2252 19.5363 40.3006 19.5824 41.4625C19.6138 42.2531 19.6939 42.7952 19.8986 43.2612C20.3472 44.282 21.2075 45.0933 22.2903 45.5162C23.1026 45.8333 24.1321 45.8333 26.1913 45.8333C28.2505 45.8333 29.28 45.8333 30.0923 45.5162C31.175 45.0933 32.0355 44.282 32.4841 43.2612C32.6887 42.7952 32.7689 42.2531 32.8003 41.4627C32.8462 40.3006 33.4782 39.2252 34.5464 38.6437C35.6143 38.0625 36.9183 38.0841 38.0085 38.6275C38.7505 38.997 39.2884 39.2027 39.8187 39.2685C40.9808 39.4129 42.1561 39.1158 43.086 38.4431C43.7833 37.9387 44.2982 37.0979 45.3279 35.4166C45.7862 34.6681 46.1426 34.0862 46.4069 33.5983M44.6173 27.835C43.5732 27.2164 42.9014 26.1627 42.9012 25.0002C42.9012 23.8375 43.5732 22.7835 44.6173 22.165C45.3279 21.7441 45.7855 21.4077 46.1112 21.0075C46.8247 20.1308 47.1396 19.0227 46.9867 17.9271C46.872 17.1054 46.3572 16.2647 45.3275 14.5834C44.298 12.9021 43.7831 12.0614 43.0857 11.5569C42.1559 10.8841 40.9806 10.5873 39.8185 10.7315C39.2882 10.7973 38.7503 11.0029 38.0085 11.3725C36.918 11.9159 35.6141 11.9375 34.5462 11.3561C33.4782 10.7748 32.8462 9.69933 32.8003 8.53752C32.7689 7.74688 32.6887 7.20486 32.4841 6.73877C32.0355 5.71783 31.175 4.90669 30.0923 4.48379C29.28 4.16663 28.2505 4.16663 26.1913 4.16663C24.1321 4.16663 23.1026 4.16663 22.2903 4.48379C21.2075 4.90669 20.3472 5.71783 19.8986 6.73877C19.6939 7.20481 19.6138 7.74679 19.5824 8.53733C19.5363 9.69925 18.9043 10.7748 17.8363 11.3561C16.7682 11.9375 15.4643 11.9158 14.374 11.3725C13.6321 11.0028 13.0942 10.7972 12.5638 10.7314C11.4017 10.5871 10.2265 10.884 9.2966 11.5568C8.5992 12.0613 8.08441 12.902 7.0548 14.5833C6.59645 15.3318 6.24011 15.9137 5.97568 16.4015"
                stroke="#A3A0A0"
                strokeWidth="3.75"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-semibold">Cài đặt</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarResident;