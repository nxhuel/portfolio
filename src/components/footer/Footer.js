export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-6">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                <div className="text-sm">
                    &copy; {new Date().getFullYear()} Todos los derechos reservados.
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <span>Hecho con</span>
                    <span className="text-red-500 text-lg">❤️</span>
                    <span>y</span>
                    <span className="text-yellow-500 text-lg">☕</span>
                </div>
            </div>
        </footer>
    );
};
