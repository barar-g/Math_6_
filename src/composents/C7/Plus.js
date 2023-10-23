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
  textAlign: 'center' // Ceci centrera le texte horizontalement
};

function EditableDiv() {
  const [values, setValues] = useState({
    firstNumber: "",
    secondNumber: ""
  });

  const [result, setResult] = useState(null);

  const computeResult = () => {
    const { firstNumber, secondNumber } = values;
    setResult(parseInt(firstNumber) + parseInt(secondNumber));
  };

  const handleKeyPress = (event, field) => {
    if (field === "firstNumber" || field === "secondNumber") {
      if (!/^[0-9]*$/.test(event.key) || event.target.innerText.length >= 8) {
        event.preventDefault();
      }
    }
  };

  const handleChange = (event, field) => {
    setValues(prevValues => ({
      ...prevValues,
      [field]: event.target.innerText
    }));
    computeResult();
  };

  return (
    <Card>
      <div style={{ textAlign: 'center' }}>
        <div
          contentEditable
          onKeyPress={e => handleKeyPress(e, "firstNumber")}
          onInput={e => handleChange(e, "firstNumber")}
          style={{ ...editableStyle, marginBottom: '4px' }}
        ></div>
        <div
          contentEditable
          style={{ fontSize: '30px', color: 'blue', marginBottom: '4px', textAlign: 'left',paddingLeft: '90px' }}
        >+</div>
        <div
          contentEditable
          onKeyPress={e => handleKeyPress(e, "secondNumber")}
          onInput={e => handleChange(e, "secondNumber")}
          style={{ ...editableStyle, marginBottom: '4px' }}
        ></div>
        <div style={{ ...editableStyle, marginBottom: '4px' }}>--------------------</div>
        <div style={editableStyle}>{result}</div>
      </div>
    </Card>
  );
}

export default EditableDiv;
