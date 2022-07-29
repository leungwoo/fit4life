import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [textSize, setTextSize] = useState("40px");
    const [textColor, setTextColor] = useState("#000");
    const [buttonText, setButtonText] = useState("Grow");
    const [showText, setShowText] = useState(true);

    // useEffect = () => {
    //     console.log("mounting");
    // };


    return (
        <Stack
            justifyContent="center"
            alignItems='center'
            pb='20px' >
            <Typography
                fontWeight={700}
                mb='50px'
                textAlign='center'
                sx={{ fontSize: { lg: '44px', xs: '30px' } }}>
                <h1 style={{ fontSize: textSize, color: textColor }}>Hit Grow Blue to make me Grow</h1>
            </Typography>
            <Typography><h1>Hit Red button to don't show this text</h1></Typography>
            <Box spacing={3} >
                <Button
                    onClick={() => {
                        setTextSize(textSize === '40px' ? '100px' : '40px');
                        setButtonText(buttonText === 'Grow' ? 'Shrink' : 'Grow');
                        setTextColor(textColor === '#000' ? '#95D600' : '#000');
                    }}
                    variant='contained'
                    alignItem='center'> {buttonText}
                </Button>
                <Button
                    variant='contained'
                    color="error"
                    onClick={() => {
                        setShowText(!showText);
                    }}>
                    Hide text
                </Button>

            </Box>

        </Stack>

    );
};

export default Footer;