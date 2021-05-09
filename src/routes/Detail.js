import React from 'react';

// function Detail(props) {  
//   const { location , history } = props;
//   if (location.state === undefined) {
//     history.push('/')
//   }
//   return <span>hello</span>;
// }

class Detail extends React.Component {
  // render 이후 DidMount 실행
  componentDidMount() {
    const { location , history } = this.props;
    if (location.state === undefined) {
      history.push('/')
    }
  }
  render() {
    const { location } = this.props;
    if (!!location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;