import { Container, Fab, Paper, Slide } from '@mui/material'
import React, { useRef } from 'react'
import style from '../style'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowBackIosIcon from '@mui/icons-material/KeyboardArrowLeft';

function ImageSliderComponent() {

    const containerRef = useRef(null);

    const images = [
        '/images/dan-freeman-pL7sl2tiOts-unsplash.jpg',
        '/images/neom-LiDZooBvzt0-unsplash.jpg',
        '/images/neom-WZCMd9K-sHY-unsplash.jpg',
        '/images/thomas-pavitte-4f7VHiCiiCE-unsplash.jpg',
    ];
    const handleNext = () => {
        const container = containerRef.current;
        const scrollAmount = 200;
      
        const targetScroll = container.scrollLeft + scrollAmount;
      
        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth',
        });
    };

    const handlePrev = () => {
        const container = containerRef.current;
        const scrollAmount = 200;
      
        const targetScroll = container.scrollLeft - scrollAmount;
      
        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth',
        });
    };

    const handleScroll = () => {
        const scrollPosition = containerRef.current.scrollLeft;

        const parallaxValue = scrollPosition / 2;

        containerRef.current.querySelectorAll('.parallax-image').forEach((image, i) => {
            image.style.transform = `translateX(-${parallaxValue * (i + 1)}px)`;
        });
    };

    return (
        <>
            <Container sx={style.sliderMainComponent} ref={containerRef} onScroll={handleScroll}>
                <Fab onClick={handlePrev} sx={{ position: 'absolute', top: '45%', left: '66px' }} color="primary" aria-label="previous">
                    <ArrowBackIosIcon />
                </Fab>
                <Fab onClick={handleNext} sx={{ position: 'absolute', top: '45%', right: '66px' }} color="primary" aria-label="next">
                    <KeyboardArrowRightIcon />
                </Fab>
                {images.map((image, i) => (
                    <Slide direction='right' in={true} mountOnEnter unmountOnExit>
                        <Paper className="parallax-image" sx={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '10px',
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'inline-block'
                        }} elevation={4}>
                            <img
                                src={image}
                                alt={`Slide ${i + 1}`}
                                style={{ width: '100%', height: '100%', borderRadius: '10px' }}
                            />
                        </Paper>
                    </Slide>
                ))}
            </Container>
        </>
    )
}

export default ImageSliderComponent
