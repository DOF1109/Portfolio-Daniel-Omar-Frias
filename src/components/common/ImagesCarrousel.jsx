import { forwardRef, useRef, useEffect } from "react";
import {
  AppBar,
  Box,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// register();

const ImagesCarrousel = ({ openCarrousel, onClose, title, images }) => {
  // const swiperElRef = useRef(null);

  // useEffect(() => {
  //   if (swiperElRef.current) {
  //     // listen for Swiper events using addEventListener
  //     swiperElRef.current.addEventListener("swiperprogress", (e) => {
  //       const [swiper, progress] = e.detail;
  //       console.log(progress);
  //     });
  
  //     swiperElRef.current.addEventListener("swiperslidechange", (e) => {
  //       console.log("slide changed");
  //     });
  //   }
  // }, []);
  

  return (
    <Dialog
      fullScreen
      open={openCarrousel}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      {/* <swiper-container
        ref={swiperElRef}
        slides-per-view="1"
        space-between="10"
        navigation="true"
        pagination="true"
        centered-slides="true"
      >
        {images.map((image, index) => {
          return (
            <swiper-slide key={index}>
              <Box 
                component="img" 
                src={image} 
                sx={{
                  maxWidth: "90vw", 
                  maxHeight: "90vh", 
                  objectFit: "contain",
                  transition: "transform 0.5s ease-in-out"
                }} 
              />
            </swiper-slide>
          )
        })}
      </swiper-container> */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <Box 
                component="img" 
                src={image} 
                sx={{
                  maxWidth: "90vw", 
                  maxHeight: "90vh", 
                  objectFit: "contain",
                  transition: "transform 0.5s ease-in-out"
                }} 
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Dialog>
  );
};

export default ImagesCarrousel;
