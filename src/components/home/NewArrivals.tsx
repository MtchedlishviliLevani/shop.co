import ProductsSlider from "../ProductsSlider";
import { getisNewArrivalProducts } from "../../services/api";
import Button from "../../UI/Button";
import { Link } from "react-router";

function NewArrivals() {
    return <div>
        <ProductsSlider title="New Arrivals" fetchProducts={getisNewArrivalProducts} />
        <div className="global-container">
            <div className="mt-[24px] xl:mt-[36px] xl:w-[218px] xl:m-auto">
                <Link to={`/category`}>  <Button variant="secondary" className="cursor-pointer">View All</Button></Link>
            </div>
        </div>
    </div>;
}

export default NewArrivals;
