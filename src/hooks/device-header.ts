import {useRef, useLayoutEffect} from 'react';
import {
  getUserAgent,
  getModel,
  getBrand,
  getDeviceType,
  getApplicationName,
  getBuildId,
} from 'react-native-device-info';
import {Platform} from 'react-native';

export function useDeviceInfo() {
  const ua = useRef<string>('');
  const os = useRef<string>(Platform.OS);
  const model = useRef<string>(getModel());
  const vendor = useRef(getBrand());
  const type = useRef(getDeviceType());
  const browser = useRef<string>(getApplicationName());
  useLayoutEffect(() => {
    getUserAgent().then((userAgent) => {
      ua.current = userAgent;
    });

    getBuildId().then((buildId) => {
      browser.current = `${browser.current} - ${buildId}`;
    });
  }, [ua, browser]);

  return {
    ua: ua.current,
    os: os.current,
    model: model.current,
    vendor: vendor.current,
    type: type.current,
    browser: browser.current,
  };
}
