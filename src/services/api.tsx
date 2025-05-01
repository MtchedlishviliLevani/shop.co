// I use 2 urls because I created 3 resources in mockapi
const url1 = `https://680f694c67c5abddd1953253.mockapi.io`;

// only for feedback
const url2 = `https://6810ce7127f2fdac2412e058.mockapi.io`

// Get new Arrival products 4 only for slider
export async function getisNewArrivalProducts() {
    const response = await fetch(`${url1}/product?isNewArrival=true&page=1&limit=4`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}
/// Here I calculate rating for each product based on the reviews data
export async function getAverage(productId: string) {
    const response = await fetch(`${url1}/review`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const reviews = await response.json();

    // Now calculate average for the given productId
    const productReviews = reviews.filter(review => review.productId === productId);

    if (productReviews.length === 0) return 0;

    const totalRating = productReviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / productReviews.length;

    return averageRating
}


// Here I get the top 4 selling products based on the number of sold items
export async function getTopSelllingProducts() {
    try {
        const response = await fetch(`${url1}/product?sortBy=numberOfSold&order=desc&page=1&limit=4`)
        return response.json()
    } catch (error) {
        console.error("Error fetching top selling products:", error);
    }
}


export async function getReview(id: string) {
    try {
        const response = await fetch(`${url1}/review?productId=${id}`)
        return response.json()
    } catch (error) {
        console.log(error)
    }
}


export async function getFeedback() {
    try {
        const response = await fetch(`${url2}/feedbacks`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.error("Error fetching feedback:", error);
        throw error;
    }
}



export async function getProduct(productId: string) {
    try {
        const response = await fetch(`${url1}/product/${productId}`)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json()
    } catch (error) {
        console.error("Error fetching product:", error);
        throw error;
    }
}




/// get 4 random products
export async function getRandomProducts() {
    try {
        const response = await fetch(`${url1}/product`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const products: Product[] = await response.json();

        // Filter to get unique products (assuming each has a unique id)
        const uniqueProducts = [...new Map(products.map(p => [p.id, p])).values()];

        // Shuffle and get first 4
        return uniqueProducts.sort(() => 0.5 - Math.random()).slice(0, 4);

    } catch (error) {
        console.log(error);
        return [];
    }
}



export async function getProducts(filters = {}) {

    try {
        const query = [];

        for (const key in filters) {
            if (filters[key]) {
                query.push(`${key}=${filters[key]}`);
            }
        }

        const queryString = query.length ? `?${query.join('&')}` : '';
        const response = await fetch(`${url1}/product${queryString}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching products", error);
        return [];
    }
}

