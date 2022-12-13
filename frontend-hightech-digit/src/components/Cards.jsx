import React, {useState} from 'react';
import Card from "./Card/Card";
import MySelect from "../UI/MySelect/MySelect";
import Form from "./Form/Form";

const Cards = () => {
    let [cards, setCards] = useState([
        {id: 1, name: "phone", price: 500},
        {id: 2, name: "notebook", price: 1000},
        {id: 3, name: "pc", price: 1000},
        {id: 4, name: "digital watch", price: 200}
    ]);

    function addCard(card) {
        setCards([card, ...cards]);
}

    function deleteCard(id) {
        setCards(cards.filter(item => item.id !== id));
    }

    function handler(e, newCard) {
        e.preventDefault();
        addCard({id: Date.now(), ...newCard});
    }
    return (
        <div className="w-50">
            <h1 className="mt-5">List of products</h1>
            <Form handler={handler}/>
            <MySelect/>
            {cards.map(item => <Card post={item} deleteCard={deleteCard} key={item.id}/>)}
        </div>
    );
};

export default Cards;