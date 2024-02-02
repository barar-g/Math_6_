import React, { useState, useEffect } from 'react';
import { Button, Typography, TextField, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { styled } from '@mui/system';

// Les distances entre les villes
const distances = {
    "Nouakchott-Aïoun": 819,
    "Nouakchott-Atar": 451,
    "Nouakchott-Nouadhibou": 525,
    "Nouakchott-Rosso": 203,
};

// Générer un itinéraire aléatoire à partir des villes disponibles
const generateItinerary = () => {
    const cities = Array.from(new Set(Object.keys(distances).flatMap(route => route.split('-'))));
    return cities.sort(() => Math.random() - 0.5).slice(0, 2);
}

const StyledCard = styled(Card)(({ theme }) => ({
    width: '70%',
    margin: '50px auto',
    padding: theme.spacing(2),
    backgroundColor: '#ffffff', 
}));

const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(4),
    borderRadius: '25px',
    padding: theme.spacing(1, 3), // plus de padding pour une forme plus arrondie
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
    marginTop: theme.spacing(2),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(2),
    color: 'blue',
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    marginTop: theme.spacing(2),
    backgroundColor: '#ffffff',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.15)',
}));

const C3A2 = () => {
    const [itinerary, setItinerary] = useState([]);
    const [userDistance, setUserDistance] = useState('');
    const [correct, setCorrect] = useState(false);
    const [realDistance, setRealDistance] = useState(0);
    const [showTable, setShowTable] = useState(true);

    useEffect(() => {
        const newItinerary = generateItinerary();
        setItinerary(newItinerary);
        
        let totalDistance = 0;
        for (let i = 0; i < newItinerary.length - 1; i++) {
            const route = `${newItinerary[i]}-${newItinerary[i+1]}`;
            totalDistance += distances[route] || 0;
        }
        setRealDistance(totalDistance);
    }, []);

    const checkAnswer = () => {
        if (parseInt(userDistance) === realDistance) {
            setCorrect(true);
        } else {
            setCorrect(false);
        }
    };

    return (
        <StyledCard>
            <CardContent>
                <Typography variant="h5" align="center"></Typography>
                <StyledButton variant="contained" color="primary" onClick={() => setShowTable(!showTable)}>{showTable ? 'Masquer les distances' : 'Afficher les distances'}</StyledButton>
                {showTable && (
                    <>
                        <Typography variant="h6">Distances entre les villes:</Typography>
                        <StyledTableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Route</TableCell>
                                        <TableCell>Distance (km)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {Object.entries(distances).map(([route, distance]) => (
                                        <TableRow key={route}>
                                            <TableCell>{route.replace('-', ' à ')}</TableCell>
                                            <TableCell>{distance}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </StyledTableContainer>
                    </>
                )}
                <StyledTypography variant="h6"> {itinerary.join(' -> ')}</StyledTypography>
                <StyledTextField
                    label="Entrez la distance totale"
                    value={userDistance}
                    onChange={(e) => setUserDistance(e.target.value)}
                />
                <StyledButton variant="contained" color="primary" onClick={checkAnswer}>OK</StyledButton>
                {correct ? <Typography variant="h6" color="green"></Typography>
                    : <Typography variant="h6" color="red"></Typography>}
            </CardContent>
        </StyledCard>
    );
};

export default C3A2;

