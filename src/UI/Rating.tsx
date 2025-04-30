function Rating({ number }: { number: number }) {
    const fullStarSrc = "/logos/full-star.svg";
    const halfStarSrc = "/logos/half-star.svg";

    const intRating = Math.floor(number);
    const halfRating = number - intRating !== 0 ? true : false; // Check if there's a half star

    // Array for full stars
    const ratingArray = Array.from({ length: intRating }, (_, i) => i + 1);

    return (
        <div className="flex items-center">
            {/* Render full stars */}
            {ratingArray.map((_, index) => (
                <img key={index} src={fullStarSrc} alt="Full Star" className="w-5 h-5" />
            ))}

            {/* Render half star */}
            {halfRating && <img src={halfStarSrc} alt="Half Star" className="w-5 h-5" />}
        </div>
    );
}

export default Rating;
