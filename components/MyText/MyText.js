import React, {useState, useEffect} from 'react';
// import React, {Component} from 'react';
import {Text} from 'react-native';
import style from './style';

const MyText = ({name}) => {
  const [fullName, setFullName] = useState('');
  useEffect(() => {
    console.log('Our component has been mounted');
    return () => {
      console.log('Our component is being destroyed');
    };
  }, []);
  useEffect(() => {
    console.log('fullName has changed');
  }, [fullName]);

  return (
    <Text
      style={[style.text, style.text1, {color: 'green'}]}
      onPress={() => {
        setFullName('Dawid Szewczyk');
      }}>
      Hello, {name}! I know that your full name is {fullName}
    </Text>
  );
};

// class MyText extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fullName: props.name + ' Szewczyk',
//     };
//   }

//   componentDidMount() {
//     console.log('Our component has been mounted');
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log(
//       'The state of the application has been changed',
//       prevState,
//       this.state,
//     );
//   }

//   componentWillUnmount() {
//     console.log('Component is now being destroyed');
//   }

//   render() {
//     return (
//       <Text
//         style={[style.text, style.text1, {color: 'green'}]}
//         onPress={() =>
//           this.setState({...this.state, ...{fullName: 'Dawid Sz.'}})
//         }>
//         Hello, {this.props.name}! I know that your full name is{' '}
//         {this.state.fullName}
//       </Text>
//     );
//   }
// }

export default MyText;
