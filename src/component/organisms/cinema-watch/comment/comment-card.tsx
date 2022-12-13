import React from 'react';
import {View, ScrollView} from 'react-native';
import {TComment} from '../../../../interface/models';
import styled from 'styled-components/native';
import {SParagraph} from '../../../atoms/typography';
import SAvatar from '../../../molecules/avatar';
import {theme} from '../../../../style/theme';

export function CommentCard({comment}: {comment: TComment}) {
  return (
    <View style={{display: 'flex', padding: 12, flexDirection: 'row'}}>
      <SAvatar size={30} />
      <View style={{width: 12}} />
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.charcoalGrey,
          borderRadius: 6,
          padding: 6,
        }}>
        <SParagraph style={{color: 'rgba(200,200,200,.5)'}}>
          {comment.fullname}
        </SParagraph>
        <SParagraph style={{color: 'rgba(240,240,240,.9)'}}>
          {comment.body}
        </SParagraph>
      </View>
    </View>
  );
}
