import { Stack, Typography } from '@mui/material';
import React from 'react';
import icon from '../assets/icons/gym.png';

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
    return (
        <Stack
            type='button'
            alignItems='center'
            justifyContent='center'
            className='bodyPart-card'
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
            }}
            sx={{
                borderTop: bodyPart === item ? '10px solid #95D600' : '',
                backgroundColor: '#000',
                borderRadius: '0 0 20px 20px',
                width: '320px',
                height: '280px',
                cursor: 'pointer',
                gap: '40px'
            }}

        >
            <img src={icon} alt='dumbell' style={{ width: '50px', height: '50px', }} />
            <Typography
                fontSize='24px'
                fontWeight='bold'
                color='#95D600'
                textTransform='capitalize'>{item}</Typography>
        </Stack>
    );
};

export default BodyPart;