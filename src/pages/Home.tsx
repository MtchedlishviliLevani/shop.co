import InfoHighlights from "../components/home/InfoHighlights"
import Button from "../UI/Button"
import HeroImage from "../components/home/HeroImage"
import LogoSlider from "../components/home/LogoSlider"
import TopSelling from "../components/home/TopSelling"
import NewArrivals from "../components/home/NewArrivals"
import BrowseStyle from "../components/home/BrowseStyle"
import FeedbackSlider from "../components/home/FeedbackSlider"
import { Link } from "react-router"
function Home() {
    return (
        <div className="mb-[150px]">
            <div className="bg-Tertiary pt-10">
                <div className="xl:flex justify-between items-center overflow-visible max-w-[1440px]">
                    <div className="global-container">
                        {/* left Side */}
                        <div className="">
                            <div className="flex flex-col gap-[20px]">
                                <h1 className="font-Fontspring text-[32px] leading-[0.94] xl:text-[64px]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                                <p className="text-[14px] text-primary/60 leading-[1.43] xl:text-[16px]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                                <div className="w-full xl:w-1/3 mt-1">
                                    <Link to={'/category'} >
                                        <Button className="cursor-pointer" variant="primary">Shop Now </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="xl:mt-[50px]">
                                <InfoHighlights />
                            </div>
                        </div>
                        {/* Rigth Side */}
                    </div>
                    <div className="w-full">
                        <HeroImage />
                    </div>
                </div>
                <LogoSlider />
            </div>

            <div className="flex flex-col gap-10 py-[50px]">
                <div className=" ">
                    <NewArrivals />
                    <div className="global-container  ">
                        <div className="w-full h-[1px] mt-[40px] bg-primary/10"></div>
                    </div>
                </div>
                <TopSelling />
            </div>

            <BrowseStyle />

            <FeedbackSlider />
        </div>
    )
}

export default Home
