import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Stack } from '@mui/material';
import Logo from '../assets/images/Logo-2.png';
import facebook from '../assets/icons/goldfacebook.png';
import instagram from '../assets/icons/goldinstagram.png';


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
                gap='15px'
                fontSize='24px'
                alignItems='center'
            >
                <Link to='/' style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '2px solid #95D600' }}> Home</Link>
                <a href='#exercises' style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
                <Stack direction='row'
                    alignItems="center"
                >
                    <a href='https://reactjs.org/' target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt='facebook' style={{ width: '80px', height: '80px' }} />
                    </a>
                    <a href='https://reactjs.org/' target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt='instagram' style={{ width: '90px', height: '90px' }} />
                    </a>
                </Stack>

            </Stack>
        </Stack>

    );
};

export default Navbar;