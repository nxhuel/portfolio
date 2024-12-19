/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Form } from "./Form";

export const ContentContact = () => {
    return (
        <>
            {/* <main className="container grid grid-rows-1 grid-flow-col">
                <div className="flex flex-col gap-5 ">
                    <div className=" flex flex-col">
                        <span className="text-4xl font-bold pt-4 pb-4">IMPULSA TUS PROYECTOS</span> <br />
                        <span className="text-3xl font-bold">¿Buscas un desarrollador para tu equipo?</span> <br />
                        <span className="text-xl">Especialista en BACKEND, listo para aportar soluciones escalables e innovadoras a tu empresa.</span>

                    </div>
                    <div className="flex flex-col gap-1">
                        <a href='#' className=' flex gap-2'>
                            <EmailIcon />
                            <span className="text-xl">Enviame un correo electronico</span>
                        </a>
                        <a href='#' className=' flex gap-2'>
                            <LinkedInIcon />
                            <span className=" text-xl">Conecta conmigo</span>
                        </a>
                    </div>
                    <div className='pt-4'>
                        <img src="/assets/reunion.png" class="w-[60%] h-auto mx-auto float-start"></img>
                    </div>
                </div>
                <div>
                    <Form />
                </div>
            </main> */}

            <main className="container sm:grid sm:grid-rows-1 sm:grid-flow-col">
                <div className="flex flex-col gap-5 ">
                    <div className=" flex flex-col">
                        <span className="text-3xl sm:text-4xl font-bold pt-2 pb-2 sm:pt-4 sm:pb-4">IMPULSA TUS PROYECTOS</span> <br />
                        <span className="text-2xl sm:text-3xl font-bold">¿Buscas un desarrollador para tu equipo?</span> <br />
                        <span className="text-1xl sm:text-xl">Especialista en <span className='hover:text-orange-500 font-bold'>Backend</span>, listo para aportar soluciones escalables e innovadoras a tu empresa.</span>

                    </div>
                    <div className="flex flex-col ">
                        <a href='#' className=' flex gap-2'>
                            <EmailIcon />
                            <span className="text-1xl hover:scale-105">Enviame un correo electronico</span>
                        </a>
                        <a href='#' className=' flex gap-2'>
                            <LinkedInIcon />
                            <span className=" text-1xl  hover:scale-105">Conecta conmigo</span>
                        </a>
                    </div>
                    <div className='pt-4 pb-4'>
                        <img src="/assets/reunion.png" class="w-[100%] sm:w-[60%] h-auto mx-auto float-start"></img>
                    </div>
                </div>
                <div>
                    <Form />
                </div>
            </main>
        </>
    );
}