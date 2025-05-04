import { useState } from 'react';
import Button from '../UI/Button';
import Loading from '../UI/Loading';
import { postReview } from '../services/api';
import { useNavigate, useParams } from 'react-router';

function CreateReview() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [clientFullname, setClientFullname] = useState('');
    const [text, setText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { productId } = useParams();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!productId) {
            alert("Product ID is missing");
            return;
        }

        setIsLoading(true);

        const reviewData = {
            productId,
            clientFullname,
            text,
            rating,
            createdAt: new Date().toISOString()
        };

        try {
            await postReview(reviewData);
            setClientFullname('');
            setText('');
            setRating(0);
            navigate('/');
        } catch (error) {
            console.error('Error submitting review:', error);
            alert("Error submitting review");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="global-container">
            {isLoading && <Loading />}
            <div className='grid place-items-center h-screen'>
                <form onSubmit={handleSubmit} className="max-w-[400px] w-[90%] shadow-[0px_4px_4px_0px_#00000040] p-6 rounded-lg flex flex-col gap-4">
                    <div className="relative">
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-2 flex items-center">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={clientFullname}
                                onChange={(e) => setClientFullname(e.target.value)}
                                className="pl-11 w-full px-4 py-2 border border-gray-300 rounded-lg"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Share your experience in scaling
                        </label>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, index) => {
                                const ratingValue = index + 1;
                                return (
                                    <svg
                                        key={index}
                                        className="w-8 h-8 cursor-pointer"
                                        fill={ratingValue <= (hover || rating) ? "#000" : "#e4e5e9"}
                                        viewBox="0 0 24 24"
                                        onClick={() => setRating(ratingValue)}
                                        onMouseEnter={() => setHover(ratingValue)}
                                        onMouseLeave={() => setHover(0)}
                                    >
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                );
                            })}
                        </div>
                    </div>

                    <div className='mt-3'>
                        <textarea
                            id="text"
                            name="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            placeholder="Add your comments"
                            required
                        />
                    </div>

                    <div className='mt-3 w-6/10 ml-auto flex justify-end items-center gap-3'>
                        <button type="button" className='bg-inherit px-[18px] py-2 font-bold'>Cancel</button>
                        <Button type="submit" className='rounded-[8px]! font-bold'>Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateReview;
