import * as React from 'react';
import Accounts from './Pages/Accounts/Accounts';
import Profiles from './Pages/Profiles/Profiles';
import Campaigns from './Pages/Campaigns/Campaigns';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './Containers/Header';
import Footer from './Containers/Footer';


const Root = () => {
    return (
        <div className='wrapper'>
            <Header />
            <div className='container'>
                <NavBar />
                <Outlet />
            </div>
            <Footer />
        </div>

    )
}


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index element={<Accounts />} />
            <Route path='/profiles' element={<Profiles />} />
            <Route path='/campaigns' element={<Campaigns />} />
        </Route>
    )
)

export default function App() {

    return (
        <RouterProvider router={router} />
    )
}
