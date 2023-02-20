import React, { memo } from 'react';
// memo

const Comment = (props) => {
    console.log('render comment')
    props.notifyMsg();
    return (
        <div>
            <p>Hi</p>
            <p>{props.number}</p>
            <div>
                <textarea name="" id="" cols="30" rows="5"></textarea>
            </div>
            <button className="btn btn-info">Gửi</button>
        </div>
    );
}
// memo: kiểm tra props của con có đổi không, nếu props đổi thì render lại UI 
export default memo(Comment);// shalow compare (tham trị: number,string,boolean)
