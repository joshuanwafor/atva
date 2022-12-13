import * as React from 'react';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import SectionWrapper from '../atoms/section-wrapper';
import SectionTitle from '../atoms/section-title';
import ActionLink from '../organisms/action-link';
import Switch from '../molecules/switch';
import DownloadSettingsTemplate from '../templates/download-settings';
import Network from '../atoms/icons/network';
import {sizeScale, getFontFromTheme, getColorFromTheme} from '../../utils';
import NetworkSpeed from '../atoms/icons/network-speed';
import Folder from '../atoms/icons/folder';
import WiFi from '../atoms/icons/wifi';
import Database from '../atoms/icons/database';
import StorageAnalysis from '../organisms/storage';
import Toggle from '../atoms/icons/toggle';
import TouchableItem from '../molecules/touchable-item';

const SpeedTitle = styled.Text`
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(12, 0.2), 'px')};
  text-align: left;
  color: ${getColorFromTheme('white')};
  margin-top: 5px;
`;

const OptionWrapper = styled.View`
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
`;

const OptionTitle = styled(SpeedTitle)`
  margin-right: 10px;
`;

function DownloadSettings() {
  return (
    <DownloadSettingsTemplate>
      <SectionWrapper>
        <SectionTitle hasPadding>Downloads</SectionTitle>
        <ActionLink
          title="Download over Wi-Fi only"
          subtitle="Saves data when you download over Wi-Fi"
          icon={<WiFi fill="#fff" width={18} height={18} />}
          actionType="custom"
          hasBorder
          actionComponent={<Switch value={true} />}
        />
        <ActionLink
          title="Video Quality"
          subtitle="Higher quality uses more disk space"
          icon={<Folder fill="#fff" width={18} height={18} />}
          onPress={() => {}}
          actionType="custom"
          hasBorder
          disabled
          actionComponent={
            <TouchableItem
              accessible
              accessibilityRole="button"
              accessibilityComponentType="button"
              accessibilityLabel="Video quality select"
              accessibilityTraits="button"
              delayPressIn={0}
              onPress={() => {}}>
              <OptionWrapper>
                <OptionTitle>Standard</OptionTitle>
                <Toggle width={10} height={10} fill="#fff" />
              </OptionWrapper>
            </TouchableItem>
          }
        />
        <ActionLink
          title="Storage"
          subtitle="Internal storage"
          icon={<Database fill="#fff" width={18} height={18} />}
          actionType="none"
          disabled
          footer={<StorageAnalysis />}
        />
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle hasPadding>Diagnostics</SectionTitle>
        <ActionLink
          title="Network speed test"
          subtitle="The speed at which your network is active"
          icon={<NetworkSpeed fill="#fff" width={18} height={18} />}
          actionType="custom"
          disabled
          actionComponent={<SpeedTitle>Normal</SpeedTitle>}
          hasBorder
        />
        <ActionLink
          title="Check network"
          subtitle="Check your network speed and connectivity"
          icon={<Network fill="#fff" width={18} height={18} />}
          onPress={() => {}}
          actionType="external"
        />
      </SectionWrapper>
    </DownloadSettingsTemplate>
  );
}

export default DownloadSettings;
