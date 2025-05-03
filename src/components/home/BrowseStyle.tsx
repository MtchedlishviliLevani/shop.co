import { imgSrc } from "../../data"
function BrowseStyle() {
    return (
        <div className="global-container">
            <div className="bg-Tertiary rounded-[40px] px-[24px] py-[40px]">
                <h2 className="text-[32px] font-Fontspring font-bold xl:text-[48px] text-center mb-[28px]">BROWSE BY dress STYLE</h2>
                <div className="grid grid-cols-1 gap-[20px] md:grid-cols-12 md:justify-between">
                    {imgSrc.map((image, index) => (
                        <div
                            key={index}
                            className={`relative cursor-pointer ${image.isWide ? 'md:col-span-7' : 'md:col-span-5'}`}
                        >
                            <span className="absolute top-4 left-6 text-[24px] font-bold">{image.name}</span>
                            <img
                                src={image.src}
                                alt={image.name}
                                className="h-[190px] w-full rounded-[20px] mb-[20px]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BrowseStyle
