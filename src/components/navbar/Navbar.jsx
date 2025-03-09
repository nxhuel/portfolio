/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { themeChange } from 'theme-change';
themeChange();

export const Navbar = () => {
    const [theme,  setTheme] = useState("light");

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }, [theme])

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    };

    return (
        <>
            <nav className="fixed top-0 sm:top-5 left-1/2 transform -translate-x-1/2 bg-slate-100 p-4 navbar flex flex-col md:flex-row items-center justify-between sm:rounded-lg shadow-lg z-50 w-full max-w-6xl mx-auto dark:bg-neutral-800  dark:text-white">
                <div className="flex w-full items-center justify-between ">
                    <div className="navbar-start items-center justify-between max-md:w-full">
                        <a className=" text-black link text-base-content/90 link-neutral text-xl font-semibold no-underline  dark:text-white" href="#">Tisera.DEV</a>

                        <div class="md:hidden ">
                            <button type="button" class="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square" data-collapse="#default-navbar-collapse" aria-controls="default-navbar-collapse" aria-label="Toggle navigation">
                                <span class="icon-[tabler--menu-2] collapse-open:hidden size-4 "></span>
                                <span class="icon-[tabler--x] collapse-open:block hidden size-4"></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="default-navbar-collapse" className="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full  ">
                    <ul className="bg-transparent w-100 menu md:menu-horizontal pt-6 sm:pt-0 gap-2 md:gap-2 lg:gap-4 xl:gap-4 p-0 text-base columns-3xs">
                        <li><a href="#section" className="btn btn-soft btn-warning ">inicio</a></li>
                        <li><a href="#proyectos" className="btn btn-soft btn-warning">proyectos</a></li>
                        <li><a href="#sobre-mi" className="btn btn-soft btn-warning">sobre mi</a></li>
                        <label class="swap swap-rotate  dark:text-white">
                            <input type="checkbox" value="dark" class="theme-controller" onClick={handleChangeTheme} />
                            <span class="swap-on icon-[tabler--sun] size-7"></span>
                            <span class="swap-off icon-[tabler--moon] size-7"></span>
                        </label>
                    </ul>
                </div>
            </nav>

        </>
    );
}