import React from 'react';

const Detail = (props) => {
    return (
        <div className='container'>
            <p className='alert alert-danger'>{props.match.params.id}</p>
        </div>
    );
}

export default Detail;
