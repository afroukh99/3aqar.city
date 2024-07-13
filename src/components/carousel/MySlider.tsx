import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./mySlider.scss";



const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};



const MySlider = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className="mySlider">
            <Carousel
                responsive={responsive}
                autoPlaySpeed={3000}
                infinite={false}
                minimumTouchDrag={80}
                rewind={false}
                rewindWithAnimation={false}
                slidesToSlide={4}
                swipeable
                rtl={true}
            >
                {children}
            </Carousel>
        </div>
    )
}




export default MySlider