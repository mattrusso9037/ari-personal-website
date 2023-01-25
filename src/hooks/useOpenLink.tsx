interface IUseOpenLink {
    openLink: (url: Link) => void;
}

export enum Link {
    Dribble = 'https://dribbble.com/ari_b2183',
    Behance = 'https://www.behance.net/arianabrennan',
    Linkedin = 'https://www.linkedin.com/in/abrennan6115120/',
    Email = 'abrennan418@gmail.com',
}

export const useOpenLink = (): IUseOpenLink => {

    function openLink(url: Link): void {
        if (url === Link.Email) {
            window.location.href = `mailto:${url}`;
        } else {
            window.open(url, 'blank');
        }
    }

    return {openLink}
}
