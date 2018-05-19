import React from 'react';

const Comment = ({ comment }) => {
  const children = comment.children.map((child) => <Comment comment={child} />)
  return (
    <div>
      <div>{comment.username}</div>
      <div>{comment.upvotes}</div>
      <div>{comment.body}</div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default Comment;
