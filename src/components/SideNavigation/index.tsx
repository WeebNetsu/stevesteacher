import React from 'react';
import './style.scss';

interface SideNavigationItemModel {
    title: string;
    onClick?: () => void;
    children?: SideNavigationItemModel[];
}

interface Props {
    items: SideNavigationItemModel[];
}

const SideNavigation: React.FC<Props> = ({ items }) => {
    return (
        <nav className={'side-navigation'}>
            <ul class={'navigation-items'}>
                {items.map((item, index) => (
                    <li key={index} class={'navigation-item'}>
                        <div className={'collapsable-nav-button'}>
                            <button className={'navigation-button navigation-dropdown'} onClick={item.onClick}>
                                {item.title}
                            </button>

                            {item.children?.map((child) => (
                                <button key={child.title} onClick={child.onClick} className={'indent-1 nav-link'}>
                                    {child.title}
                                </button>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SideNavigation;
