import {useState, useEffect} from "react";
import {GiphyFetch} from '@giphy/js-fetch-api'
import { Gif } from '@giphy/react-components'
import '../styles/Images.css'

export default function Images({count, setCount, /*bestCount*/}) {

    const [cards, setCards] = useState();

    useEffect(() => {
        async function fetchData() {
            const giphy = new GiphyFetch('ConYOrMFia43mKt29i99ZRfrggPBwvr5');
            const {data: gifs} = await giphy.trending({limit: 12}); 
            const ifClicked = [false,false,false,false,false,false,false,false,false,false,false,false];
            const dat = [];
            for(let i = 0; i < 12; i++) {
                dat.push({"gif": gifs[i], "clicked": ifClicked[i]});
            }
            setCards(dat);
        }
        fetchData();
    }, []);

    const cardChange = (gif) => {
        const newCards = cards.map(card => card.gif === gif ? {...card, clicked: true} : card);
        setCards(newCards);
    }

    const clickCard = (gif) => {
        const newCount = count + 1;
        if(cards[cards.indexOf(cards.find(x => x.gif === gif))].clicked == true) {
            setCount(0);
            const newCards = cards.map(card => gif === gif ? {...card, clicked: false} : card);
            setCards(newCards);
        }
        else {
            setCount(newCount);
            shuffleCards();
            cardChange(gif);
        }
    }

    const shuffleCards = () => {
        const tempCards = cards;
        
        for(let i = tempCards.length-1; i>0; i--) {
            const j = Math.floor(Math.random() * (i+1));
            const temp = tempCards[i];
            tempCards[i] = tempCards[j];
            tempCards[j] = temp;
        }

        setCards(tempCards);
    }
    
    if(cards == undefined) {
        return(<></>);
    }
    else {
        return(
            <div className="cards">
                <Card gif={cards[0].gif} title={cards[0].gif.title} clickCard={clickCard} />
                <Card gif={cards[1].gif} title={cards[1].gif.title} clickCard={clickCard} />
                <Card gif={cards[2].gif} title={cards[2].gif.title} clickCard={clickCard} />
                <Card gif={cards[3].gif} title={cards[3].gif.title} clickCard={clickCard} />
                <Card gif={cards[4].gif} title={cards[4].gif.title} clickCard={clickCard} />
                <Card gif={cards[5].gif} title={cards[5].gif.title} clickCard={clickCard} />
                <Card gif={cards[6].gif} title={cards[6].gif.title} clickCard={clickCard} />
                <Card gif={cards[7].gif} title={cards[7].gif.title} clickCard={clickCard} />
                <Card gif={cards[8].gif} title={cards[8].gif.title} clickCard={clickCard} />
                <Card gif={cards[9].gif} title={cards[9].gif.title} clickCard={clickCard} />
                <Card gif={cards[10].gif} title={cards[10].gif.title} clickCard={clickCard} />
                <Card gif={cards[11].gif} title={cards[11].gif.title} clickCard={clickCard} />
            </div>
        );
    }

}

function Card({gif,title,clickCard}) {
    return(
        <div className="card" onClick={() => clickCard(gif)}>
            <div className="preventLink">
                <Gif gif={gif} width={150} height={150} />
            </div>
            {title}
        </div>
        
    );
}