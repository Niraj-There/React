import { useState } from 'react';
import './Comment.css';
import CommentsForm from './CommentsForm.jsx';

export default function Comment() {
    let [comments, setComments] = useState([{
        username: 'Alice',
        remarks: 'Great post!',
        ratings: 5
    }]);

    function addNewComment(newComment) {
        setComments((prevComments) => [...prevComments, newComment]);
    }

    return (
        <>
            <div>
                <h1>Comments Section</h1>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>
                            <strong>{comment.username}</strong>: {comment.remarks} (Rating: {comment.ratings})
                        </li>
                    ))}
                </ul>
            </div>
            <CommentsForm addNewComment={addNewComment} />
        </>
    )
}