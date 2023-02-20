import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../../redux/action/facebookApp/facebookAction';
import { ADD_COMMENT } from '../../../redux/types/facebookType';

const FaceBookApp = () => {

    const { arrComment } = useSelector(state => state.facebookReducer)

    const [userComment, setUserComment] = useState({
        username: '',
        comment: '',
        avatar: 'https://i.pinimg.com/236x/ef/61/2a/ef612a0bb2ac679567142c3b978d4d37.jpg'
    })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        let { value, id } = e.target
        setUserComment({
            ...userComment,
            [id]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addComment({ ...userComment, avatar: `https://i.pravatar.cc/?u=${userComment.username}` }))
    }

    console.log(userComment)

    const renderComment = () => {
        return arrComment.map(cmt => {
            return (
                <div key={cmt.username} className="row py-3">
                    <div className="col-2">
                        <img className='img-fluid' src={cmt.avatar} alt="" />
                    </div>
                    <div className="col-10">
                        <p>{cmt.username}</p>
                        <p>{cmt.comment}</p>
                    </div>
                </div>
            )
        })
    }
    return (
        <div className='container'>
            <div className='bg-secondary'>
                {renderComment()}
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input onChange={handleChange} type="text" className="form-control" id="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Comment</label>
                        <input onChange={handleChange} type="text" className="form-control" id="comment" />
                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>

        </div >
    );
}

export default FaceBookApp;
