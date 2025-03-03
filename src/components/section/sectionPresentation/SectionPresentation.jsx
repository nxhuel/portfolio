import { ReactTyped } from "react-typed";

export const SectionPresentation = () => {
    const cvPdf = '/assets/cvTisera.pdf';
    return (
        <>
            <div className=" container flex flex-col">
                <div>
                    <div className="text-start font-bold text-3xl sm:text-5xl pt-10 pl-10 pr-10 text-black  dark:text-white">
                        Analista de sistemas | Backend Dev.
                    </div>
                    <div className="  text-start pt-2 sm:pt-10 pl-10 pr-10">
                        <h2 style={{ userSelect: 'none' }} className="text-2xl sm:text-4xl text-black dark:text-white">
                            <ReactTyped
                                strings={[
                                    'API RESTfull',
                                    'Gestión de base de datos',
                                    'Optimización de codigo',
                                    'Soluciones escalables',
                                    'Diseño de sistemas',
                                    'Paginas web'

                                ]}
                                backSpeed={60}
                                typeSpeed={50}
                                loop
                                typedRef={function noRefCheck() { }}
                            />
                        </h2>
                    </div>
                </div>
                <div className=" p-10 text-start">
                    <p className="text-xl text-black dark:text-white" >
                        Convierto ideas y propósitos en eficientes soluciones tecnológicas, desarrollando y
                        optimizando sistemas sólidos y escalables que marcan la diferencia.
                    </p>
                </div>
                <div className="pl-10 card-actions">
                    <button className="btn btn-warning">
                        <a href="#contacto">CONTACTO</a>
                    </button>
                    <button className="btn ">
                        <a href={cvPdf} target="_blank" rel="noopener noreferrer">
                            Ver CV
                        </a>
                    </button>
                </div>
            </div>
        </>
    );
}