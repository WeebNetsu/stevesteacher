import { removeUndefinedFromArray } from '@netsu/js-utils';
import React, { useState } from 'react';
import CarouselThumbnail, { AvailableCarouselItemStates, CarouselThumbnailModel } from '../CarouselThumbnail';

interface Props {
    data: CarouselThumbnailModel[];
}

const Carousel: React.FC<Props> = ({ data }) => {
    const [carouselData, setCarouselData] = useState(data);

    return (
        <div class="video-carousel">
            {removeUndefinedFromArray(
                carouselData
                    // make sure we only show the first 3 indexes
                    .reduce(
                        (prev, curr, index) => (index < 3 ? [...prev, curr] : prev),
                        [] as CarouselThumbnailModel[],
                    ),
            ).map((carousel, index) => (
                <CarouselThumbnail
                    state={
                        index === 0
                            ? AvailableCarouselItemStates.PREVIOUS
                            : index === 1
                              ? AvailableCarouselItemStates.CURRENT
                              : AvailableCarouselItemStates.NEXT
                    }
                    thumbnail={carousel}
                    onClick={() => {
                        if (index === 1) return;

                        // setCarouselData((prev) => {
                        //     const rotated = prev.map((item, i, arr) => ({
                        //         ...item,
                        //         index:
                        //             carousel.index === 0
                        //                 ? (item.index + 1) % arr.length
                        //                 : (item.index - 1) % arr.length,
                        //     }));
                        //     return rotated;
                        // });

                        setCarouselData((prev) => {
                            let rotated;
                            if (index === 0) {
                                rotated = [prev[prev.length - 1], ...prev.slice(0, -1)];
                            } else {
                                rotated = [...prev.slice(1), prev[0]];
                            }
                            return rotated.map((item, i) => ({ ...item, index: i }));
                        });
                    }}
                />
            ))}
        </div>
    );
};

export default Carousel;
