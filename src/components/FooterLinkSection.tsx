import { footerNav } from "../data"
import { Link } from "react-router"
function FooterLinkSection() {
    return (
        <div className="grid w-full justify-between grid-cols-2 gap-15 xl:grid-cols-4">
            {footerNav.map((section) => (
                <div key={section.title}>
                    <h4 className="text-[14px] uppercase font-medium tracking-[3px] ">{section.title}</h4>
                    <ul className="flex flex-col gap-2 mt-3">
                        {section.links.map((link) => (
                            <Link to={`/${link}`} className="text-[14px] text-primary/60" key={link}>{link}</Link>
                        ))}
                    </ul>
                </div>
            ))}

        </div>
    )
}

export default FooterLinkSection
