

export const ContentProyect = () => {
    const proyectos = [
        {
            imagen: 'https://cdn.flyonui.com/fy-assets/components/card/image-9.png',
            titulo: 'Hola Mundo',
            proposito: 'Crear un mundo',
            tecnologias: [
                { src: '/assets/java.png', alt: 'javalogo' },
                { src: '/assets/java.png', alt: 'javalogo' },
                { src: '/assets/java.png', alt: 'javalogo' },
            ]
        },
        {
            imagen: 'https://cdn.flyonui.com/fy-assets/components/card/image-9.png',
            titulo: 'Proyecto 2',
            proposito: 'Automatización avanzada',
            tecnologias: [
                { src: '/assets/java.png', alt: 'javalogo' },
            ]
        },
        {
            imagen: 'https://cdn.flyonui.com/fy-assets/components/card/image-9.png',
            titulo: 'Proyecto 2',
            proposito: 'Automatización avanzada',
            tecnologias: [
                { src: '/assets/java.png', alt: 'javalogo' },
            ]
        },
        {
            imagen: 'https://cdn.flyonui.com/fy-assets/components/card/image-9.png',
            titulo: 'Proyecto 2',
            proposito: 'Automatización avanzada',
            tecnologias: [
                { src: '/assets/java.png', alt: 'javalogo' },
            ]
        },
        {
            imagen: 'https://cdn.flyonui.com/fy-assets/components/card/image-9.png',
            titulo: 'Proyecto 2',
            proposito: 'Automatización avanzada',
            tecnologias: [
                { src: '/assets/java.png', alt: 'javalogo' },
            ]
        },
        {
            imagen: 'https://cdn.flyonui.com/fy-assets/components/card/image-9.png',
            titulo: 'Proyecto 2',
            proposito: 'Automatización avanzada',
            tecnologias: [
                { src: '/assets/java.png', alt: 'javalogo' },
            ]
        },

    ];

    return (
        <div className="container">
            <h1 className="text-center text-3xl font-bold mb-8">PROYECTOS</h1>
            <main className="grid grid-rows-2 grid-flow-col gap-8">
                {proyectos.map((proyecto, index) => (
                    <div
                        key={index}
                        className="bg-trasparent shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                    >
                        <div className="relative group">
                            <figure className="overflow-hidden">
                                <img
                                    src={proyecto.imagen}
                                    alt={proyecto.titulo}
                                    className="w-full h-48 object-cover group-hover:brightness-75 transition-all duration-300"
                                />
                            </figure>
                        </div>
                        <div className="p-6">
                            <h5 className="text-xl font-bold mb-2 text-white hover:text-primary transition-colors duration-300">
                                {proyecto.titulo}
                            </h5>
                            <p className="text-white mb-4">{proyecto.proposito}</p>
                            <div className="flex gap-3 mb-4">
                                {proyecto.tecnologias.map((tecnologia, i) => (
                                    <img
                                        key={i}
                                        src={tecnologia.src}
                                        alt={tecnologia.alt}
                                        className="w-8 h-8 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
                                    />
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <button className="btn bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-300">
                                    Más Info
                                </button>
                                <button className="btn bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-300">
                                    Acceder al Código
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </main>

        </div>
    );
};
