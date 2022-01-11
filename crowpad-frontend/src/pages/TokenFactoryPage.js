import React, { useState } from 'react';
import Page from '../components/common/Page';
import PagePortal from '../components/common/PagePortal';
import PagePortalStatus from '../components/common/PagePortalStatus';
import LineInput from '../components/common/LineInput';
import Button from '../components/common/Button';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Select from 'react-select';

import './TokenFactoryPage.scss';
const TokenFactoryPage = () => {
  const [option, setOption] = useState({ value: 1, label: 'Standard Token' });
  const tabSelectStyle = {
    color: '#002868',
    background: 'rgba(0, 40, 104, 0.1)',
    borderRadius: '10px',
  };
  const options = [
    { value: 1, label: 'Standard Token' },
    { value: 2, label: 'Liquidity Generator Token' },
  ];
  const handleSelectChange = e => {
    setOption(e);
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
                  maxWidth="462px"
                  marginTop="27px"
                  className="crow-select"
                  classNamePrefix="crow"
                  options={options}
                  value={option}
                  onChange={handleSelectChange}
                ></Select>
                {option.value === 1 ? (
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
                        Perfect for utility based projects such as charting
                        tools
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="createtoken">
                    <div className="createtoken-left">
                      <LineInput placeholder="Token Name"></LineInput>
                      <LineInput placeholder="Token Symbol"></LineInput>
                      <LineInput placeholder="Token Decimal"></LineInput>
                      <LineInput placeholder="Token Total Supply"></LineInput>
                      <LineInput placeholder="Transaction Fee in % to generate yield"></LineInput>
                      <LineInput placeholder="Transaction Fee in 5 to generate Liquidity"></LineInput>
                      <Button padding="11px 35px">Create</Button>
                    </div>
                    <div className="createtoken-right">
                      <div className="createtoken-instruction-title">
                        Liquidity Generator Token Features:
                      </div>
                      <div className="createtoken-instruction-description">
                        - Auto yield and liquidity generation (Safemoon Fork)
                        <br></br>- Customize fees taken to reward holders
                        <br></br>- Customize fees to generate liquidty<br></br>{' '}
                        - Whitelist functions
                      </div>
                    </div>
                  </div>
                )}
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
