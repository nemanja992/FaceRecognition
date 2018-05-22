import React from 'react';
import Tilt from 'react-tilt';
import brain from './icons8-brain-64.png';
import './logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2 ma3" options={{ max : 55 }} style={{ height: 250, width: 190 }} >
			 	<div className="Tilt-inner pa3">
			 	 	<img style={{width:'250px', height:'190px'}} src={brain} alt="logo brain"/> 
			 	</div>
			</Tilt>
		</div>
		);
}

export default Logo;