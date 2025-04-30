import star1 from "../assets/icons/Vector (2).svg"
import star2 from "../assets/icons/Vector (3).svg"
import mainImage from "../assets/man-woman-fashion.png"
function HeroImage() {
    return (
        <div className="relative  w-full h-[600px] overflow-hidden xl:overflow-visible ">
            {/* Main image (Man and Woman Fashion) */}
            <img
                src={mainImage}
                alt="Man and Woman Fashion"
                // style={{ objectPosition: "center -90px" }}
                className="w-full h-full object-cover scale-110 md:scale-100 ml-[-9px] xl:ml-[0px] obj-pos "  // Increase size with scale
            />

            {/* First star (top-left) */}
            <img
                src={star1}
                alt=""
                className="absolute top-1/5 left-5 "  // Increase star size
            />

            {/* Second star (middle-right) */}
            <img
                src={star2}
                alt=""
                className="absolute top-1/10 right-5 w-[76px] h-[76px]  transform -translate-y-1/2"  // Increase star size
            />
        </div>
    )
}

export default HeroImage
