import React from "react";
import { Link } from 'react-router-dom';
import { Typography, Box, Button } from '@mui/material';


function ChoixExamen() {
    const styles = {
        container: {
            textAlign: 'center',
            margin: '50px auto',
        },
        title: {
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '20px',
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
    };

    return (
        <Box sx={styles.container}>
            <Typography variant="h1" sx={styles.title}>Le programme complet de sciences naturelles pour la 6ème année primaire, à votre disposition !</Typography>
            <br />
            <Box sx={styles.linkContainer}>
                <Button variant="contained" component={Link} to="/QCMchap1" sx={styles.linkButton}>CHAPITRE 1 </Button>
                <Button variant="contained" component={Link} to="/QCMchap2" sx={styles.linkButton}>CHAPITRE 2 </Button>
                <Button variant="contained" component={Link} to="/QCMchap3" sx={styles.linkButton}>CHAPITRE 3 </Button>
                <Button variant="contained" component={Link} to="/QCMchap4" sx={styles.linkButton}>CHAPITRE 4 </Button>
                <Button variant="contained" component={Link} to="/QCMchap5" sx={styles.linkButton}>CHAPITRE 5 </Button>
                <Button variant="contained" component={Link} to="/QCMchap6" sx={styles.linkButton}>CHAPITRE 6 </Button>
                <Button variant="contained" component={Link} to="/QCMchap7" sx={styles.linkButton}>CHAPITRE 7 </Button>
            </Box>
        </Box>
    );
}

export default ChoixExamen;
