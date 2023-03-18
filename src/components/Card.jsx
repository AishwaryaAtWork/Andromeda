import React from 'react';
import './Card.css';

export default function Card(props) {
    const { image, title, description, link } = props.internship;
    return (
        <div className="card mt-5 shadow" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={link} style={{ backgroundColor: '#5333ed', color: 'white', borderRadius: '20px' }} className="btn mx-2 my-2">Read More</a>
            </div>
        </div>
    );
}
