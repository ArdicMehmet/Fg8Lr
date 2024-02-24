import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import bannerImage from '../images/caroselImages/Banner Area.png'

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
};

const items = [
    <div className="item caroselItem" data-value="1"><img src={bannerImage} alt="bannerImage" /></div>,
    <div className="item caroselItem" data-value="2"><img src={bannerImage} alt="bannerImage" /></div>,
    <div className="item caroselItem" data-value="3"><img src={bannerImage} alt="bannerImage" /></div>,
];

const Carousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        infinite
        animationDuration={400}
        autoPlay={true}
        autoPlayInterval={2000}
    />
);

export default Carousel;