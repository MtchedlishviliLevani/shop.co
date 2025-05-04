import close from "../../../assets/icons/close.svg"
import Button from "../../../UI/Button";
import NavItem from "./NavItem";

function MobileMenu({ onCloseBurger, isOpen }: { onCloseBurger: () => void; isOpen: boolean }) {
    return (
        <div className={`fixed top-0 right-0 w-full h-full bg-white z-50 py-6 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="global-container flex flex-col gap-[72px]">
                <img onClick={onCloseBurger} src={close} className="w-5 h-4 cursor-pointer" alt="" />
                <div className="flex flex-col gap-8">
                    <NavItem onCloseBurger={onCloseBurger} />
                </div>
                <div className="w-3/4 ">
                    <Button className="mr-auto">Sign Up Now</Button>
                </div>
            </div >
        </div >
    );
}

export default MobileMenu;
