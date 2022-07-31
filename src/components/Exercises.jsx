import React, { useEffect, useState } from 'react';
import { Pagination, Box, Typography, Stack } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 3;

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];
            if (bodyPart === 'all') {
                exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            } else {
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
            }
            setExercises(exercisesData);
        };
        fetchExercisesData();
    }, [bodyPart]);

    //Pagination
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const paginate = (event, value) => {
        setCurrentPage(value);
    };
    window.scrollTo({ top: 1800, behavior: 'smooth' });

    console.log(exercises);
    return (
        <Box
            id='exercises'
            sx={{ mt: { lg: '110px' } }}
            mt='50px'
            padding='20px'
        >
            <Typography variant='h2' mb='46px' >
                Showing <span style={{
                    color: "#95D600", fontWeight:
                        'bold'
                }}>Results</span> from Search
            </Typography>
            <Stack direction='row'
                flexWrap='wrap'
                justifyContent='center'
                sx={{ gap: { lg: '110px', xs: '50px' } }}
            >
                {currentExercises.map((exercise, index) => (

                    <ExerciseCard key={index} exercise={exercise} />))}
            </Stack>
            <Stack mt='100px' alignItems='center'>
                {exercises.length > 9 && (
                    <Pagination
                        variant="outlined"
                        shape="circular"
                        defaultPage={1}
                        color="standard"
                        size='large'
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate} />
                )}

            </Stack>
        </Box>
    );
};

export default Exercises;