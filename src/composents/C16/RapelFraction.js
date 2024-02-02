import React from 'react';
import styled from 'styled-components';

const Fraction = styled.div`
    box-sizing: border-box;
    width: 100%; 
    height: auto;
    margin: 20px auto;
    padding: 20px;
    background-color: ${(props) => (props.isActive ? '#FFC107' : '#E1F5FE')};
    border: ${(props) => (props.isActive ? '3px dashed #FF5722' : '3px dashed #B3E5FC')};
    transition: background-color 0.4s, transform 0.3s;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1em;
    font-family: 'Comic Sans MS', sans-serif;

    &:hover {
        transform: scale(1.05);
    }
`;

function RappelFractions() {
    const [isActive, setIsActive] = React.useState(false);
  
    return (
        <Fraction isActive={isActive} onClick={() => setIsActive(!isActive)}>
            <h2>Rappel sur les Fractions </h2>

            <p>
                🍕 Imagine que tu as une pizza entière devant toi. Si tu la coupes en 4 parts égales et que tu prends une seule part, tu as alors <strong>1/4</strong> de la pizza.
            </p>

            <p><strong>Mais que signifie 1/4 ?</strong></p>

            <p>
                🤔 Imagine que tu as 4 amis et que tu veux partager une barre de chocolat équitablement. Si chaque ami reçoit un morceau, alors chaque morceau est <strong>1/4</strong> de la barre entière. Le numéro du bas (le 4) te dit en combien de parties tu divises quelque chose, et le numéro du haut (le 1) te dit combien de ces parties tu as ou tu prends.
            </p>

            <h3>Quelques faits amusants sur les fractions :</h3>

            <ul>
                <li>🍰 Si tu as <strong>1/2</strong> d'un gâteau et que tu le partages avec un ami, vous aurez chacun <strong>1/4</strong> du gâteau total. C'est parce que <strong>1/2</strong> divisé par 2 est égal à <strong>1/4</strong>.</li>
                <li>🍪 Si tu as 2 biscuits et que tu les manges tous les deux, tu as mangé <strong>2/2</strong> (ce qui est la même chose que <strong>1</strong> entier).</li>
                <li>🍉 Si tu manges <strong>3/4</strong> d'une pastèque et que ton ami mange <strong>1/4</strong>, alors vous avez mangé toute la pastèque ensemble!</li>
            </ul>

            <h3>Des fractions partout !</h3>

            <p>
                Les fractions ne sont pas seulement pour la nourriture. Elles sont partout! 🌍
            </p>

            <ul>
                <li>Lorsque tu regardes une horloge et qu'elle indique 15 minutes, c'est <strong>1/4</strong> d'une heure.</li>
                <li>Si tu remplis une bouteille d'eau à moitié, c'est <strong>1/2</strong> de la bouteille.</li>
                <li>Lorsque tu termines la moitié de tes devoirs, tu as terminé <strong>1/2</strong> du travail!</li>
            </ul>

            <h3>Pourquoi les fractions sont-elles importantes?</h3>

            <p>
                Les fractions nous aident à comprendre et à partager les choses équitablement. Elles nous montrent aussi combien nous avons de quelque chose sans avoir à tout avoir. Et le plus amusant? Plus tard, tu apprendras à additionner, soustraire, multiplier et diviser avec elles!
            </p>

            <h3>Défi du jour 🌟:</h3>

            <p>
                La prochaine fois que tu manges quelque chose, essaie de penser à quelle fraction de l'aliment tu as mangé. C'est un excellent moyen de pratiquer!
            </p>
        </Fraction>
    );
}

export default RappelFractions;

