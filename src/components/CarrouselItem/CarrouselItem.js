/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/no-unresolved */
import React from "react";
// import { connect } from "react-redux";
// import { setFavorite, deleteFavorite } from "../actions";
// import playIcon from "../assets/static/play-icon.png";
// import plusIcon from "../assets/static/plus-icon.png";
// import remuveIcon from "../assets/static/remove-icon.png";

const Carouselitem = (props) => {
  const { name, reso} = props;
//   const handleSetFavorite = () => {
//     props.setFavorite({
//       id, cover, title, year, contentRating, duration,
//     });
//   };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  return (
    <div className="carousel-item">
      <img className="carousel-item__img"  />
      <div className="carousel-item__details">
        <div>
         
            <img
              className="carousel-item__details--img"
            //   src={playIcon}
            //   alt="Play Icon"
            />
         

          {/* {isList ? ( */}
            <img
              className="carousel-item__details--img"
            //   src={remuveIcon}
              alt="Remove Icon"
            //   onClick={() => handleDeleteFavorite(id)}
            />
          {/* ) : ( */}
            <img
              className="carousel-item__details--img"
            //   src={plusIcon}
            //   alt="Plus Icon"
            //   onClick={handleSetFavorite}
            />
          {/* )} */}

        </div>
        <p className="carousel-item__details--title">{name}</p>
        <p className="carousel-item__details--subtitle">
          {/* {`${year} ${contentRating} ${duration}`} */}
        </p>
      </div>
    </div>
  );
};
// const mapDispatchToProps = {
//   setFavorite, deleteFavorite,
// };
// export default connect(null, mapDispatchToProps)(Carouselitem);

export default Carouselitem