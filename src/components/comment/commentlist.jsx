import React from 'react'
import Citem from './commentitem'

class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: [
        {user: 'fjj', age: 111},
        {user: 'jjj', age: 3444433}
      ]
    }
  }
  render() {
    // const arr = []
    // this.state.item.forEach(item => arr.push(<h1>{item.user} --- {item.age}</h1>))
    // return (<div>
    //   {arr}
    // </div>)
    return (<div>
      {this.state.item.map((item, i) => <Citem {...item} key={i} />)}
    </div>)
  }
}

export default Comment
