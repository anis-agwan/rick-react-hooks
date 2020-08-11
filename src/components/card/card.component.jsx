import React from "react";
import './card.styles.css';

export const Card = (props) => {
    return (
    <div className='card-container'>
        <img alt='episode' className='card-img-top' src = {'https://vignette.wikia.nocookie.net/rickandmorty/images/4/4b/S1e1_Rick-and-morty.png/revision/latest/scale-to-width-down/1000?cb=20160904220006'} />
        <h1 className='h1'>{props.episode.name}</h1>
        <p className="p">Episode No: {props.episode.episode}</p>
        <p className="p">Aired: {props.episode.air_date}</p>
        <p className="p">Created on: {props.episode.created}</p>
    </div>
    )
}