import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import socketIOClient from 'socket.io-client';

const ENDPOINT = 'http://127.0.0.1:4000';

const Comment: React.FC = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
  
    socket.on('commentReceived', (newComment) => {
      setComments((prevComments) => [...prevComments, newComment]);
    });
  
    return () => {
      socket.disconnect();
    };
  }, []);
  

  const handleCommentSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // Gửi bình luận đến server
    const socket = socketIOClient(ENDPOINT);
    socket.emit('newComment', input);
    setInput('');
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <input
        value={input}
        onChange={handleInputChange}
        type="text"
        placeholder="Write a comment..."
      />
      <button onClick={handleCommentSubmit}>Submit</button>

      <div>
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
    </div>
  );
}

export default Comment;
