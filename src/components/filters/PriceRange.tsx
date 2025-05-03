import { useState } from "react";
import { Range } from 'react-range';
import downIcon from "../../assets/icons/down.svg";

interface PriceRangeProps {
    onPriceChange: (range: { min: number, max: number }) => void;
}

function PriceRange({ onPriceChange }: PriceRangeProps) {
    const [priceRange, setPriceRange] = useState([0, 500]);
    const [priceOpen, setPriceOpen] = useState(true);

    const handleRangeChange = (values: number[]) => {
        setPriceRange(values);
        onPriceChange({ min: values[0], max: values[1] });
    };

    return (
        <div className="flex-col flex gap-3">
            <div
                className="flex justify-between cursor-pointer"
                onClick={() => setPriceOpen(!priceOpen)}
            >
                <p className="font-bold text-xl select-none">Price</p>
                <img
                    src={downIcon}
                    className={`transition-transform ${priceOpen ? "" : "transform rotate-180"}`}
                    alt="Toggle price"
                />
            </div>

            {priceOpen && (
                <div className="cursor-pointer select-none my-7 px-2">
                    <Range
                        step={1}
                        min={0}
                        max={500}
                        values={priceRange}
                        onChange={handleRangeChange}
                        renderTrack={({ props, children }) => (
                            <div
                                {...props}
                                data-key="track"
                                className="h-2 bg-gray-200 rounded-full"
                                style={{
                                    background: `linear-gradient(to right, 
                                        #E5E7EB 0%, 
                                        #E5E7EB ${(priceRange[0] / 500) * 100}%, 
                                        #000000 ${(priceRange[0] / 500) * 100}%, 
                                        #000000 ${(priceRange[1] / 500) * 100}%, 
                                        #E5E7EB ${(priceRange[1] / 500) * 100}%, 
                                        #E5E7EB 100%)`
                                }}
                            >
                                {children}
                            </div>
                        )}
                        renderThumb={({ props, index }) => (
                            <div
                                {...props}
                                data-key={`thumb-${index}`}
                                key={index}
                                className="w-6 h-6 bg-white border-2 border-primary rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20"
                            >
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm">
                                    ${priceRange[index]}
                                </div>
                            </div>
                        )}
                    />
                </div>
            )}
        </div>
    );
}

export default PriceRange; 