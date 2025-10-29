import "./ProductCard.css"

import { useContext } from "react"
import { DataContext } from "../../context/DataContext/DataContext"

const ProductCard = () => {
const {Data} =useContext(DataContext)
  return (
    <div className="amazon-container">
      {Data.map((card, index) => (
        <div className="amazon-card" key={index}>
          <h3>{card.title}</h3>
          {card.image ? (
            <img src={card.image} alt={card.title} className="main-image" />
          ) : (
            <div className="sub-cards">
              {card.items.map((item, i) => (
                <div className="sub-card" key={i}>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          )}
          <a href="#" className="shop-link">Shop now</a>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;