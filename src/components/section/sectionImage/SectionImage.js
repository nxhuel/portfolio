export const SectionImage = () => {
    const image = '/assets/code.png';

    return (
        <div className="w-100 h-100 overflow-hidden flex items-center justify-center">
            <img src={image} alt="code" className="w-full h-[600px] object-contain" />
        </div>

    );
}