import React from 'react'

function CommentList(props) {
  return (
    <h1>{props.user}---{props.age}</h1>
  )
}

class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: [
        {user: 'fjj', age: 111},
        {user: 'jjj', age: 333}
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
      {this.state.item.map((item, i) => <CommentList {...item} key={i} />)}
    </div>)
  }
}

export default Comment
