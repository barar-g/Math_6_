import React from "react";
import { Link } from 'react-router-dom';
import { Box, Button, Card, CardContent } from '@mui/material';

function Mathexam() {
    const styles = {
        container: {
            textAlign: 'center',
            margin: '50px auto',
        },
        linkContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
        },
        linkButton: {
            width: '200px',
            maxWidth: '100%',
        },
        card: {
            marginBottom: '20px',
            width: '20%', // modifiez cette ligne pour régler la largeur
            marginLeft: 'auto',
            marginRight: 'auto',
        }
    };

    return (
        <Box sx={styles.container}>
            <Card sx={styles.card}>
                <CardContent>
                    <h2>Calcul</h2>
                    <Box sx={styles.linkContainer}>
                        {/* Calcul group */}
                        <Button variant="contained" component={Link} to="/Calculchap1" sx={styles.linkButton}>calcul de Prix </Button>
                        <Button variant="contained" component={Link} to="/Calculchap2" sx={styles.linkButton}> Les nombres décimaux  </Button>
                        <Button variant="contained" component={Link} to="/Calculchap3" sx={styles.linkButton}>Les fraction </Button>
                        <Button variant="contained" component={Link} to="/Calculchap4" sx={styles.linkButton}>Partages inégaux </Button>
                        <Button variant="contained" component={Link} to="/Calculchap5" sx={styles.linkButton}>proportionnalité</Button>
                        <Button variant="contained" component={Link} to="/Calculchap6" sx={styles.linkButton}>pourcentage</Button>
                        <Button variant="contained" component={Link} to="/Calculchap7" sx={styles.linkButton}>L’intérêt annuel </Button>
                        <Button variant="contained" component={Link} to="/Calculchap8" sx={styles.linkButton}>Les mouvements  </Button>
                    </Box>
                </CardContent>
            </Card>

            <Card sx={styles.card}>
                <CardContent>
                    <h2>Mesures</h2>
                    <Box sx={styles.linkContainer}>
                        {/* Mesures group */}
                        <Button variant="contained" component={Link} to="/Mesurechap1" sx={styles.linkButton}> Mesures de Longueur  </Button>
                        <Button variant="contained" component={Link} to="/Mesurechap2" sx={styles.linkButton}>  Mesures de Masses </Button>
                        <Button variant="contained" component={Link} to="/Mesurechap3" sx={styles.linkButton}>  Mesures de Capacité </Button>
                        <Button variant="contained" component={Link} to="/Mesurechap4" sx={styles.linkButton}>  Mesures d'aires </Button>
                        <Button variant="contained" component={Link} to="/Mesurechap5" sx={styles.linkButton}>   Mesures agraires </Button>
                        <Button variant="contained" component={Link} to="/Mesurechap6" sx={styles.linkButton}>   Les intervalles  </Button>
                        <Button variant="contained" component={Link} to="/Mesurechap7" sx={styles.linkButton}>   Masses  </Button>
                    </Box>
                </CardContent>
            </Card>

            <Card sx={styles.card}>
                <CardContent>
                    <h2>Géometrie</h2>
                    <Box sx={styles.linkContainer}>
                        {/* Géometrie group */}
                        <Button variant="contained" component={Link} to="/Géometriechap1" sx={styles.linkButton}>    LE CARRE  </Button>
                        <Button variant="contained" component={Link} to="/Géometriechap2" sx={styles.linkButton}>    LE RECTANGLE  </Button>
                        <Button variant="contained" component={Link} to="/Géometriechap3" sx={styles.linkButton}>    LE TRIANGLE  </Button>
                        <Button variant="contained" component={Link} to="/Géometriechap4" sx={styles.linkButton}>    LE LOSANGE  </Button>
                        <Button variant="contained" component={Link} to="/Géometriechap5" sx={styles.linkButton}>    LE PARALLELOGRAMME </Button>
                        <Button variant="contained" component={Link} to="/Géometriechap6" sx={styles.linkButton}>    LE CERCLE </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
        
    );
}

export default Mathexam;

