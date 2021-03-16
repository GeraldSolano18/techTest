import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Banner = props => (
  <div className="master-container ">
    <div>
      <div className="seccion_banner ">
        <div className="seccion_master">
          <StaticImage
            className="img_Movie"
            src="https://comics.panini.es/store/media/catalog/product/cache/82/image/9df78eab33525d08d6e5fb8d27136e95/s/m/smarc001_0.jpg"
            alt="A banner Image"
          />
        </div>
        <div className="seccion_master">
          <StaticImage
            className="img_Movie"
            src="https://images-na.ssl-images-amazon.com/images/I/91RWPWhxPkL._AC_SL1500_.jpg"
            alt="A banner Image"
          />
        </div>
        <div className="njss">
          <div className="seccion_masterpq">
            <StaticImage
              className="img_Movie"
              src="https://i.redd.it/lwp8nfv0hup31.jpg"
              alt="A banner Image"
            />
          </div>
          <div className="seccion_masterpq">
            <StaticImage
              className="img_Movie"
              src="https://pbs.twimg.com/media/D3zwhT2XkAAH9N3.jpg"
              alt="A banner Image"
            />
          </div>
        </div>
        <div className="seccion_master">
          <StaticImage
            className="img_Movie"
            src="https://www.irock.cl/wp-content/uploads/2020/04/marvel.jpg"
            alt="A banner Image"
          />
        </div>
      </div>
    </div>
  </div>
)

export default Banner
