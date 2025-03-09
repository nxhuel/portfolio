export const ContentProyect = () => {
    const proyectos = [
        {
            imagen: '/assets/signo-mas-dos.png',
            titulo: 'AGREGAR PROYECTO',
            proposito: 'Contactame para trabajar juntos',
            tecnologias: [
            ]
        },
        {
            imagen: '/assets/fondo-bazar.png',
            titulo: 'VENTAS BAZAR - TODOCODE',
            proposito: 'Sistema de gestión para un bazar con CRUD de productos, clientes y ventas, más funciones extra. Desarrollado en Spring Boot (MVC) con documentación en Swagger y pruebas en JUnit 5 + Mockito.',
            tecnologias: [
                { src: '/assets/java.png', alt: 'javalogo' },
                { src: '/assets/spring.png', alt: 'springlogo' },
                { src: '/assets/spring-boot.png', alt: 'spring-bootlogo' },
                { src: '/assets/postman.png', alt: 'postmanlogo' },
                { src: '/assets/mysql.png', alt: 'mysqllogo' },
                { src: '/assets/docker.png', alt: 'dockerlogo' },
            ],
            githubLink: "https://github.com/nxhuel/tp_final_todoCode",
            pdfLink: "https://raw.githubusercontent.com/nxhuel/tp_final_todoCode/main/Bazar%20%20ApiRest.postman_collection.json",
        },
        {
            imagen: '/assets/fondo-dashboard-clientes.png',
            titulo: 'DASHBOARD GESTIÓN DE CLIENTES',
            proposito: 'Plataforma para administrar clientes y rastrear su historial de acciones. Backend en Java + Spring Boot (arquitectura en capas) con MySQL, y frontend en React + Next.js (arquitectura híbrida SSR/SSG) para el enrutamiento.',
            tecnologias: [
                { src: '/assets/java.png', alt: 'javalogo' },
                { src: '/assets/spring.png', alt: 'springlogo' },
                { src: '/assets/spring-boot.png', alt: 'spring-bootlogo' },
                { src: '/assets/javascript.png', alt: 'javascriptlogo' },
                { src: '/assets/react.png', alt: 'reactlogo' },
                { src: '/assets/nextjs.png', alt: 'nextjslogo' },
                { src: '/assets/tailwind.png', alt: 'tailwindlogo' },
            ],
            githubLink: "https://github.com/nxhuel/backend-customer-management",
            pdfLink: "https://gestor-clientes.vercel.app/",
        },
        {
            imagen: '/assets/fondo-danza.png',
            titulo: 'PAGINA WEB PARA BAILARINA',
            proposito: 'Sitio web para una bailarina/docente, donde se puede consultar clases, horarios, y más información sobre su carrera.',
            tecnologias: [
                { src: '/assets/javascript.png', alt: 'javascriptlogo' },
                { src: '/assets/react.png', alt: 'reactlogo' },
                { src: '/assets/nextjs.png', alt: 'nextjslogo' },
                { src: '/assets/tailwind.png', alt: 'tailwindlogo' },
            ],
            githubLink: "https://github.com/nxhuel/clases-danza-pagina-web",
            pdfLink: "https://alma-en-movimiento.vercel.app/",
        },
        {
            imagen: '/assets/fondo-agip.png',
            titulo: 'SÚ AGIP - AGIP',
            proposito: 'El sistema de útiles gestiona los pedidos de insumos de librería de todas las áreas del organismo y proporciona información actualizada sobre el stock disponible.',
            tecnologias: [
                { src: '/assets/python.png', alt: 'pythonlogo' },
                { src: '/assets/django.png', alt: 'djangologo' },
                { src: '/assets/javascript.png', alt: 'javascriptlogo' },
                { src: '/assets/sql-server.png', alt: 'sql-serverlogo' },
            ],
            githubLink: "https://www.linkedin.com/posts/tisera-nahuel-ab3864219_desarrollodesoftware-django-sqlserver-activity-7268028645330276352-0rdM?utm_source=share&utm_medium=member_desktop&rcm=ACoAADcfNycB8ZWZBHSJpnyES_DKBuctViIczUI",
            pdfLink: "https://www.linkedin.com/posts/tisera-nahuel-ab3864219_desarrollodesoftware-django-sqlserver-activity-7268028645330276352-0rdM?utm_source=share&utm_medium=member_desktop&rcm=ACoAADcfNycB8ZWZBHSJpnyES_DKBuctViIczUI",
        },
        {
            imagen: '/assets/fondo-foro-hub.png',
            titulo: 'FORO HUB - ALURA LATAM',
            proposito: 'Desarrollo de una API RESTful para la gestión de un foro con Java + Spring Boot. Implementa Spring Security + JWT para autenticación, Redis para caché y MySQL como base de datos.',
            tecnologias: [
                { src: '/assets/java.png', alt: 'javalogo' },
                { src: '/assets/spring.png', alt: 'springlogo' },
                { src: '/assets/spring-boot.png', alt: 'spring-bootlogo' },
                { src: '/assets/spring-security.png', alt: 'spring-bootlogo' },
                { src: '/assets/jwt.png', alt: 'spring-bootlogo' },
                { src: '/assets/redis.png', alt: 'spring-bootlogo' },
                { src: '/assets/mysql.png', alt: 'spring-bootlogo' },
            ],
            githubLink: "https://github.com/nxhuel/foro_hub",
            pdfLink: "https://www.linkedin.com/posts/tisera-nahuel-ab3864219_java-springboot-api-activity-7280740137381097473-mHpi?utm_source=share&utm_medium=member_desktop&rcm=ACoAADcfNycB8ZWZBHSJpnyES_DKBuctViIczUI",
        },
    ];

    return (
        <div className="container">
            <h1 className="text-center text-3xl font-bold mb-8">PROYECTOS</h1>
            <main className="sm:grid sm:grid-rows-2 sm:grid-flow-col sm:gap-8">
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
                        <div className="p-2 sm:p-6">
                            <h5 className="text-xl font-bold mb-2 text-dark hover:text-orange-500 transition-colors duration-300">
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
                                    <a
                                        href={proyecto.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn bg-primary-dark text-white border-none px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-300"
                                    >
                                        Github
                                    </a>
                                    <a
                                        href={proyecto.pdfLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn bg-secondary-content text-gray-800 border-none px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                                    >
                                        Ver más
                                    </a>
                                </div>
                            ) : (
                                <div className="flex gap-4">
                                    <button className="btn bg-primary-dark text-white border-none px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-300">
                                        <a href="#contacto">Contacto</a>
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
