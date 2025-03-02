export const Form = () => {
    return (
        <div class="bg-gray-100 w-full rounded-lg shadow dark:bg-neutral-800 dark:text-white">
            <h5 class="bg-transparent rounded-t-lg border-none p-4 text-4xl font-bold">ENVIAME UN MENSAJE</h5>
            <div class="w-full p-4">
                <form class="needs-validation peer grid gap-y-4" novalidate>
                    {/* <!-- Account Details --> */}
                    <div class="w-full">
                        <h6 class="text-lg font-semibold">1. Ingresa tu información</h6>
                        <hr class="mb-4 mt-2" />
                    </div>
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">

                        <div>
                            <label class="label-text text-black  dark:text-white" for="firstName">Nombre *</label>
                            <input id="firstName" type="text" placeholder="Lucas" className="input no-focus focus:border-gray-300 border-gray-300 bg-white" required />
                            <span class="error-message">Por favor, introduzca su nombre.</span>
                            <span class="success-message">¡Se ve bien!</span>
                        </div>
                        <div>
                            <label class="label-text text-black dark:text-white" for="lastName">Apellido *</label>
                            <input id="lastName" type="text" placeholder="Martinez" className="input no-focus focus:border-gray-300 border-gray-300 bg-white" required />
                            <span class="error-message">Por favor, introduzca su apellido.</span>
                            <span class="success-message">¡Se ve bien!</span>
                        </div>
                    </div>
                    {/* <!-- Email and password --> */}
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-1">
                        <div>
                            <label class=" label-text text-black dark:text-white" for="userEmail">Email *</label>
                            <input id="userEmail" type="email" className="input no-focus focus:border-gray-300 border-gray-300 bg-white" placeholder="lucas@gmail.com" aria-label="john@gmail.com" required="" />
                            <span class="error-message">Por favor, introduzca un email válido.</span>
                            <span class="success-message">¡Se ve bien!</span>
                        </div>
                    </div>

                    {/* <!-- Personal Info --> */}
                    <div class="w-full">
                        <h6 class="text-lg font-semibold">2. Ingresa tu mensaje</h6>
                        <hr class="mb-4 mt-2" />
                    </div>

                    <div class="w-full">
                        <label class="label-text text-black dark:text-white" for="userBio">Mensaje *</label>
                        <textarea class="textarea min-h-20 resize-none input no-focus focus:border-gray-300 border-gray-300 bg-white" id="userBio" placeholder="Tu mensaje o consulta" required></textarea>
                        <span class="error-message">Por favor, ingrese algun mensaje</span>
                        <span class="success-message">¡Se ve bien!</span>
                    </div>
                    {/* <!-- Submit button --> */}
                    <div class="mt-4 items-center flex justify-center">
                        <button type="submit" name="submitButton" class="btn btn-primary-dark text-white dark:text-black dark:bg-gray-100 ">Enviar mensaje</button>
                    </div>
                </form>
            </div>
        </div>
    );
}