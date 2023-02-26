import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme/themeContext";
import { Link, useOpenLink } from "../../hooks/useOpenLink";
import { Section } from "../common/Section/Section";
import { Footer } from "../Footer/Footer";
import './contact.scss';

export const Contact: React.FC = () => {
    const { appRef } = useContext(ThemeContext);
    const { openLink } = useOpenLink();

    return (
        <div ref={appRef} className={`App`}>
        <Section className="Contact" title={""}>
            <div className="thank_you">Thank you for taking the time to look at my portfolio! If you have any questions or would like to get in touch, please send me an email or connect with me on my social networking sites below.</div>
            <div className="social_container">
                <div>☺</div>
                <ul>
                    <li onClick={() => openLink(Link.Email)}><span>Email</span><img src={'assets/icons/email.svg'} /></li>
                    <li onClick={() => openLink(Link.Linkedin)}><span>LinkedIn</span><img src={'assets/icons/linkedin.svg'} /></li>
                    <li onClick={() => openLink(Link.Dribble)}><span>Dribble</span><img src={'assets/icons/dribble.svg'} /></li>
                    <li onClick={() => openLink(Link.Behance)}><span>Behance</span><img src={'assets/icons/behance.svg'} /></li>
                </ul>
            </div>
        </Section>
        <Footer />
        </div>
    )
};