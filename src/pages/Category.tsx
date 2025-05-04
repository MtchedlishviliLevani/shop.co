import { useEffect, useState } from "react";
import settings from "../assets/icons/settings.svg";
import { getProducts, getAverage } from "../services/api";
import ProductsFilterBar from "../components/ProductPage/ProductsFilterBar";
import ProductCard from "../components/ProductPage/ProductCard";
import Pagination from "../components/category/Pagination";
import { ProductWithRating, Filters } from "../types";
import Loading from "../UI/Loading";


const PRODUCTS_PER_PAGE = 8;

function Category() {
    // State
    const [products, setProducts] = useState<ProductWithRating[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<ProductWithRating[]>([]);
    const [page, setPage] = useState(1);
    const [isOpenFilter, setIsOpenFilter] = useState(false);
    const [activeFilters, setActiveFilters] = useState<Filters>({
        categories: [],
        colors: [],
        sizes: [],
        type: [],
        priceRange: { min: 0, max: 500 }
    });
    const [loading, setLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    // Derived state
    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
    const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
    const currentProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
    const productCategoriesList = [...new Set(products.map(item => item.category))];
    const productTypesList = [...new Set(products.map(item => item.type))];

    // Effects
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const productsData = await getProducts(activeFilters);
                const productsWithRatings = await Promise.all(
                    productsData.map(async (product) => ({
                        ...product,
                        rating: await getAverage(product.id)
                    }))
                );
                setProducts(productsWithRatings);
                setFilteredProducts(productsWithRatings);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [activeFilters]);

    // Handlers
    const handleFilterApply = (
        categories: string[],
        colors: string[],
        sizes: string[],
        type: string[],
        priceRange: { min: number; max: number }
    ) => {
        setActiveFilters({ categories, colors, sizes, type, priceRange });
        if (isMobile) closeFilter();
    };

    const closeFilter = () => setIsOpenFilter(false);

    return (
        <div className="">
            <div className="global-container">
                <div className="xl:grid xl:grid-cols-[20%_80%] xl:gap-5 mt-[24px]">
                    {isMobile ? (
                        isOpenFilter && (
                            <>
                                <div className="fixed inset-0 z-40 bg-black/50" onClick={closeFilter}></div>
                                <div className="absolute top-[120px] left-0 z-50 w-full">
                                    <div className="bg-white w-full max-w-xl mx-auto rounded-[20px] relative">
                                        <ProductsFilterBar
                                            onClose={closeFilter}
                                            categoryList={productCategoriesList}
                                            typeList={productTypesList}
                                            onApplyFilter={handleFilterApply}
                                        />
                                    </div>
                                </div>
                            </>
                        )
                    ) : (
                        <ProductsFilterBar
                            onClose={closeFilter}
                            categoryList={productCategoriesList}
                            typeList={productTypesList}
                            onApplyFilter={handleFilterApply}
                        />
                    )}

                    <div className="global-container xl:px-0!">
                        <div className="flex justify-between items-center mb-[16px]">
                            <h2 className="font-bold text-[24px] xl:text-[32px]">Casual</h2>
                            <h3 className="text-[14px] text-primary/60 xl:text-[16px]">
                                {loading ? (
                                    <Loading />
                                ) : (
                                    `Showing ${startIndex + 1}–${Math.min(startIndex + PRODUCTS_PER_PAGE, filteredProducts.length)} of ${filteredProducts.length} Products`
                                )}
                            </h3>
                            <div
                                onClick={() => setIsOpenFilter((prev) => !prev)}
                                className="bg-Tertiary xl:hidden grid place-items-center rounded-full p-3 cursor-pointer"
                            >
                                <img src={settings} alt="Settings" />
                            </div>
                        </div>

                        <div>
                            {loading ? (
                                <Loading />
                            ) : filteredProducts.length === 0 ? (
                                <div className="text-center py-8">No products found matching your filters.</div>
                            ) : (
                                <div className="grid grid-cols-2 xl:grid-cols-3 gap-6">
                                    {currentProducts.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            )}

                            {!loading && filteredProducts.length > 0 && (
                                <Pagination
                                    currentPage={page}
                                    totalPages={totalPages}
                                    onPageChange={setPage}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;