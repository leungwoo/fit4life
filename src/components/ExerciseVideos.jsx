import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {

    if (!exerciseVideos.length) return "loading...";

    return (
        <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p='20px'>
            <Typography
                variant='h4'
                mb='30px'>
                Watch <span style={{ color: '#96D500', textTransform: 'capitalize' }}>{name}</span> exercise videos:
            </Typography>
            <Stack
                flexWrap='wrap'
                alignItems='center'
                sx={{
                    flexDirection: { lg: 'row' },
                    gap: { lg: '20px', xs: '0' }
                }}>
                {exerciseVideos?.slice(0, 6).map((item, index) => (
                    <a
                        key={index}
                        className='exercise-video'
                        href={`http://www.youtube.com/watch?v=${item.video.videoId}`}
                        target='_blank'
                        rel='noreferrer'>
                        <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                        <Box style={{ color: '#000' }}>
                            <h3> {item.video.channelName}</h3>
                            <h4>{item.video.description}</h4>
                            <h3 style={{ color: '#96D500' }}>{item.video.viewCountText}</h3>
                        </Box>
                    </a>
                ))}
            </Stack>

        </Box>
    );
};

export default ExerciseVideos;