import * as React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import SectionWrapper from '../atoms/section-wrapper';
import SectionTitle from '../atoms/section-title';
import LinearButton from '../molecules/button/linear-button';
import ActionButton from '../molecules/button/action-button';
import Avatar from '../molecules/avatar';
import AccountTemplate from '../templates/account';
import InputField from '../molecules/inputfield';
import {useAuthContent} from '../../hooks/content';
import {sizeScale, getFontFromTheme, getColorFromTheme} from '../../utils';
import {useNotify} from '../../hooks/notify';
import {theme} from '../../style/theme';

const DeleteText = styled.Text`
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(12, 0.3), 'px')};
  text-align: left;
  color: ${getColorFromTheme('brownishGrey')};
  margin-bottom: 20px;
`;

const PhotoWrapper = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

function Account() {
  const {show} = useNotify();
  const authContent = useAuthContent();
  const [imageSource, setImageSource] = React.useState('');
  function onImageUpload() {
    // const options: ImagePickerOptions = {
    //   title: 'Select Avatar',
    //   storageOptions: {
    //     skipBackup: true,
    //     path: 'images',
    //   },
    //   tintColor: theme.colors.pink,
    //   mediaType: 'photo',
    //   quality: 0.2,
    //   allowsEditing: true,
    //   noData: true,
    // };
    // ImagePicker.showImagePicker(options, (response: any) => {
    //   if (response.didCancel) {
    //     show('Upload cancelled');
    //   } else if (response.error) {
    //     show('Avatar upload error');
    //   } else {
    //     const source = {uri: response.uri};
    //     // const source = {uri: 'data:image/jpeg;base64,' + response.data};
    //     setImageSource(source.uri);
    //   }
    // });
  }

  return (
    <AccountTemplate
      button={<LinearButton disabled={false}>Save changes</LinearButton>}>
      <SectionWrapper hasBorder>
        <SectionTitle>Profile image</SectionTitle>
        <PhotoWrapper>
          <Avatar source={imageSource} />
          <View style={{width: 15}} />
          <ActionButton kind="white" onPress={onImageUpload}>
            Upload new photo
          </ActionButton>
        </PhotoWrapper>
      </SectionWrapper>
      <SectionWrapper hasBorder>
        <SectionTitle>Personal information</SectionTitle>
        <InputField
          label="Email"
          placeholder="Your email address"
          value={authContent.content.content?.user.email}
          disabled
        />
        <InputField
          label="First name"
          placeholder="Your first name"
          value={authContent.content.content?.user.first_name}
        />
        <InputField
          label="Last name"
          placeholder="Your last name"
          value={authContent.content.content?.user.last_name}
        />
        <InputField
          label="Username"
          placeholder="Your username"
          value="usename"
        />
        <InputField
          label="Location"
          placeholder="Your current location"
          value="Lagos, Nigeria"
          disabled
        />
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle>Delete account</SectionTitle>
        <DeleteText>
          Deleting your account would remove all your information on our
          platform including your tv shows or movies, watch list, subscription
          and other activities you perform with this account on our platform
        </DeleteText>
        <ActionButton kind="red">Yes, delete my account</ActionButton>
      </SectionWrapper>
      <View style={{height: 30}} />
    </AccountTemplate>
  );
}

export default Account;
