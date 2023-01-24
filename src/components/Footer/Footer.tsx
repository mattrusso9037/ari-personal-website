import * as React from 'react';
import { Section } from '../common/Section/Section';
import { Icon } from '../common/Icon';
import './footer.scss';

const ICON_SIZE = '4x';

enum Link {
    Dribble = 'https://dribbble.com/ari_b2183',
    Behance = 'https://www.behance.net/arianabrennan',
    Linkedin = 'https://www.linkedin.com/in/abrennan6115120/',
    Email = 'abrennan418@gmail.com',
}

export const Footer: React.FC = () => {
    function openLink(url: Link): void {
        if (url === Link.Email) {
            window.location.href = `mailto:${url}`;
        } else {
            window.open(url, 'blank');
        }
    }

    return (
        <Section className={'Footer'} title={''} icon={Icon.Communication}>
            <div className={'Footer'}>
                <h2>
                    Get In Touch 👋
                </h2>
                <div className={'action_container'}>
                    <div className={'social_container'}>
                        <img src={'assets/icons/email.svg'}  onClick={() => openLink(Link.Email)} />
                        <img src={'assets/icons/linkedin.svg'} onClick={() => openLink(Link.Linkedin)} />
                        <img src={'assets/icons/dribble.svg'} onClick={() => openLink(Link.Dribble)} />
                        <img src={'assets/icons/behance.svg'} onClick={() => openLink(Link.Behance)} />
                    </div>
                    <div className={'copywrite_container'}>
                        © 2022. Ariana Brennan.
                    </div>
                </div>
            </div>
        </Section>
    )
};

