import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Product from "./components/Product";
import { ProductState } from "./store";
import "./App.scss";

export interface StateProps {
    product: ProductState;
    getProduct: Function;
}

function App({ product, getProduct }: StateProps) {
    return (
        <div>
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Product product={product} getProduct={getProduct}/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
