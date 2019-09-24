import React from 'react';
import { connect } from 'react-redux';

import Carousel from '../components/Carousel.js';
import reactLogo from '../img/logo-react.svg';
import bootstrapLogo from '../img/logo-bootstrap.png';
import fake from '../img/fake.png';
import Jumbotron from '../components/Jumbotron.js';
import { jumbotron } from '../libs/content.js';


function Home(props) {

	const sliderStyle = {
		height: 500
	}

	const mediaStyle = {
		height: 'auto'
	}

	const cursiveStyle = {
		fontFamily: "'Dancing Script', cursive",
		fontSize: '3em',
		textShadow: 'rgba(0,0,0,0.5) 1px 1px 2px'
	}

	return (
		<React.Fragment>
			<h1 data-testid="title">Home</h1>
			<Carousel theme={props.theme}>
				<div style={sliderStyle} className="d-flex justify-content-center">
					<div className="media align-self-center w-75 row">
						<img src={reactLogo} className="align-self-center col-6 col-md-2" style={mediaStyle} alt=""/>
						<img src={bootstrapLogo} className="align-self-center col-6 col-md-2" style={mediaStyle} alt=""/>
						<div className="media-body col-12 col-md-8">
							<h1>Welcome To My Blog!</h1>
							<p>This site is only developed using React combined with Bootstrap classes.</p>
						</div>
					</div>
				</div>
				<div style={sliderStyle} className="d-flex justify-content-center">
					<div className="media align-self-center w-75 row align-items-center">
						<img src={fake} className="align-self-center col-12 col-md-4" style={mediaStyle} alt=""/>
						<div className="media-body col-12 col-md-8">
							<p>Not a real one though... Only jsonPlaceHolder fetching!
							Juste for making the point that i can make something with my hands.</p>
						</div>
					</div>
				</div>
				<div style={sliderStyle} className="d-flex justify-content-center">
					<div className="align-self-center w-75">
						<p>Well, if you'r looking for something to read, you're in the wrong place...
						Unless you speak latin!</p>
						<p style={cursiveStyle} className={props.theme && `text-${props.theme.secondary}`}>Lorem Ipsum...</p>
					</div>
				</div>
			</Carousel>
			<Jumbotron theme={props.theme}>
				{jumbotron}
			</Jumbotron>
		</React.Fragment>
	);
}

const mapStateToProps = state => {
	return {
		theme: state.theme
	}
}

export default connect(mapStateToProps, null)(Home);