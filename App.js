import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
  StatusBar,
} from 'react-native';
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from './assets/imgs/today.jpg'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import commonStyles from './src/commonStyles';

const Agenda = () => {
  return (

            
              <View style={style.container}>
              <ImageBackground source={todayImage} style={style.background}>
                    <View style={style.titleBar}>
                        <Text style={style.title}>Hoje</Text>
                        <Text style={style.subtitle}>
                            {moment().locale('pt-br').format('ddd, D [de] MMMM')}
                        </Text>   
                    </View>
                </ImageBackground>

              </View>
);
}

const style = StyleSheet.create({
  container: {
   flex:1,
  },
  background: {
   flex:3,
  },
  titleBar:{
  flex:1,
  justifyContent: 'flex-end'
  },
  
  title:{
  fontFamily: commonStyles.fontFamily,
  color: commonStyles.colors.secondary,
  fontSize: 50,
   marginLeft: 20,
  marginBottom: 10,
  },
  
  subtitle: {
  fontFamily: commonStyles.fontFamily,
  color: commonStyles.colors.secondary,
   fontSize: 20,
  marginLeft: 20,
  marginBottom: 30,
  },
  
  tasksContainer: {
  flex:7,
  }



/* const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  welcome: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  } */
});

export default Agenda;
