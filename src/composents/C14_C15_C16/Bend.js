import React, { useState } from "react";
import styled from "styled-components";
import "./bend.css";

const BandeContainer = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
  margin-left: 0px;
`;

const BandeBox = styled.div`
  width: 370px;
  height: 60px;
  border: 4px solid #4caf50;
  display: flex;
  overflow: hidden;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  background-color: #ffeb3b;
`;
const BandeBox1 = styled.div`
  width: 370px;
  height: 35px;
  display: flex;
  overflow: hidden;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  background-color: white;
`;
const FractionBande = styled.div`
  flex: 1;
  box-sizing: border-box;
  background-color: ${(props) => (props.isActive ? "#FFC107" : "#E1F5FE")};
  border: ${(props) =>
    props.isActive ? "3px dashed #FF5722" : "3px dashed #B3E5FC"};
  transition: background-color 0.4s, transform 0.3s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  font-family: "Comic Sans MS", sans-serif;
  margin-right: 5px;

  &:hover {
    transform: scale(1.05);
  }

  &:last-child {
    margin-right: 0;
  }
`;

const FractionBande1 = styled.div`
  flex: 1;

  background-color: white;
  transition: background-color 0.4s, transform 0.3s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  font-family: "Comic Sans MS", sans-serif;
`;

const Bande = () => {
  const [activeFractionCount, setActiveFractionCount] = useState(0);

  const toggleFraction = (index) => {
    if (index === activeFractionCount) {
      setActiveFractionCount((prev) => prev + 1);
    } else if (index < activeFractionCount) {
      setActiveFractionCount(index);
    }
  };

  return (
    <BandeContainer>
      <div className="bande-box-container">
        <BandeBox1>
          {[...Array(12)].map((_, index) => (
            <FractionBande1>
              {index < activeFractionCount && (
                <div class="frac">
                  <span>{`${index + 1}`}</span>
                  <span class="symbol">/</span>
                  <span class="bottom">12</span>
                </div>
              )}
            </FractionBande1>
            
          ))}
        </BandeBox1>
      </div>

      <div className="bande-box-container">
        <BandeBox>
          {[...Array(12)].map((_, index) => (
            <FractionBande
              key={index}
              isActive={index < activeFractionCount}
              onClick={() => {toggleFraction(index)}}
            ></FractionBande>
          ))}
        </BandeBox>
      </div>
    </BandeContainer>
  );
};

export default Bande;
