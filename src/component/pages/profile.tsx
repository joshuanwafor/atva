import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SettingsScreenNavigationProp} from '../../interface';
import ProfileTemplate from '../templates/profile';
import SectionWrapper from '../atoms/section-wrapper';
import SectionTitle from '../atoms/section-title';
import AboutApp from '../organisms/about-app';
import ActionLink from '../organisms/action-link';
import ProfileLink from '../organisms/profile-link';
import ShareLink from '../organisms/share-link';
import Switch from '../molecules/switch';
import Avatar from '../molecules/avatar';
import Logout from '../atoms/icons/logout';
import Flag from '../atoms/icons/flag';
import Help from '../atoms/icons/help';
import Info from '../atoms/icons/info';
import Eye from '../atoms/icons/eye';
import Heart from '../atoms/icons/heart';
import Fire from '../atoms/icons/fire';
import Connection from '../atoms/icons/connection';
import Share from '../atoms/icons/share';
import Download from '../atoms/icons/download';
import NotificationBell from '../atoms/icons/notification-bell';
import {useToken} from '../../hooks/token';
import {useUser} from '../../hooks/user';
import {observer} from 'mobx-react';
import {useBillingHooks} from '../../hooks/billing';

function Profile() {
  let {user} = useUser();
  let {mySubs} = useBillingHooks();

  const navigation = useNavigation<SettingsScreenNavigationProp>();
  const {onLogout} = useToken();

  let subscription = mySubs?.slice()[0];
  return (
    <ProfileTemplate>
      <SectionWrapper>
        <SectionTitle hasPadding>Account</SectionTitle>
        <ProfileLink
          title={`${user?.user.first_name} ${user?.user.last_name}`}
          subtitle="View profile"
          avatar={<Avatar />}
          onPress={() => navigation.navigate('Account')}
        />
        <ActionLink
          title={
            subscription == undefined
              ? 'Select Subscription plan'
              : subscription.planName + ' Plan'
          }
          subtitle={
            subscription == undefined
              ? "You don't have an active suscription"
              : 'Current subscription: 4 screens, HD, 75% off any premiere movie'
          }
          icon={<Fire fill="#fff" width={18} height={18} />}
          actionType="next"
          hasBorder
          onPress={() => navigation.navigate('Billing')}
        />
        <ActionLink
          title="Connected devices"
          subtitle="Devices your account is logged in"
          icon={<Connection fill="#fff" width={18} height={18} />}
          onPress={() => navigation.navigate('Connected')}
          actionType="next"
          hasBorder
        />
        <ActionLink
          title="Invite your friends to AstraTV"
          subtitle="Share the link so your friends can join the conversation around your favorite TV shows and movies and watch same movie in cinema mode"
          icon={<Share fill="#fff" width={18} height={18} />}
          actionType="none"
          disabled
          footer={
            <ShareLink link="http://www.astratv.com/invite/xdr1hg543he5tui9o0pl93jkls6sdf7dsf8asdfasd" />
          }
        />
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle hasPadding>Activities</SectionTitle>
        <ActionLink
          title="Watch list"
          subtitle="TV Shows/Movies you’ve watched"
          icon={<Eye fill="#fff" width={18} height={18} />}
          onPress={() => navigation.navigate('Watchlist')}
          actionType="next"
          hasBorder
        />
        <ActionLink
          title="Favorite"
          subtitle="Liked TV shows/movies or artist"
          icon={<Heart fill="#fff" width={18} height={18} />}
          onPress={() => {
            navigation.navigate('Favorites')
          }}
          actionType="next"
        />
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle hasPadding>Settings</SectionTitle>
        <ActionLink
          title="Notification"
          subtitle="Choose whether you want to receive notification"
          icon={<NotificationBell fill="#fff" width={18} height={18} />}
          disabled
          actionType="custom"
          actionComponent={<Switch value={true} />}
          hasBorder
        />
        <ActionLink
          title="Download"
          subtitle="Your download settings"
          icon={<Download fill="#fff" width={18} height={18} />}
          onPress={() => navigation.navigate('DownloadSettings')}
          actionType="next"
        />
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle hasPadding>About</SectionTitle>
        <ActionLink
          title="About AstraTV"
          subtitle="Few information about us"
          icon={<Info fill="#fff" width={18} height={18} />}
          onPress={() => {}}
          actionType="next"
          hasBorder
        />
        <ActionLink
          title="Get help"
          subtitle="Support from us"
          icon={<Help fill="#fff" width={18} height={18} />}
          onPress={() => {}}
          actionType="external"
          hasBorder
        />
        <ActionLink
          title="Terms of use"
          subtitle="All the stuffs you need to know"
          icon={<Flag fill="#fff" width={18} height={18} />}
          onPress={() => {}}
          actionType="external"
        />
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle hasPadding>Others</SectionTitle>
        <ActionLink
          title="Logout"
          subtitle={'You are logged in as ' + user?.user.first_name}
          icon={<Logout fill="#fff" width={18} height={18} />}
          onPress={() => {
            onLogout(() => {});
          }}
        />
        <AboutApp />
      </SectionWrapper>
    </ProfileTemplate>
  );
}

export default observer(Profile);
