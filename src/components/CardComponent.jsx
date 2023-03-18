import React from 'react';
import CardItem from './Card';

export default function CardComponent(props) {
    const { internships } = props.internshipsData;
    return (
        <div className='container'>
            <div className='row'>
                {internships.map((internship, index) => (
                    <div className='col-md-4 my-3' keys={internships.id}>
                        <CardItem internship={internship} key={index} />
                    </div>
                ))}
            </div>
        </div>
    );
}
