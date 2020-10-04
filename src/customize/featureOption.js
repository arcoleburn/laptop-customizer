import React from "react";
import slugify from "slugify";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function FeatureItem(props) {

  const {itemHash, item, feature} = props
  return (
    <div key={itemHash} className="feature__item">
      <input
        type="radio"
        id={itemHash}
        className="feature__option"
        name={slugify(feature)}
        checked={
          item.name === props.selected[feature].name
        }
        onChange={(e) => {
          console.log("onchange ran");
          props.updateFeature(feature, item);
        }}
      />
      <label htmlFor={props.itemHash} className="feature__label">
        {props.item.name} ({USCurrencyFormat.format(props.item.cost)})
      </label>
    </div>
  );
}

export default FeatureItem;
