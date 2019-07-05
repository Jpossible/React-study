import React from 'react';

// export default function Hello() {
//   return <div> hello react mmmmmm2 </div>;
// }

class Jpossible extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      fjj: 4545
    }
  }
  render() {
    return <div> hello react jjjj --{this.state.fjj}- {this.props.info} id:{this.props.id}</div>;
  }
}

export default Jpossible;
