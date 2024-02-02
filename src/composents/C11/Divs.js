import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid red;
  font-size: 24px;
  color: red;
  width: 45%;
  text-align: center;
  outline: none;
  margin-right: 10px;
`;

const VerticalDivider = styled.div`
  width: 2px;
  height: 300px;
  background-color: black;
  margin-right: 10px;
  align-self: center;
`;

const QuotientContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Quotient = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Remainder = styled.div`
  font-size: 24px;
  color: red;
`;

function DivisionComponent() {
  const [dividend, setDividend] = useState("");
  const [divisor, setDivisor] = useState("");
  const [quotient, setQuotient] = useState("");
  const [remainder, setRemainder] = useState("");

  const handleSolve = () => {
    const div = parseInt(dividend, 10) / parseInt(divisor, 10);
    setQuotient(Math.floor(div).toString());
    setRemainder((parseInt(dividend, 10) % parseInt(divisor, 10)).toString());
  };

  return (
    <Container>
      <TopRow>
        <Input 
          value={dividend}
          onChange={e => setDividend(e.target.value)}
          placeholder="Dividende"
        />
        <Input 
          value={divisor}
          onChange={e => setDivisor(e.target.value)}
          placeholder="Diviseur"
        />
      </TopRow>
      <VerticalDivider />
      <QuotientContainer>
        <Quotient>{quotient}</Quotient>
        <Remainder>{remainder}</Remainder>
      </QuotientContainer>
    </Container>
  );
}

export default DivisionComponent;
