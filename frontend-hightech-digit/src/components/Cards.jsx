import React, {useState} from 'react';
import Card from "./Card/Card";

const Cards = () => {
    let [cards, setCards] = useState([
        {id: 1, name: "phone", price: 500},
        {id: 2, name: "notebook", price: 1000},
        {id: 3, name: "pc", price: 1000},
        {id: 4, name: "digital watch", price: 200}
    ]);

    let [newCard, setCard] = useState({name: "", price: ""});

    function addCard(card) {
        setCards([card, ...cards]);
    }

    function deleteCard(id) {
        setCards(cards.filter(item => item.id !== id));
    }

    function handler(e) {
        e.preventDefault();
        addCard({id: Date.now(), ...newCard});
        setCard({name: "", price: ""});
    }
    return (
        <div>
            <h1 className="mt-5">List of products</h1>
            <form className="mt-5">
                <input value={newCard.name} onChange={event => setCard({...newCard, name: event.target.value})}
                       className="form-control form-control-white mb-3"
                       placeholder="Name" aria-label="Search"/>
                <input value={newCard.price} onChange={event => setCard({...newCard, price: event.target.value})}
                       className="form-control form-control-white mb-3"
                       placeholder="Price" aria-label="Search"/>
                <button className="btn btn-outline-secondary btn-lg px-4" type={"submit"}
                        onClick={event => handler(event)}>
                    Send
                </button>
            </form>
            {cards.map(item => <Card post={item} deleteCard={deleteCard} key={item.id}/>)}
        </div>
    );
};

export default Cards;