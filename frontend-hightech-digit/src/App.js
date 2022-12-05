import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login/Login";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="*" element={<Main/>}/>
                    <Route path="/*" element={<Main/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
