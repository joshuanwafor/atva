import React from 'react';
import TopBar from '../../../app/navigator/top-tab';
import MoviePeopleActivity from './people';
import {MaterialTopTabBar} from '@react-navigation/material-top-tabs';
import MovieCommentsActivity from './comments';
import MovieLikesActivity from './likes';
import Heart from '../../atoms/icons/heart';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {HStackSpaceAround, TextTag} from './style';
import {theme} from '../../../style/theme';
import { ChatsCircle, Users } from 'phosphor-react-native';

const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: rgba(100, 100, 100, 0.4);
  margin: 0px 10px;
`;

const CinemaWatchActviity: React.FC<{children?: React.ReactNode}> = () => {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
      }}>
      <Line />

      <TopBar.Navigator
        sceneContainerStyle={{backgroundColor: 'transparent'}}
        style={{backgroundColor: 'transparent'}}
        tabBar={(props) => (
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 0,
              borderBottomWidth: 1,
              borderBottomColor: 'gray',
            }}>
            <MaterialTopTabBar
              {...props}
              style={{backgroundColor: 'transparent'}}
              indicatorStyle={{backgroundColor: theme.colors.pink}}
            />
          </View>
        )}>
        <TopBar.Screen
          name="Comments"
          component={MovieCommentsActivity}
          options={{
            tabBarLabel: () => (
              <ChatsCircle/>
            ),
          }}
        />
        <TopBar.Screen
          name="Likes"
          component={MoviePeopleActivity}
          options={{
            tabBarLabel: () => <Heart fill="#fff" width={16} height={16} />,
          }}
        />
        <TopBar.Screen
          name="People"
          component={MovieLikesActivity}
          options={{
            tabBarLabel: () => (
              <Users size={16} color="white" />
            ),
          }}
        />
      </TopBar.Navigator>
    </View>
  );
};

export default CinemaWatchActviity;
