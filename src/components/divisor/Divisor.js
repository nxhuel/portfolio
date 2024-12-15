export const Divisor = ({ logo }) => {
    return (
        <div className="divider pr-40 pl-40">
            <span className="flex items-center justify-center">
                <img src={logo.src} alt={logo.alt} className="w-10 h-10" />
            </span>
        </div>
    );
};