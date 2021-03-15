import React from "react"

const Carouselitem = props => {
  const { name } = props

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" />
      <div className="carousel-item__details">
        <div>
          <img
            alt="imagen "
            className="carousel-item__details--img"
        
            alt="Play Icon"
          />

          {/* {isList ? ( */}
          <img
            className="carousel-item__details--img"
        
            alt="Remove Icon"
        
          />
          
          <img
            className="carousel-item__details--img"
           
            alt="Plus Icon"
          
          />
        </div>
        <p className="carousel-item__details--title">{name}</p>
        <p className="carousel-item__details--subtitle">
        
        </p>
      </div>
    </div>
  )
}
// const mapDispatchToProps = {
//   setFavorite, deleteFavorite,
// };
// export default connect(null, mapDispatchToProps)(Carouselitem);

export default Carouselitem
