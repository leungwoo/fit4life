import React, { useEffect, useState } from 'react';
import { Pagination, Box, Typography, Stack } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    console.log(exercises);
    return (
        <Box
            id='exercises'
            sx={{ mt: { lg: '110px' } }}
            mt='50px'
            padding='20px'
        >
            <Typography variant='h2' mb='46px' >
                Showing<span style={{
                    color: "#95D600", fontWeight:
                        'bold'
                }}>Results</span>
            </Typography>
            <Stack direction='row'
                flexWrap='wrap'
                justifyContent='center'
                sx={{ gap: { lg: '110px', xs: '50px' } }}
            >
                {exercises.map((exercise, index) => (

                    <ExerciseCard key={index} exercise={exercise} />))}
            </Stack>
        </Box>
    );
};

export default Exercises;