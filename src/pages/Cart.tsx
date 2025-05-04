import { useState } from 'react';
import product from "../assets/productImage/main-t-shirt.png"
import bin from "../assets/icons/bin.svg"
import Button from '../UI/Button';
import minus from "../assets/icons/minus.svg"
import plus from "../assets/icons/plus.svg"
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();
    const [promoCode, setPromoCode] = useState("");

    const handlePromoCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPromoCode(e.target.value);
    };

    const handleQuantityChange = (id: string, change: number) => {
        const item = cartItems.find(item => item.id === id);
        if (item) {
            updateQuantity(id, item.quantity + change);
        }
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const calculateDiscount = () => {
        const subtotal = calculateSubtotal();
        return promoCode ? subtotal * 0.05 : 0; // 5% discount if promo code is applied
    };

    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        const discount = calculateDiscount();
        const deliveryFee = 15;
        return subtotal - discount + deliveryFee;
    };

    return (
        <div className="global-container py-8">
            <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
            <div className='flex gap-4 flex-col xl:flex-row xl:justify-between xl:items-start'>
                {cartItems.length === 0 ? (
                    <div className="bg-white rounded-lg shadow p-6">
                        <p className="text-gray-600">Your cart is empty</p>
                    </div>
                ) : (
                    <div className="flex flex-col border-[1px] border-primary/60 p-5 rounded-[20px] gap-2 xl:gap-4 xl:flex-grow-1">
                        {cartItems.map(item => (
                            <div className="flex flex-col border-b border-primary/10 pb-4" key={item.id}>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-4'>
                                        <img src={product} alt={item.title} className='w-[100px] h-auto' />
                                        <div className='flex flex-col justify-between'>
                                            <h2 className='text-[16px] font-bold truncate max-w-[200px]'>{item.title}</h2>
                                            <div className='flex flex-col gap-0.5'>
                                                <h4 className='text-[12px] font-regular'>Size:<span className='text-primary/60 ml-2'>{item.selectedSize}</span></h4>
                                                <h4 className='text-[12px] font-regular'>Color:<span className='text-primary/60 ml-2'>{item.selectedColor}</span></h4>
                                            </div>
                                            <h4 className='text-[24px] font-bold'>${item.price}</h4>
                                        </div>
                                    </div>
                                    <div className='h-full'>
                                        <div className='flex flex-col justify-between items-start h-[120px]'>
                                            <img
                                                src={bin}
                                                alt="Delete"
                                                className='w-[20px] h-[20px] cursor-pointer ml-auto'
                                                onClick={() => removeFromCart(item.id)}
                                            />
                                            <Button
                                                variant="secondary"
                                                className='flex justify-between items-center px-4 gap-4'
                                            >
                                                <img
                                                    src={minus}
                                                    alt="Decrease"
                                                    className='cursor-pointer w-[20px] h-[20px] max-w-[20px] max-h-[20px]'
                                                    onClick={() => handleQuantityChange(item.id, -1)}
                                                />
                                                <span className='font-bold'>{item.quantity}</span>
                                                <img
                                                    src={plus}
                                                    alt="Increase"
                                                    className='cursor-pointer max-w-[20px] max-h-[20px]'
                                                    onClick={() => handleQuantityChange(item.id, 1)}
                                                />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div className="flex flex-col rounded-xl border-[1px] border-primary/60 p-5 xl:flex-1">
                    <h2 className="text-[24px] font-bold mb-6">Order Summary</h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <span className="text-[16px] text-primary/60">Subtotal</span>
                            <span className="text-[16px] font-bold">${calculateSubtotal()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-[16px] text-primary/60">Discount {promoCode ? "(-5%)" : ""}</span>
                            <span className="text-[16px] font-bold text-red-500">-${calculateDiscount()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-[16px] text-primary/60">Delivery Fee</span>
                            <span className="text-[16px] font-bold">{cartItems.length > 0 ? "$15" : ""}</span>
                        </div>
                        <div className="h-[1px] bg-gray-200 my-2"></div>
                        <div className="flex justify-between items-center">
                            <span className="text-[16px] font-bold">Total</span>
                            <span className="text-[16px] font-bold">${cartItems.length > 0 ? calculateTotal() : 0}</span>
                        </div>
                        <div className="flex gap-2 mt-4">
                            <input
                                onChange={handlePromoCodeChange}
                                value={promoCode ?? ""}
                                type="text"
                                placeholder="Add promo code"
                                className="w-[67%] px-4 py-2 bg-Tertiary rounded-[62px] outline-none"
                            />
                            <div className='w-[33%]'>
                                <Button variant="primary" className="px-6">Apply</Button>
                            </div>
                        </div>
                        <Button variant="primary" className="w-full mt-4 cursor-pointer">Go to Checkout</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart; 