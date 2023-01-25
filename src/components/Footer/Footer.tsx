import * as React from 'react';
import { Section } from '../common/Section/Section';
import { Icon } from '../common/Icon';
import './footer.scss';
import { Link, useOpenLink } from '../../hooks/useOpenLink';

const ICON_SIZE = '4x';

export const Footer: React.FC = () => {
    const { openLink } = useOpenLink();

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

