import React from 'react'

function CommentList(props) {
  const style = {border: 3, borderColor: '#fff', borderStyle: 'solid'}
  return (
    <div style={style}>{props.user}---{props.age}</div>
  )
}

export default CommentList
