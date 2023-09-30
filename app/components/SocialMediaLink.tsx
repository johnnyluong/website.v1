import React, { ReactNode } from "react";

interface SocialMediaLinkProps {
    link: string;
    platform: string;
    children: ReactNode;
}

function SocialMediaLink({ link, platform, children }: SocialMediaLinkProps) {
    return (
        <li className='mr-5 text-xs'>
            <a className='block hover:text-slate-200' href={link} target='_blank' rel="noreferrer">
                <span className='sr-only'>{platform}</span>
                {children}
            </a>
        </li>
    );
}

export default SocialMediaLink;
