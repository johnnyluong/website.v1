import React, {FC} from 'react';

interface NavLinkProps{
    href: string;
    text: string;
}

const NavLink: FC<NavLinkProps> = ({href, text}) => {
  return (
    <li>
      <a className='group flex items-center py-3' href={href}>
        <span className="nav-indicator mr-4 h-px w-8 bg-slate-500 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
        <span className="nav-text text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
          {text}
        </span>
      </a>
    </li>
  );
}

export default NavLink;
