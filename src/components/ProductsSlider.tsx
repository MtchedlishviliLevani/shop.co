import { SwiperSlide, Swiper } from "swiper/react";
import Rating from "../UI/Rating";
import { useEffect, useState } from "react";
import { getAverage } from "../services/api"; // (you still need getAverage)
import SaleTag from "../UI/SaleTag";
import { calculatePercentageChange } from "../utils";
import { Link } from "react-router";
import { Product, ProductWithRating, ProductsSliderProps } from "../types";



function ProductsSlider({ title, fetchProducts }: ProductsSliderProps) {
    const [products, setProducts] = useState<ProductWithRating[]>([]);


    useEffect(() => {
        const fetchAndSetProducts = async () => {
            try {
                const productsData = await fetchProducts();

                const productsWithRatings = await Promise.all(
                    productsData.map(async (product: Product) => {
                        const averageRating = await getAverage(product.id);
                        return { ...product, rating: averageRating };
                    })
                );

                setProducts(productsWithRatings);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchAndSetProducts();
    }, [fetchProducts]);

    return (
        <div>
            <h1 className="text-[32px] font-Fontspring text-center mb-[32px]">{title}</h1>
            <div className="relative w-full overflow-hidden">
                <div className="w-screen pl-5 xl:px-[100px]">
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={1.5}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id} >
                                <Link key={product.id} to={`/shop/${product.id}`}>

                                    <img
                                        src="/main-t-shirt.png"
                                        alt="Product"
                                        className="w-full cursor-pointer object-cover rounded-lg shadow-lg min-w-[198px] min-h-[200px] mx-h-[300px] max-w-[295px]"
                                    />
                                    <div className="flex flex-col gap-2 mt-2">
                                        <h3 className="text-[16px] font-bold">{product.title}</h3>
                                        <div className="flex gap-[6px] items-center">
                                            <Rating number={product.rating} />

                                            <p className="text-[14px] text-primary/60">{product.rating.toFixed(1)}/5</p>

                                        </div>
                                        <h3 className="flex items-center gap-[10px]"><span className="text-2xl font-bold xl:text-[32px]">${product.price} </span><span className="text-2xl font-bold xl:text-[32px] line-through text-primary/30">${product.priceBeforeSale}</span><SaleTag percentage={Number(calculatePercentageChange(product.priceBeforeSale, product.price))} /></h3>

                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div >
    );
}

export default ProductsSlider;
