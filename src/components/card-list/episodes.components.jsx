import React from 'react';
import { Card } from "../card/card.component";
import "./card-list.styles.css";

export const Episodes = (props) => {
    if(props.loading) {
        return <h2>Loading..</h2>
    }

    return <div className="card-list">
        {props.episodes.map(episode => (
          <Card key={episode.id} episode={episode}/>
        ))} 
    </div>
}