
function SaleTag({ percentage }: { percentage: number }) {
    return (
        <div className="bg-[#FF33331A] font-[500] rounded-[62px] inline py-[6px] px-[14px] text-[#FF3333]">
            <span>
                -{percentage}%
            </span>
        </div>
    )
}

export default SaleTag
