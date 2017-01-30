/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
/*eslint-enable no-unused-vars*/
import {
  Text,
  Image
} from 'react-native';
import {
  Container,
  Content,
  Input,
  ListItem,
  InputGroup,
  Icon,
  Card,
  Button
} from 'native-base';
import { connect } from 'react-redux';
import {basicStyles} from '../styles/basicStyles.js';
import * as actions from '../actions';
class Login extends Component {
  onChange(text) {
    this.props.testChanged(text);
  }
  render() {
    return(
      <Container>
        <Image source={require('../images/red.jpg')} style={basicStyles.backgroundImage}>
          <Content style={basicStyles.content}>
            <Card style={{margin:30,backgroundColor: 'rgba(255,255,255,0.5)', padding: 30}}>
              <ListItem>
                <Image source={require('../images/billDroid.png')} style={{borderRadius: 100, height: 100, width: 100, alignSelf:'center'}}/>
              </ListItem>
               <ListItem>
                   <InputGroup>
                       <Icon name="ios-person" style={{ color: '#FE5050' }} />
                       <Input placeholder="USERNAME" />
                   </InputGroup>
               </ListItem>
               <ListItem>
                   <InputGroup>
                       <Icon name="ios-unlock" style={{ color: '#FE5050' }} />
                       <Input placeholder="PASSWORD" secureTextEntry />
                   </InputGroup>
               </ListItem>

                     <Button style={{ backgroundColor:'#FE5050', alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                         Sign In
                     </Button>
            </Card>
          </Content>
        </Image>
      </Container>
    );
  }
}

const mapStateToProps = ({test}) => {
  const { text } = test;
  return {text: text};
};

export default connect(mapStateToProps, actions)(Login);
