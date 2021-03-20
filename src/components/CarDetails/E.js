import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import car1 from "../../images/cars/1.jpg";
export const SliderImages = ({ styles }) => {
  const RightarrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    cursor: "pointer",
    background: "gray",
    border: "none",
    clipPath: "polygon(75% 0%, 100% 50%, 75% 100%, 25% 100%, 50% 50%, 25% 0)",
  };
  const LeftarrowStyles = {
    ...RightarrowStyles,
    clipPath: "polygon(75% 0, 50% 50%, 75% 100%, 25% 100%, 0% 50%, 25% 0%)",
  };
  const base_url = "http://localhost/car-rental/admin/";

  return (
    <Carousel
      showStatus="false"
      useKeyboardArrows="true"
      infiniteLoop
      autoPlay
      stopOnHover
      swipeScrollTolerance
      showIndicators="false"
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...LeftarrowStyles, left: 15 }}
          ></button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...RightarrowStyles, right: 15 }}
          ></button>
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        const indicatorStyles = {
          display: "blcok",
          width: 6,
          height: 6,
          display: "inline-block",
          margin: "0 8px",
          transition: "all 1s ease",
          borderRadius: "1rem",
          transform: isSelected ? "scale(1.2) " : "",
          background: isSelected ? "black" : "gray",
          display: "none",
        };
        if (isSelected) {
          return (
            <li
              style={{ ...indicatorStyles }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );
        }
        return (
          <li
            style={indicatorStyles}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        );
      }}
    >
      {styles.map((style) => (
        <img
          src={`${base_url}${style.path}`}
          key={style.car_style_id}
          data-style={style.car_style_id}
        />
      ))}
    </Carousel>
  );
};
