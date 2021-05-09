import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    console.log('hello');
  }  
  componentDidMount() {
    console.log('component rendered');
  }
  componentDidUpdate() {
    console.log('I just updated!!');
  }
  render() {
    console.log('I am rendering');
    return (
      <div>
        <h1>React Component Life Cycle!</h1>
      </div>
    )
  }
}

export default LifeCycle;