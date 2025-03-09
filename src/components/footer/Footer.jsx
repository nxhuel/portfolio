export const Footer = () => {
    return (
        <footer className="bg-orange-100  text-gray-300 py-6">
        <div className="container mx-auto flex flex-wrap justify-around items-center">
            <div className="text-sm text-gray-500 ">
                &copy; {new Date().getFullYear()} Todos los derechos reservados.
            </div>
            <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500 ">Hecho con</span>
                <span className="text-red-500 text-lg">❤️</span>
                <span className="text-gray-500 ">y</span>
                <span className="text-yellow-500 text-lg">☕</span>
            </div>
        </div>
    </footer>
    );
};
