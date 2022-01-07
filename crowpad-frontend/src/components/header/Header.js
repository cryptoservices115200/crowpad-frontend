import React from 'react';
import HeaderToggleButton from './HeaderToggleButton';
import ConnectWalletButton from './ConnectWalletButton';
import './Header.scss';
const Header = () => {
  return (
    <div className="crow-header">
      <div className="crow-header-left">
        <div className="crow-header-toggle-button">
          <HeaderToggleButton></HeaderToggleButton>
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

export default Header;
