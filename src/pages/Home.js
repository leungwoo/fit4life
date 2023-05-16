import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { fetchData, youtubeOptions } from '../utils/fetchData';

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import ExerciseVideos from '../components/ExerciseVideos';


const Home = () => {
    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);
    const [exerciseVideos, setExerciseVideos] = useState([]);


    useEffect(() => {
        const fetchExercisesVideo = async () => {
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
            const exerciseVideosData = await fetchData
                (`${youtubeSearchUrl}/search?query=squat`, youtubeOptions);
            setExerciseVideos(exerciseVideosData.contents);
        };
        fetchExercisesVideo();
    }, []);



    return (
        <Box>
            <HeroBanner />
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
            <ExerciseVideos exerciseVideos={exerciseVideos} setExerciseVideos={setExerciseVideos} />
        </Box>
    );
};

export default Home;