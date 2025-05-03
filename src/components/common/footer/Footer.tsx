import NewsLetter from "../footer/NewsLetter";
import FooterLegal from "../footer/FooterLegal";
import FooterLinkSection from "../footer/FooterLinkSection";
import FooterSocial from "../footer/FooterSocial";

function Footer() {
    return (
        <footer className="bg-Tertiary relative pt-[220px] xl:pt-[140px]">
            <div className="absolute top-[0%] w-full translate-y-[-50%]"><NewsLetter /></div>

            <div className="global-container">
                <div className="flex flex-col gap-6 xl:flex-row justify-between items-center mb-10">
                    <FooterSocial />
                    <FooterLinkSection />

                </div>
                <FooterLegal />

            </div>

        </footer >
    );
}

export default Footer;
