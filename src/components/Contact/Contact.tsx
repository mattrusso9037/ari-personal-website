import * as React from 'react';
import { Section } from '../common/Section/Section';
import { Icon } from '../common/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../common/Button/Button';
import './contact.scss';

interface IContactProps {
}

const ICON_SIZE = '4x';

enum Link {
    Dribble = 'https://dribbble.com/ari_b2183',
    Behance = 'https://www.behance.net/arianabrennan',
    Linkedin = 'https://www.linkedin.com/in/abrennan6115120/',
    Email = 'abrennan418@gmail.com',
}

export const Contact: React.FC<IContactProps> = () => {
    function openLink(url: Link): void {
        if (url === Link.Email) {
            window.location.href = `mailto:${url}`;
        } else {
            window.open(url, 'blank');
        }
    }

    return (
        <Section className={'Contact Me'} title={''} icon={Icon.Communication}>
            <div className={'Contact'}>
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

