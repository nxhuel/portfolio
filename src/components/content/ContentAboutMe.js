import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const ContentAboutMe = () => {
    return (
        <>
            <div className="w-full">
                <h1 className="text-center text-3xl font-bold mb-8">SOBRE MI</h1>
            </div>
            <main className="container pt-4">
                <div className=" flex justify-around w-full">
                    <div>
                        <h1 className=" text-3xl font-bold mb-8 text-center">Formación académica</h1>
                        <div className='grid grid-rows-1 grid-flow-col'>
                            <div class="card sm:max-w-sm">
                                <figure><img src="https://cdn.flyonui.com/fy-assets/components/card/image-9.png" alt="Watch" /></figure>
                                <div class="card-body">
                                    <h5 class="card-title mb-2.5">Analista de sistemas</h5>
                                    <h6 className=" card-subtitle mb-2.5 italic">IFTS°21 | Abril 2023 - Diciembre 2025 </h6>
                                    <p class="mb-4">El Instituto de formación tecnica superior n°21 esta enfocada en la operación, programación, el análisis de sistemas informáticos y en fortalecer la identidad como analistas de sistemas.
                                    </p>
                                    <div class="card-actions">
                                        <button class="btn btn-primary">Verstudios complementarios<span><ArrowForwardIosIcon /></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className=" text-3xl font-bold mb-8 text-center">Experiencia laboral</h1>
                        <div className='grid grid-rows-1 grid-flow-col'>
                            <div class="card sm:max-w-sm">
                                <figure><img src="https://cdn.flyonui.com/fy-assets/components/card/image-9.png" alt="Watch" /></figure>
                                <div class="card-body">
                                    <h5 className="card-title mb-2.5">Desarrollador de Software</h5>
                                    <h6 className=" card-subtitle mb-2.5 italic">Pasantía en AGIP | Octubre 2024 - Diciembre 2024 </h6>
                                    <p class="mb-4">
                                        Migración del sistema actual hecho en PHP a Python para una posible actualización.<br />
                                        ● Responsable en mejorar código realizado en Python aplicando principios SOLID.<br />
                                        ● Trabajo en equipo aplicando metodología programación XP.
                                    </p>
                                    <div class="card-actions">
                                        <button class="btn btn-primary">Ver certificado<span><ArrowForwardIosIcon /></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}