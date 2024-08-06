import React from 'react';
import './CardComponent.css'; // Import custom CSS


function CardComponent (props) {
    return (
        <div className="card position-relative">
            <img 
                src={props.image} 
                className="card-img-top" 
                alt={props.title} 
            />
            <div className="overlay d-flex align-items-center justify-content-center">
                <div className="text-center">
                    <h5 className="text-white">{props.title}</h5>
                    <p className="text-white">{props.description}</p>
                    <a href={props.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        Go to Site
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CardComponent;
