import { ReactTyped } from "react-typed";

export const SectionPresentation = () => {
    return (
        <>
            <div className=" container flex flex-col">
                <div>
                    <div className="text-start font-bold text-5xl pt-10 pl-10 pr-10 text-black">
                        Analista de sistemas | Backend Dev.
                    </div>
                    <div className="  text-start pt-10 pl-10 pr-10">
                        <h2 style={{ userSelect: 'none'}} className="text-4xl text-black">
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
                    <p className="text-xl text-black" >
                        Convierto ideas y propósitos en eficientes soluciones tecnológicas, desarrollando y
                        optimizando sistemas sólidos y escalables que marcan la diferencia.
                    </p>
                </div>
                <div className="pl-10 card-actions">
                    <button className="btn border-none bg-primary-dark text-white py-2 px-4 rounded-lg flex items-center gap-2 ">
                        CONTACTO
                    </button>
                    <button className="btn border-none bg-primary-dark text-white py-2 px-4 rounded-lg flex items-center gap-2">
                        Ver CV
                    </button>
                </div>
            </div>
        </>
    );
}