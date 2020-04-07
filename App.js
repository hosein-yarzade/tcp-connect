
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import net from 'react-native-tcp';
const  port = 2020; // set wifi board port network
const  host = '192.168.4.1';// set wifi board address network
export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {};
  }
componentDidMount=()=>{
    var client = net.connect(port,host, function() { //'connect' listener  TO GET DATA TO WIFI BOARD
      console.log('client connected');
    });
    client.on('data', function(data) {
      console.log(data.toString()); // data wifi show
    });
}

  sendRequest = (LED) => {
    if(LED === 1){
      var client = net.connect(port,host,function() { // then you should sen req
        console.log('don 1');
        client.write('!LED1_ON#'); // order to wifi board module(this is set of my wifi board)
      });
    }
    if(LED === 2){
      var client = net.connect(port,host,function() {
        console.log('don 2');
        client.write('!LED2_ON#');// order to wifi board module  (this is set of my wifi board)
      });
    }
    if(LED === 3){
      var client = net.connect(port,host,function() {
        console.log('don 3');
        client.write('!LED3_ON#');// order to wifi board module(this is set of my wifi board)
      });
    }

  };

  render() {
    return (
        <>
          <StatusBar barStyle="dark-content"/>
              <View style={styles.body}>
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={()=>{this.sendRequest(1)}}>
                     <Text>turn on LED 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={()=>{this.sendRequest(2)}}>
                      <Text>turn on LED 2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={()=>{this.sendRequest(3)}}>
                      <Text>turn on LED 3</Text>
                </TouchableOpacity>
              </View>
        </>
    );
  };
}

const styles = StyleSheet.create({

  body: {
    backgroundColor: Colors.white,
    flexDirection:'column',
    flex:1,
    justifyContent:'center',
    alignItems:'center',

  },
  buttons:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:150,
    height:50,
    backgroundColor: "#44bbff",
    borderRadius:10,
    margin:10,
  }
});


