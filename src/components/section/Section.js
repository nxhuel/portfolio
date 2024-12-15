import { SectionPresentation } from "./sectionPresentation/SectionPresentation";
import { SectionImage } from "./sectionImage/SectionImage";
import { InfiniteScrollingLogosAnimation } from "./sectionSkills/InfiniteScrollingLogosAnimation";

export const Section = () => {
    return (
        <>
            <main className="p-10 pl-20 pr-20">
                <div className="inline-grid grid-cols-2 gap-4">
                    <SectionPresentation />
                    <SectionImage />
                </div>
                <div className=" grid grid-cols-subgrid col-span-2 p-10">
                    <InfiniteScrollingLogosAnimation />
                </div>
            </main>
        </>
    );
};
