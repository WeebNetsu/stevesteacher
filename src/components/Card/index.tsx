import React from 'react';
import { Link } from 'wouter-preact';
import './style.scss';

interface Props {
    title: string;
    description: string;
    url?: string;
}

const Card: React.FC<Props> = ({ title, description, url }) => {
    return (
        <div className={'card-component'}>
            <h1 className={'card-title'}>{title}</h1>

            <p className={'card-desc'}>{description}</p>

            {url && (
                <p class={'card-link'}>
                    <Link to={url}>Learn Now</Link>
                </p>
            )}
        </div>
    );
};

export default Card;
