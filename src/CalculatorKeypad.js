import React from "react";

const CalculatorKeypad = ({
  value,
  setValue,
  setTip,
  custom,
  customButton,
  customPercent,
  noOfPerson,
  setNoOfPerson,
  onHandleCustomPercentage,
  predefinePercent,
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
            // className=" "
            className={
              predefinePercent !== 5 || custom
                ? "tip-amount"
                : "tip-amount-active"
            }
            type="value"
            onClick={() => setTip(5, value, noOfPerson)}
          >
            5%
          </button>
          <button
            className={
              predefinePercent !== 10 || custom
                ? " tip-amount"
                : "tip-amount-active"
            }
            type="value"
            onClick={() => setTip(10, value, noOfPerson)}
          >
            10%
          </button>
          <button
            className={
              predefinePercent !== 15 || custom
                ? "tip-amount"
                : "tip-amount-active"
            }
            type="value"
            onClick={() => setTip(15, value, noOfPerson)}
          >
            15%
          </button>
        </div>
        <div className="mt-3 d-flex justify-content-between">
          <button
            className={
              predefinePercent !== 25 || custom
                ? "tip-amount"
                : "tip-amount-active"
            }
            type="value"
            onClick={() => setTip(25, value, noOfPerson)}
          >
            25%
          </button>
          <button
            className={
              predefinePercent !== 50 || custom
                ? "tip-amount"
                : "tip-amount-active"
            }
            type="value"
            onClick={() => setTip(50, value, noOfPerson)}
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
            disabled={
              !value || (predefinePercent === null && customPercent === null)
            }
            onChange={(e) => {
              setNoOfPerson(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CalculatorKeypad;
