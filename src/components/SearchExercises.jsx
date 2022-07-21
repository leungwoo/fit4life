import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, Button, TextField } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = () => {
    const [search, setSearch] = useState('');
    const [exercises, setExercises] = useState([]);
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExerciseData = async () => {
            const bodyPartsData = await fetchData
                ('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all', ...bodyPartsData]);
        };
        fetchExerciseData();
    }, []);

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData
                ('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            console.log(exercisesData);

            const searchedExercises = exercisesData.filter((exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            );
            setSearch('');
            setExercises(searchedExercises);
        }
    };

    return (
        <Stack
            justifyContent='center'
            alignItems='center'
            mt='20px'
            padding='20px'>

            <Typography
                fontWeight={700}
                mb='50px'
                textAlign='center'
                sx={{ fontSize: { lg: '44px', xs: '30px' } }}>
                Search for Awesome Exercises to Perform
            </Typography>
            <Box position='relative' mb='72px'>
                <TextField
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px'
                        },
                        width: { lg: '800px', xs: '350px' },
                        backgroundColor: '#FFFF',
                        borderRadius: '40px'
                    }}
                    height='76px'
                    value={search}
                    onChange={(event) => setSearch(event.target.value.toLowerCase())}
                    placeholder='Search for exercise'
                    type='text'
                />
                <Button className='search-btn'
                    onClick={handleSearch}
                    sx={{
                        backgroundColor: 'black',
                        color: '#95D600',
                        textTransform: 'none',
                        width: { lg: '175px', xs: '80px' },
                        fontSize: { lg: '20px', xs: '14px' },
                        position: 'absolute',
                        right: '0',
                        height: '56px'
                    }}
                >Search</Button>
            </Box>
            <Box>
                <HorizontalScrollbar sx={{ position: 'relative', width: '100%', p: '20px' }} data={bodyParts} />
            </Box>
        </Stack>
    );
};

export default SearchExercises;