import React, { useState, useEffect } from 'react';
import { TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const units = [
    { name: 'KG', conversionRate: 1000 },
    { name: 'HG', conversionRate: 100 },
    { name: 'Dag', conversionRate: 10 },
    { name: 'G', conversionRate: 1 },
    { name: 'DG', conversionRate: 0.1 },
    { name: 'CG', conversionRate: 0.01 },
    { name: 'MG', conversionRate: 0.001 },
];

function M2A3() {
    const [input, setInput] = useState(0);
    const [breakdown, setBreakdown] = useState([]);

    useEffect(() => {
        const newBreakdown = units.map(unit => ({
            ...unit,
            value: input / unit.conversionRate,
        }));

        setBreakdown(newBreakdown);
    }, [input]);

    return (
        <div>
            <TextField 
                variant="outlined" 
                type="number" 
                label="Grammes" 
                value={input}
                onChange={(e) => setInput(e.target.value)} 
            />

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {units.map(unit => (
                                <TableCell key={unit.name}>{unit.name}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {breakdown.map(unit => (
                                <TableCell key={unit.name}>{unit.value}</TableCell>
                            ))}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default M2A3;




