export const Section = () => {
    const icons = [
        { id: 1, name: "sobre_mi.txt", img: "/assets/bloc_notas.png", link: "#" },
        { id: 2, name: "github", img: "/assets/github.png", link: "https://github.com/nxhuel" },
        { id: 3, name: "proyectos.txt", img: "/assets/bloc_notas.png", link: "#" },
        { id: 4, name: "linkedin", img: "/assets/linkedin.png", link: "https://www.linkedin.com/in/tisera-nahuel-ab3864219/" },
        { id: 3, name: "contacto.txt", img: "/assets/bloc_notas.png", link: "#" },
        { id: 5, name: "dev_community<br>+proyectos", img: "/assets/dev.png", link: "https://dev.to/nxhuel" }, // Texto en dos líneas
        { id: 6, name: "curriculum<br>vitae.pdf", img: "/assets/cv.png", link: "/assets/cvTisera.pdf", download: true },
        { id: 7, name: "contacto_directo", img: "/assets/wspp.png", link: "https://wa.me/5491133501445" },
    ];

    return (
        <main className="relative p-10">
            <div className="grid grid-cols-2 gap-15 justify-self-start ">
                {icons.map((icon) => (
                    <a
                        key={icon.id}
                        href={icon.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col  w-20 items-center text-white hover:scale-105 transform transition duration-300"
                    >
                        <img
                            src={icon.img}
                            alt={icon.name}
                            className="w-12 h-12 mb-2 items-center"
                        />
                        <span
                            style={{ userSelect: 'none' }}
                            className="text-sm font-medium text-center w-100"
                            dangerouslySetInnerHTML={{ __html: icon.name }}>

                        </span>
                    </a>
                ))}
            </div>
        </main>
    );
};
