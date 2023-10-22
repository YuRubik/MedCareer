import React from 'react';
import '../css/Home.css';

export function HomeHead(){
    return (
        <header>
            <nav>
                <ul style={{marginLeft:230}}>
                    <img src={"../resources/MedCareerLogo.png"} alt={"MedCareer Logo"}></img>
                    <li><a href="/">首页</a></li>
                    <li><a href="/class">课程</a></li>
                    <li><a href="/position">职位</a></li>
                </ul>
                <ul>
                    <li><button>切换为招聘者</button></li>
                    <li><button>登录/注册</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default function Home() {
    return (
        <div>
            <HomeHead></HomeHead>
            <img src={'../resources/HomePoster.png'} alt={"MedCareer Poster"}/>
        </div>
    );
}





