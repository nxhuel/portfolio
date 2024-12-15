export const Form = () => {
    return (
        <div class="bg-base-100 w-full rounded-lg shadow">
            <h5 class="bg-base-300 rounded-t-lg p-4 text-4xl font-bold">ENVIAME UN MENSAJE</h5>
            <div class="w-full p-4">
                <form class="needs-validation peer grid gap-y-4" novalidate>
                    {/* <!-- Account Details --> */}
                    <div class="w-full">
                        <h6 class="text-lg font-semibold">1. Ingresa tu información</h6>
                        <hr class="mb-4 mt-2" />
                    </div>
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                            <label class="label label-text" for="firstName">Nombre *</label>
                            <input id="firstName" type="text" placeholder="Lucas" class="input" required />
                            <span class="error-message">Por favor, introduzca su nombre.</span>
                            <span class="success-message">¡Se ve bien!</span>
                        </div>
                        <div>
                            <label class="label label-text" for="lastName">Apellido *</label>
                            <input id="lastName" type="text" placeholder="Martinez" class="input" required />
                            <span class="error-message">Por favor, introduzca su apellido.</span>
                            <span class="success-message">¡Se ve bien!</span>
                        </div>
                    </div>
                    {/* <!-- Email and password --> */}
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-1">
                        <div>
                            <label class="label label-text" for="userEmail">Email *</label>
                            <input id="userEmail" type="email" class="input" placeholder="lucas@gmail.com" aria-label="john@gmail.com" required="" />
                            <span class="error-message">Por favor, introduzca un email válido.</span>
                            <span class="success-message">¡Se ve bien!</span>
                        </div>
                        <div>
                            <label class="label label-text" for="userCountry">Elige tu país</label>
                            <select class="select" id="userCountry" aria-label="Select Country" required>
                                <option value="">Seleccione tu país</option>
                                <option value="arg">Argentina</option>
                                <option value="brasil">Brasil</option>
                                <option value="chile">Chile</option>
                                <option value="spain">España</option>
                                <option value="usa">United States</option>
                                <option value="uruguay">Uruguay</option>
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
                        <label class="label label-text" for="userBio">Mensaje *</label>
                        <textarea class="textarea min-h-20 resize-none" id="userBio" placeholder="Tu mensaje o consulta" required=""></textarea>
                        <span class="error-message">Por favor escribe algunas palabras</span>
                        <span class="success-message">¡Se ve bien!</span>
                    </div>
                    {/* <!-- Submit button --> */}
                    <div class="mt-4 items-center flex justify-center">
                        <button type="submit" name="submitButton" class="btn btn-primary ">Enviar mensaje</button>
                    </div>
                </form>
            </div>
        </div>
    );
}