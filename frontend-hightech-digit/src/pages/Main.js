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
    let id = 4;
    let [name, setName] = useState("");
    let [price, setPrice] = useState("");


    function addCard(name, price) {
        setCards(cards.concat(cards.unshift({id: id + 1, name: name, price: price})));
    };
    function deleteCard(id) {

    };
    function handler(e){
        e.preventDefault();
        addCard(name, price);
        name = setName("");
        price = setPrice("");
    };
    return (
        <div>
            <Header/>
            <Carousel/>
            <h1 className="mt-5">List of products</h1>
            <form className="mt-5">
                <input value={name} onChange={event => setName(event.target.value)} className="form-control form-control-white mb-3"
                       placeholder="Name" aria-label="Search"/>
                <input value={price} onChange={event => setPrice(event.target.value)} className="form-control form-control-white mb-3"
                       placeholder="Price" aria-label="Search"/>
                <button className="btn btn-outline-secondary btn-lg px-4" type={"submit"} onClick={event => handler(event)}>
                    Send
                </button>
            </form>
            {(cards.map(item => <Card post={item} key={item.id}/> ) ) }
        </div>
    );
};

export default Main;