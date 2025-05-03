import React, { useState } from "react";
import downIcon from "../../assets/icons/down.svg";

interface CategoryFilterProps {
    categories: string[];
    onCategoryChange: (categories: string[]) => void;
}

function CategoryFilter({ categories, onCategoryChange }: CategoryFilterProps) {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [categoriesOpen, setCategoriesOpen] = useState(true);

    const handleCategoryCheckBox = (e: React.ChangeEvent<HTMLInputElement>, category: string) => {
        const newCategories = e.target.checked
            ? [...new Set([...selectedCategories, category])]
            : selectedCategories.filter((item) => item !== category);

        setSelectedCategories(newCategories);
        onCategoryChange(newCategories);
    };

    return (
        <div className="flex-col flex border-y border-primary/10 border-[1px_0px] py-[23px]">
            <div
                className="flex justify-between items-center mb-4 cursor-pointer"
                onClick={() => setCategoriesOpen(!categoriesOpen)}
            >
                <h2 className="xl:text-[20px] font-bold">Categories</h2>
                <img
                    src={downIcon}
                    className={`transition-transform ${categoriesOpen ? "" : "transform rotate-180"}`}
                    alt="Toggle categories"
                />
            </div>

            {categoriesOpen && (
                <div className="flex flex-col gap-4">
                    {categories.map((category, index) => (
                        <div key={index} className="flex justify-between items-center">
                            <label className="capitalize xl:text-[16px] text-primary/60">{category}</label>
                            <input
                                checked={selectedCategories.includes(category)}
                                onChange={(e) => handleCategoryCheckBox(e, category)}
                                type="checkbox"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CategoryFilter; 