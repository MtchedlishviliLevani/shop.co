import { useState } from "react";
import downIcon from "../../assets/icons/down.svg";
import { sizes } from "../../data";

interface SizeFilterProps {
    onSizeChange: (sizes: string[]) => void;
}

function SizeFilter({ onSizeChange }: SizeFilterProps) {
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const [sizesOpen, setSizesOpen] = useState(true);

    const handleSizeSelection = (size: string) => {
        const newSizes = selectedSizes.includes(size)
            ? selectedSizes.filter(s => s !== size)
            : [...selectedSizes, size];

        setSelectedSizes(newSizes);
        onSizeChange(newSizes);
    };

    return (
        <div className="flex flex-col mt-[23px]">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setSizesOpen(!sizesOpen)}
            >
                <h2 className="xl:text-[20px] font-bold">Sizes</h2>
                <img
                    src={downIcon}
                    className={`transition-transform ${sizesOpen ? "" : "transform rotate-180"}`}
                    alt="Toggle sizes"
                />
            </div>

            {sizesOpen && (
                <div className="grid grid-cols-2 gap-2 my-[20px]">
                    {sizes.map((size, index) => (
                        <div
                            key={index}
                            onClick={() => handleSizeSelection(size)}
                            className={`${selectedSizes.includes(size) ? "bg-primary text-white" : "bg-gray-100 text-primary/60"
                                } cursor-pointer py-2 px-5 rounded-full`}
                        >
                            <span className="text-[14px]">{size}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SizeFilter; 