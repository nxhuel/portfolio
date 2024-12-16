export const Form = () => {
    return (
        <div class="bg-gray-100 w-full rounded-lg shadow">
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
                            <label class="label-text text-black" for="firstName">Nombre *</label>
                            <input id="firstName" type="text" placeholder="Lucas" className="input no-focus focus:border-gray-300 border-gray-300 bg-white" required />
                            <span class="error-message">Por favor, introduzca su nombre.</span>
                            <span class="success-message">¡Se ve bien!</span>
                        </div>
                        <div>
                            <label class="label-text text-black" for="lastName">Apellido *</label>
                            <input id="lastName" type="text" placeholder="Martinez" className="input no-focus focus:border-gray-300 border-gray-300 bg-white" required />
                            <span class="error-message">Por favor, introduzca su apellido.</span>
                            <span class="success-message">¡Se ve bien!</span>
                        </div>
                    </div>
                    {/* <!-- Email and password --> */}
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-1">
                        <div>
                            <label class=" label-text text-black" for="userEmail">Email *</label>
                            <input id="userEmail" type="email" className="input no-focus focus:border-gray-300 border-gray-300 bg-white" placeholder="lucas@gmail.com" aria-label="john@gmail.com" required="" />
                            <span class="error-message">Por favor, introduzca un email válido.</span>
                            <span class="success-message">¡Se ve bien!</span>
                        </div>
                        <div>
                            <label class="label-text text-black" for="userCountry">Elige tu país</label>
                            <select className="select join-item input no-focus focus:border-gray-300 border-gray-300 bg-white " id="userCountry" aria-label="Select Country">
                                <option value="" disabled selected>Seleccione tu país</option>
                                <option value="arg" className="text-black">Argentina</option>
                                <option value="brasil" className="text-black">Brasil</option>
                                <option value="chile" className="text-black">Chile</option>
                                <option value="spain" className="text-black">España</option>
                                <option value="usa" className="text-black">United States</option>
                                <option value="uruguay" className="text-black">Uruguay</option>
                            </select>
                            <span class="error-message">Por favor, seleccione su país.</span>
                            <span class="success-message">¡Se ve bien!</span>
                        </div>
                    </div>

                    {/* <!-- Personal Info --> */}
                    <div class="w-full">
                        <h6 class="text-lg font-semibold">2. Ingresa tu mensaje</h6>
                        <hr class="mb-4 mt-2" />
                    </div>

                    <div class="w-full">
                        <label class="label-text text-black" for="userBio">Mensaje *</label>
                        <textarea class="textarea min-h-20 resize-none input no-focus focus:border-gray-300 border-gray-300 bg-white" id="userBio" placeholder="Tu mensaje o consulta" required></textarea>
                        <span class="error-message">Por favor, ingrese algun mensaje</span>
                        <span class="success-message">¡Se ve bien!</span>
                    </div>
                    {/* <!-- Submit button --> */}
                    <div class="mt-4 items-center flex justify-center">
                        <button type="submit" name="submitButton" class="btn btn-primary-dark text-white ">Enviar mensaje</button>
                    </div>
                </form>
            </div>
        </div>
    );
}