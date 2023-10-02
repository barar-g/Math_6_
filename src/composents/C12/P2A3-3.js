import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import teacher from "../images/teacher.png";
import vertical from "../images/vertical.png";
import horizontal from "../images/hw.png";

function P2A3_3() {
  const [questions, setQuestions] = useState([]);
  const [dividend, setDividend] = useState('');
  const [divisor, setDivisor] = useState('');
  const [quotient, setQuotient] = useState(0);
  const [remainder, setRemainder] = useState(0);
  const [calculated, setCalculated] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [devide, setdevide] = useState(false);

  const calculateDivision = () => {
    const newQuestions = [
      generateSingleQuestion(),
      

    ];
    
    
    setQuestions(newQuestions);
  };    
    const generateSingleQuestion = () => {
    if (divisor === 0) {
      alert("Divisor cannot be zero.");
      return;
    } else if (dividend.toString().length != 3){
      setShowCongratulations(true);
      
    }
  
  

    const quotient = Math.floor(dividend / divisor);
    const remainder = dividend % divisor;

    setQuotient(quotient);
    setRemainder(remainder);
    setCalculated(true);
    setdevide(true);
  };
  useEffect(() => {
    reset();
  }, []);

  

  


  const handleSubmit = (event) => {
    event.preventDefault();
    generateSingleQuestion();
    
   
  };

  const reset = () => {
    setDividend('');
    setDivisor('');
    setShowCongratulations(false);
    setdevide(false);
  } 


  return (
    <Card style={{ minHeight: '400px' }}>
      <CardContent>
      <h3>Division Visualization</h3>
        <Box my={2}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
              src={teacher}
              alt="kangaroo"
              style={{
                width: '100px',
                marginBottom: '10px',
                marginRight: '10px',
              }}
            />
            <Card
              style={{
                borderRadius: '20px',
                backgroundColor: 'white',
                padding: '10px',
              }}
            >
              <CardContent>

                








                
              </CardContent>
            </Card>
          </div>
        </Box> 
          <Box my={2}>
            <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              
              </div >
            </form>
          </Box>
        
      </CardContent>
    </Card>
  );

};

export default P2A3_3;