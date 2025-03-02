export const Divisor = ({ Icon, alt }) => {
    return (

        <div className="divider divider-neutral h-20 sm:pr-40 sm:pl-40">
        <span className="flex items-center justify-center">
            <Icon className="text-4xl text-gray-700 hover:text-black dark:hover:text-white dark:text-gray-400" aria-label={alt} />
        </span>
    </div>
    );
};

