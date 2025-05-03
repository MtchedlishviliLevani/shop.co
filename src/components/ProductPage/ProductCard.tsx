import { Link } from "react-router";
import Rating from "../../UI/Rating";
import { ProductCardProps } from "../../types";

function ProductCard({ product }: ProductCardProps) {
    return (
        <Link to={`/shop/${product.id}`}>
            <div className="w-full">
                <img
                    src="/main-t-shirt.png"
                    alt="Product"
                    className="w-full cursor-pointer object-cover rounded-lg shadow-lg"
                />
                <div className="flex flex-col gap-2 mt-2">
                    <h3 className="text-[16px] font-bold truncate">{product.title}</h3>
                    <div className="flex gap-[6px] items-center">
                        <Rating number={product.rating || 4} />
                        <p className="text-[14px] text-primary/60">{product.rating || 4}/5</p>
                    </div>
                    <h3 className="flex items-center gap-[10px]">
                        <span className="text-[20px] font-bold xl:text-[32px]">${product.price}</span>
                        <span className="text-[20px] font-bold xl:text-[32px] line-through text-primary/30">
                            ${product.priceBeforeSale}
                        </span>
                    </h3>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard; 