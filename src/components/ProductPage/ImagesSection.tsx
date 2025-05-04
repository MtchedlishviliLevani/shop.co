import { useState } from "react";
import manTshirt from "../../assets/productImage/main-t-shirt.png"
import manTshirt2 from "../../assets/productImage/t-shirt1.png"
import manTshirt3 from "../../assets/productImage/t-shirt2.png"
function ImagesSection() {
    const [selectedImage, setSelectedImage] = useState(manTshirt);
    const handleImageClick = (image: string) => {
        setSelectedImage(image);
    }
    return (
        <div className="grid w-full grid-cols-1 md:grid-cols-[3fr_7fr] md:grid-rows-1 gap-3">
            <img src={selectedImage} alt="" className="h-full  w-full md:order-2" />
            <div
                className="grid grid-cols-3 md:grid-cols-1 grid-rows-1 md:grid-rows-1  gap-3 w-full">
                <img src={manTshirt2} alt="" className="w-full h-full cursor-pointer" onClick={() => handleImageClick(manTshirt2)} />
                <img src={manTshirt} alt="" className="w-full h-full cursor-pointer" onClick={() => handleImageClick(manTshirt)} />
                <img src={manTshirt3} alt="" className="w-full h-full cursor-pointer" onClick={() => handleImageClick(manTshirt3)} />
            </div>
        </div>
    )
}

export default ImagesSection
