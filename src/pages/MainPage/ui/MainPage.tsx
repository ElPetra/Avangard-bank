import { useState, useRef } from 'react';
import Slider from 'react-slick';

import { FormLogin } from 'widgets/FormLogin';
import { SliderContent } from 'widgets/SliderContent';
import { MobileAdv } from 'widgets/MobileAdv';
import { BankInfo } from 'widgets/BankInfo';
import { BankProducts } from 'widgets/BankProducts';
import { MobileApp } from 'widgets/MobileApp';
import { Footer } from 'widgets/Footer';

import { Container } from 'shared/ui/Conatiner/Container';
import { Icon } from 'shared/ui/icons';
import { classNames } from 'shared/lib/classNames/classNames';

import { getSlideContents } from 'helpers/sliderContent';
import { getSliderImages } from 'helpers/imageLoader';

import * as styles from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

export const MainPage = ({ className }: MainPageProps) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const backgroundImages = getSliderImages();
    const slideContents = getSlideContents();

    const sliderRef = useRef<Slider | null>(null);
    const bankProductsRef = useRef<HTMLDivElement | null>(null);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        slickGoTo: activeSlide,
        beforeChange: (curr: number, next: number) => setActiveSlide(next),
    };

    const handleScrollDown = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    const handleScrollToSection = () => {
        if (bankProductsRef.current) {
            bankProductsRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <div className={classNames(styles.MainPage, {}, [className])}>
            <Container>
                <div className={styles.formContainer}>
                    <FormLogin />
                </div>
            </Container>
            <Slider {...sliderSettings} ref={sliderRef}>
                {backgroundImages.map((image, i) => (
                    <div key={image}>
                        <div
                            className={styles.sliderBackground}
                            style={{ backgroundImage: `url(${image})` }}
                        >
                            <div className="overlay" />
                            <Container>
                                <div
                                    className={classNames(
                                        styles['MainPage-header'],
                                        {},
                                        [className],
                                    )}
                                >
                                    <SliderContent
                                        title={slideContents[i].title}
                                        description={
                                            slideContents[i].description
                                        }
                                        buttonLabel={
                                            slideContents[i].buttonLabel
                                        }
                                        onButtonClick={handleScrollToSection}
                                    />
                                </div>
                            </Container>
                        </div>
                    </div>
                ))}
            </Slider>
            <Container>
                <div className={classNames(styles.dotsWrapper, {}, [])}>
                    {backgroundImages.map((image, i) => (
                        <div
                            key={image}
                            className={classNames(styles['dotsWrapper-round'], {
                                [styles.activeDot]: activeSlide === i,
                            })}
                            onClick={() => sliderRef.current.slickGoTo(i)}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    sliderRef.current.slickGoTo(i);
                                }
                            }}
                            role="button"
                            tabIndex={0}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
                <MobileAdv />
                <Icon
                    className={classNames(styles.scrollDown, {}, [])}
                    width={40}
                    icon="scrollDown"
                    onClick={handleScrollDown}
                />
            </Container>
            <Container>
                <BankInfo />
                <div ref={bankProductsRef}>
                    <BankProducts />
                </div>
                <MobileApp />
                <Footer />
            </Container>
        </div>
    );
};
