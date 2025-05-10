import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from 'app/store/store';
import { ClientsNavbar } from 'widgets/ClientsNavbar';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export const NavbarSwitcher = () => {
    // для отображения навбара клиента в ЛК token = true
    // const token = useSelector((state: RootState) => state.auth.token);
    const token = true;
    const location = useLocation();

    if (token && location.pathname === RoutePath.clients) {
        return <ClientsNavbar />;
    }

    return <Navbar />;
};
