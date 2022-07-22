import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Stack } from '@mui/material';
import Logo from '../assets/images/Logo-2.png';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';


const Navbar = () => {
    return (

        <Stack direction='row' justifyContent='space-between' alignItems='center'
            sx={{
                gap: { sm: '100px', xs: '40px' },
                mt: { sm: '32px', xs: '20px' },
                justifyContent: 'none',
                px: '20px'
            }} >
            <Link to='/'>
                <img src={Logo} alt="logo"
                    style={{ width: '100px', height: '100px', margin: '0 20px' }} />
            </Link>
            <Stack direction="row"
                gap='30px'
                fontSize='24px'
                alignItems='flex-end'>
                <Link to='/' style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '2px solid #95D600' }}> Home</Link>
                <a href='#exercises' style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>

                <a href='https://reactjs.org/' target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt='facebook' style={{ width: '40px', height: '40px' }} />
                </a>
                <a href='https://reactjs.org/' target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt='instagram' style={{ width: '40px', height: '40px' }} />
                </a>
            </Stack>
        </Stack>

    );
};

export default Navbar;