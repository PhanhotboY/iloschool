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
    arrows: true,  
    appendDots: (dots: any[]) => (
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          width: '100%',
          height: 'fit-content',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ul style={{ margin: '0px', display: 'flex', gap: '10px' }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className="dot"
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          margin: '0',
          border: '2px solid #fff',
          background: 'rgba(255, 255, 255, 0.5)',
          transition: 'all 0.3s',
        }}
      ></div>
    ),
    prevArrow: (
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '15px',
          zIndex: 1000,
          transform: 'translateY(-50%)',
          cursor: 'pointer',
        }}
      >
        <RiArrowLeftSLine size={32} color="white" />
      </div>
    ),
    nextArrow: (
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '15px',
          zIndex: 1000,
          transform: 'translateY(-50%)',
          cursor: 'pointer',
        }}
      >
        <RiArrowRightSLine size={32} color="white" />
      </div>
    ),
  };

  return (
    <section id="main-slider" className="relative w-full max-w-screen-xl mx-auto py-8">
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <Hydrated>
          {() => (
            <Slider
              className="w-full h-full"
              ref={sliderRef}
              {...settings}
            >
              {sliders?.map((slider, index) => (
                <div key={index} className="w-full h-full relative overflow-hidden">
                  
                  <img
                    src={`/assets/${slider.img_name}`}  
                    alt={slider.img_title}  
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center' }}
                  />
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <div className="absolute inset-0 flex justify-center items-center">
                    <h2 className="text-white text-3xl font-bold">{slider.img_title}</h2>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </Hydrated>

        {/* Nút điều hướng */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10"
          onClick={() => sliderRef.current?.slickPrev()}
          title="Trước"
        >
          <RiArrowLeftSLine size={32} color="white" />
        </button>

        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10"
          onClick={() => sliderRef.current?.slickNext()}
          title="Tiếp theo"
        >
          <RiArrowRightSLine size={32} color="white" />
        </button>
      </div>
    </section>
  );
}
