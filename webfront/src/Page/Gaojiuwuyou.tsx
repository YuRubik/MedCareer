import {HomeFooter, HomeHead} from "./Home";
import {Button, Col, Flex, Layout, Row} from "antd";
import React from "react";
import '../css/Gaojiuwuyou.css';

function Banner(){
    return(
        <Flex style={{height: "400px", marginBottom:"30px"}} vertical={true}>
            <img style={{position: "absolute", zIndex: 1, width: "100%"}} src={require("../resources/Img/GaojiuwuyouImg/banner.png")}
                 alt={"banner"}/>
            <div style={{zIndex: 10, marginLeft: "20%"}}>
                <p className={"BannerBigText"}>MEDCAREER</p>
                <p className={"BannerMiddleText"}>高就无忧</p>
                <p className={"BannerLine"}>——————————</p>
                <p className={"BannerSmallText"}>毕业季职业规划全流程服务体系</p>
                <p className={"BannerSmallText"}>为医药和生化环材背景学员提供接轨金融赛道专业职培方案</p>
            </div>
        </Flex>
    )
}

function PartOne(){
    return(
        <Flex style={{height: "500px"}} align={"center"} vertical={true}>
            <Flex style={{marginBottom:"70px"}} align={"flex-start"} justify={"space-between"} vertical={false}>
                <Flex vertical={true}>
                    <div className={"PartOneTitle"}>毕业生</div>
                    <div style={{height:10, width:90, background:"red"}}></div>
                </Flex>
                <div className={"PartOneTitle"}>面临的挑战</div>
            </Flex>
            <Flex justify={"center"} gap={"250px"} vertical={false}>
                <Flex justify={"center"} align={"center"} vertical={true}>
                    <div className={"PartOneSmallLogo"}>
                        <div className={"circle"}></div>
                        <img className={"logo"} src={require("../resources/Img/GaojiuwuyouImg/时间紧张.png")}
                             alt={"时间紧张"}/>
                    </div>
                    <p className={"PartOneSmallTitle"}>时间紧张</p>
                    <p className={"PartOneSmallText"}>需要同时准备</p>
                    <p className={"PartOneSmallText"}>毕业论文、</p>
                    <p className={"PartOneSmallText"}>进行暑期实习和校招准备</p>
                </Flex>
                <Flex justify={"center"} align={"center"} vertical={true}>
                    <div className={"PartOneSmallLogo"}>
                        <div className={"circle"}></div>
                        <img className={"logo"} src={require("../resources/Img/GaojiuwuyouImg/精力有限.png")}
                             alt={"时间紧张"}/>
                    </div>
                    <p className={"PartOneSmallTitle"}>精力有限</p>
                    <p className={"PartOneSmallText"}>在海投背景下</p>
                    <p className={"PartOneSmallText"}>没有精力系统了解岗位信息</p>
                    <p className={"PartOneSmallText"}>和有针对性的进行准备</p>
                </Flex>
                <Flex justify={"center"} align={"center"} vertical={true}>
                    <div className={"PartOneSmallLogo"}>
                        <div className={"circle"}></div>
                        <img className={"logo"} src={require("../resources/Img/GaojiuwuyouImg/缺乏经验.png")}
                             alt={"时间紧张"}/>
                    </div>
                    <p className={"PartOneSmallTitle"}>缺乏经验</p>
                    <p className={"PartOneSmallText"}>非金融背景的学生需要自学</p>
                    <p className={"PartOneSmallText"}>来补充一定的金融知识和技能</p>
                    <p className={"PartOneSmallText"}>并参加相关实习</p>
                </Flex>
            </Flex>
        </Flex>
    )
}


function PartTwo(){
    return(
        <Flex style={{height: "500px", background:"#F5F7FC"}} align={"center"} vertical={false}>
            <Flex style={{background: "#F5F7FC", marginLeft:"20%", marginRight: "5%",height:400}} align={"flex-start"} vertical={true}>
                <p className={"PartTwoBlueTitle"}>MEDCAREER</p>
                <Flex style={{marginBottom:10}} align={"flex-start"} justify={"space-between"} vertical={false}>
                    <Flex vertical={true}>
                        <div className={"PartTwoBlackTitle"}>你的</div>
                        <div style={{height: 10, width: 60, background: "red"}}></div>
                    </Flex>
                    <div className={"PartTwoBlackTitle"}>无忧解决方案</div>
                </Flex>
                <p style={{marginBottom:-6}} className={"PartTwoBlackText"}>为医药和生化环材背景学员</p>
                <p className={"PartTwoBlackText"}>提供接轨金融赛道专业职培方案</p>
                <button className={"Gaojiuwuyou-Button"}>立即预约</button>
            </Flex>
            <div style={{background:"white"}}>
                <Row>
                    <Col style={{width: 430, border:"grey dashed 0.01px"}}>
                        <Flex vertical={false} align={"flex-start"} justify={"start"}>
                            <div className={"PartTwoSmallLogo"}>
                                <div className={"circle"}></div>
                                <img className={"logo"} src={require("../resources/Img/GaojiuwuyouImg/精品课程.png")}
                                     alt={"精品课程"}/>
                            </div>
                            <Flex vertical={true}>
                                <p className={"PartTwoSmallTitle"}>行业精品课程</p>
                                <p className={"PartTwoSmallText"}>医药投资、FA、投行等十二大求职精品课程覆盖多个行业。</p>
                            </Flex>
                        </Flex>
                    </Col>
                    <Col style={{width: 430, border:"grey dashed 0.01px"}}>
                        <Flex vertical={false} align={"flex-start"} justify={"start"}>
                            <div className={"PartTwoSmallLogo"}>
                                <div className={"circle"}></div>
                                <img className={"logo"} src={require("../resources/Img/GaojiuwuyouImg/辅导.png")}
                                     alt={"求职辅导"}/>
                            </div>
                            <Flex vertical={true}>
                                <p className={"PartTwoSmallTitle"}>求职辅导</p>
                                <p className={"PartTwoSmallText"}>来自国内外顶级医疗投资企业的导师，进行职业规划、简历辅导、面试辅导等。</p>
                            </Flex>
                        </Flex>
                    </Col>
                </Row>
                <Row>
                    <Col style={{width: 430, border:"grey dashed 0.01px"}}>
                        <Flex vertical={false} align={"flex-start"} justify={"start"}>
                            <div className={"PartTwoSmallLogo"}>
                                <div className={"circle"}></div>
                                <img className={"logo"} src={require("../resources/Img/GaojiuwuyouImg/定制.png")}
                                     alt={"个性定制"}/>
                            </div>
                            <Flex vertical={true}>
                                <p className={"PartTwoSmallTitle"}>个性化定制</p>
                                <p className={"PartTwoSmallText"}>根据学员背景和需求，由资深导师量身打造实习和求职时间表，提供专属求职解决方案。</p>
                            </Flex>
                        </Flex>
                    </Col>
                    <Col style={{width: 430, border:"grey dashed 0.01px"}}>
                        <Flex vertical={false} align={"flex-start"} justify={"start"}>
                            <div className={"PartTwoSmallLogo"}>
                                <div className={"circle"}></div>
                                <img className={"logo"} src={require("../resources/Img/GaojiuwuyouImg/推荐岗位.png")}
                                     alt={"精品课程"}/>
                            </div>
                            <Flex vertical={true}>
                                <p className={"PartTwoSmallTitle"}>直接推荐岗位</p>
                                <p className={"PartTwoSmallText"}>为学员提供岗位信息资源，铺定Top机构直推优质实习，获得正式工作机会。</p>
                            </Flex>
                        </Flex>
                    </Col>
                </Row>
            </div>
        </Flex>
    )
}

function PartThree(){
    return(
        <Flex style={{height: "800px"}} vertical={true} align={"center"} justify={"center"}>
            <p className={"PartThreeTitle"}>高就无忧项目内容</p>
            <p className={"PartThreeSmallTitle"}>附加服务: 实习跟踪阶段、入职发展阶段</p>
            <Flex style={{height: "500px"}} vertical={false} gap={"large"}>
                <div className={"PartThreeButtonBackGround"}>
                    <Button className={"PartThreeButton"}>
                        <div className={"PartThreeSmallLogo"}>
                            <div className={"circle"}></div>
                            <img className={"logo"}
                                 src={require("../resources/Img/GaojiuwuyouImg/项目内容icon1_点击后.png")}
                                 alt={"Photo1"}/>
                        </div>
                        <div style={{textAlign: "start", marginLeft: 30, height: 140}}>
                            <p className={"PartThreeButtonBigText"}>毕业季准备阶段</p>
                            <p className={"PartThreeButtonSmallText"}>· 1V1 个性化职业规划</p>
                            <p className={"PartThreeButtonSmallText"}>· 定制行业课程</p>
                            <p className={"PartThreeButtonSmallText"}> · 1V1 简历和求职信精修</p>
                        </div>
                    </Button>
                </div>
                <div className={"PartThreeButtonBackGround"}>
                    <Button className={"PartThreeButton"}>
                        <div className={"PartThreeSmallLogo"}>
                            <div className={"circle"}></div>
                            <img className={"logo"}
                                 src={require("../resources/Img/GaojiuwuyouImg/项目内容icon2_默认.png")}
                                 alt={"Photo1"}/>
                        </div>
                        <div style={{textAlign: "start", marginLeft: 30 , height: 140}}>
                            <p className={"PartThreeButtonBigText"}>暑期实习阶段</p>
                            <p className={"PartThreeButtonSmallText"}>· 一手岗位资源</p>
                            <p className={"PartThreeButtonSmallText"}>· 面试专项辅导</p>
                            <p className={"PartThreeButtonSmallText"}> · 垂直内推实习</p>
                        </div>
                    </Button>
                </div>
                <div className={"PartThreeButtonBackGround"}>
                    <Button className={"PartThreeButton"}>
                        <div className={"PartThreeSmallLogo"}>
                            <div className={"circle"}></div>
                            <img className={"logo"}
                                 src={require("../resources/Img/GaojiuwuyouImg/项目内容icon3_默认.png")}
                                 alt={"Photo1"}/>
                        </div>
                        <div style={{textAlign: "start", marginLeft: 30, height: 140}}>
                            <p className={"PartThreeButtonBigText"}>秋招备战阶段</p>
                            <p className={"PartThreeButtonSmallText"}>· 最新岗位信息</p>
                            <p className={"PartThreeButtonSmallText"}>· 行业精华课程</p>
                            <p className={"PartThreeButtonSmallText"}> · 笔试资料</p>
                            <p className={"PartThreeButtonSmallText"}> · 1v1模拟面试</p>
                        </div>
                    </Button>
                </div>
                <div className={"PartThreeButtonBackGround"}>
                    <Button className={"PartThreeButton"}>
                        <div className={"PartThreeSmallLogo"}>
                            <div className={"circle"}></div>
                            <img className={"logo"}
                                 src={require("../resources/Img/GaojiuwuyouImg/项目内容icon4_默认.png")}
                                 alt={"Photo1"}/>
                        </div>
                        <div style={{textAlign: "start", marginLeft: 30, height: 140}}>
                            <p className={"PartThreeButtonBigText"}>春招备战阶段</p>
                            <p className={"PartThreeButtonSmallText"}>· 最新岗位信息</p>
                            <p className={"PartThreeButtonSmallText"}>· 精准笔面试辅导</p>
                            <p className={"PartThreeButtonSmallText"}> · 垂直内推岗位</p>
                        </div>
                    </Button>
                </div>
            </Flex>
        </Flex>
    )
}

function PartFour() {
    return (
        <Flex vertical={true} align={"center"} style={{height: "1500px", background: "#F8F8F8"}}>
            <div style={{height: 400, textAlign: "center"}}>
                <p className={"PartFourBlackTitle"}>名校导师团队</p>
                <p className={"PartFourBlueTitle"}>全球500强企业精英导师·平均工作经历超过5年</p>
            </div>
            <Row gutter={[16, 16]} style={{marginBottom: 250}}>
                <Col>
                    <div className={"PartFourPeople"}>
                        <img className={"PartFourPhoto"} src={require("../resources/Img/GaojiuwuyouImg/photo1.png")}
                             alt={"Photo1"}/>
                        <div style={{marginLeft: 20, marginRight: 20}}>
                            <p className={"PartFourName"}>Bruce</p>
                            <p className={"PartFourTitle"}>北京大学国发院MBA</p>
                            <p className={"PartFourTitle"}>眼科硕士</p>
                            <p className={"PartFourDescription"}>投资副总裁，专注医疗VC,投资项目回报最高三年 100倍，成功创办眼科
                                OCT和手术机器人公司。<br/> 多个项目 2年内 10 倍以上回报，获浙江省十佳新锐投资。</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className={"PartFourPeople"}>
                        <img className={"PartFourPhoto"} src={require("../resources/Img/GaojiuwuyouImg/photo2.png")}
                             alt={"Photo1"}/>
                        <div style={{marginLeft:20, marginRight: 20}}>
                            <p className={"PartFourName"}>Kelly</p>
                            <p className={"PartFourTitle"}>生物学 Top 硕士</p>
                            <p className={"PartFourDescription"}>从二级到 FA、投行、PEVC、LP，毕业季拿到多个 offer，具有买方和卖方双重视角，擅长医疗金融求职。注重个人性格能力与职业道路发展的适配度。</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className={"PartFourPeople"}>
                        <img className={"PartFourPhoto"} src={require("../resources/Img/GaojiuwuyouImg/photo3.png")}
                             alt={"Photo1"}/>
                        <div style={{marginLeft:20, marginRight: 20}}>
                            <p className={"PartFourName"}>Fay</p>
                            <p className={"PartFourTitle"}>国内医药 Top 硕士</p>
                            <p className={"PartFourDescription"}>转型金融一级市场，专注医药领域的研究与判断，成功投资医药项目，担任全球创赛医疗赛道评委，熟悉医药生在金融行业的差异化竞争方式。</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className={"PartFourPeople"}>
                        <img className={"PartFourPhoto"} src={require("../resources/Img/GaojiuwuyouImg/photo4.png")}
                             alt={"Photo1"}/>
                        <div style={{marginLeft:20, marginRight: 20}}>
                            <p className={"PartFourName"}>Kevin</p>
                            <p className={"PartFourTitle"}>金融硕士，医学学士</p>
                            <p className={"PartFourDescription"}>投资副总裁，专注医疗VC,投资项目回报最高三年 100倍，成功创办眼科 OCT和手术机器人公司。
                                多个项目 2年内 10 倍以上回报，获浙江省十佳新锐投资。</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col>
                    <div className={"PartFourPeople"}>
                        <img className={"PartFourPhoto"} src={require("../resources/Img/GaojiuwuyouImg/photo5.png")}
                             alt={"Photo1"}/>
                        <div style={{marginLeft:20, marginRight: 20}}>
                            <p className={"PartFourName"}>Tammy</p>
                            <p className={"PartFourTitle"}>医学硕士</p>
                            <p className={"PartFourTitle"}>医学、管理学双学士</p>
                            <p className={"PartFourDescription"}>级买方从业，熟悉医疗器械风险投资，熟悉医疗金融求职、职业发展路径。</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className={"PartFourPeople"}>
                        <img className={"PartFourPhoto"} src={require("../resources/Img/GaojiuwuyouImg/photo6.png")}
                             alt={"Photo1"}/>
                        <div style={{marginLeft:20, marginRight: 20}}>
                            <p className={"PartFourName"}>Eric</p>
                            <p className={"PartFourTitle"}>国内 TOP2 医药硕士</p>
                            <p className={"PartFourDescription"}>突出的求职经验，斩获众多名企和世界五百强 ofer，涉足金融和咨询领域。</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className={"PartFourPeople"}>
                        <img className={"PartFourPhoto"} src={require("../resources/Img/GaojiuwuyouImg/photo7.png")}
                             alt={"Photo1"}/>
                        <div style={{marginLeft:20, marginRight: 20}}>
                            <p className={"PartFourName"}>Caroline</p>
                            <p className={"PartFourTitle"}>国内 TOP2 医药硕士</p>
                            <p className={"PartFourDescription"}>斩获众多名企和世界五百强 ofer，曾获香港投行 ofer 并拿到 return，了解投行职业发展路径。保持面试 100% 通过率</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Flex>
    )
}

function PartFive(){
    return(
        <Flex justify={"center"} align={"center"} style={{height: 1000, background: "white"}} vertical={true}>
            <p className={"PartFiveTitle"}>全流程服务体系课程包详情</p>
            <img style={{width:1200}} src={require("../resources/Img/GaojiuwuyouImg/gird.png")} alt={"grid"}/>
        </Flex>
    )
}

export default function Gaojiuwuyou() {
    return (
        <Layout>
            <HomeHead></HomeHead>
            <Banner></Banner>
            <PartOne></PartOne>
            <PartTwo></PartTwo>
            <PartThree></PartThree>
            <PartFour></PartFour>
            <PartFive></PartFive>
            <HomeFooter></HomeFooter>
        </Layout>
    )
}