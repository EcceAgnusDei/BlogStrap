import React from 'react';

import Carousel from '../components/Carousel.js';
import reactLogo from '../img/logo-react.svg';
import bootstrapLogo from '../img/logo-bootstrap.png';
import fake from '../img/fake.png';
import Jumbotron from '../components/Jumbotron.js';
import { jumbotron } from '../libs/content.js';


function Home(props) {

	const sliderStyle = {
		height: 400
	}

	const mediaStyle = {
		height: 70
	}

	const cursiveStyle = {
		fontFamily: "'Dancing Script', cursive",
		fontSize: '3em'
	}

	return (
		<React.Fragment>
			<h1>Home</h1>
			<Carousel>
				<div style={sliderStyle} className="d-flex justify-content-center">
					<div className="media align-self-center w-75">
						<img src={reactLogo} className="align-self-center" style={mediaStyle} alt=""/>
						<img src={bootstrapLogo} className="align-self-center mr-3" style={mediaStyle} alt=""/>
						<div className="media-body">
							<h1>Welcome To My Blog!</h1>
							<p>This site is only developed using React combined Bootstrap classes.</p>
						</div>
					</div>
				</div>
				<div style={sliderStyle} className="d-flex justify-content-center">
					<div className="media align-self-center w-75">
						<img src={fake} className="align-self-center mr-3" style={mediaStyle} alt=""/>
						<div className="media-body">
							<p>Not a real one though... Only jsonPlaceHolder fetching!
							Juste for making the point that i can make something with my hands.</p>
						</div>
					</div>
				</div>
				<div style={sliderStyle} className="d-flex justify-content-center">
					<div className="align-self-center w-75">
						<p>Well, if you'r looking for something to read, you're in the wrong place...
						Unless you speak latin!</p>
						<p style={cursiveStyle}>Lorem Ipsum...</p>
					</div>
				</div>
			</Carousel>
			<Jumbotron>
				{jumbotron}
			</Jumbotron>
		</React.Fragment>
	);
}

export default Home;