import "./App.css";
import React, { useState } from "react";
import CalculatorKeypad from "./CalculatorKeypad";
import CalculatorAmount from "./CalculatorAmount";

function App() {
  const [value, setValue] = useState(0);
  const [tip, setTip] = useState(0);
  const [custom, setCustom] = useState(false);
  const [noOfPerson, setNoOfPerson] = useState("");
  const [customPercent, setCustomPercent] = useState(null);
  const [predefinePercent, setPredefinePercent] = useState(null);

  const customButton = () => {
    setCustom(!custom);
    setTip(0);
  };

  const calculateTip = (
    percentage,
    value,
    noOfPerson = 1,
    isCustom = false
  ) => {
    if (percentage) {
      const calTip = (value * percentage) / 100;
      setPredefinePercent(percentage);
      const perPersonTip = calTip / parseInt(noOfPerson || 1, 10);
      setTip(perPersonTip);
    }
    if (!isCustom) {
      setCustomPercent(null);
      setCustom(false);
    } else {
      setPredefinePercent(percentage);
    }
  };

  const onHandleChangePerson = (noOfPerson) => {
    setNoOfPerson(noOfPerson);
    if (parseInt(noOfPerson, 10)) {
      calculateTip(customPercent || predefinePercent, value, noOfPerson, true);
    } else {
      setTip(0);
    }
  };

  const onHandleCustomPercentage = (custumPercentage) => {
    calculateTip(custumPercentage, value, noOfPerson, true);
    setCustomPercent(custumPercentage);
  };

  return (
    <div>
      <div className="container outline d-flex justify-content-center align-items-center">
        <div className="row backgroun-design">
          <div className="col-md-6 mb-3">
            <CalculatorKeypad
              value={value}
              setValue={setValue}
              setTip={calculateTip}
              custom={custom}
              customButton={customButton}
              customPercent={customPercent}
              noOfPerson={noOfPerson}
              setNoOfPerson={onHandleChangePerson}
              onHandleCustomPercentage={onHandleCustomPercentage}
              predefinePercent={predefinePercent}
            />
          </div>
          <div className="col-md-6 tip-amount1">
            <CalculatorAmount
              value={value}
              setValue={setValue}
              setTip={setTip}
              customButton={customButton}
              setCustomPercent={setCustomPercent}
              customPercent={customPercent}
              tip={tip}
              setNoOfPerson={setNoOfPerson}
              setCustom={setCustom}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
