import {useState, useEffect} from "react";
import {GiphyFetch} from '@giphy/js-fetch-api'
import { Gif } from '@giphy/react-components'
import '../styles/Images.css'

const giphy = new GiphyFetch('ConYOrMFia43mKt29i99ZRfrggPBwvr5');
const {data: gifs} = await giphy.trending({limit: 12}); //change to 12 later

export default function Images({count, setCount}) {
    
    console.log(gifs);
    const clickCard = () => {
        console.log("clicked");
        const newCount = count + 1;
        setCount(newCount);
    }


    return(
        <div className="cards">
            <Card gif={gifs[0]} title={gifs[0].title} clickCard={clickCard} />
            <Card gif={gifs[1]} title={gifs[1].title} clickCard={clickCard} />
            <Card gif={gifs[2]} title={gifs[2].title} clickCard={clickCard} />
            <Card gif={gifs[3]} title={gifs[3].title} clickCard={clickCard} />
            <Card gif={gifs[4]} title={gifs[4].title} clickCard={clickCard} />
            <Card gif={gifs[5]} title={gifs[5].title} clickCard={clickCard} />
            <Card gif={gifs[6]} title={gifs[6].title} clickCard={clickCard} />
            <Card gif={gifs[7]} title={gifs[7].title} clickCard={clickCard} />
            <Card gif={gifs[8]} title={gifs[8].title} clickCard={clickCard} />
            <Card gif={gifs[9]} title={gifs[9].title} clickCard={clickCard} />
            <Card gif={gifs[10]} title={gifs[10].title} clickCard={clickCard} />
            <Card gif={gifs[11]} title={gifs[11].title} clickCard={clickCard} />
        </div>
    );
}

function Card({gif,title,clickCard}) {
    return(
        <div className="card" onClick={clickCard}>
            <div className="preventLink">
                <Gif gif={gif} width={150} height={150} />
            </div>
            {title}
        </div>
        
    );
}