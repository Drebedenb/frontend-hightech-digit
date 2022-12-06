import React from 'react';
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import Carousel from "../components/carousel/Carousel";

const Main = () => {
    return (
        <div>
            <Header/>
            <Carousel/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
};

export default Main;