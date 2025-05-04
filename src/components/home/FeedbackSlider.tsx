import arrow from "../../assets/icons/arrow.svg"
import Rating from "../../UI/Rating"
import check from "../../assets/icons/check.svg"
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { getFeedback } from "../../services/api";
import { Feedback } from "../../types";

function FeedbackSlider() {
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
    useEffect(() => {
        getFeedback().then((data: Feedback[]) => {
            setFeedbacks(data)
        })
    }, [])
    /// we only need positive feedbacks in our case
    const positiveFeedbacks = feedbacks.filter((feedback) => feedback.rating >= 4.0);
    return (
        <div className="mt-[50px] xl:mt-[80px] mb-[50px] xl:mb-[80px]">
            <div className="global-container">
                <div className="flex justify-between items-center">
                    <h2 className="text-[28px] font-Fontspring font-bold xl:text-5xl">OUR HAPPY CUSTOMERS</h2>
                    <div className="flex gap-1 justify-between md:gap-4 items-center">
                        <img src={arrow} className="swiper-button-prev cursor-pointer" alt="left arrow icon " />
                        <img className="swiper-button-next rotate-180 cursor-pointer" src={arrow} alt="right arrow icon" />

                    </div>
                </div>
            </div>
            <div className="mt-[24px] xl:mt-[40px]">
                <div className="global-container overflow-visible ">
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={1}

                        breakpoints={{

                            768: { slidesPerView: 2 },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}

                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        modules={[Navigation, Pagination]}
                        className=" overflow-visible"

                    >
                        {positiveFeedbacks.map((item, index) => (
                            <SwiperSlide key={index} className="rounded-[20px] max-w-[500px] border-solid border-[1px] border-primary/10 p-6">
                                <div><Rating number={item.rating} /></div>
                                <div className="mt-[12px] xl:mt-[15px]">
                                    <div className="flex gap-3 items-center">
                                        <h4 className="text-[16px] xl:text-[20px] font-bold">{item.clientFullname} </h4>
                                        <img src={check} alt="" /></div>
                                    <p className="text-[14px] xl:text-[16px] text-primary/60 mt-[8px] xl:mt-[12px]">
                                        {item.text}
                                    </p></div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div></div>
        </div>
    )
}

export default FeedbackSlider
