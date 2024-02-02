import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import kid from "../Images/kid.png";
import useSound from "use-sound";
import correctSound from '../sounds/correct.mp3';
import incorrectSound from '../sounds/incorrect.mp3';

function P2A2_2() {
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
          "Roughaya a acheté 500 glaçons pour 1500 UM. Elle les vend normalement à 5 UM chacun. En raison d'une coupure d'électricité, la moitié des glaçons ont fondu. Quelle est sa perte ? Quel aurait été son bénéfice sans la coupure ?",
        answer: ((500)/2)*(1500/500),
        answer1: 500*5 - (1500),
        hasTwo: true ,
        answerLabel:"Le perte de Roughiya",
        answer1Label: "le bénéfice ",
      },
      {
        question:
          "Karim a acheté 300 timbres pour 900 DH. Il les vend habituellement à 4 DH chacun. À cause d'une erreur d'impression, un tiers des timbres est devenu illisible. Quelle est sa perte ? Quel aurait été son bénéfice sans l'erreur ?",
        answer: ((300)/3)*(900/300),
        answer1: 300*5 - (900),
        hasTwo: true ,
        answerLabel:"Le perte de Karim",
        answer1Label: "le bénéfice ",
      },
      {
        question:
          "Leila a acquis 200 œufs à 4000 DA. Elle les vend à 25 DA chacun. En raison d'une mauvaise manipulation, 20% des œufs se sont cassés. Quelle est sa perte ? Quel aurait été son bénéfice sans la casse ?",
        answer: ((200)/5)*(4000/200),
        answer1: 25*200 - (4000),
        hasTwo: true ,
        answerLabel:"Le perte de Leila",
        answer1Label: "le bénéfice ",
      },
      {
        question:
          "Ahmed a acheté 100 mètres de tissu pour 8000 DA. Il les vend  à 120 DA le mètre. En raison d'une décoloration, un quart du tissu est devenu inutilisable. Quelle est sa perte ? Quel aurait été son bénéfice sans la décoloration?",
        answer: ((100)/4)*(1500/100),
        answer1: 100*120 - (8000),
        hasTwo: true ,
        answerLabel:"Le perte de Ahmed",
        answer1Label: "le bénéfice ",
      },
      {
        question:
          "Sara a acheté 400 stylos pour 1200 DH. Elle les vend à 6 DH chacun. En raison d'un problème d'encre, 10% des stylos sont défectueux. Quelle est sa perte ? Quel aurait été son bénéfice sans les stylos défectueux ?",
        answer: ((400)/10)*(1200/400),
        answer1: 400*6 - (1200),
        hasTwo: true ,
        answerLabel:"Le perte de Sara",
        answer1Label: "le bénéfice ",
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
              src={kid}
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

export default P2A2_2;
