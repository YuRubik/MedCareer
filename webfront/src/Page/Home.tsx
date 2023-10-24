import React from 'react';
import '../css/Home.css';
import {Link} from "react-router-dom";

export function HomeHead(){
    return (
        <header>
            <nav style={{marginLeft: '2vw'}}>
                <ul style={{paddingRight: "25vw"}}>
                    <img style={{paddingRight: '5vw'}} src={require("../resources/Img/MedCareerLogo.png")} alt={"MedCareer Logo"}></img>
                    <li><a className={"blueMark"} href="/">首页</a></li>
                    <li><a href="/position">课程</a></li>
                    <li><a href="/position">职位</a></li>
                </ul>
                <ul>
                    <li style={{paddingRight: '1vw'}}><button>切换为招聘者</button></li>
                    <li><button onClick={() => {}}>登录/注册</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default function Home() {
    return (
        <div style={{marginLeft:"6vw"}}>
            <HomeHead></HomeHead>
            <div style={{display:"flex", position:"relative", width:'94vw', height:'80vh'}}>
                <div style={{marginLeft:'5vw'}}>
                    <div style={{height: '15vh'}}></div>
                    <div style={{display:"flex", marginBottom:'2vh'}}>
                        <span style={{paddingRight:'1vw'}} className={"Slogan"}>可持续发展的</span>
                        <div style={{position:"relative", display:"inline-block"}}>
                            <img style={{position:'absolute', width: '15vw', top: '-0.5vh', left: '-0.6vw', borderWidth: 1, borderColor: '#000000', borderStyle: "dashed"}} src={require("../resources/Img/RedBack.png")} alt={""}/>
                            <span className={"HighLight"}>大健康行业</span>
                        </div>
                    </div>
                    <span className={"Slogan"}>智能职前教育与人才平台</span>
                </div>
                <div className="search-bar">
                    <input className="search-input" type="text" id="searchText" placeholder="1200w+个急招职位在等你"></input>
                    <button className="search-button" id="searchButton">开始探索</button>
                </div>
                <img className={"Poster"} src={require('../resources/Img/HomePoster.png')} alt={"MedCareer Poster"}/>
            </div>
        </div>
    );
}





