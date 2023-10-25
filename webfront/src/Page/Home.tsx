import React from 'react';
import '../css/Home.css';
import {Link} from "react-router-dom";
import {Button, Layout} from "antd";

export function HomeHead(){
    return (
        <Layout.Header className={"header"}>
            <img style={{width: '8vw', height:'4.5vh', marginRight: '6vh', marginTop:'1vh'}} src={require("../resources/Img/MedCareerLogo.png")} alt={"MedCareer Logo"}></img>
            <Link className={"li"} to='/'>首页</Link>
            <Link className={"li"} to='/teacher'>课程</Link>
            <Link className={"li"} to='/WorkExperience'>职位</Link>
            <div  style={{marginRight:'18vw'}}></div>
            <Button className={"Button"} onClick={()=>{}}>切换为招聘者</Button>
            <Button className={"Button"} onClick={()=>{}}>登录/注册</Button>
        </Layout.Header>
    )
}


export default function Home() {
    return (
        <div>
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
                <div className="search-bar" style={{zIndex: 2}}>
                    <input className="search-input" type="text" id="searchText" placeholder="1200w+个急招职位在等你"></input>
                    <Button className="search-button" id="searchButton">开始探索</Button>
                </div>
                <img className={"Poster"} src={require('../resources/Img/HomePoster.png')} alt={"MedCareer Poster"}/>
            </div>
        </div>
    );
}





