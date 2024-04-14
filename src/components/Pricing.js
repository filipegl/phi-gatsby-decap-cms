import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

function get_wpp_link(name) {
  var wpp_link
  if (name==="Café Áurea"){
    wpp_link = "https://wa.me/p/25685274561063636/558393108912"
  } else if (name==="Café Fibonacci") {
    wpp_link = "https://wa.me/p/7265307683524603/558393108912"
  } else if (name==="Café Logarítmico") {
    wpp_link = "https://wa.me/p/7725210984185090/558393108912"
  }
  return wpp_link
}

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
            <a href={get_wpp_link(price.name)} className="btn"><span>Fazer Pedido</span></a>
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
