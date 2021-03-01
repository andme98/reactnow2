import React from 'react'
import {useState} from 'react'

const CommentBox = () => {

    const [comment, setComment] = useState([]);
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');


    const setterComment = () => {
        
    }

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
