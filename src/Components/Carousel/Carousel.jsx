import { useState, useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import classes from "./carousel.module.css";

// Banner images
const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1500&q=80",
    alt: "Shopping deals banner",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1500&q=80",
    alt: "Electronics deals banner",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1500&q=80",
    alt: "Home essentials banner",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=80",
    alt: "Home decor banner",
  },
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // auto-rotate every 5 seconds
  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className={classes.carousel}>
      <button
        className={`${classes.arrow} ${classes.arrow_left}`}
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <IoIosArrowBack size={28} />
      </button>

      <div
        className={classes.slides}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={classes.slide}>
            <img src={slide.image} alt={slide.alt} />
          </div>
        ))}
      </div>

      <button
        className={`${classes.arrow} ${classes.arrow_right}`}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <IoIosArrowForward size={28} />
      </button>

      {/* gradient fade at the bottom, like Amazon */}
      <div className={classes.fade} />

      {/* dots indicator */}
      <div className={classes.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${classes.dot} ${
              index === current ? classes.active : ""
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
