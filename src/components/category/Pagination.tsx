import arrow from "../../assets/icons/ArrowIcon.svg"
import { PaginationProps } from "../../types";

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const handlePrev = () => currentPage > 1 && onPageChange(currentPage - 1);
    const handleNext = () => currentPage < totalPages && onPageChange(currentPage + 1);

    return (
        <div className="flex justify-between items-center gap-4 mt-6 xl:w-full">
            <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="flex text-[12px] xl:text-[14px] font-medium gap-[10px] items-center px-2 xl:px-[15px] py-2 border border-primary/10 rounded-[8px] hover:bg-gray-100 disabled:cursor-not-allowed"
            >
                <img src={arrow} alt="Previous" />
                <span>Previous</span>
            </button>

            <div className="flex items-center">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => onPageChange(i + 1)}
                        className={`py-1.5 px-4 rounded-[8px] text-[12px] xl:text-[14px] cursor-pointer ${currentPage === i + 1
                            ? "bg-primary/10 text-primary"
                            : "text-primary/50 hover:bg-gray-100"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="flex text-[12px] xl:text-[14px] gap-[10px] items-center p-2 px-[14px] cursor-pointer border border-primary/10 rounded-[8px] hover:bg-gray-100 disabled:cursor-not-allowed"
            >
                <span>Next</span>
                <img src={arrow} className="rotate-180" alt="Next" />
            </button>
        </div>
    );
}

export default Pagination; 