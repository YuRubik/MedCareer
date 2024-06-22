import {HomeFooter, HomeHead} from "./Home";
import {Button, Flex, Layout} from "antd";
import '../css/Course.css';
import React, {useState} from "react";
import {Input} from 'antd';


const {Search} = Input;

export function SearchBar() {
    return (
        <Flex gap={"middle"} justify={"center"} vertical={false}>
            <div style={{width: '780px'}}>
                <Search placeholder="搜索职位/公司" enterButton="&nbsp;&nbsp;&nbsp;搜索&nbsp;&nbsp;&nbsp;"
                        size="large"/>
            </div>
        </Flex>
    )
}


export function CoursePoster() {
    return (
        <Flex gap={"middle"} justify={"center"} vertical={true}>
            <Flex gap={"large"} justify={"center"} vertical={false}>
                <div className="poster-rectangle">
                    <p className={"left-poster-title"}>面试求职:</p>
                    <p className={"left-poster-text"}>职业生涯｜什么是金融行...</p>
                    <p className={"left-poster-title"}>金融咨询:</p>
                    <p className={"left-poster-text"}>HOT!大牛导师带你做投资|...</p>
                    <p className={"left-poster-title"}>医疗药械:</p>
                    <p className={"left-poster-text"}>职业生涯规划|什么是金融行...</p>
                    <p className={"left-poster-title"}>工作技能:</p>
                    <p className={"left-poster-text"}>ChatGPT在医药行业的应用</p>
                    <p className={"left-poster-title"}>一对一实训:</p>
                    <p className={"left-poster-text"}>医疗药械|医疗咨询｜医疗投资</p>
                    <p className={"left-poster-title"}>证书考试:</p>
                    <p className={"left-poster-text"}>助考宝典</p>
                </div>
                <img style={{height: '360px', width: '780px'}} src={require("../resources/Img/CourseImg/课程1.png")}
                     alt={"MedCareer Course"}></img>
                <div className="poster-rectangle"
                     style={{display: "inline-flex", flexDirection: "column", alignItems: "center"}}>
                    <p className={"left-poster-title"}
                       style={{marginLeft: "-15px", marginTop: "30px"}}>学习来自医职美好的</p>
                    <p className={"left-poster-title"} style={{marginLeft: "-15px", marginBottom: "30px"}}>精品课程</p>
                    <img style={{borderRadius: 50}} src={require("../resources/Img/CourseImg/默认头像.png")}
                         alt={"头像"}></img>
                    <Button style={{marginTop: "30px", background: "#2077F7", color: "white"}}>登陆/注册</Button>
                </div>
            </Flex>
        </Flex>
    )
}

export function Content_One_Left_Block(img: string, post_title: string, poster_text: string, date: string) {
    return (
        <div className={"content-one-small-rectangle"}>
            <Flex style={{marginTop: 30}} gap={"large"} justify={"center"} vertical={false}>
                <img style={{borderRadius: 50, width: 60, height: 60}}
                     src={require(`../resources/Img/CourseImg/${img}`)}
                     alt={"头像"}></img>
                <Flex gap={"small"} justify={"center"} vertical={true}>
                    <p className={"left-poster-title"}>{post_title}</p>
                    <p className={"left-poster-text"}
                       style={{marginTop: 0, lineHeight: 1.2}}>{poster_text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{date}</p>
                </Flex>
            </Flex>
        </div>
    )
}

export function Content_One_Middle_Block(img: string, post_text: string, link: string) {
    return (
        <div className={"content-one-large-rectangle"}>
            <Flex style={{marginTop: 30}} gap={"small"} justify={"center"} vertical={true}>
                <Flex gap={"small"} justify={"left"} vertical={false}>
                    <img style={{borderRadius: 50, width: 60, height: 60, marginLeft: 30}}
                         src={require(`../resources/Img/CourseImg/${img}`)}
                         alt={"头像"}></img>
                    <p style={{marginLeft: 30, marginTop: 20, fontSize: 16}}
                       className={"left-poster-text"}>张三</p>
                </Flex>
                <p style={{width: 300, lineHeight: 1.5, marginLeft: 30}} className={"left-poster-title"}>
                    {post_text}
                </p>
                <a style={{color: "#2077F7", marginLeft: 30, marginTop: -5}} href={link}>来自...</a>
            </Flex>
        </div>
    )
}

export function Content_One_Right_Block(img: string, company: string, salary: string) {
    return (
        <div className={"content-one-small-rectangle"}>
            <Flex style={{marginTop: 30}} gap={"large"} justify={"center"} vertical={false}>
                <img style={{borderRadius: 50, width: 60, height: 60}}
                     src={require(`../resources/Img/CourseImg/${img}`)}
                     alt={"头像"}></img>
                <Flex gap={"small"} justify={"center"} vertical={true}>
                    <p className={"left-poster-title"}>{company}</p>
                    <p className={"left-poster-text"}
                       style={{marginTop: 0}}>{salary}</p>
                </Flex>
            </Flex>
        </div>
    )
}

export function Content_One() {
    return (
        <Flex gap={"large"} justify={"center"} vertical={false}>
            <Flex gap={"middle"} justify={"center"} vertical={true}>
                <div style={{fontSize: 18, marginLeft: 5}}>
                    <p>公开课表/活动</p>
                </div>
                {Content_One_Left_Block("默认头像.png", "HOT！ 冲向年薪百万的咨询", "金融咨询", "2024.03.25")}
                {Content_One_Left_Block("默认头像.png", "HOT！ 冲向年薪百万的咨询", "金融咨询", "2024.03.25")}
                {Content_One_Left_Block("默认头像.png", "HOT！ 冲向年薪百万的咨询", "金融咨询", "2024.03.25")}
                {Content_One_Left_Block("默认头像.png", "HOT！ 冲向年薪百万的咨询", "金融咨询", "2024.03.25")}
            </Flex>
            <Flex gap={"middle"} justify={"center"} vertical={true}>
                <div style={{fontSize: 18, marginLeft: 5}}>
                    <p>经验分享</p>
                </div>
                {Content_One_Middle_Block("默认头像.png",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
                    "incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Ri" +
                    "sus commodo viverra maecenas accumsan lacus vel facilisis.", "http://localhost:3000/Course")}
                {Content_One_Middle_Block("默认头像.png",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
                    "incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Ri" +
                    "sus commodo viverra maecenas accumsan lacus vel facilisis.", "http://localhost:3000/Course")}
            </Flex>
            <Flex gap={"middle"} justify={"center"} vertical={true}>
                <div style={{fontSize: 18, marginLeft: 5}}>
                    <p>求职信息</p>
                </div>
                {Content_One_Right_Block("默认头像.png", "北京宏隆非凡中医药科技有限公司", "2.5W ~ 3W·14薪")}
                {Content_One_Right_Block("默认头像.png", "北京宏隆非凡中医药科技有限公司", "2.5W ~ 3W·14薪")}
                {Content_One_Right_Block("默认头像.png", "北京宏隆非凡中医药科技有限公司", "2.5W ~ 3W·14薪")}
                {Content_One_Right_Block("默认头像.png", "北京宏隆非凡中医药科技有限公司", "2.5W ~ 3W·14薪")}
            </Flex>
        </Flex>
    )
}


export function Content_Two_Block(order: string, img: string, poster_title: string, poster_text: string, link: string) {
    return (
        <div style={{height: 90}}>
            <Flex gap={"large"} justify={"left"} vertical={false} style={{marginLeft: 10}}>
                <p style={{marginTop: 30}}>{order}</p>
                <img style={{width: 120, height: 65, marginTop: 10, borderRadius: 5}}
                     src={require(`../resources/Img/CourseImg/${img}`)}
                     alt={"海报"}></img>
                <Flex justify={"center"} vertical={true}>
                    <div style={{marginTop: 10}}></div>
                    <a className={"left-poster-title"} style={{width: 170, height: 20, lineHeight: 1.2}}
                       href={link}>{poster_title}</a>
                    <p className={"left-poster-text"}>{poster_text}</p>
                </Flex>
            </Flex>
        </div>
    )
}

export function Content_Two() {
    return (
        <Flex gap={"middle"} justify={"center"} vertical={false}>
            <Flex gap={"middle"} justify={"center"} vertical={true}>
                <div style={{fontSize: 18, marginLeft: 5}}>
                    <p>本周课程排行榜</p>
                </div>
                <div className={"content-two-rectangle"}>
                    <Flex gap={"middle"} justify={"left"} vertical={false}>
                        <p className={"content-two-lage-blue-text"}>热门排行</p>
                        <p className={"content-two-small-blue-text"}>TOP50</p>
                    </Flex>
                    {Content_Two_Block("1", "Top咨询.png", "Top咨询Case实训", "15552人参加", "https://shop45160867.youzan.com/wscvis/course/detail/2ohubyqlytdejgu?kdt_id=44968699")}
                    {Content_Two_Block("2", "使用chatgpt.png", "HOT! 大牛导师带你做投资", "15552人参加", "https://shop45160867.youzan.com/wscvis/course/detail/3nwrbqa8nwsl7th?kdt_id=44968699&reft=1708759389383&spm=f.87102727&form=kdt#/contentshow?page=contentshow&alias=3nwrbqa8nwsl7th&kdt_id=44968699&reft=1708759389383&spm=f.87102727&form=kdt")}
                    {Content_Two_Block("3", "Top咨询.png", "医药公司高端行业-揭开医学事务部的神秘面纱", "15552人参加", "https://shop45160867.youzan.com/wscvis/course/detail/2onyued7d1vpnze?kdt_id=44968699&reft=1708759276651&spm=f.87102727&form=kdt#/columnshow?page=columnshow&alias=2onyued7d1vpnze&kdt_id=44968699&reft=1708759276651&spm=f.87102727&form=kdt")}
                    {Content_Two_Block("4", "医疗器械.png", "Top咨询Case实训", "15552人参加", "https://shop45160867.youzan.com/wscvis/course/detail/36bkav2jl5saj?kdt_id=44968699&reft=1708759220568&spm=f.87102727&form=kdt#/columnshow?page=columnshow&alias=36bkav2jl5saj&kdt_id=44968699&reft=1708759220568&spm=f.87102727&form=kdt")}
                    {Content_Two_Block("5", "Top咨询.png", "Top咨询Case实训", "15552人参加", "https://shop45160867.youzan.com/wscvis/course/detail/2ohubyqlytdejgu?kdt_id=44968699")}
                </div>
            </Flex>
            <Flex gap={"middle"} justify={"center"} vertical={true}>
                <div style={{fontSize: 18, marginLeft: 5}}>
                    <p>&nbsp;</p>
                </div>
                <div className={"content-two-rectangle"}>
                    <Flex gap={"middle"} justify={"left"} vertical={false}>
                        <p className={"content-two-lage-blue-text"}>新科排行</p>
                    </Flex>
                    {Content_Two_Block("1", "Top咨询.png", "Top咨询Case实训", "15552人参加", "https://shop45160867.youzan.com/wscvis/course/detail/2ohubyqlytdejgu?kdt_id=44968699")}
                    {Content_Two_Block("2", "使用chatgpt.png", "HOT! 大牛导师带你做投资", "15552人参加", "https://shop45160867.youzan.com/wscvis/course/detail/3nwrbqa8nwsl7th?kdt_id=44968699&reft=1708759389383&spm=f.87102727&form=kdt#/contentshow?page=contentshow&alias=3nwrbqa8nwsl7th&kdt_id=44968699&reft=1708759389383&spm=f.87102727&form=kdt")}
                    {Content_Two_Block("3", "Top咨询.png", "医药公司高端行业-揭开医学事务部的神秘面纱", "15552人参加", "https://shop45160867.youzan.com/wscvis/course/detail/2onyued7d1vpnze?kdt_id=44968699&reft=1708759276651&spm=f.87102727&form=kdt#/columnshow?page=columnshow&alias=2onyued7d1vpnze&kdt_id=44968699&reft=1708759276651&spm=f.87102727&form=kdt")}
                    {Content_Two_Block("4", "医疗器械.png", "Top咨询Case实训", "15552人参加", "https://shop45160867.youzan.com/wscvis/course/detail/36bkav2jl5saj?kdt_id=44968699&reft=1708759220568&spm=f.87102727&form=kdt#/columnshow?page=columnshow&alias=36bkav2jl5saj&kdt_id=44968699&reft=1708759220568&spm=f.87102727&form=kdt")}
                    {Content_Two_Block("5", "Top咨询.png", "Top咨询Case实训", "15552人参加", "https://shop45160867.youzan.com/wscvis/course/detail/2ohubyqlytdejgu?kdt_id=44968699")}
                </div>
            </Flex>
            <Flex gap={"middle"} justify={"center"} vertical={true}>
                <div style={{fontSize: 18, marginLeft: 5}}>
                    <p>本周限时优惠榜</p>
                </div>
                <div className={"content-two-rectangle"}>
                    <Flex gap={"middle"} justify={"left"} vertical={false}>
                        <p className={"content-two-lage-blue-text"}>限时优惠</p>
                        <p className={"content-two-small-blue-text"}>TOP50</p>
                    </Flex>
                    {Content_Two_Block("1", "Top咨询.png", "Top咨询Case实训", "15552人参加", "https://shop45160867.youzan.com/wscvis/course/detail/2ohubyqlytdejgu?kdt_id=44968699")}
                    {Content_Two_Block("2", "使用chatgpt.png", "HOT! 大牛导师带你做投资", "15552人参加", "https://shop45160867.youzan.com/wscvis/course/detail/3nwrbqa8nwsl7th?kdt_id=44968699&reft=1708759389383&spm=f.87102727&form=kdt#/contentshow?page=contentshow&alias=3nwrbqa8nwsl7th&kdt_id=44968699&reft=1708759389383&spm=f.87102727&form=kdt")}
                    {Content_Two_Block("3", "Top咨询.png", "医药公司高端行业-揭开医学事务部的神秘面纱", "15552人参加", "https://shop45160867.youzan.com/wscvis/course/detail/2onyued7d1vpnze?kdt_id=44968699&reft=1708759276651&spm=f.87102727&form=kdt#/columnshow?page=columnshow&alias=2onyued7d1vpnze&kdt_id=44968699&reft=1708759276651&spm=f.87102727&form=kdt")}
                    {Content_Two_Block("4", "医疗器械.png", "Top咨询Case实训", "15552人参加", "https://shop45160867.youzan.com/wscvis/course/detail/36bkav2jl5saj?kdt_id=44968699&reft=1708759220568&spm=f.87102727&form=kdt#/columnshow?page=columnshow&alias=36bkav2jl5saj&kdt_id=44968699&reft=1708759220568&spm=f.87102727&form=kdt")}
                    {Content_Two_Block("5", "Top咨询.png", "Top咨询Case实训", "15552人参加", "https://shop45160867.youzan.com/wscvis/course/detail/2ohubyqlytdejgu?kdt_id=44968699")}
                </div>
            </Flex>
        </Flex>
    )
}

interface ContentBlock {
    img: string;
    poster_title: string;
    poster_text: string;
    price: string;
    link: string;
}

export function Content_Three() {
    const [activeButton, setActiveButton] = useState(0);

    const buttons = ['求职面试', '金融咨询', '医疗药械', '工作技能', '一对一实训', '证书考试', '全程服务'];
    const handleClick = (index: number) => {
        setActiveButton(index);
    }

    const contentBlocks: ContentBlock[] = [
        {
            img: "人生规划.png",
            poster_title: "职业生涯规划",
            poster_text: "⽣化与医药背景学⽣择业/转⾏实例，建立框架、提供指导、搞定规划",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/2xaeacyxpjlcb?kdt_id=44968699&banner_id=f.87102727~image_ad.2~1~k6zb78mg&reft=1708759569912&spm=f.87102727&form=kdt#/columnshow?kdt_id=44968699&page=columnshow&alias=2xaeacyxpjlcb&banner_id=f.87102727~image_ad.2~1~k6zb78mg&reft=1708759569912&spm=f.87102727&form=kdt"
        },
        {
            img: "金融工作.png",
            poster_title: "什么是金融行业的“好工作",
            poster_text: "⾦融⾏业机构岗位扫盲，用最简单的语⾔告诉学员最重要的底层知识",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/278zsl5gqa4ln?kdt_id=44968699&reft=1708759342276&spm=f.87102727&form=kdt#/columnshow?page=columnshow&alias=278zsl5gqa4ln&kdt_id=44968699&reft=1708759342276&spm=f.87102727&form=kdt"
        },
        {
            img: "直击case.png",
            poster_title: "咨询/药企case面试",
            poster_text: "医药咨询/药企真实面试案例；医药宏观行业和商业逻辑",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/2frp604ksoot7t8?kdt_id=44968699&reft=1708760477864&spm=f.87102727&form=kdt#/contentshow?page=contentshow&alias=2frp604ksoot7t8&kdt_id=44968699&reft=1708760477864&spm=f.87102727&form=kdt"
        },
        {
            img: "case实训.png",
            poster_title: "Top咨询case实训",
            poster_text: "手把手从零开始拆解Case，实战练习，面试技巧以及如何成为PPT画家",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/2ohubyqlytdejgu?kdt_id=44968699"
        },
        {
            img: "直击case.png",
            poster_title: "咨询/药企case面试",
            poster_text: "医药咨询/药企真实面试案例；医药宏观行业和商业逻辑",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/2frp604ksoot7t8?kdt_id=44968699&reft=1708760477864&spm=f.87102727&form=kdt#/contentshow?page=contentshow&alias=2frp604ksoot7t8&kdt_id=44968699&reft=1708760477864&spm=f.87102727&form=kdt"
        },
        {
            img: "case实训.png",
            poster_title: "Top咨询case实训",
            poster_text: "手把手从零开始拆解Case，实战练习，面试技巧以及如何成为PPT画家",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/2ohubyqlytdejgu?kdt_id=44968699"
        },
        {
            img: "人生规划.png",
            poster_title: "职业生涯规划",
            poster_text: "⽣化与医药背景学⽣择业/转⾏实例，建立框架、提供指导、搞定规划",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/2xaeacyxpjlcb?kdt_id=44968699&banner_id=f.87102727~image_ad.2~1~k6zb78mg&reft=1708759569912&spm=f.87102727&form=kdt#/columnshow?kdt_id=44968699&page=columnshow&alias=2xaeacyxpjlcb&banner_id=f.87102727~image_ad.2~1~k6zb78mg&reft=1708759569912&spm=f.87102727&form=kdt"
        },
        {
            img: "金融工作.png",
            poster_title: "什么是金融行业的“好工作",
            poster_text: "⾦融⾏业机构岗位扫盲，用最简单的语⾔告诉学员最重要的底层知识",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/278zsl5gqa4ln?kdt_id=44968699&reft=1708759342276&spm=f.87102727&form=kdt#/columnshow?page=columnshow&alias=278zsl5gqa4ln&kdt_id=44968699&reft=1708759342276&spm=f.87102727&form=kdt"
        },
        {
            img: "case实训.png",
            poster_title: "Top咨询case实训",
            poster_text: "手把手从零开始拆解Case，实战练习，面试技巧以及如何成为PPT画家",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/2ohubyqlytdejgu?kdt_id=44968699"
        },
        {
            img: "人生规划.png",
            poster_title: "职业生涯规划",
            poster_text: "⽣化与医药背景学⽣择业/转⾏实例，建立框架、提供指导、搞定规划",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/2xaeacyxpjlcb?kdt_id=44968699&banner_id=f.87102727~image_ad.2~1~k6zb78mg&reft=1708759569912&spm=f.87102727&form=kdt#/columnshow?kdt_id=44968699&page=columnshow&alias=2xaeacyxpjlcb&banner_id=f.87102727~image_ad.2~1~k6zb78mg&reft=1708759569912&spm=f.87102727&form=kdt"
        },
        {
            img: "金融工作.png",
            poster_title: "什么是金融行业的“好工作",
            poster_text: "⾦融⾏业机构岗位扫盲，用最简单的语⾔告诉学员最重要的底层知识",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/278zsl5gqa4ln?kdt_id=44968699&reft=1708759342276&spm=f.87102727&form=kdt#/columnshow?page=columnshow&alias=278zsl5gqa4ln&kdt_id=44968699&reft=1708759342276&spm=f.87102727&form=kdt"
        },
        {
            img: "case实训.png",
            poster_title: "Top咨询case实训",
            poster_text: "手把手从零开始拆解Case，实战练习，面试技巧以及如何成为PPT画家",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/2ohubyqlytdejgu?kdt_id=44968699"
        },
        {
            img: "人生规划.png",
            poster_title: "职业生涯规划",
            poster_text: "⽣化与医药背景学⽣择业/转⾏实例，建立框架、提供指导、搞定规划",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/2xaeacyxpjlcb?kdt_id=44968699&banner_id=f.87102727~image_ad.2~1~k6zb78mg&reft=1708759569912&spm=f.87102727&form=kdt#/columnshow?kdt_id=44968699&page=columnshow&alias=2xaeacyxpjlcb&banner_id=f.87102727~image_ad.2~1~k6zb78mg&reft=1708759569912&spm=f.87102727&form=kdt"
        },
        {
            img: "金融工作.png",
            poster_title: "什么是金融行业的“好工作",
            poster_text: "⾦融⾏业机构岗位扫盲，用最简单的语⾔告诉学员最重要的底层知识",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/278zsl5gqa4ln?kdt_id=44968699&reft=1708759342276&spm=f.87102727&form=kdt#/columnshow?page=columnshow&alias=278zsl5gqa4ln&kdt_id=44968699&reft=1708759342276&spm=f.87102727&form=kdt"
        },
        {
            img: "case实训.png",
            poster_title: "Top咨询case实训",
            poster_text: "手把手从零开始拆解Case，实战练习，面试技巧以及如何成为PPT画家",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/2ohubyqlytdejgu?kdt_id=44968699"
        },
        {
            img: "人生规划.png",
            poster_title: "职业生涯规划",
            poster_text: "⽣化与医药背景学⽣择业/转⾏实例，建立框架、提供指导、搞定规划",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/2xaeacyxpjlcb?kdt_id=44968699&banner_id=f.87102727~image_ad.2~1~k6zb78mg&reft=1708759569912&spm=f.87102727&form=kdt#/columnshow?kdt_id=44968699&page=columnshow&alias=2xaeacyxpjlcb&banner_id=f.87102727~image_ad.2~1~k6zb78mg&reft=1708759569912&spm=f.87102727&form=kdt"
        },
        {
            img: "金融工作.png",
            poster_title: "什么是金融行业的“好工作",
            poster_text: "⾦融⾏业机构岗位扫盲，用最简单的语⾔告诉学员最重要的底层知识",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/278zsl5gqa4ln?kdt_id=44968699&reft=1708759342276&spm=f.87102727&form=kdt#/columnshow?page=columnshow&alias=278zsl5gqa4ln&kdt_id=44968699&reft=1708759342276&spm=f.87102727&form=kdt"
        },
        {
            img: "case实训.png",
            poster_title: "Top咨询case实训",
            poster_text: "手把手从零开始拆解Case，实战练习，面试技巧以及如何成为PPT画家",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/2ohubyqlytdejgu?kdt_id=44968699"
        },
        {
            img: "人生规划.png",
            poster_title: "职业生涯规划",
            poster_text: "⽣化与医药背景学⽣择业/转⾏实例，建立框架、提供指导、搞定规划",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/2xaeacyxpjlcb?kdt_id=44968699&banner_id=f.87102727~image_ad.2~1~k6zb78mg&reft=1708759569912&spm=f.87102727&form=kdt#/columnshow?kdt_id=44968699&page=columnshow&alias=2xaeacyxpjlcb&banner_id=f.87102727~image_ad.2~1~k6zb78mg&reft=1708759569912&spm=f.87102727&form=kdt"
        },
        {
            img: "金融工作.png",
            poster_title: "什么是金融行业的“好工作",
            poster_text: "⾦融⾏业机构岗位扫盲，用最简单的语⾔告诉学员最重要的底层知识",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/278zsl5gqa4ln?kdt_id=44968699&reft=1708759342276&spm=f.87102727&form=kdt#/columnshow?page=columnshow&alias=278zsl5gqa4ln&kdt_id=44968699&reft=1708759342276&spm=f.87102727&form=kdt"
        },
        {
            img: "case实训.png",
            poster_title: "Top咨询case实训",
            poster_text: "手把手从零开始拆解Case，实战练习，面试技巧以及如何成为PPT画家",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/2ohubyqlytdejgu?kdt_id=44968699"
        },
        {
            img: "人生规划.png",
            poster_title: "职业生涯规划",
            poster_text: "⽣化与医药背景学⽣择业/转⾏实例，建立框架、提供指导、搞定规划",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/2xaeacyxpjlcb?kdt_id=44968699&banner_id=f.87102727~image_ad.2~1~k6zb78mg&reft=1708759569912&spm=f.87102727&form=kdt#/columnshow?kdt_id=44968699&page=columnshow&alias=2xaeacyxpjlcb&banner_id=f.87102727~image_ad.2~1~k6zb78mg&reft=1708759569912&spm=f.87102727&form=kdt"
        },
        {
            img: "金融工作.png",
            poster_title: "什么是金融行业的“好工作",
            poster_text: "⾦融⾏业机构岗位扫盲，用最简单的语⾔告诉学员最重要的底层知识",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/278zsl5gqa4ln?kdt_id=44968699&reft=1708759342276&spm=f.87102727&form=kdt#/columnshow?page=columnshow&alias=278zsl5gqa4ln&kdt_id=44968699&reft=1708759342276&spm=f.87102727&form=kdt"
        },
        {
            img: "case实训.png",
            poster_title: "Top咨询case实训",
            poster_text: "手把手从零开始拆解Case，实战练习，面试技巧以及如何成为PPT画家",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/2ohubyqlytdejgu?kdt_id=44968699"
        },
        {
            img: "人生规划.png",
            poster_title: "职业生涯规划",
            poster_text: "⽣化与医药背景学⽣择业/转⾏实例，建立框架、提供指导、搞定规划",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/2xaeacyxpjlcb?kdt_id=44968699&banner_id=f.87102727~image_ad.2~1~k6zb78mg&reft=1708759569912&spm=f.87102727&form=kdt#/columnshow?kdt_id=44968699&page=columnshow&alias=2xaeacyxpjlcb&banner_id=f.87102727~image_ad.2~1~k6zb78mg&reft=1708759569912&spm=f.87102727&form=kdt"
        },
        {
            img: "金融工作.png",
            poster_title: "什么是金融行业的“好工作",
            poster_text: "⾦融⾏业机构岗位扫盲，用最简单的语⾔告诉学员最重要的底层知识",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/278zsl5gqa4ln?kdt_id=44968699&reft=1708759342276&spm=f.87102727&form=kdt#/columnshow?page=columnshow&alias=278zsl5gqa4ln&kdt_id=44968699&reft=1708759342276&spm=f.87102727&form=kdt"
        },
        {
            img: "case实训.png",
            poster_title: "Top咨询case实训",
            poster_text: "手把手从零开始拆解Case，实战练习，面试技巧以及如何成为PPT画家",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/2ohubyqlytdejgu?kdt_id=44968699"
        },
        {
            img: "人生规划.png",
            poster_title: "职业生涯规划",
            poster_text: "⽣化与医药背景学⽣择业/转⾏实例，建立框架、提供指导、搞定规划",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/2xaeacyxpjlcb?kdt_id=44968699&banner_id=f.87102727~image_ad.2~1~k6zb78mg&reft=1708759569912&spm=f.87102727&form=kdt#/columnshow?kdt_id=44968699&page=columnshow&alias=2xaeacyxpjlcb&banner_id=f.87102727~image_ad.2~1~k6zb78mg&reft=1708759569912&spm=f.87102727&form=kdt"
        },
        {
            img: "金融工作.png",
            poster_title: "什么是金融行业的“好工作",
            poster_text: "⾦融⾏业机构岗位扫盲，用最简单的语⾔告诉学员最重要的底层知识",
            price: "¥99",
            link: "https://shop45160867.youzan.com/wscvis/course/detail/278zsl5gqa4ln?kdt_id=44968699&reft=1708759342276&spm=f.87102727&form=kdt#/columnshow?page=columnshow&alias=278zsl5gqa4ln&kdt_id=44968699&reft=1708759342276&spm=f.87102727&form=kdt"
        }
    ];

    const page = activeButton * 4;

    return (
        <Flex gap={"large"} justify={"center"} vertical={true}>
            <Flex gap={"large"} justify={"center"} vertical={false} style={{ marginLeft: -260 }}>
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        className={`dynamic-button ${activeButton === index ? 'active' : ''}`}
                        onClick={() => handleClick(index)}
                    >
                        {button}
                    </button>
                ))}
            </Flex>
            <Flex gap={"large"} justify={"center"} vertical={false}>
                {contentBlocks.slice(page, page + 4).map((block, index) => (
                    <Content_Three_Block
                        key={index}
                        img={block.img}
                        poster_title={block.poster_title}
                        poster_text={block.poster_text}
                        price={block.price}
                        link={block.link}
                    />
                ))}
            </Flex>
        </Flex>
    );
}

interface ContentThreeBlockProps {
    img: string;
    poster_title: string;
    poster_text: string;
    price: string;
    link: string;
}

export function Content_Three_Block({ img, poster_title, poster_text, price, link }: ContentThreeBlockProps) {
    return (
        <div className={"content-three-rectangle"}>
            <Flex gap={"middle"} justify={"center"} align={"flex-start"} vertical={true}>
                <img className={"content-three-img"}
                     src={require(`../resources/Img/CourseImg/${img}`)}
                     alt={"海报"}></img>
                <div style={{ marginLeft: 15 }}>
                    <a className={"content-three-poster-title"} href={link}>{poster_title}</a>
                    <p className={"content-three-poster-text"}>{poster_text}</p>
                    <p className={"content-three-poster-price"}>{price}</p>
                </div>
            </Flex>
        </div>
    );
}


export default function Course() {
    return (
        <Layout>
            <HomeHead></HomeHead>
            <Layout.Content style={{background: "#F7F7F7"}}>
                <div style={{height: '5vh'}}></div>
                <CoursePoster></CoursePoster>
                <div style={{height: '2vh'}}></div>
                <SearchBar></SearchBar>
                <div style={{height: '5vh'}}></div>
                <Content_One></Content_One>
                <div style={{height: '5vh'}}></div>
                <Content_Two></Content_Two>
                <div style={{height: '5vh'}}></div>
                <Content_Three></Content_Three>
                <div style={{height: '15vh'}}></div>
            </Layout.Content>
            <HomeFooter></HomeFooter>
        </Layout>
    )
}