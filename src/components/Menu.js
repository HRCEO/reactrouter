import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {

    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    };

    return (
        <div>
            {/*클릭시 해당 페이지 CSS 별도 설정  activeStyle, 클래스 설정 activeClassName */}
            <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink ></li>
                <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink ></li>
                <li><NavLink  to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink ></li>
                <li><NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink></li>
            </ul>
            {/*선택시 새로고침이 아닌 JS 형식만을 불러옴, 스타일 지정 X*/}
            {/*<ul>*/}
            {/*    <li><Link  to="/">Home</Link ></li>*/}
            {/*    <li><Link  to="/about">About</Link ></li>*/}
            {/*    <li><Link  to="/about/foo">About Foo</Link ></li>*/}
            {/*</ul>*/}
            <hr/>
        </div>
    );
};

export default Menu;