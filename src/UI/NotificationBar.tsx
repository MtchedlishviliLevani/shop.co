import { useNavigate } from "react-router";

function NotificationBar() {
    const navigate = useNavigate();
    return (
        <div className="bg-primary text-secondary text-[12px] md:text-[14px] justify-center py-[9px] flex gap-[4px] items-center">
            <h3>Sign up and get 20% off to your first order.</h3>  <button onClick={() => navigate("/register")} className="underline cursor-pointer underline-offset-2 font-500  ">Sign Up Now</button>
        </div>
    )
}

export default NotificationBar
