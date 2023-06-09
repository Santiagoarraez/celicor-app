import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Login } from "./pages/login.jsx";
import { Register } from "./pages/Register.jsx";
import { Profile } from "./pages/Profile.jsx";
import { Details } from "./pages/details.jsx";
import  About  from "./pages/about.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import ViewFormPay from "./pages/ViewFormPay";
import CartView from "./pages/CartView";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewFacture from "./pages/ViewFacture";
import TerminoCondiciones from "./pages/TerminoCondiciones";



//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <ToastContainer />
                    <Navbar />
                    <Routes>
                        <Route element={<Login />} path="/login" />
                        <Route element={<Register />} path="/register" />
                        <Route element={<Home />} path="/" />
                        <Route element={<Profile />} path="/profile" />
                        <Route element={<Details />} path="/details/:id" />
                        <Route element={<ViewFormPay />} path="/viewpay" />
                        <Route element={<CartView />} path="cartview" />
                        <Route element={<ViewFacture />} path="viewfacture" />
                        <Route element={<About />} path="/about" />
                        <Route element={<TerminoCondiciones />} path="/terminoscondiciones" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </>
    );
};

export default injectContext(Layout);
