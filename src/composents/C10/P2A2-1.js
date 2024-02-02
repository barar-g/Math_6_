import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import carImg from "../Images/car.png";
import useSound from "use-sound";
import correctSound from '../sounds/correct.mp3';
import incorrectSound from '../sounds/incorrect.mp3';

function P2A2_1() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [play] = useSound(correctSound);
  const [play1] = useSound(incorrectSound);

  const generateQuestion = () => {
    const newQuestions = [
      {
        question:
          "Brahim vient d'acheter une voiture d'occasion à un ami à 785 000 UM.Pour la peinture et la tôlerie, Diallo a dépense 45 000 UM, quelque temps après il la revend 1 020 000 UM. Quelle est le prix de revient et le benefice de brahim?",
        answer: 785000 + 45000,
        answer1: 1020000 - (785000 + 45000),
        hasTwo: true ,
        answerLabel:"Le prix de revient",
        answer1Label: "le bénéfice",
      },
      {
        question:
        "Emma a acquis un ordinateur portable de seconde main à 350 $, avec 75 $ de réparations. Plus tard, elle le vend à 1550 $. Quel est son bénéfice et le coût initial ?",
        answer: 350 + 75,
        answer1: 1550 - (350 + 75),
        hasTwo: true ,
        answerLabel:"Le prix de revient",
        answer1Label: "le bénéfice",
      },
      {
        question:
        "Alex a acheté un vélo usagé à son voisin pour 250 €. Après 30 € de réparations, il le revend à 380 €. Calculez le bénéfice réalisé et le coût total pour Alex.",
        answer: 250 + 30,
        answer1: 380 - (250 + 30),
        hasTwo: true ,
        answerLabel:"Le prix de revient",
        answer1Label: "le bénéfice",
      },
      {
        question:
        "Sophie achète un téléphone d'occasion à 200 £. Elle dépense 40 £ pour les réparations avant de le revendre à 320 £. Déterminez son bénéfice et le prix initial.",
        answer: 200 + 40,
        answer1: 320 - ( 200 + 40),
        hasTwo: true ,
        answerLabel:"Le prix de revient",
        answer1Label: "le bénéfice",
      },
      {
        question:
        "Arnold achète une télévision d'occasion pour 60000 dollars. Après avoir dépensé 450 dollars pour les réparations, il la vend 650 000 dollars. Quel est son bénéfice et le coût initial ?",
        answer: 60000 + 45000,
        answer1: 650000 - (6000 + 45000),
        hasTwo: true ,
        answerLabel:"Le prix de revient",
        answer1Label: "le bénéfice",
      },
    ];
    setQuestions(newQuestions);
    setShowMessage(false);
    setShowCongratulations(false);
    setAnswer("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowMessage(true);
    if (
      parseInt(answer) === questions[currentIndex].answer &&
      parseInt(answer1) === questions[currentIndex].answer1
    ) {
      setShowCongratulations(true);
      play();
    } else {
      setShowCongratulations(false);
      play1();
    }
  };

  const handleNewQuestion = () => {
    setCurrentIndex((currentIndex + 1) % questions.length);
    setShowMessage(false);
    setShowCongratulations(false);
    setAnswer("");
    setAnswer1("");
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  return (
    <Card style={{ minHeight: "400px" }}>
      <CardContent>
        <Box my={2}>
          <div style={{ position: "relative" }}>
            <img
              src={carImg}
              alt="car"
              style={{
                width: "60%",
                height: "160px",
                marginLeft: "50%",
                marginTop: "155px",
              }}
            />
            <Card
              style={{
                position: "absolute",
                bottom: "-12%",
                left: "30%",
                transform: "translate(-50%, -50%)",
                borderRadius: "10px",
                backgroundColor: "#1877f2",
                padding: "0px",
                color: "#ffffff",
              }}
            >
              <CardContent>
                {!showMessage && questions[currentIndex] && (
                  <Typography variant="body1" style={{ color: "#ffffff" }}>
                    {questions[currentIndex].question}
                  </Typography>
                )}

                {showCongratulations && (
                  <Typography variant="body1" style={{ color: "#ffffff" }}>
                    Félicitations! Vous avez donné la bonne réponse!
                  </Typography>
                )}
                {showMessage && !showCongratulations && (
                  <Typography variant="body1" style={{ color: "#ffffff" }}>
                    Réponse incorrecte. Essayez encore!
                  </Typography>
                )}
              </CardContent>
            </Card>
          </div>
        </Box>
        {!showMessage &&  currentIndex >= 0 && currentIndex < questions.length && (
          <Box my={2}>
            <form onSubmit={handleSubmit}>
              <TextField
                label={questions[currentIndex].answerLabel}
                type="number"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                fullWidth
                required
              />
              {questions[currentIndex].hasTwo &&(
                <>
                  <h1></h1>
                  <TextField
                    label={questions[currentIndex].answer1Label}
                    type="number"
                    value={answer1}
                    onChange={(e) => setAnswer1(e.target.value)}
                    fullWidth
                    required
                  />
                </>
              )}
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ marginTop: "20px" }}
              >
                Répondre
              </Button>
            </form>
          </Box>
        )}
        {showMessage && (
          <Box my={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNewQuestion}
              style={{ marginTop: "20px" }}
            >
              Générer une nouvelle question
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default P2A2_1;



