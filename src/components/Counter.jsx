import {useState} from "react";

export default function Counter({count}) {

    const [bestCount, setBestCount] = useState(0);

    if(count > bestCount) {
        setBestCount(count);
    }

    return(
        <div className="counter">
            <div>Score: {count}</div>
            <div>High Score: {bestCount}</div>
        </div>
    );
}