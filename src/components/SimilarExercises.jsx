import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';

import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    return (
        <Stack justifyContent='center'
            alignItems='center'
            mt='10px'
            padding='60px'>
            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
                Similar <span style={{ color: '#95D600' }}>Target Muscle</span>  exercises
            </Typography>
            <Box
                width='100%'
                position='relative'
                sx={{ p: '20px', position: 'relative', width:{xs:'387px',lg:'100%'}}}>
                {targetMuscleExercises.length ?
                    <HorizontalScrollbar data={targetMuscleExercises} />
                    : <Loader />}

            </Box>
            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
                Similiar <span style={{ color: '#96D500' }}> Equipment</span> exercises
            </Typography>
            <Box
                sx={{ position: 'relative', width:{xs:'387px',lg:'100%'}, p: '20px' }}>
                {equipmentExercises.length ?
                    <HorizontalScrollbar data={equipmentExercises} />
                    : <Loader />}

            </Box>

        </Stack>
    );
};

export default SimilarExercises;