import React from 'react';
import Button from '../common/Button';

const ConnectWalletButton = props => {
  return (
    <Button padding="11px 40px" onClick={props.onClick}>
      Connect Wallet
    </Button>
  );
};

export default ConnectWalletButton;
