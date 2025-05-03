import { useState } from "react"
import Button from "../../../UI/Button"

function NewsLetter() {
    const [email, setEmail] = useState<string>();
    const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
    const [error, setError] = useState('');

    const handleSubscribe = () => {
        // Basic email validation
        if (!email || !email.includes('@') || !email.includes('.')) {
            setError('Please enter a valid email address');
            return;
        }
        setError('');
        setIsSubscribed(true);
    };

    return (
        <div className="global-container">
            {!isSubscribed ?
                <div className="flex flex-wrap gap-[40px] justify-between items-center p-10 bg-primary rounded-[20px] xl:gap-[212px]">
                    <h2 className="font-bold text-[32px] font-Fontspring xl:text-[40px] xl:max-w-[550px]  text-white xl:leading-[1.13] ">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
                    <form className="flex flex-col gap-5 flex-grow" action="">
                        <div className="rounded-[62px] bg-white py-[12px] pl-[17px] flex w-full"><svg stroke="rgba(0, 0, 0, 0.6)" fill="rgba(0, 0, 0, 0.6)" strokeWidth="0" viewBox="0 0 24 24" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></svg>
                            <input value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className=" text-black outline-none ml-2 w-full" placeholder="Enter your email address" /></div>
                        {error && <p className="text-white bg-red-500 px-4 py-2 rounded-lg text-sm mt-1">{error}</p>}
                        <Button variant="secondary" onClick={handleSubscribe}>Subscribe to Newsletter </Button>
                    </form></div> : (
                    <div className="flex-grow">
                        <div className="bg-white rounded-[20px] p-6 shadow-lg relative">
                            {/* Green success checkmark icon */}
                            <div className="flex mb-4">
                                <div className="mr-3">
                                    <svg
                                        className="w-10 h-10 text-green-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        ></path>
                                    </svg>
                                </div>

                                <div>
                                    <h2 className="text-lg font-semibold">You're subscribed!</h2>
                                    <p className="text-sm opacity-90">Thanks for joining our newsletter. Check your inbox for updates!</p>
                                </div>
                            </div>

                            <Button
                                onClick={() => {
                                    setEmail('');
                                    setIsSubscribed(false);
                                }}
                            >
                                Subscribe Another Email
                            </Button>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default NewsLetter
