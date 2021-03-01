import React from 'react'
import PropTypes from 'prop-types'

const SingleComment = () => {
    console.log();
    console.log();
    return (
        <div className='comentario'>   
            <div>
                <table>
                    <tbody>
                        <tr>
                        <td>
                            <img className='imguser' alt="aea" src="../user.png"></img>
                        </td>
                        <td>
                            <h3 className='hcomment'>NonUserDefined</h3>
                            <h4 className='hemail'></h4>
                            <h5 className='hcomment'></h5>
                        </td>
                        </tr>
                    </tbody>    
                </table>
            </div>
        </div>   
    );  
};

SingleComment.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default SingleComment
