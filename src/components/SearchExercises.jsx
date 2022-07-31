import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, Button, TextField } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setBodyPart, setExercises, bodyPart }) => {
    const [search, setSearch] = useState('');

    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all', ...bodyPartsData]);
        };

        fetchExercisesData();
    }, []);

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            const searchedExercises = exercisesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                    || item.target.toLowerCase().includes(search)
                    || item.equipment.toLowerCase().includes(search)
                    || item.bodyPart.toLowerCase().includes(search),
            );

            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

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
                Search for Awesome Exercises <br />to Perform
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
                    placeholder='Search for a exercise'
                    type='text'
                />
                <Button className='search-btn'
                    onClick={handleSearch}
                    sx={{
                        backgroundColor: '#000',
                        color: '#95D600',
                        textTransform: 'none',
                        width: { lg: '175px', xs: '80px' },
                        fontSize: { lg: '20px', xs: '14px' },
                        fontWeight: '600',
                        position: 'absolute',
                        right: '0',
                        height: '56px'
                    }}
                >Search</Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScrollbar
                    data={bodyParts}
                    bodyPart={bodyPart}
                    setBodyPart={setBodyPart}
                    isBodyParts
                />
            </Box>
        </Stack>
    );
};

export default SearchExercises;