import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
      <Stack direction='row'>
        <Button sx={{
          ml: '21px',
          color: 'black',
          background: '#ffa9a9',
          fontSize: '14px',
          borderRadius: '20px',
          textTransform: 'capitalize',

        }}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{
          ml: '21px',
          color: 'black',
          background: '#95D600',
          fontSize: '14px',
          borderRadius: '20px',
          textTransform: 'capitalize'
        }}>
          {exercise.target}
        </Button>
      </Stack>
      <Typography ml='21px'
        fontWeight='bold'
        color='#000'
        mt='10px'
        pb='10px'
        textTransform='capitalize'
        fontSize='20px'
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;