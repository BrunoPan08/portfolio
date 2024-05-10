import React from 'react';
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>Hi, <br/> I`m
                <img src={LogoTitle} alt='developer'></img>
                BrunoPan08 
                <br/>
                Developer Fullstack
            </h1>
            <h2>Frontend Developer / Javascript Expert / C# Expert</h2>
            <Link to="/contact" className='flat-button'></Link>
        </div>
    </div>
  )
}

export default Home