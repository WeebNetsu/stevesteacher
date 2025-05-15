import React from 'react';

export enum AvailableCarouselItemStates {
    NEXT = 'next',
    PREVIOUS = 'previous',
    CURRENT = 'current',
}

export interface CarouselThumbnailModel {
    link: string;
    image: string;
    alt: string;
    /**
     * This is used to determine what icon should be the main one (1 is the main, 0 is next, 2 is previous)
     */
    // index: number;
}

interface Props {
    state: AvailableCarouselItemStates;
    thumbnail: CarouselThumbnailModel;
    onClick: () => void;
}

const CarouselThumbnail: React.FC<Props> = ({ state, thumbnail, onClick }) => {
    return (
        <div
            class={`video-thumbnail ${state !== AvailableCarouselItemStates.CURRENT ? 'navigation-image' : ''} ${state === AvailableCarouselItemStates.NEXT ? 'next' : state === AvailableCarouselItemStates.PREVIOUS ? 'prev' : ''}`}
            onClick={onClick}
        >
            {state === AvailableCarouselItemStates.CURRENT ? (
                <a href={thumbnail.link} target="_blank" class="image-link">
                    <img style="width: 100%; max-width: 500px" src={thumbnail.image} alt={thumbnail.alt} />
                </a>
            ) : (
                <img class="blur" style="width: 100%; max-width: 500px" src={thumbnail.image} alt={thumbnail.alt} />
            )}

            {state === AvailableCarouselItemStates.NEXT ? (
                <i class="nav-icon bi bi-chevron-double-right"></i>
            ) : state === AvailableCarouselItemStates.PREVIOUS ? (
                <i class="nav-icon bi bi-chevron-double-left"></i>
            ) : (
                <></>
            )}
        </div>
    );
};

export default CarouselThumbnail;
