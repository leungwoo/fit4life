import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, name, gifUrl, target, equipment } = exerciseDetail;

    return (
        <Stack
            gap='60px'
            sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
            <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
            <Stack
                sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography variant='h3' textTransform="capitalize" sx={{ color: '#95D600' }}>
                    {name}
                </Typography>
                <Typography variant='h6'>
                    {name} is one of the best exercises to target your {target}
                </Typography>
                <Typography variant='h5'>
                    Equipment needed: {equipment}
                </Typography>


            </Stack>
        </Stack>

    );
};

export default Detail;