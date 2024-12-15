/* eslint-disable jsx-a11y/anchor-is-valid */
import { themeChange } from 'theme-change';
themeChange();

export const Navbar = () => {
    return (
        <>
            <nav class=" bg-transparent p-5 navbar flex  w-[90%] rounded gap-2 shadow max-md:flex-col md:items-center">
                <div class="flex w-full items-center justify-between">
                    <div class="navbar-start items-center justify-between max-md:w-full">
                        <a class="link text-base-content/90 link-neutral text-xl font-semibold no-underline" href="#">
                        </a>
                        <div class="md:hidden">
                            <button type="button" class="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square" data-collapse="#default-navbar-collapse" aria-controls="default-navbar-collapse" aria-label="Toggle navigation">
                                <span class="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
                                <span class="icon-[tabler--x] collapse-open:block hidden size-4"></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="default-navbar-collapse" class="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full  ">
                    <ul class="bg-transparent w-100 menu md:menu-horizontal gap-2 md:gap-2 lg:gap-4 xl:gap-4 p-0 text-base columns-3xs">
                        <li><a href="#" className="bg-white text-black hover:text-white focus:text-white active:text-white w-100 text-xs sm:text-xs md:text-xs lg:text-base xl:text-base">inicio</a></li>
                        <li><a href="#" className="bg-white text-black hover:text-white focus:text-white active:text-white w-100 text-xs sm:text-xs md:text-xs lg:text-base xl:text-base">proyectos</a></li>
                        <li><a href="#" className="bg-white text-black hover:text-white focus:text-white active:text-white w-100 text-xs sm:text-xs md:text-xs lg:text-base xl:text-base">sobre mi</a></li>
                        <label class="swap swap-rotate">
                            <input type="checkbox" value="dark" class="theme-controller" />
                            <span class="swap-off icon-[tabler--sun] size-7"></span>
                            <span class="swap-on icon-[tabler--moon] size-7"></span>
                        </label>
                    </ul>
                </div>
            </nav>

        </>
    );
}