import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const CardList = props => {
return <div className='card-list'>
     { props.episodes.map(episode => (
          <Card key={episode.id} episode={episode}/>
        ))} 
    </div>;
};