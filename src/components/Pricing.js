import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const Pricing = ({ data }) => (
  <div className="columns">
    {data.map((price) => (
      <div key={price.name} className="column">
        <section className="section">
          <h4 className="has-text-centered has-text-weight-semibold">
            {price.name}
          </h4>
          <div>
            <PreviewCompatibleImage imageInfo={price.image1} />
          </div>
          <h2 className="is-size-1 has-text-weight-bold has-text-primary has-text-centered">
            <a href="https://wa.me/c/558393108912" className="btn"><span>Fazer Pedido</span></a>
          </h2>
          <p className="has-text-weight-semibold">{price.description}</p>
          <ul>
            {price.items.map((item) => (
              <li key={item} className="is-size-5">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ))}
  </div>
);

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
      image1: PropTypes.string,
    })
  ),
};

export default Pricing;
