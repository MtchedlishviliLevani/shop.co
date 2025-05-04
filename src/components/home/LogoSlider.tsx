import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

/// this variable i should move to data.ts file
const logos = [
    '/logos/versace.svg',
    '/logos/zara.svg',
    '/logos/gucci.svg',
    '/logos/prada.svg',
    '/logos/calvin-klein.svg',
];

function LogoSlider() {
    return (
        <div className="flex flex-col items-center justify-around mx-auto w-full bg-primary py-[45px]">
            <div className="relative w-full overflow-x-hidden">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    spaceBetween={0}
                    speed={5000}
                    freeMode={true}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="mx-12 static"
                >
                    {logos.map((logo, index) => (
                        <SwiperSlide key={index} className="flex items-center">
                            <img src={logo} alt={`Logo ${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default LogoSlider;
