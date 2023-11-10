import React, {useState} from 'react';
import '../css/Home.css';
import {Link} from "react-router-dom";
import { DownOutlined, UserOutlined, StarOutlined, StarFilled} from '@ant-design/icons';
import {Button, Dropdown, Layout, MenuProps, message, Space} from "antd";
import {ScrollView} from "react-native";

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

export function InfoBlock(name:string, salary:string, logo:string, fitness:string,
                          education:string, skill:string, experience:string, link:string) {
    const [isIconVisible, setIsIconVisible] = useState(true);
    const handleButtonClick = () => {
        setIsIconVisible(!isIconVisible);
    };
    const handleRedirect = () => {
        window.location.href = link; // 跳转到指定的网页
    };
    const mark = (isIconVisible ? <Button icon={<StarOutlined />} onClick={()=>{handleButtonClick()}}></Button> :
        <Button icon={<StarFilled />} onClick={()=>{handleButtonClick()}}></Button>)
    return (
        <div style={{width:"60vw", height:"13vh", background: "white", marginBottom:'5vh',
            display:'flex', boxShadow:'0px 2px 22px 2px rgba(228,236,247,0.56', borderRadius:3}}>
            <div className={"redPink"}>
                <span className={"degree"}>{fitness}%</span>
                <span className={"fitness"}>适配度</span>
            </div>
            <img style={{width:'4.2vw', height:'8vh', marginTop:'2.5vh', marginLeft:'2.5vw',
                marginRight:'2.5vw'}} src={require(`../resources/Img/HomeImg/${logo}`)} alt={'logo'}></img>
            <div style={{display:'flex', flexDirection:'column'}}>
                <span className={"company"}>{name}</span>
                <span className={"salary"}>{salary}</span>
            </div>
            <div style={{display:"flex", flexDirection:"column", marginTop:'2.1vh', marginLeft:'3.5vw', width:'12vw'}}>
                <div className={"personalInfo"}>
                    <img src={require("../resources/Img/HomeImg/学历.png")} alt={"学历"}></img>
                    <div className={"InfoName"}>学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历</div>
                    <div className={"InfoDetail"}>{education}</div>
                </div>
                <div className={"personalInfo"}>
                    <img src={require("../resources/Img/HomeImg/技能.png")} alt={"技能"}></img>
                    <div className={"InfoName"}>技&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;能</div>
                    <div className={"InfoDetail"}>{skill}</div>
                </div>
                <div className={"personalInfo"}>
                    <img src={require("../resources/Img/HomeImg/工作经验.png")} alt={"工作经验"}></img>
                    <div className={"InfoName"}>工作经验</div>
                    <div className={"InfoDetail"}>{experience}</div>
                </div>
            </div>
            <Button className={"MoreButton"} onClick={()=>{
                handleRedirect()
            }}>了解详情</Button>
            <div style={{marginLeft:"2vw", marginTop:"4.8vh"}}>
                {mark}
            </div>
        </div>
    )
}

export function Service(img:string, titleMain:string, titleSub:string, link: string){
    const handleRedirect = () => {
        window.location.href = link; // 跳转到指定的网页
    };
    return(
        <div style={{position:'relative', flexDirection:'column'}}>
            <img src={require(`../resources/Img/HomeImg/${img}`)} style={{width:'18vw',height:'30vh', position: "absolute"}} alt={titleMain}/>
            <div className={"serviceBackground"}>
                <div className={"MainTitle"}>{titleMain}</div>
                <div style={{display:'flex'}}>
                    <div className={"SubTitle"}>{titleSub}</div>
                    <img style={{position:'relative', top:"0.7vh", left:'7vw'}} src={require("../resources/Img/HomeImg/arrow.png")} onClick={()=>{handleRedirect()}} alt={""}></img>
                </div>
            </div>
        </div>
    )

}

export function HomeFooter(){
    return (
        <div style={{background:'#2D343F', height:'45vh', marginTop:'-2vh'}}>
            <div style={{display:'flex', position:'relative', top:'6vh', left:'20vw'}}>
                <div style={{display: 'flex', flexDirection:'column'}}>
                    <img src={require("../resources/Img/HomeImg/底部logo.png")} alt={""}></img>
                    <div style={{marginTop:'3vh'}}>
                        <img src={require("../resources/Img/HomeImg/电话.png")} alt={""}></img>
                        <span className={"Phone"}>400-0645-556</span>
                    </div>
                    <div className={"WorkDay"}>工作日 08:00-17:00</div>
                </div>
                <div className={"MailAddress"}>
                    <div>
                        <img src={require("../resources/Img/HomeImg/邮件.png")} alt={""}></img>
                        <span className={"MailAddressText"}>yizhi@sina.com</span>
                    </div>
                    <div>
                        <img src={require("../resources/Img/HomeImg/地址.png")} alt={""}></img>
                        <span className={"MailAddressText"}>地址地址地址地址地址地址地址地址</span>
                    </div>
                </div>
                <div style={{marginLeft:'10vw', marginTop:'2vh'}}>
                    <div style={{width:'7.5vw',height:'12vh', background:"white"}}></div>
                    <span className={"MailAddressText"} style={{marginLeft:'1.6vw'}}>微信公众号</span>
                </div>
                <div style={{marginLeft:'2vw', marginTop:'2vh'}}>
                    <div style={{width:'7.5vw',height:'12vh', background:"white"}}></div>
                    <span className={"MailAddressText"} style={{marginLeft:'2vw'}}>微信资讯</span>
                </div>
            </div>
            <div style={{marginTop:'10vh',marginLeft:'20vw'}}>
                <span className={"FriendCooperation"}>友情链接:</span>
                <a className={"CooperationLink"} href={"https://www.sucsa.net/"}>链接一</a>
                <a className={"CooperationLink"} href={"https://www.sucsa.net/"}>链接二</a>
                <a className={"CooperationLink"} href={"https://www.sucsa.net/"}>链接三</a>
                <a className={"CooperationLink"} href={"https://www.sucsa.net/"}>链接四</a>
                <a className={"CooperationLink"} href={"https://www.sucsa.net/"}>链接五</a>
                <a className={"CooperationLink"} href={"https://www.sucsa.net/"}>链接六</a>
            </div>
            <div style={{background:"#404854", height:'1px', width:'60vw', marginLeft:'20vw', marginTop:'2vh'}}></div>
            <span className={"CopyRight"}>Copyright ©版权所有 2021 医职美好有限公司  XXX备 556323256号</span>
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
                    <img src={require("../resources/Img/HomeImg/浅色MC.png")} style={{width:'100vw',height:'80vh', position: "absolute"}} alt={"("}/>
                    <div style={{marginLeft:'20vw', height:'60vh',top:'8vh', position: 'relative'}}>
                        <ScrollView style={{height:640}}>
                            {InfoBlock("北京宏隆非凡中医药科技有限公司","2.5w ~ 3W 14薪",
                                "companyLogo.png", "86", "研究生", "口语英语流利",
                                "8年以上", "https://www.cstdccm.cn/details.php?id=137")}
                            {InfoBlock("阿里巴巴","3.1w ~ 3.5W 14薪",
                                "companyLogo.png", "76", "研究生", "会说二外",
                                "4年以上", "http://alibaba.com.cn/")}
                            {InfoBlock("腾讯","1.5w ~ 2.3W 14薪",
                                "companyLogo.png", "53", "本科生", "可远程办公",
                                "5年以上", "https://www.tencent.com/zh-cn/")}
                            {InfoBlock("小红书","1.8w ~ 2.7W 14薪",
                                "companyLogo.png", "32", "大专生", "懂篮球赛规则",
                                "2年以上", "https://www.xiaohongshu.com/explore")}
                            {InfoBlock("字节跳动","1.2w ~ 1.5W 14薪",
                                "companyLogo.png", "21", "大专生", "会基础的编程",
                                "无要求","https://www.bytedance.com/zh/")}
                        </ScrollView>
                    </div>
                </div>
                <div style={{height:'85vh'}}>
                    <div style={{position:'relative', marginLeft:'18vw', marginTop:'8vh', display:'flex'}}>
                        <img src={require("../resources/Img/HomeImg/我们的服务-元素1.png")} alt={"("}></img>
                        <div style={{display:'flex', flexDirection:'column', position:'relative', top:"6vh"}}>
                            <span className={"ourService"}>我们的服务</span>
                            <span className={"ourService"}>Our Services</span>
                        </div>
                    </div>
                    <div>
                        <img style={{position:'relative', width:'70vw'}} src={require("../resources/Img/HomeImg/我们的服务-元素2.png")} alt={""}></img>
                        <img style={{position:'relative',marginTop:'14vh', width:'15vw'}} src={require("../resources/Img/HomeImg/我们的服务-元素3.png")} alt={""}></img>
                    </div>
                    <div style={{position:'relative', bottom: "48vh", left: "23vw"}}>
                        {Service("我的服务-图片1.png", "JOB TRENDS", "求职动态",
                            "https://lanhuapp.com/web/#/item/project/detailDetach?pid=bc87961d-ea12-44d4-8e23-3318d258565b&project_id=bc87961d-ea12-44d4-8e23-3318d258565b&image_id=d1691d0a-5c81-482d-9e54-cf41fd652dfc&fromEditor=true")}
                    </div>
                    <div style={{position:'relative', bottom: "65vh", left: "43.5vw"}}>
                        {Service("我的服务-图片2.png", "JOB ACTIVITY", "求职活动",
                            "https://lanhuapp.com/web/#/item/project/detailDetach?pid=bc87961d-ea12-44d4-8e23-3318d258565b&project_id=bc87961d-ea12-44d4-8e23-3318d258565b&image_id=d1691d0a-5c81-482d-9e54-cf41fd652dfc&fromEditor=true")}
                    </div>
                    <div style={{position:'relative', bottom: "63vh", left: "64vw"}}>
                        {Service("我的服务-图片3.png", "BACKGROUND", "背景提升",
                            "https://lanhuapp.com/web/#/item/project/detailDetach?pid=bc87961d-ea12-44d4-8e23-3318d258565b&project_id=bc87961d-ea12-44d4-8e23-3318d258565b&image_id=d1691d0a-5c81-482d-9e54-cf41fd652dfc&fromEditor=true")}
                    </div>
                </div>
                <img style={{width:'100vw'}} src={require("../resources/Img/HomeImg/底部曲线底色.png")} alt={""}></img>
                <HomeFooter></HomeFooter>

            </Layout.Content>
        </Layout>
    );
}





