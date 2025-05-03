import ProductsSlider from "../ProductsSlider";
import { getTopSelllingProducts } from "../../services/api";
import Button from "../../UI/Button";
import { Link } from "react-router";

function TopSelling() {
    return <div>
        <ProductsSlider title="Top Selling" fetchProducts={getTopSelllingProducts} />
        <div className="global-container">
            <div className="mt-[24px] xl:mt-[36px] xl:w-[218px] xl:m-auto">
                <Link to={'/category'}>
                    <Button variant="secondary" className="cursor-pointer">View All</Button>
                </Link></div>
        </div>
    </div>;
}

export default TopSelling;
