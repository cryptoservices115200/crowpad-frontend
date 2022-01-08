import React from 'react';
import Page from '../components/common/Page';
import PagePortal from '../components/common/PagePortal';
import PagePortalStatus from '../components/common/PagePortalStatus';
import LineInput from '../components/common/LineInput';
import Button from '../components/common/Button';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Select,
} from '@chakra-ui/react';

import './TokenFactoryPage.scss';
const TokenFactoryPage = () => {
  const tabSelectStyle = {
    color: '#002868',
    background: 'rgba(0, 40, 104, 0.1)',
    borderRadius: '10px',
  };
  return (
    <div className="tokenfactorypage">
      <Page title="Token Factory" description="Create Or Manage Your Own Token">
        <PagePortal>
          <PagePortalStatus
            number="2"
            unit="Tokens"
            description="Created on BSC Smart Chain Testnet"
          ></PagePortalStatus>
          <Tabs variant="unstyled" align="center">
            <TabList>
              <Tab _selected={tabSelectStyle}>Create Token</Tab>
              <Tab _selected={tabSelectStyle}>Manage Tokens</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Select
                  placeholder="Standard Token"
                  maxWidth="462px"
                  marginTop="27px"
                />
                <div className="createtoken">
                  <div className="createtoken-left">
                    <LineInput placeholder="Token Name"></LineInput>
                    <LineInput placeholder="Token Symbol"></LineInput>
                    <LineInput placeholder="Token Decimal"></LineInput>
                    <LineInput placeholder="Token Total Supply"></LineInput>
                    <Button padding="11px 35px">Create</Button>
                  </div>
                  <div className="createtoken-right">
                    <div className="createtoken-instruction-title">
                      Standard Token Features:
                    </div>
                    <div className="createtoken-instruction-description">
                      - Basic token with all standard features <br></br>-
                      Perfect for utility based projects such as charting tools
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </PagePortal>
      </Page>
    </div>
  );
};

export default TokenFactoryPage;
