import React from 'react';
import { Route } from 'react-router';
import Header from '../components/Header/Header';
import About from '../pages/About/About';

// UI mẫu chứa các thành phần component dùng chung cho 1 nhóm UI cụ thể(Home,About,Hook)
// Thành phần dùng chung: Header, footer,...

const HomeTemplate = (props) => {
    // props: chứa path,component
    // propsRoute: props được cung cấp sẵn bởi Route giúp xử dụng các chức năng như chuyển trang,...
    return (
        <Route exact path={props.path} render={(propsRoute) => {
            // Trả về UI mới có component muốn hiển thị
            return <>
                <Header />
                {/* {...propsRoute}:Để vưa có props của component vừa có props của Route */}
                <props.component {...propsRoute} />
            </>
        }} />
    );
}

const ab = (a) => {

}

ab(1)

export default HomeTemplate;