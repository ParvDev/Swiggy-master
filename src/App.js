import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";


const AppLayout = () => {
    return (
        // React.Fragment
        <> 
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
};

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/about",
                element: <About/>,
                children: [
                    {
                        path: "profile",
                        element: <Profile />,
                    },
                ],
            },
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restuarant/:resId",
                element: <RestaurantMenu/>,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);