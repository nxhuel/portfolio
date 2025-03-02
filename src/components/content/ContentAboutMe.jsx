import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const ContentAboutMe = () => {
    return (
        <>
            <div className="w-full">
                <h1 className="text-center text-4xl font-extrabold text-gray-800 mb-10 tracking-wide  dark:text-white">SOBRE MI</h1>
            </div>
            <main className="container mx-auto px-6">
                <div className="flex flex-wrap justify-around gap-10">

                    {/* Formación Académica */}
                    <section className="max-w-md">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center  dark:text-white">Formación Académica</h2>
                        <div className="card bg-white shadow-lg rounded-lg overflow-hidden dark:bg-neutral-800 ">
                            <figure className="bg-gray-100 dark:bg-neutral-800">
                                <img src="/assets/logo-ifts.png" alt="Logo IFTS" className="w-full h-60 object-contain p-4" />
                            </figure>
                            <div className="p-6">
                                <h5 className="text-lg font-bold text-gray-800 mb-2 dark:text-gray-300">Analista de Sistemas</h5>
                                <h6 className="text-sm text-gray-600 italic mb-4 dark:text-gray-300">IFTS°21 | Abril 2023 - Diciembre 2025</h6>
                                <p className="text-gray-600 leading-relaxed mb-4 dark:text-gray-300">
                                    El Instituto de Formación Técnica Superior N°21 está enfocado en la operación, programación y análisis de sistemas informáticos, fortaleciendo la identidad profesional como analistas de sistemas.
                                </p>
                                <div className="text-right">
                                    <button className="btn border-none bg-primary-dark text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-secondary-content hover:text-black dark:bg-white  dark:text-black dark:hover:bg-black dark:hover:text-white ">
                                        Ver estudios complementarios
                                        <ArrowForwardIosIcon className="text-sm" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Experiencia Laboral */}
                    <section className="max-w-md">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center  dark:text-white">Experiencia Laboral</h2>
                        <div className="card bg-white shadow-lg rounded-lg overflow-hidden  dark:bg-neutral-800">
                            <figure className="bg-gray-100 dark:bg-neutral-800">
                                <img src="/assets/logo-agip.png" alt="Logo AGIP" className="w-full h-60 object-contain p-4" />
                            </figure>
                            <div className="p-6">
                                <h5 className="text-lg font-bold text-gray-800 mb-2 dark:text-gray-300">Desarrollador de Software</h5>
                                <h6 className="text-sm text-gray-600 italic mb-4 dark:text-gray-300">Pasantía en AGIP | Octubre 2024 - Diciembre 2024</h6>
                                <p className="text-gray-600 leading-relaxed mb-4 dark:text-gray-300">
                                    Migración del sistema actual hecho en PHP a Python para una posible actualización.<br />
                                    ● Responsable de mejorar código en Python aplicando principios SOLID.<br />
                                    ● Trabajo en equipo aplicando metodología de programación XP.
                                </p>
                                <div className="text-right">
                                    <button className="btn border-none bg-primary-dark text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-secondary-content hover:text-black dark:bg-white  dark:text-black dark:hover:bg-black dark:hover:text-white ">
                                        Ver certificado
                                        <ArrowForwardIosIcon className="text-sm" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        </>
    );
};