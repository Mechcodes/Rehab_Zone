import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/Components/Header";

const AppLayout = ()=> {
    return (
        <Header/>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>);