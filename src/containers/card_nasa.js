import React from 'react';
import './card_nasa.css';

const CardNasa = ({title, description, image, date }) =>{

	return(
			<div className="card">
				<div className="text-t">
					<h5 className="titleNasa">{title}</h5>
				</div>
				<div className="contentImage">
					<img className="image" src={image} />
				</div>
				<h6 className="date">
					{date}
				</h6>
				<p className="description">
					{description}
				</p>
			</div>
		)
}

export default CardNasa;