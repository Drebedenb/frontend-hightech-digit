import React, {useState} from 'react';
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import Carousel from "../components/carousel/Carousel";

const Main = () => {
    let [cards, setCards] = useState([
        {id: 1, name: "phone", price: 500},
        {id: 2, name: "notebook", price: 1000},
        {id: 3, name: "pc", price: 1000},
        {id: 4, name: "digital watch", price: 200}
    ]);

    return (
        <div>
            <Header/>
            <Carousel/>
            {(cards.map(item => <Card post={item} key={item.id}/> ) ) }
        </div>
    );
};

export default Main;