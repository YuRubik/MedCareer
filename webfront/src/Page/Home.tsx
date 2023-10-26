import React, {useState} from 'react';
import '../css/Home.css';
import {Link} from "react-router-dom";
import { DownOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Dropdown, Layout, MenuProps, message, Space} from "antd";

export function HomeHead(){
    return (
        <div id={"header"}>
            <div style={{marginLeft:'10vw'}}></div>
            <img style={{height:'5vh',marginTop:'2vh'}} src={require("../resources/Img/HomeImg/MedCareerLogo.png")} alt={"MedCareer Logo"}></img>
            <div style={{marginLeft:'6vw'}}></div>
            <Link className={"li"} to='/'>首页</Link>
            <Link className={"li"} to='/teacher'>课程</Link>
            <Link className={"li"} to='/WorkExperience'>职位</Link>
            <div  style={{marginRight:'25vw'}}></div>
            <Button className={"Button"} onClick={()=>{}}>切换为招聘者</Button>
            <Button className={"Button"} onClick={()=>{}}>登录/注册</Button>
        </div>
    )
}

export function DropButton(name: string, items: MenuProps['items']) {
    const handleMenuClick: MenuProps['onClick'] = (e) => {
        const labelElement = e.domEvent.target as HTMLElement;
        message.info(labelElement.innerText);
        console.log(e.domEvent.target)
    };

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    return (
        <Dropdown menu={menuProps}>
            <Button  style={{width:'20vw', height:'6vh', fontSize:'0.85vw' }}>
                <Space style={{ display: 'flex', justifyContent:'center', width: '100%'}}>
                    <span>{name}</span>
                    <DownOutlined style={{position:"absolute", marginTop:'-0.7vh', marginLeft:'5vw'}}/>
                </Space>
            </Button>
        </Dropdown>
    );
}

export function SearchBar(){
    return(
        <div className={"search-bar"} style={{zIndex: 2}}>
            <input className={"search-input"}/>
            <Button className={"search-button"}>开始探索</Button>
        </div>
    )
}


export default function Home() {

    const items: MenuProps['items'] = [
        {
            label: '1st menu item',
            key: '1',
            icon: <UserOutlined />,
        },
        {
            label: '2nd menu item',
            key: '2',
            icon: <UserOutlined />,
        },
        {
            label: '3rd menu item',
            key: '3',
            icon: <UserOutlined />,
            danger: true,
        },
        {
            label: '4rd menu item',
            key: '4',
            icon: <UserOutlined />,
            danger: true,
            disabled: true,
        },
    ];

    const [inputStore, setInputStore] = useState('');
    const [inputValue, setInputValue] = useState('');
    const maxPosition = 60; // 设置光标不超过的位置

    const handleInput = (event:any) => {
        const value = event.target.value;
        if (value.length > maxPosition) {
            // 如果输入超过了最大位置，截取文本
            const trimmedValue = inputValue.slice(inputValue.length-maxPosition+1, inputValue.length) + value.slice(value.length-1, value.length);
            setInputValue(trimmedValue)
            setInputStore(inputStore +  value.slice(value.length-1, value.length))
        } else {
            if(inputStore.length >= maxPosition){
                setInputValue(inputStore.slice(inputStore.length-maxPosition, inputStore.length));
                setInputStore(inputStore.slice(0, inputStore.length-1))
            }else {
                setInputStore(value);
                setInputValue(value);
            }
        }
    };

    return (
        <Layout>
            <HomeHead></HomeHead>
            <Layout.Content style={{background: "white"}}>
                <div style={{display:"flex", position:"relative", width:'94vw', height:'60vh', left:'6vw'}}>
                    <div style={{marginLeft:'5vw'}}>
                        <div style={{height: '15vh'}}></div>
                        <div style={{display:"flex", marginBottom:'2vh'}}>
                            <span style={{paddingRight:'1vw'}} className={"Slogan"}>可持续发展的</span>
                            <div style={{position:"relative", display:"inline-block"}}>
                                <img style={{position:'absolute', width: '15vw', top: '-0.5vh', left: '-0.6vw', borderWidth: 1, borderColor: '#000000', borderStyle: "dashed"}} src={require("../resources/Img/HomeImg/RedBack.png")} alt={""}/>
                                <span className={"HighLight"}>大健康行业</span>
                            </div>
                        </div>
                        <span className={"Slogan"}>智能职前教育与人才平台</span>
                    </div>
                    <SearchBar></SearchBar>
                    <img className={"Poster"} src={require('../resources/Img/HomeImg/HomePoster.png')} alt={"MedCareer Poster"}/>
                </div>
                <div style={{height:'60vh'}}>
                    <div className={"MiddleImg"} style={{height: '10vh'}}>
                        <img style={{position:'absolute',zIndex:1, height:'24vh',right:0, marginTop:'-12vh'}} src={require("../resources/Img/HomeImg/蓝色圆环.png")} alt={"("}></img>
                        <img style={{position:'absolute',width:'100vw', height:'10vh'}} src={require("../resources/Img/HomeImg/灰色曲面色块.png")} alt={""}></img>
                        <img style={{position:'absolute', zIndex:1, height:'34vh', left:0, marginTop:'5vh'}} src={require("../resources/Img/HomeImg/红色圆环.png")} alt={")"}></img>
                        <div className={"middleSlogan"}>提供精确的选项</div>
                    </div>
                    <div style={{background: '#F8F8F8', height: '50vh'}}>
                        <div style={{height:'10vh'}}>
                            <div className={"middleSlogan"} style={{marginLeft:'-5.5vw', marginTop:'3vh'}}>帮助你找到适配度最高的职位</div>
                        </div>
                        <div style={{height:'23vh'}}>
                            <div style={{position:"absolute", left:'27vw'}}>
                                {DropButton("求职意向标签", items)}
                            </div>
                            <div style={{position:"absolute", left:'27vw', marginTop:'10vh'}}>
                                {DropButton("教育背景标签", items)}
                            </div>
                            <div style={{position:"absolute", left:'53vw'}}>
                                {DropButton("工作经验标签", items)}
                            </div>
                            <div style={{position:"absolute", left:'53vw', marginTop:'10vh'}}>
                                {DropButton("技能标签", items)}
                            </div>
                        </div>
                        <div style={{height:'10vh'}}>
                            <input className={"LabelBuilder"} value={inputValue} onInput={handleInput} placeholder="请输入过往工作经验描述生成标签"/>
                            <Button className={"LabelButton"}>生成</Button>
                        </div>
                    </div>
                </div>
                <div className={"redBlue"}>

                </div>
            </Layout.Content>
        </Layout>
    );
}





