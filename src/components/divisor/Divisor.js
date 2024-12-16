export const Divisor = ({ Icon, alt }) => {
    return (
        <div className="divider divider-neutral h-20 pr-40 pl-40">
            <span className="flex items-center justify-center">
                <Icon className="text-4xl text-gray-700 hover:text-black" aria-label={alt} />
            </span>
        </div>
    );
};

