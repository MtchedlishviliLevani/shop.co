import { useEffect, useState } from "react";
import Button from "../../UI/Button"
import Rating from "../../UI/Rating";
import { getAverage } from "../../services/api";
import checkIcon from "../../assets/icons/chck.svg"
import minusIcon from "../../assets/icons/minus.svg"
import plusIcon from "../../assets/icons/plus.svg"
import SaleTag from "../../UI/SaleTag";
import { calculatePercentageChange } from "../../utils";


function ProductDetailInfo({ data }: { data: Product }) {
    const [amountOfItems, setAmountOfItems] = useState(1);
    const [activeColor, setActiveColor] = useState(data.colors[0]);
    const [activeSize, setActiveSize] = useState<null | string>(null);

    const [average, setAverage] = useState<number | undefined>();
    useEffect(() => {
        getAverage(data.id).then((average) => setAverage(average))
    }, [data.id])
    const handleIncrement = () => {
        setAmountOfItems((prev) => prev + 1);
    }
    const handleDecrement = () => {
        if (amountOfItems > 1) {
            setAmountOfItems((prev) => prev - 1);
        }
    }
    const percentageChange = calculatePercentageChange(data.priceBeforeSale, data.price);

    return (
        <div className="w-full">
            <h2 className="font-Fontspring text-2xl font-bold xl:text-[40px]">{data.title}</h2>
            <div className="flex items-center gap-1 my-3"><Rating number={average ?? 0} /><span>{average}/<span className="text-primary/60">5</span></span> </div>
            <h3 className="flex items-center gap-[10px]"><span className="text-2xl font-bold xl:text-[32px]">${data.price} </span><span className="text-2xl font-bold xl:text-[32px] line-through text-primary/30">${data.priceBeforeSale}</span><SaleTag percentage={Number(percentageChange)} /></h3>
            <p className="my-[20px] text-[14px] text-primary/60 xl:text-[20px]">{data?.description}</p>
            <div className="py-6 border-y border-primary/10">
                <h4 className="text-[14px] text-primary/60 xl:text-[16px]">Select Colors</h4>
                <div className="flex gap-3 items-center mt-4">
                    {data.colors.map((color, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveColor(color)}
                            style={{ backgroundColor: color }}
                            className="w-[37px] h-[37px] rounded-full relative cursor-pointer border-2 border-transparent hover:border-gray-300"
                        >
                            {activeColor === color && (
                                <img
                                    src={checkIcon}
                                    alt="check"
                                    className="absolute top-1/2 left-1/2 w-4 h-4 transform -translate-x-1/2 -translate-y-1/2"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="py-6 border-b border-primary/10">
                <h4 className="text-[14px] text-primary/60 xl:text-[16px]">Choose Size</h4>
                <div className="flex gap-3 items-center mt-4">
                    {data.sizes.map((size, index) => (
                        <div key={index} onClick={() => setActiveSize(size)} className={` ${activeSize === size ? "bg-primary text-white" : "bg-gray-100 text-primary/60"} cursor-pointer py-2 px-5 rounded-full`}>
                            <span className="text-[14px] ">{size}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-[33%_67%] gap-[12px] justify-between items-center mt-6">
                <Button variant="secondary" className="w-[25%] bg-Tertiary flex justify-between gap-[16px] px-[16px] ">
                    <img onClick={handleDecrement} src={minusIcon} alt="" className="cursor-pointer" />
                    <span>{amountOfItems}</span>
                    <img onClick={handleIncrement} src={plusIcon} alt="" className="cursor-pointer" />
                </Button>

                <Button variant="primary" className="">Add to Cart</Button>
            </div>
        </div>
    )
}

export default ProductDetailInfo
