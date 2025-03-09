import { useState } from "react";
import FormService from "../../service/FormService";

export const Form = () => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 

        const newMessage = {
            message: { name, lastname, email, content }
        };
        
        FormService.sendMessage(newMessage).then((response) => {
            console.log(response);
            alert("¡Mensaje enviado exitosamente!");
            window.location.reload();
        }).catch(err => {
            alert("Hubo un error al enviar el mensaje. Inténtalo nuevamente.");
            console.log(err);
        });
    };


    return (
        <div class="bg-gray-100 w-full rounded-lg shadow dark:bg-neutral-800 dark:text-white">
            <h5 class="bg-transparent rounded-t-lg border-none p-4 text-4xl font-bold">ENVIAME UN MENSAJE</h5>
            <div class="w-full p-4">
                <form  action="#" method="POST" class="needs-validation peer grid gap-y-4" novalidate>
                    {/* <!-- Account Details --> */}
                    <div class="w-full">
                        <h6 class="text-lg font-semibold">1. Ingresa tu información</h6>
                        <hr class="mb-4 mt-2" />
                    </div>
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">

                        <div>
                            <label class="label-text text-black  dark:text-white" for="firstName">Nombre *</label>
                            <input 
                            id="firstName" 
                            type="text" 
                            placeholder="Lucas" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input no-focus focus:border-gray-300 border-gray-300 bg-white text-black" 
                            required />
                            <span class="error-message">Por favor, introduzca su nombre.</span>
                            <span class="success-message">¡Se ve bien!</span>
                        </div>
                        <div>
                            <label class="label-text text-black dark:text-white" for="lastName">Apellido *</label>
                            <input 
                            id="lastName" 
                            type="text" 
                            placeholder="Martinez" 
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            className="input no-focus focus:border-gray-300 border-gray-300 bg-white text-black" 
                            required />
                            <span class="error-message">Por favor, introduzca su apellido.</span>
                            <span class="success-message">¡Se ve bien!</span>
                        </div>
                    </div>
                    {/* <!-- Email --> */}
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-1">
                        <div>
                            <label class=" label-text text-black dark:text-white" for="userEmail">Email *</label>
                            <input 
                            id="userEmail" 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input no-focus text-black focus:border-gray-300 border-gray-300 bg-white" placeholder="lucas@gmail.com" aria-label="john@gmail.com" required />
                            <span class="error-message">Por favor, introduzca un email válido.</span>
                            <span class="success-message">¡Se ve bien!</span>
                        </div>
                    </div>

                    {/* <!-- Message-Content --> */}
                    <div class="w-full">
                        <h6 class="text-lg font-semibold">2. Ingresa tu mensaje</h6>
                        <hr class="mb-4 mt-2" />
                    </div>

                    <div class="w-full">
                        <label class="label-text text-black dark:text-white" for="userBio">Mensaje *</label>
                        <textarea 
                        class="textarea min-h-20 resize-none input no-focus focus:border-gray-300 border-gray-300 bg-white text-black" 
                        id="userBio" 
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Quiero una reunión"
                        required></textarea>
                        <span class="error-message">Por favor, ingrese algun mensaje</span>
                        <span class="success-message">¡Se ve bien!</span>
                    </div>
                    {/* <!-- Submit button --> */}
                    <div class="mt-4 items-center flex justify-center">
                        <button 
                        type="submit"
                        name="submitButton" 
                        onClick={(e) => handleSubmit(e)}
                        class="btn btn-primary-dark text-white dark:text-black dark:bg-gray-100 ">
                            Enviar mensaje
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}