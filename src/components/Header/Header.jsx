import { isLoggedIn } from 'redux/auth/authSelectors';
import { Logo } from 'components/Logo/Logo';
import { MobMenu } from './MobMenu';
import { Navigation } from './Navigation';
import { ToggleButton } from 'components/ToggleButton/ToggleButton';
import { UserPanel } from './UserPanel/UserPanel';
import { useSelector } from 'react-redux';

export const Header = () => {
  const shouldShowUser = useSelector(isLoggedIn);
  return (
    <header className="absolute left-0 right-0 mx-auto w-full z-20 lg:py-6">
      <div className="container flex items-center ">
        <Logo className="" />

        <Navigation />

        <div className="ml-auto">
          <div className="">{shouldShowUser && <UserPanel />}</div>
        </div>
        <div className="hidden lg:block">
          <ToggleButton />
        </div>
        <div>
          <MobMenu />
        </div>
      </div>
    </header>
  );
};
