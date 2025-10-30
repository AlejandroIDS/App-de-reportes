import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from './components/Header';
import Card from './components/Cards';


export default function App() {

  const userIconUrl1 = require('./assets/usericon1.png');
  const contentImageUrl1 = require('./assets/image1.png');
  const name1 = 'John Doe';
  const location1 = 'Algún estudio por ahí';
  const contentText1 = 'Un monton de fotografias';
  const timePassed1 = '2 horas';

  const name2 = 'Jane Smith';
  const location2 = 'Quien sabe donde';
  const contentText2 = 'Un retrato de una mujer.';
  const userIconUrl2 = require('./assets/usericon2.png');
  const contentImageUrl2 = require('./assets/image3.png');
  const timePassed2 = '4 horas';

  return (
    <View style={styles.container}>
      <Header />
      <Card
        userIconUrl={userIconUrl1}
        name={name1}
        location={location1}
        contentText={contentText1}
        contentImageUrl={contentImageUrl1}
        timePassed={timePassed1}
      />
      <Card
        userIconUrl={userIconUrl2}
        name={name2}
        location={location2}
        contentText={contentText2}
        contentImageUrl={contentImageUrl2}
        timePassed={timePassed2}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //espacio para no tapar la barra de notificaciones
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,


  },
});
