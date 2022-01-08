import React from 'react';
import Page from '../components/common/Page';
import PagePortal from '../components/common/PagePortal';
import ConnectWalletButton from '../components/header/ConnectWalletButton';
import PagePortalStatus from '../components/common/PagePortalStatus';
import LineInput from '../components/common/LineInput';
import Button from '../components/common/Button';
import TokenStatusPortal from '../components/common/TokenStatusPortal';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Select,
} from '@chakra-ui/react';

import './LaunchPadPage.scss';
const LaunchPadPage = () => {
  return (
    <div className="launchpadpage">
      <Page title="Launchpad" description="Create your launches with ease.">
        <PagePortal>
          <div className="pageportal-title">
            The Fully Decentralized Launchpad On BSC Smart Chain Testnet
          </div>
          <ConnectWalletButton></ConnectWalletButton>
        </PagePortal>
        <div className="pageportal-tokenstatusportal-group">
          <TokenStatusPortal></TokenStatusPortal>
          <TokenStatusPortal></TokenStatusPortal>
          <TokenStatusPortal></TokenStatusPortal>
          <TokenStatusPortal></TokenStatusPortal>
          <TokenStatusPortal></TokenStatusPortal>
          <TokenStatusPortal></TokenStatusPortal>
        </div>
      </Page>
    </div>
  );
};

export default LaunchPadPage;
