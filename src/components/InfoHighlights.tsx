
function InfoHighlights() {
    return (
        <div className="grid grid-cols-2 gap-[20px] mt-[40px]">
            <div className="flex justify-center items-center border-r border-gray-300 pr-[10px]">
                <div>
                    <h3 className="font-bold text-[24px]">200+</h3>
                    <p className="text-[12px] text-primary/60">International Brands</p>
                </div>
            </div>

            <div className="flex justify-center items-center pl-[10px]">
                <div>
                    <h3 className="font-bold text-[24px]">2,000+</h3>
                    <p className="text-[12px] text-primary/60">High-Quality Products</p>
                </div>
            </div>

            <div className="col-span-2 flex flex-col items-center">
                <h3 className="font-bold text-[24px]">30,000+</h3>
                <p className="text-[12px] text-primary/60">Happy Customers</p>
            </div>
        </div>
    )
}

export default InfoHighlights
