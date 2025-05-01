import manTshirt from "../../assets/productImage/main-t-shirt.png"
import manTshirt2 from "../../assets/productImage/t-shirt1.png"
import manTshirt3 from "../../assets/productImage/t-shirt2.png"
function ImagesSection() {
    return (
        <div className="grid w-full grid-cols-1 md:grid-cols-[3fr_7fr] md:grid-rows-1 gap-3">
            {/* Full-screen image (takes 3 parts) */}
            <img src={manTshirt} alt="" className="h-full  w-full md:order-2" />

            {/* 3 smaller images (takes 1 part) */}
            <div
                className="grid grid-cols-3 md:grid-cols-1 grid-rows-1 md:grid-rows-1  gap-3 w-full">
                <img src={manTshirt2} alt="" className="w-full h-full" />
                <img src={manTshirt} alt="" className="w-full h-full" />
                <img src={manTshirt3} alt="" className="w-full h-full" />
            </div>
        </div>
    )
}

export default ImagesSection
