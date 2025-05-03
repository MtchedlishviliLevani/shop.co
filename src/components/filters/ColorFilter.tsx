import { useState } from "react";
import downIcon from "../../assets/icons/down.svg";
import checkIcon from "../../assets/icons/chck.svg";
import { colorsList } from "../../data";

interface ColorFilterProps {
    onColorChange: (colors: string[]) => void;
}

function ColorFilter({ onColorChange }: ColorFilterProps) {
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [colorsOpen, setColorsOpen] = useState(true);

    const handleColorSelection = (color: string) => {
        const newColors = selectedColors.includes(color)
            ? selectedColors.filter(c => c !== color)
            : [...selectedColors, color];

        setSelectedColors(newColors);
        onColorChange(newColors);
    };

    return (
        <div className="flex flex-col border-y border-primary/10 border-[1px_0px] py-[23px]">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setColorsOpen(!colorsOpen)}
            >
                <h2 className="xl:text-[20px] font-bold">Colors</h2>
                <img
                    src={downIcon}
                    className={`transition-transform ${colorsOpen ? "" : "transform rotate-180"}`}
                    alt="Toggle colors"
                />
            </div>

            {colorsOpen && (
                <div className="grid grid-rows-2 grid-cols-8 xl:grid-cols-5 gap-[15px] my-[20px]">
                    {colorsList.map((color, index) => (
                        <div
                            key={index}
                            onClick={() => handleColorSelection(color)}
                            style={{ backgroundColor: color }}
                            className="w-[37px] h-[37px] rounded-full relative cursor-pointer border-2 border-primary/20"
                        >
                            {selectedColors.includes(color) && (
                                <img
                                    src={checkIcon}
                                    alt="Selected"
                                    className="absolute top-1/2 left-1/2 w-4 h-4 transform -translate-x-1/2 -translate-y-1/2"
                                />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ColorFilter; 