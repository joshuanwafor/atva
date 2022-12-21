import * as React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../style/theme';
import ConnectedTemplate from '../templates/page';
import SectionTitle from '../atoms/section-title';
import Devices from '../atoms/svgs/devices';
import Laptop from '../atoms/svgs/laptop';
import Tablet from '../atoms/svgs/tablet';
import Android from '../atoms/svgs/android';
import IPhone from '../atoms/svgs/iphone';
import Device from '../organisms/device';

const DevicesWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`;

const ListWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

function Connected() {
  return (
    <ConnectedTemplate>
      <DevicesWrapper>
        <Devices />
      </DevicesWrapper>
      <SectionTitle style={{textAlign: 'center'}}>
        Devices connected to my account
      </SectionTitle>
      <ListWrapper>
        <Device
          title="Jide’s Macbook"
          active={true}
          icon={<Laptop fill={theme.colors.white} />}
        />
        <Device
          title="Jide’s Tablet"
          active={false}
          icon={<Tablet fill={theme.colors.brownishGrey} />}
        />
        <Device
          title="Jide’s Android"
          active={true}
          icon={<Android fill={theme.colors.white} />}
        />
        <Device
          title="Jide’s iPhone"
          active={false}
          icon={<IPhone fill={theme.colors.brownishGrey} />}
        />
      </ListWrapper>
    </ConnectedTemplate>
  );
}

export default Connected;
