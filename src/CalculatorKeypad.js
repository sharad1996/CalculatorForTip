import React from "react";

const CalculatorKeypad = ({
  value,
  setValue,
  setTip,
  custom,
  customButton,
  setCustomValue,
  setCustomPercent,
  customPercent,
  customValue,
  tip,
  noOfPerson,
  setNoOfPerson,
  onHandleCustomPercentage,
}) => {
  return (
    <div>
      <div className="display">
        <input
          type="number"
          value={value}
          class="form-control bill-input"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <p className="fs-2 heading">Select Tip %</p>
        <div className="d-flex justify-content-between">
          <button
            className="tip-amount"
            type="value"
            onClick={() => setTip(5, value)}
          >
            5%
          </button>
          <button
            className="tip-amount"
            type="value"
            onClick={() => setTip(10, value)}
          >
            10%
          </button>
          <button
            className="tip-amount"
            type="value"
            onClick={() => setTip(15, value)}
          >
            15%
          </button>
        </div>
        <div className="mt-3 d-flex justify-content-between">
          <button
            className="tip-amount"
            type="value"
            onClick={() => setTip(25, value)}
          >
            25%
          </button>
          <button
            className="tip-amount"
            type="value"
            onClick={() => setTip(50, value)}
          >
            50%
          </button>

          {custom ? (
            <input
              type="text"
              value={customPercent}
              className="input-example"
              onChange={(event) => onHandleCustomPercentage(event.target.value)}
            />
          ) : (
            <button
              className="custom-button"
              type="value"
              onClick={customButton}
            >
              Custom
            </button>
          )}
        </div>
        <div className="mt-5">
          <p className="mb-1 heading">Number of People</p>

          <input
            type="text"
            value={noOfPerson}
            class="form-control bill-input"
            onChange={(e) => {
              //   setPeople(tip / parseInt(e.target.value, 10));
              setNoOfPerson(e.target.value);
            }}
          />

          {/* <input
              type="text"
              value={noOfPerson}
              disabled
              class="form-control"
            /> */}
        </div>
      </div>
    </div>
  );
};

export default CalculatorKeypad;
