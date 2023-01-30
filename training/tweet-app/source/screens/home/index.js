import React, { Component } from 'react';
import {FlatList, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { connect } from 'react-redux';
import { fetchDataAll } from '../../actions/app';
import {User} from './User'
const renderUser = ({ item }) => <User item={item} />;
 
class Home extends Component {
  componentDidMount() {
    const { fetchDataAll } = this.props;
    fetchDataAll()
  }
  render() {
    const { data } = this.props;
    if (data) {
      console.log(data);
    }
    return(
      <SafeAreaView>
      <View style={styles.container}>
        <Text style={{fontSize:25}}>
          React native with Redux case study
        </Text>
        
        <FlatList
            data={data}
            renderItem={renderUser}
           
          />
        
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' 
  }
});

const mapStateToProps = state => {
  return{
    data: state.app.data,
  }
}

const mapDispatchToProps = {
  fetchDataAll
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);