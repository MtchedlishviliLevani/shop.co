import visa from "../../../assets/icons/visa.svg"
import mastercard from "../../../assets/icons/mastercard.svg"
import paypal from "../../../assets/icons/paypal.svg"
import apple from "../../../assets/icons/apple.svg"
import google from "../../../assets/icons/google.svg"
function FooterLegal() {
    return (
        <>
            <div className="flex justify-center  gap-y-5  items-center flex-col xl:flex-row border-t-[1px] border-solid border-t-black/10 py-5">
                <div className="flex-grow text-center xl:text-left text-black/60">Shop.co © 2000-2023, All Rights Reserved</div>
                <div className='flex gap-3'>
                    <div className="bg-secondary w-10 h-[26px] grid place-items-center border-solid border-[#d6dce5] border-[0.2px] rounded-[5.5px] ">
                        <img src={visa} alt="visa" className='' />
                    </div>
                    <div className="bg-secondary w-10 h-[26px] grid place-items-center border-solid border-[#d6dce5] border-[0.2px] rounded-[5.5px] ">
                        <img src={mastercard} alt="visa" className='' />
                    </div>
                    <div className="bg-secondary w-10 h-[26px] grid place-items-center border-solid border-[#d6dce5] border-[0.2px] rounded-[5.5px] ">
                        <img src={paypal} alt="visa" className='' />
                    </div>
                    <div className="bg-secondary w-10 h-[26px] grid place-items-center border-solid border-[#d6dce5] border-[0.2px] rounded-[5.5px] ">
                        <img src={apple} alt="visa" className='' />
                    </div>
                    <div className="bg-secondary w-10 h-[26px] grid place-items-center border-solid border-[#d6dce5] border-[0.2px] rounded-[5.5px] ">
                        <img src={google} alt="visa" className='' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterLegal
