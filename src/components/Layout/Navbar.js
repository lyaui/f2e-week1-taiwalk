import { NavLink, Link } from 'react-router-dom';
import { ROUTE } from 'constants/routes.js';
import { CATEGORIES } from 'constants/categories.js';
import DesktopLogo from 'assets/Logo-desktop.svg';

const Navbar = () => {
  return (
    <nav className='border-b border-gray-300'>
      <div className='max-w-screen-xl mx-auto flex justify-between items-center h-20 px-12'>
        <Link to={ROUTE.HOME}>
          <img src={DesktopLogo} alt='TaiWalk' />
        </Link>

        <div>
          {CATEGORIES.map((navItem) => (
            <NavLink
              to={ROUTE.BUILD_EXPLORE_PATH({ type: navItem.value })}
              className='p-2.5 text-gray-700 font-normal'
              // className={['px-2.5', (navData) => navData.isActive && 'active-class']}
            >
              {navItem.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
