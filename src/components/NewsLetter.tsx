import Button from "../UI/Button"

function NewsLetter() {
    return (
        <div className="global-container">
            <div className="flex flex-wrap gap-[40px] justify-between items-center p-10 bg-primary rounded-[20px] xl:gap-[212px]">
                <h2 className="font-bold text-[32px] font-Fontspring xl:text-[40px] xl:max-w-[550px]  text-white xl:leading-[1.13] ">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
                <form className="flex flex-col gap-5 flex-grow" action="">
                    <div className="rounded-[62px] bg-white py-[12px] pl-[17px] flex w-full"><svg stroke="rgba(0, 0, 0, 0.6)" fill="rgba(0, 0, 0, 0.6)" stroke-width="0" viewBox="0 0 24 24" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></svg>
                        <input className=" text-black outline-none ml-2 w-full" placeholder="Enter your email address" /></div>
                    <Button variant="secondary">Subscribe to Newsletter </Button>
                </form></div>
        </div>
    )
}

export default NewsLetter
