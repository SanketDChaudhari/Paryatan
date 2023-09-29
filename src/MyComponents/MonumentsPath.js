import React from 'react';
import './MonumentsPath.css';
import monuments from '../Images/monuments.png';
import AllMonuments from './AllMonuments';
import { useNavigate } from 'react-router-dom'
const MonumentsPath = () => {

  const navigate = useNavigate();

  const navigateToAbout = () => {
    // 👇️ navigate to /Monuments
    navigate('/AllMonuments');
  };

  return (
    <div className='my-5'>
      <div className='above-image'>
        <h4 className='font-monospace fw-bold' style={{width:"40vw"}}>Rich in culture and diversity, India is home to some of the finest historical monuments in the world</h4>
        <button type='button' className='btn btn-primary fw-bolder' onClick={navigateToAbout}>Visit All</button>
      </div>
      {/* <img src={monuments} className='monuments-image'/> */}
      <img src="https://4.bp.blogspot.com/-yaBaq_EB6sM/WSEfaOoMsuI/AAAAAAAAB78/ua-y4NFpjb8SG2P-gbu6ktveDA2pXJDggCEw/s1600/Bibi%2BKa%2BMaqbara%2BSunset%2B02.jpg" className='monuments-image'/>
    </div>
  )
}

export default MonumentsPath
