import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="container__navBar">
            <NavLink to='/'><Button variant="dark">Accounts</Button></NavLink>
            <NavLink to='/profiles'><Button variant="dark">Profiles</Button></NavLink>{' '}
            <NavLink to='/campaigns'><Button variant="dark">Campaigns</Button></NavLink>{' '}
        </div>


    )
}