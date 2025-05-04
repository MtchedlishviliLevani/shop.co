import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { useAuth } from '../context/useAuth';
import Button from '../UI/Button';


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/")
        }
    }, [isAuthenticated, navigate])
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const token = Math.random().toString(36).substring(7);
        login(token);
        navigate('/cart');
    };

    return (
        <div className="min-h-screen flex items-center justify-center mb-[300px] ">
            <div className="max-w-md w-full  bg-white rounded-lg shadow">
                <h2 className="text-3xl font-bold mb-[10px]">Create Account</h2>
                <div className='flex gap-2'>
                    <h2>Already have an account?</h2>
                    <Link to="/login" className="text-primary hover:underline">Login</Link>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className='flex justify-between gap-2'>
                        <input className='border-[#04030899] w-1/2 rounded-md px-3 py-2 border' type="text" placeholder='First Name' />
                        <input className='border-[#04030899] w-1/2 rounded-md px-3 py-2 border' type="text" placeholder='Last Name' />
                    </div>
                    <div>
                        <input
                            id="email"
                            type="email"
                            placeholder='Email'
                            required
                            className="mt-1 block w-full px-3 py-2 border border-[#04030899] rounded-md"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            id="password"
                            type="password"
                            placeholder='Password'
                            required
                            className="mt-1 block w-full px-3 py-2 border outline-none border-[#04030899] rounded-md"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" className='w-4 h-4 border-primary/10' name="" id="" />
                        <p className='text-[14px] '>I agree to DopeSass Terms of service and Privacy policy</p>
                    </div>
                    <Button variant='primary' className='rounded-md font-[600]'>Create Account</Button>

                    <div className='flex items-center gap-2'>
                        <div className='flex-1 h-[1px] bg-gray-300'></div>
                        <span className='text-gray-500 text-sm'>or</span>
                        <div className='flex-1 h-[1px] bg-gray-300'></div>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <button className='flex items-center justify-center gap-2 w-full py-2 px-4 border border-[#04030899] rounded-md hover:bg-gray-50 transition-colors'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clipPath="url(#clip0_1_5266)">
                                    <path d="M19.3152 10.2188C19.3152 9.57304 19.2628 8.92376 19.1511 8.28845H10.1904V11.9467H15.3218C15.1089 13.1266 14.4247 14.1703 13.4228 14.8336V17.2072H16.4842C18.2819 15.5526 19.3152 13.1091 19.3152 10.2188Z" fill="#4285F4" />
                                    <path d="M10.1896 19.5006C12.7518 19.5006 14.9126 18.6594 16.4869 17.2072L13.4255 14.8335C12.5738 15.413 11.4742 15.7411 10.1931 15.7411C7.71471 15.7411 5.6133 14.0691 4.8593 11.821H1.7002V14.268C3.31291 17.476 6.59768 19.5006 10.1896 19.5006Z" fill="#34A853" />
                                    <path d="M4.85661 11.8211C4.45866 10.6412 4.45866 9.36362 4.85661 8.18375V5.73676H1.70099C0.353575 8.42112 0.353575 11.5837 1.70099 14.2681L4.85661 11.8211Z" fill="#FBBC04" />
                                    <path d="M10.1896 4.26015C11.544 4.2392 12.8531 4.74885 13.8339 5.68436L16.5462 2.97207C14.8288 1.35936 12.5494 0.472714 10.1896 0.50064C6.59768 0.50064 3.31291 2.52526 1.7002 5.73672L4.85581 8.18372C5.60631 5.9322 7.71122 4.26015 10.1896 4.26015Z" fill="#EA4335" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_5266">
                                        <rect width="19" height="19" fill="white" transform="translate(0.5 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className='font-bold text-[16px]'>Continue with Google</span>
                        </button>
                        <button className='flex items-center justify-center gap-2 w-full py-2 px-4 border border-[#04030899] rounded-md hover:bg-gray-50 transition-colors'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
                                <path d="M15.7516 15.307C15.4643 15.9708 15.1242 16.5818 14.7301 17.1436C14.193 17.9094 13.7532 18.4395 13.4142 18.7339C12.8888 19.2171 12.3259 19.4645 11.7231 19.4786C11.2903 19.4786 10.7684 19.3555 10.1609 19.1057C9.55139 18.857 8.99126 18.7339 8.4791 18.7339C7.94195 18.7339 7.36587 18.857 6.74968 19.1057C6.13256 19.3555 5.6354 19.4857 5.2553 19.4986C4.67722 19.5232 4.10103 19.2687 3.52589 18.7339C3.1588 18.4137 2.69965 17.8648 2.1496 17.0873C1.55945 16.2569 1.07426 15.2941 0.694155 14.1963C0.287075 13.0106 0.0830078 11.8624 0.0830078 10.7508C0.0830078 9.47753 0.358147 8.37932 0.909247 7.45902C1.34236 6.7198 1.91856 6.13668 2.63972 5.70861C3.36087 5.28054 4.14008 5.06239 4.97922 5.04844C5.43837 5.04844 6.04049 5.19046 6.78874 5.46959C7.53487 5.74966 8.01396 5.89168 8.22401 5.89168C8.38105 5.89168 8.91327 5.72561 9.81551 5.39453C10.6687 5.08749 11.3888 4.96036 11.9787 5.01044C13.5773 5.13945 14.7782 5.76959 15.5769 6.90487C14.1473 7.7711 13.4401 8.98437 13.4541 10.5408C13.467 11.7531 13.9068 12.762 14.7712 13.563C15.1629 13.9348 15.6004 14.2221 16.0871 14.4262C15.9815 14.7323 15.8701 15.0255 15.7516 15.307ZM12.0855 0.880291C12.0855 1.83051 11.7383 2.71772 11.0464 3.53892C10.2113 4.51516 9.20131 5.07928 8.10603 4.99027C8.09207 4.87627 8.08398 4.75629 8.08398 4.63022C8.08398 3.71801 8.48109 2.74177 9.1863 1.94356C9.53837 1.53941 9.98615 1.20336 10.5292 0.935295C11.071 0.671227 11.5835 0.525191 12.0655 0.500183C12.0796 0.627212 12.0855 0.754249 12.0855 0.880279V0.880291Z" fill="black" />
                            </svg>
                            <span className='font-bold text-[16px]'>Continue with Apple</span>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Register; 