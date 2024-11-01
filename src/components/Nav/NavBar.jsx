import { useState } from "react";
import Link from "../Link/Link";
import { IoMenu } from "react-icons/io5";
import { GrClose } from "react-icons/gr";


const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/profile/:username', name: 'Profile' }
    ];

    return (
        <nav className="bg-yellow-200 text-black p-6">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <GrClose className="text-3xl"></GrClose> : <IoMenu className="text-3xl"></IoMenu>
                }
            </div>
            <ul className={`md:flex duration-1000 absolute md:static bg-yellow-200 p-6 md:p-0 ${open?'top-20':'-top-60'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;