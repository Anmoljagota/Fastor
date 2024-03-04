import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const Crousel = () => {
  const images = [
    {
      image:
        "https://th.bing.com/th/id/OIP.AFvhjAtUsIlRVe0gPWS0mwHaE8?rs=1&pid=ImgDetMain",
    },
    {
      image:
        "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.0L1SHnMvB61ElDsDB8rOawHaE9?rs=1&pid=ImgDetMain",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Box>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}

        // deviceType={this.props.deviceType}
      >
        {images.map((ele, index) => (
          <Box key={index}>
            <Box height={"150px"} w={"100%"}>
              <Image
                borderRadius={"1rem"}
                w={"100%"}
                h={"90%"}
                src={ele.image}
              />
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};
