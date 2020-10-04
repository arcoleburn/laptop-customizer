import React from "react";
import FeatureSet from "./featureSet";

function Customize(props) {
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + "-" + idx;

    // const options = props.features[feature].map((item) => {
    //   const itemHash = slugify(JSON.stringify(item));
    //   return (
    //     <FeatureItem
    //       key={itemHash}
    //       selectItem={props.selectItem}
    //       feature={feature}
    //       itemHash={itemHash}
    //       item={item}
    //       selected={props.selected}
    //        /*all theprops go here*/
    //  />
    //from here to 33 becomes render on indiv item component. pass in props as needed
    /*     <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={
                item.name === props.selected[feature].name
              }
              onChange={(e) =>
                props.selectItem(feature, item)
              }
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div> */

    //returns a fieldset for each feature choice
    return (
      <FeatureSet
        key={featureHash}
        featureHash={featureHash}
        name={feature}
        options={props.features[feature]}
        updateFeature={props.updateFeature}
        selected={props.selected}
      />
    );
  });
  return <>{features}</>;
}

export default Customize;
