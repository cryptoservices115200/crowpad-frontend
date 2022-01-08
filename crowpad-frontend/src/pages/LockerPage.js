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

import './LockerPage.scss';
const LockerPage = () => {
  const tabSelectStyle = {
    color: '#002868',
    background: 'rgba(0, 40, 104, 0.1)',
    borderRadius: '10px',
  };
  return (
    <div className="lockerpage">
      <Page title="Token Factory" description="Create Or Manage Your Own Token">
        <PagePortal>
          <PagePortalStatus
            number="2"
            unit="Lockers"
            description="Created on BSC Smart Chain Testnet"
          ></PagePortalStatus>
          <Tabs variant="unstyled" align="center">
            <TabList>
              <Tab _selected={tabSelectStyle}>My Token Locker</Tab>
              <Tab _selected={tabSelectStyle}>My Liquidity Locker</Tab>
              <Tab _selected={tabSelectStyle}>View All Lockers</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </PagePortal>
      </Page>
    </div>
  );
};

export default LockerPage;
