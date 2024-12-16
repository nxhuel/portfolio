export const ContentProyect = () => {
    const proyectos = [
        {
            imagen: '/assets/signo-mas.png',
            titulo: 'Agregar proyecto',
            proposito: 'Contactame para trabajar juntos',
            tecnologias: [
            ]
        },
        {
            imagen: '/assets/fondo-library.png',
            titulo: 'Biblioteca online',
            proposito: 'Sitio web que permite realizar búsquedas y consultas de libros a través de una API.',
            tecnologias: [
                { src: '/assets/javascript.png', alt: 'javascriptlogo' },
                { src: '/assets/react.png', alt: 'reactlogo' },
                { src: '/assets/tailwind.png', alt: 'tailwindlogo' },
            ]
        },
        {
            imagen: '/assets/fondo-bazar.png',
            titulo: 'Ventas Bazar API',
            proposito: 'Desarollo de un sistema de gestión para un bazar, donde se aplico diversas tecnologías y patrones de diseño.',
            tecnologias: [
                { src: '/assets/java.png', alt: 'javalogo' },
                { src: '/assets/spring.png', alt: 'springlogo' },
                { src: '/assets/spring-boot.png', alt: 'spring-bootlogo' },
                { src: '/assets/postman.png', alt: 'postmanlogo' },
                { src: '/assets/mysql.png', alt: 'mysqllogo' },
                { src: '/assets/docker.png', alt: 'dockerlogo' },
            ]
        },
        {
            imagen: '/assets/fondo-danza.png',
            titulo: 'Pagina WEB Bailarina',
            proposito: 'Sitio web para una bailarina/maestra, donde se pueden consultar clases, horarios, y más información sobre su carrera.',
            tecnologias: [
                { src: '/assets/javascript.png', alt: 'javascriptlogo' },
                { src: '/assets/react.png', alt: 'reactlogo' },
                { src: '/assets/tailwind.png', alt: 'tailwindlogo' },
            ]
        },
        {
            imagen: '/assets/fondo-agip.png',
            titulo: 'SÚ AGIP',
            proposito: 'El sistema de útiles gestiona los pedidos de insumos de librería de todas las áreas del organismo y proporciona información actualizada sobre el stock disponible.',
            tecnologias: [
                { src: '/assets/python.png', alt: 'pythonlogo' },
                { src: '/assets/django.png', alt: 'djangologo' },
                { src: '/assets/javascript.png', alt: 'javascriptlogo' },
                { src: '/assets/sql-server.png', alt: 'sql-serverlogo' },
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
                        className="rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
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
                            <h5 className="text-xl font-bold mb-2 text-dark hover:text-primary transition-colors duration-300">
                                {proyecto.titulo}
                            </h5>
                            <p className="text-dark mb-4">{proyecto.proposito}</p>
                            <div className="flex gap-3 mb-4">
                                {proyecto.tecnologias.map((tecnologia, i) => (
                                    <img
                                        key={i}
                                        src={tecnologia.src}
                                        alt={tecnologia.alt}
                                        className="w-auto h-8  hover:scale-110 transition-transform duration-300"
                                    />
                                ))}
                            </div>
                            {index !== 0 ? (
                                <div className="flex gap-4">
                                    <button className="btn bg-primary-dark text-white border-none px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-300">
                                        Más Info
                                    </button>
                                    <button className="btn bg-secondary-content border-none  text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-300">
                                        Acceder al Código
                                    </button>
                                </div>
                            ) : (
                                <div className="flex gap-4">
                                <button className="btn bg-primary-dark text-white border-none  px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-300">
                                    Contacto
                                </button>
                            </div>
                            )} 
                        </div>
                    </div>
                ))}
            </main>

        </div>
    );
};
