import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import Header from "./Header";

function App() {
    return (
        <React.Fragment>
            <div className="ui container">
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path={"/"} element={<StreamList/>}/>
                        <Route path={"/streams/new"} element={<StreamCreate/>}/>
                        <Route path={"/streams/edit/:id"} element={<StreamEdit/>}/>
                        <Route path={"/streams/delete"} element={<StreamDelete/>}/>
                        <Route path={"/streams/show"} element={<StreamShow/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </React.Fragment>

    );
}

export default App;
