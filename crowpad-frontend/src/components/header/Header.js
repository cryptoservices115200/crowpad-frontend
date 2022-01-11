import React, { useEffect, useState } from 'react';
import HeaderToggleButton from './HeaderToggleButton';
import ConnectWalletButton from './ConnectWalletButton';
import './Header.scss';
import { connect, useDispatch, useSelector } from 'react-redux';
import { openSidebar } from '../../actions/sidebar';

const Header = ({ openSidebar }) => {
  const [offset, setOffset] = useState(0);
  const dispatch = useDispatch();
  const blockchain = useSelector(state => state.blockchain);
  const data = useSelector(state => state.data);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const handleToggleButtonClick = e => {
    openSidebar();
  };
  return (
    <div className={offset > 30 ? 'crow-header active' : 'crow-header'}>
      <div className="crow-header-left">
        <div className="crow-header-toggle-button">
          <HeaderToggleButton
            onClick={handleToggleButtonClick}
          ></HeaderToggleButton>
        </div>
        <div className="crow-header-logo">
          <div className="crow-header-logo-icon">
            <img src="./assets/header-logo-black.png" alt="Header Logo"></img>
          </div>
          <div className="crow-header-logo-text">CrowFi</div>
        </div>
      </div>
      <div className="crow-header-right">
        <ConnectWalletButton></ConnectWalletButton>
      </div>
    </div>
  );
};

export default connect(null, { openSidebar })(Header);
