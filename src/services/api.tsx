import type { Product, ProductFilters, Review, ReviewData } from "../types";

// I use 2 urls because I created 3 resources in mockapi

// this is for product and review
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
    try {
        const response = await fetch(`${url1}/review`);
        if (!response.ok) {
            console.warn(`Failed to fetch reviews for product ${productId}`);
            return 0; // Return default rating instead of throwing error
        }
        const reviews: Review[] = await response.json();

        // Now calculate average for the given productId
        const productReviews = reviews.filter((review: Review) => review.productId === productId);

        if (productReviews.length === 0) return 0;

        const totalRating = productReviews.reduce((sum: number, review: Review) => sum + review.rating, 0);
        const averageRating = totalRating / productReviews.length;

        return averageRating;
    } catch (error) {
        console.warn(`Error calculating average rating for product ${productId}:`, error);
        return 0;
    }
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
        const response = await fetch(`${url1}/review?productId=${id}`);
        if (!response.ok) {
            console.warn(`Failed to fetch reviews for product ${id}`);
            return [];
        }
        return response.json();
    } catch (error) {
        console.warn(`Error fetching reviews for product ${id}:`, error);
        return [];
    }
}


export async function getFeedback() {
    try {
        const response = await fetch(`${url2}/feedbacks`);
        if (!response.ok) {
            console.warn('Failed to fetch feedbacks');
            return [];
        }
        return response.json();
    } catch (error) {
        console.warn('Error fetching feedback:', error);
        return [];
    }
}



export async function getProduct(productId: string) {
    try {
        const response = await fetch(`${url1}/product/${productId}`);
        if (!response.ok) {
            console.warn(`Failed to fetch product ${productId}`);
            throw new Error(`Product not found: ${productId}`);
        }
        return response.json();
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



export async function getProducts(filters: ProductFilters = {}) {
    try {
        const response = await fetch(`${url1}/product`);
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        let products: Product[] = await response.json();

        // Apply filters client-side since mockapi doesn't support complex filtering
        if (filters.categories?.length) {
            products = products.filter(product =>
                filters.categories?.includes(product.category.toLowerCase())
            );
        }

        if (filters.colors?.length) {
            products = products.filter(product =>
                product.colors.some(color => filters.colors?.includes(color))
            );
        }

        if (filters.sizes?.length) {
            products = products.filter(product =>
                product.sizes.some(size => filters.sizes?.includes(size))
            );
        }

        if (filters.type?.length) {
            products = products.filter(product =>
                filters.type?.includes(product.type)
            );
        }

        // Apply price range filter
        if (filters.priceRange) {
            products = products.filter(product =>
                product.price >= filters.priceRange!.min &&
                product.price <= filters.priceRange!.max
            );
        }

        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}


export async function postReview(reviewData: ReviewData) {
    try {
        const response = await fetch(`${url1}/review`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData)
        });

        if (!response.ok) {
            throw new Error('Failed to submit review');
        }

        return await response.json();
    } catch (error) {
        console.error("Error posting review:", error);
        throw error;
    }
}


