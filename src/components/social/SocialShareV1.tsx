export interface TeamSocialLinks {
    linkedin?: string;
    instagram?: string;
    facebook?: string;
}

interface SocialShareV1Props {
    social?: TeamSocialLinks;
}

const SocialShareV1 = ({ social }: SocialShareV1Props) => {
    const items: { key: string; href: string; iconClass: string }[] = [];
    const linkedin = social?.linkedin?.trim();
    const instagram = social?.instagram?.trim();
    const facebook = social?.facebook?.trim();
    if (linkedin) items.push({ key: "linkedin", href: linkedin, iconClass: "fab fa-linkedin-in" });
    if (instagram) items.push({ key: "instagram", href: instagram, iconClass: "fab fa-instagram" });
    if (facebook) items.push({ key: "facebook", href: facebook, iconClass: "fab fa-facebook-f" });

    return (
        <>
            {items.map(({ key, href, iconClass }) => (
                <li key={key}>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        <i className={iconClass} />
                    </a>
                </li>
            ))}
        </>
    );
};

export default SocialShareV1;
