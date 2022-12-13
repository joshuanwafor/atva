// import React from 'react';
// import {SafeAreaView, TouchableWithoutFeedback, View} from 'react-native';
// import Splach from 'react-native-splash-screen';
// import {TouchableItem} from 'react-native-tab-view';
// import Video, {OnSeekData, OnProgressData} from 'react-native-video';
// import {useNavigation} from '@react-navigation/native';
// import ArrowLeft from '../../atoms/icons/arrow-left';
// import Pause from '../../atoms/icons/pause';
// import Play from '../../atoms/icons/play';
// import VolumeMuted from '../../atoms/icons/volume-muted';
// import VolumeUp from '../../atoms/icons/volume-up';
// import Loader from '../../atoms/loader';
// import {
//   VideoHeaderWrapper,
//   MovieTitle,
//   LoaderWrapper,
//   ControlWrapper,
//   ControlItemWrapper,
// } from './style';

// export const MinimalVideoPlayer = () => {
//   // const navigation = useNavigation();
//   const [canPlay, setCanPlay] = React.useState(false);
//   const [isPlaying, setIsPlaying] = React.useState(true);
//   const [isPaused, setIsPaused] = React.useState(false);
//   const [isMuted, setIsMuted] = React.useState(false);
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [isControlShown, setIsControlShown] = React.useState(true);
//   const [currentTime, setCurrentTime] = React.useState<number>(0);
//   const [duration, setDuration] = React.useState(0);
//   const movieRef = React.useRef<Video>(null);

//   const SAMPLE_VIDEO_1 =
//   'https://multiplatform-f.akamaihd.net/i/multi/april11/sintel/sintel-hd_,512x288_450_b,640x360_700_b,768x432_1000_b,1024x576_1400_m,.mp4.csmil/master.m3u8';

//   React.useEffect(() => {
//     Splach.hide();
//     // handleScreenOrientation('lock-landscape');
//     return () => {
//       // handleScreenOrientation('unlock');
//     };
//   }, []);

//   const onSeek = (data: OnSeekData) => {
//     console.log(data);
//     if (movieRef.current !== null) {
//       movieRef.current.seek(data.seekTime);
//       setCurrentTime(data.seekTime);
//     }
//   };

//   const onProgress = (data: OnProgressData) => {
//     setCurrentTime(data.currentTime);
//     setDuration(data.playableDuration);
//   };

//   const showControls = () => {
//     setIsControlShown(!isControlShown);
//   };

//   const handlePlayPause = () => {
//     if (isPlaying) {
//       setIsPlaying(false);
//       setIsControlShown(true);
//       return;
//     }
//     setIsPlaying(true);
//     setIsControlShown(false);
//     setTimeout(() => {
//       setIsControlShown(false);
//     }, 5000);
//   };

//   const VideoSection = (
//     <Video
//       source={{
//         uri: SAMPLE_VIDEO_1,
//       }}
//       style={{width: '100%', height: '100%', backgroundColor: 'orange'}}
//       controls={false}
//       ref={movieRef}
//       paused={isPaused}
//       maxBitRate={1000000}
//       onLoadStart={() => {
//         setCanPlay(true);
//       }}
//       onError={() => {
//         console.log('Error occured loading');
//       }}
//       onBuffer={() => {
//         console.log('video buffering');
//         setIsLoading(true);
//       }}
//       onPlaybackResume={() => {
//         console.log('play resume');
//         setIsLoading(false);
//       }}
//       onProgress={onProgress}
//       onEnd={() => {
//         setCurrentTime(0);
//         movieRef?.current?.seek(0);
//         setIsPlaying(false);
//       }}
//     />
//   );

//   return (
//     <TouchableWithoutFeedback onPress={showControls}>
//       <View
//         style={{
//           aspectRatio: 16 / 9,
//           backgroundColor: 'green',
//           width: '100%',
//         }}>
//         {VideoSection}

//         {canPlay == false && (
//           <LoaderWrapper>
//             <Loader width={28} height={28} />
//           </LoaderWrapper>
//         )}
//         <ControlWrapper>
//           <ControlItemWrapper>
//             <TouchableItem
//               onPress={() => {
//                 setIsPaused(!isPaused);
//               }}>
//               {isPaused ? (
//                 <Play fill="#fff" width={28} height={28} />
//               ) : (
//                 <Pause fill="#fff" width={28} height={28} />
//               )}
//             </TouchableItem>
//           </ControlItemWrapper>
//         </ControlWrapper>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };

export default {};
