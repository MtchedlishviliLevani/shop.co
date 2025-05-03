
function Button({ children, variant = "primary", className = "", ...props }: { children: React.ReactNode, variant?: string, className?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const baseStyles = "rounded-[62px] py-[12px] text-center font-poppins w-full";
    let variantStyles = "bg-primary text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 ease-in-out";

    if (variant === "primary") {
        variantStyles = "bg-primary text-secondary"
    } else if (variant === "secondary") {
        variantStyles = "bg-secondary text-primary border-solid border-[1px] border-primary/10"
    }
    return (
        <button
            className={`${baseStyles} ${variantStyles} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
