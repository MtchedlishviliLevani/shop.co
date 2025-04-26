import { useLoaderData } from "react-router"

function Product() {
    const id = useLoaderData() as string
    return (
        <div>
            Product {id}
        </div>
    )
}

export default Product
