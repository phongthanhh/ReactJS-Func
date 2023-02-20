import React, { useState } from 'react';
import { Route } from 'react-router';

// Chứa các thành phần dùng chung cho riêng Login và Register
// Phần hình bên trái


const FormTemplate = (props) => {

    return (
        <Route exact path={props.path} render={(propsRoute) => {
            return <>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img className='img-fluid' src="https://source.unsplash.com/random/?skynight" alt="" />
                        </div>
                        <div className="col-6">
                            <props.component {...propsRoute} />
                        </div>
                    </div>
                </div>
            </>
        }} />
    );
}

export default FormTemplate;
