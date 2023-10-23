import React, { useState } from 'react';
import { Card } from '../Styles/MajorStyles';

const editableStyle = {
  border: 'none',
  outline: 'none',
  fontSize: '30px',
  color: 'blue',
  overflow: 'auto',
  display: 'flex',
  justifyContent: 'center',
  whiteSpace: 'pre-wrap',
  alignItems: 'center',
  textAlign: 'center'
};

function EditableDiv() {
  const [values, setValues] = useState({
    firstNumber: "",
    secondNumber: ""
  });
  const [result, setResult] = useState("        "); // 8 spaces for placeholder
  const [currentStep, setCurrentStep] = useState(7); // Start from the rightmost position
  const [carry, setCarry] = useState(0);

  const handleAnimationStep = () => {
    if (currentStep >= 0) {
      const firstNumber = values.firstNumber.replace(/\s+/g, '').padStart(8, '0');
      const secondNumber = values.secondNumber.replace(/\s+/g, '').padStart(8, '0');
      let sum = parseInt(firstNumber[currentStep]) + parseInt(secondNumber[currentStep]) + carry;
      if (sum > 9) {
        setCarry(1);
        sum -= 10;
      } else {
        setCarry(0);
      }
      const partialResult = result.substr(0, currentStep) + sum + result.substr(currentStep + 1);
      setResult(partialResult);
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (event, field) => {
    const currentValue = event.target.innerText;
    setValues(prevValues => ({
      ...prevValues,
      [field]: currentValue
    }));
  };

  return (
    <Card>
      <div style={{ textAlign: 'center' }}>
        <div
          contentEditable
          onInput={e => handleChange(e, "firstNumber")}
          style={{ ...editableStyle, marginBottom: '4px' }}
        ></div>
        <div
          contentEditable
          style={{ fontSize: '30px', color: 'blue', marginBottom: '4px', textAlign: 'left', paddingLeft: '90px', border: 'none', outline: 'none' }}
        >+</div>
        <div
          contentEditable
          onInput={e => handleChange(e, "secondNumber")}
          style={{ ...editableStyle, marginBottom: '4px' }}
        ></div>
        <div style={{ ...editableStyle, marginBottom: '4px' }}>--------------------</div>
        <div style={editableStyle}>{result}</div>
        <button onClick={handleAnimationStep}>Étape suivante</button>
      </div>
    </Card>
  );
}

export default EditableDiv;
