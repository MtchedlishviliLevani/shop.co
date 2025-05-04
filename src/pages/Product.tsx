import { useLoaderData, useLocation, Link } from "react-router"
import rightIcon from "../assets/icons/rightDirec.svg"
import Rating from "../UI/Rating";
import { useEffect, useState } from "react";
import Button from "../UI/Button";
import { getRandomProducts, getReview } from "../services/api";
import check from "../assets/icons/check.svg"
import settings from "../assets/icons/settings.svg"
import ProductsSlider from "../components/ProductsSlider";
import ImagesSection from "../components/productPage/ImagesSection";
import ProductDetailInfo from "../components/productPage/ProductDetailInfo";
import type { Product, Review } from "../types";

function Product() {
    const data = useLoaderData() as Product;
    const location = useLocation()
    const { pathname } = location;
    // get shop
    const pathnameSegments = pathname.split("/")[1];

    const [activeInfoIndex, setActiveInfoIndxe] = useState(1);
    const infoList = ["Product Details", "Rating & Reviews", "FAQs"];
    const [reviews, setReviews] = useState<Review[]>([]);
    useEffect(() => {
        getReview(data.id).then((reviewData) => {
            /// I used this filtering because backend filtering is not working correctly
            const exactMatch = reviewData.filter((review: Review) =>
                review.productId.toString() === data.id.toString()
            );
            setReviews(exactMatch);
        });

    }, [data.id])
    return (
        <div className="">
            <div className="global-container">
                <div className="flex gap-2 items-center my-[22px] xl:mb-[32px]">
                    <span className="capitalize text-[14px] text-primary/60">home</span><img src={rightIcon} />
                    <span className="capitalize text-[14px] text-primary/60">{pathnameSegments}</span><img src={rightIcon} />
                    <span className="capitalize text-[14px] text-primary/60">{data.category}</span>
                </div>
                <div className="flex flex-col justify-between xl:flex-row gap-[20px] ">
                    <ImagesSection />

                    <ProductDetailInfo data={data} />
                </div>
                <div className="py-6 ">
                    <div className="w-full border-b border-primary/20 flex mt-[30px]">
                        {infoList.map((item, index) => (
                            <button
                                onClick={() => setActiveInfoIndxe(index)}
                                key={index}
                                className={`w-1/3 pb-2 cursor-pointer text-center text-[14px] xl:text-[20px]
        ${activeInfoIndex === index
                                        ? "border-b-2 border-primary text-primary font-medium"
                                        : "border-b border-transparent text-primary/60"}
      `}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                </div>
                <div>
                    <div className="flex justify-between items-center my-[20px]">
                        <h3><span className="font-bold text-[20px] xl:text-2xl">All Reviews</span> <span className="text-primary/60 text-[14px] xl:text-[16px]">({reviews.length})</span></h3>
                        <div className="flex gap-2 ">
                            <div className="bg-Tertiary grid place-items-center rounded-full p-3">
                                <img src={settings} />
                            </div>

                            <Link
                                to={`/create-review/${data.id}`}
                                className="text-primary hover:underline"
                            >
                                <Button className="px-[12px] cursor-pointer"> Write a Review</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                        {activeInfoIndex === 1 && <div className="flex flex-col gap-3">
                            {reviews.map((item, index) => {
                                const formattedDate = new Date(item.createdAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                });
                                return (

                                    <div key={index} className=" rounded-[20px]  border-solid border-[1px] border-primary/10 p-6">
                                        <div><Rating number={item.rating} /></div>
                                        <div className="mt-[12px] xl:mt-[15px]">
                                            <div className="flex gap-3 items-center">
                                                <h4 className="text-[16px] xl:text-[20px] font-bold">{item.clientFullname} </h4>
                                                <img src={check} alt="" /></div>
                                            <p className="text-[14px] xl:text-[16px] text-primary/60 mt-[8px] xl:mt-[12px]">
                                                {item.text}
                                            </p>
                                            <p className="text-[14px] xl:text-[16px] text-primary/60 mt-[16px] xl:mt-[12px]">
                                                Posted On    {formattedDate}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>}
                    </div>
                </div>

            </div>
            <div className="mt-[30px]">
                <ProductsSlider title="You Might Also Like" fetchProducts={getRandomProducts} />

            </div>

        </div >
    )
}

export default Product
