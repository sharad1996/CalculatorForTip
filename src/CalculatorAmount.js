import React from "react";

const CalculatorAmount = ({
  value,
  tip,
  setValue,
  setNoOfPerson,
  setTip,
  setCustom,
  setCustomPercent,
}) => {
  return (
    <div>
      <div className="p-3 reset-button-margin">
        <div className="d-flex justify-content-between">
          <p className="text-white d-grid align-items-center">
            Tip Amount <br />
            <span className="person">/person</span>
          </p>
          <p className="amount">{tip ? tip.toFixed(2) : 0}</p>
        </div>
        <div className="display d-flex justify-content-between align-items-center">
          <p className="text-white">
            Total <br />
            <span className="person">/person</span>
          </p>
          <p className="amount">$&nbsp;{value ? <>{value}</> : 0}</p>
        </div>
      </div>
      <div>
        <button
          className="reset-color"
          type="value"
          onClick={() => {
            setValue("");
            setNoOfPerson("");
            setTip("");
            setCustom("");
            setCustomPercent("");
          }}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default CalculatorAmount;
