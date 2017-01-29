/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
/*eslint-enable no-unused-vars*/
import {
  Text
} from 'react-native';
import {
  Container,
  Content,
  Input
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
          <Content style={basicStyles.content}>
             <Input onChangeText={this.onChange.bind(this)} inlineLabel label="First Name" placeholder="John" />
            <Text>{this.props.text}</Text>
          </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({test}) => {
  const { text } = test;
  return {text: text};
};

export default connect(mapStateToProps, actions)(Login);
