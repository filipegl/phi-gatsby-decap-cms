import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import logo from "../img/logofooter.svg";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function FullWidthImage(props) {
  const {
    height = 700,
    img,
    title,
    subheading,
    imgPosition = "top left",
  } = props;
  const phiBlue = "#2619b1"
  return (
    <React.Fragment>
      <div
        className="margin-top-0"
        style={{
          display: "grid",
          alignItems: "center",
        }}
      >
        {img?.url ? (
          <img
            src={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              height: height,
              width: "100%",
            }}
            // This is a presentational image, so the alt should be an empty string
            alt=""
          />
        ) : (
          <GatsbyImage
            image={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              maxHeight: height,
            }}
            layout="fullWidth"
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        )}
        {(title || subheading) && (
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              display: "flex",
              flexWrap: "wrap",
              maxWidth: "70em",
              justifyContent: "center",
              alignItems: "center",
              justifySelf: "center"
            }}
          >
            <div style={{
              flexGrow: 1,
              flexDirection: "column",
              flexBasis: '16em',
              maxWidth: '70em',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            {/* Any content here will be centered in the component */}
            {title && (
              <h1
                className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                style={{
                  boxShadow:
                    `${phiBlue} 0.5rem 0px 0px, ${phiBlue} -0.5rem 0px 0px`,
                  backgroundColor: phiBlue,
                  color: "white",
                  lineHeight: "1",
                  padding: "0.25em",
                }}
              >
                {title}
              </h1>
            )}
            {subheading && (
              <h3
                className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                style={{
                  boxShadow:
                    `${phiBlue} 0.5rem 0px 0px, ${phiBlue} -0.5rem 0px 0px`,
                  backgroundColor: phiBlue,
                  color: "white",
                  lineHeight: "1",
                  padding: "0.25rem",
                  marginTop: "0.5rem",
                }}
              >
                {subheading}
              </h3>
            )}
            {/* IF BUTTON?,  */}
            <AnchorLink 
              className="btn btn-cover" 
              to="/products#products"
              title="Produtos"
            >
                Ver produtos
            </AnchorLink>
            </div>
            <div style={{
              flexGrow: 1,
              flexBasis: '50%',
              maxWidth: '50%',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <img
                src={logo}
                alt="Phi logo"
                style={{ width: "18em", height: "14em" }}
              />
            </div>

          </div>
        )}
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
