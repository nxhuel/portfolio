import { SectionPresentation } from "./sectionPresentation/SectionPresentation";
import { SectionImage } from "./sectionImage/SectionImage";
import { InfiniteScrollingLogosAnimation } from "./sectionSkills/InfiniteScrollingLogosAnimation";

export const Section = () => {
    return (
        <>
            <main className="pt-10 sm:pt-20 sm:pl-20 sm:pr-20  ">
                <div className="sm:inline-grid sm:grid-cols-2 sm:gap-4">
                    <SectionPresentation />
                    <SectionImage />
                </div>
                <div className="hidden sm:grid sm:grid-cols-subgrid sm:col-span-2 sm:p-10">
                    <InfiniteScrollingLogosAnimation />
                </div>
            </main>
        </>
    );
};
