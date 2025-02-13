import Slider from 'react-slick';
import { useLoaderData } from '@remix-run/react';
import { RefObject, useRef } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Hydrated from '~/components/Hydrated';
import { loader } from '.';

export default function MainSlider() {
  const { sliders } = useLoaderData<typeof loader>();
  const sliderRef = useRef<Slider>(null);

  const settings = {
    autoplay: true,
    infinite: true,
    speed: 600,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    dots: true,
    arrows: false,
    dotsClass: "slick-dots slider-dots", // Đổi tên class để tránh xung đột
  };

  return (
    <section className="relative w-full">
      <div className="relative w-full h-[500px] md:h-[650px] lg:h-[796px]">
      <style>{`
          .slider-dots {
            position: absolute;
            bottom: 32px;
            left: 0;
            right: 0;
            z-index: 30;
            display: flex !important;
            justify-content: center;
            align-items: center;
            gap: 8px;
            margin: 0;
            padding: 0;
            list-style: none;
          }
          
          .slider-dots li {
            margin: 0;
            padding: 0;
            width: 10px;
            height: 10px;
          }
          
          .slider-dots li button {
            display: block;
            width: 10px;
            height: 10px;
            padding: 0;
            border: 0;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.4);
            text-indent: -9999px;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
          .slider-dots li button:hover {
            background-color: rgba(255, 255, 255, 0.7);
          }
          
          .slider-dots li.slick-active button {
            background-color: #fff;
            transform: scale(1.2);
          }
        `}</style>
        
        <Hydrated>
          {() => (
            <Slider
              className="w-full h-full"
              ref={sliderRef}
              {...settings}
            >
              {sliders?.map((slider, index) => (
                <div key={index} className="relative w-full h-full">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(/assets/${slider.img_name})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
                      <h2 className="text-[20px] md:text-[32px] leading-[32px] md:leading-[48px] font-bold text-center max-w-3xl">
                        
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </Hydrated>

        {/* Custom Navigation Buttons */}
        <button
          className="absolute top-1/2 left-6 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
          onClick={() => sliderRef.current?.slickPrev()}
          aria-label="Previous slide"
        >
          <RiArrowLeftSLine size={32} className="text-white" />
        </button>

        <button
          className="absolute top-1/2 right-6 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
          onClick={() => sliderRef.current?.slickNext()}
          aria-label="Next slide"
        >
          <RiArrowRightSLine size={32} className="text-white" />
        </button>
      </div>
    </section>
  );
}