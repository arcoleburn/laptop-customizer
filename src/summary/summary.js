import React from "react";
import SummaryItem from "./summaryItem";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  
function Summary(props) {
  const summary = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const selectedOption = props.selected[feature];

    return (
      <SummaryItem
        key={featureHash}
        featureHash={featureHash}
        feature={feature}
        selectedOption={selectedOption}
      />
    );
  });
  const total = Object.keys(props.selected).reduce(
    (acc, curr) => acc + props.selected[curr].cost,
    0
   );
  return (
    <>
      {summary}
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {USCurrencyFormat.format(total)}
        </div>
      </div>{" "}
    </>
  );
}

export default Summary;
