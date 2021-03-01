import React from 'react'
import {useState} from 'react'
import Comentario from './Comentario';
import SingleComment from './SingleComment';



const CommentBox = () => {

    const [comment, setComment] = useState([]);
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');


    const setterComment = () => {
        
    }
    

    const commentsList = comment;

    return (

        <div className="formComment">
            <div>
                <input type="text" placeholder="Título" onChange={(e)=>setTitle(e.target.value)}></input>
            </div>
            <div>
                <textarea className="description" placeholder="Ingrese texto aquí" onChange={(e)=>setBody(e.target.value)}></textarea>
            </div>         
            <button onClick={setterComment}><h4>Añadir</h4></button>
            <h3 className="commentData">{title} : {body}</h3>   

           
        </div>
    );
}

export default CommentBox
