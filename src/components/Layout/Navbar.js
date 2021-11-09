import { NavLink, Link } from 'react-router-dom';
import { ROUTE } from 'constants/routes.js';
import DesktopLogo from 'assets/Logo-desktop.svg';

const Navbar = () => {
  const navItems = [
    { name: '探索景點', type: 'spots' },
    { name: '節慶活動', type: 'activities' },
    { name: '品嚐美食', type: 'foods' },
  ];

  return (
    <nav className='border-b border-gray-300'>
      <div className='max-w-screen-xl mx-auto flex justify-between items-center h-20 px-12'>
        <Link to={ROUTE.HOME}>
          <img src={DesktopLogo} alt='TaiWalk' />
        </Link>

        <div>
          {navItems.map((navItem) => (
            <NavLink
              to={ROUTE.BUILD_EXPLORE_PATH({ type: navItem.type })}
              className='p-2.5 text-gray-700 font-normal'
              // className={['px-2.5', (navData) => navData.isActive && 'active-class']}
            >
              {navItem.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
