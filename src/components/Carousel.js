import React from 'react';

function Carousel(props) {

	const indicatorsJSX = [<li key='0' data-target="#carousel" data-slide-to="0" className="active"></li>];
	for (let i = 1 ; i < props.children.length ; i++)
	{
		indicatorsJSX.push(<li data-target="#carousel" data-slide-to={i} key={i}></li>);
	}

	const innerJSX = props.children.map((item, index) =>
		<div key={index} className={index == 0 ? 'carousel-item active' : 'carousel-item'}>
			{item}
		</div>
	)

	const className = props.theme ? `carousel slide bg-${props.theme.primary}` : `carousel slide bg-primary`;

	return (
		<div id="carousel" className={className} data-ride="carousel" data-interval="false">
			<ol className="carousel-indicators">
				{indicatorsJSX}
			</ol>
			<div className="carousel-inner">
				{innerJSX}
			</div>
			<a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="sr-only">Previous</span>
			</a>
			<a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="sr-only">Next</span>
			</a>
		</div>
	);
}

export default Carousel;