import React, {useState} from 'react';  //react
import { makeStyles } from '@material-ui/core/styles';  //样式表工具
import CssBaseline from '@material-ui/core/CssBaseline';  //css修正组件
import Header from "../components/header";  //顶栏组件
import Card from '@material-ui/core/Card';  // 卡片
import CardHeader from '@material-ui/core/CardHeader';  //卡片抬头
import CardContent from '@material-ui/core/CardContent';  //卡片内容
import CardActions from '@material-ui/core/CardActions';  //卡片动作
import { Typography, Tooltip } from '@material-ui/core';  //maertial ui文字组件
import WidgetsIcon from '@material-ui/icons/Widgets';  //widget图标
import ToolTip from "@material-ui/core/Tooltip"  //文字提示
import Divider from '@material-ui/core/Divider';  //分割线
import Switch from "@material-ui/core/Switch"  //转换开关
import Grid from "@material-ui/core/Grid"  //网格
import Slide from '@material-ui/core/Slide';  //滑入动画 

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: "40rem",
    },
    contextContainer: {
        display: "-webkit-flex", /* Safari */
        display: "flex",
        flexWrap: "wrap"
    }
    
  }));

function Content(props) {
    const classes = useStyles()
    const [showEvent, setShowEvent] = useState(false)
    const getTaggedCorpus = (targetList =>{
        return targetList.map((item, index)=>{
            const text = item[0]
            const tag = item[1] 
            const color = item[2]
            
            if(color == undefined){
                return (
                    <div key={index}
                    style={{
                        borderStyle: "solid",
                        borderColor: "#fff",
                        borderRadius: "8px", 
                        backgroundColor: "#fff"
                        }}
                    >
                        <Typography variant="body2"
                        style={{padding: "0.1rem"}}>{text}</Typography>
                    </div>
                );
            }else{
                return (
                    <Tooltip key={index} title={tag} arrow>
                        <div 
                        style={{
                                borderStyle: "solid",
                                borderColor: "#fff",
                                borderRadius: "8px", 
                                backgroundColor: color
                                }}
                        >
                            <Typography variant="body2" 
                            style={{padding: "0.1rem"}}>{text}</Typography>
                        </div>
                    </Tooltip>
                );
            }
        })
    })
    const taggedAttribute = getTaggedCorpus(props.modelOutList)
    const taggedEvent = getTaggedCorpus(props.eventOutList)

    const handleChange = (e) => {
        setShowEvent(e.target.checked)
    }
    return (
        <div>
            <CssBaseline></CssBaseline>
            <Header></Header>
            <div style={{height:"5rem"}}></div>
            <Card className={classes.card}>
                <CardHeader 
                avatar={<WidgetsIcon></WidgetsIcon>}  //前面的图片
                title={<Typography variant="h6">lstm</Typography>}  //中间的文字
                action={
                    <Typography variant="subtitle2" style={{marginTop:"0.5rem", marginRight:"0.3rem"}}>
                        <Grid component="label" container alignItems="center" spacing={1}>
                            <Grid item>命名实体</Grid>
                            <Grid item>
                                <Switch onChange={handleChange}>
                                </Switch>
                            </Grid>
                            <Grid item>事件</Grid>
                        </Grid>
                    </Typography>
                }  //后边的按钮
                />
                {/* 中间的分割线 */}
                <Divider style={{maxWidth:"94%", marginLeft:"3%"}} />  
                <CardContent>
                    <Slide
                    direction="left"
                    in={!showEvent}
                    {...{timeout: 1000}}
                    style={{display:showEvent?"none":undefined}}
                    >
                        <div className={classes.contextContainer}>
                            {taggedAttribute}
                        </div>
                    </Slide>
                    <Slide
                    direction="right"
                    in={showEvent}
                    {...{timeout:1000}}
                    style={{display:showEvent?undefined:"none"}}
                    >
                        <div className={classes.contextContainer}>
                            {taggedEvent}
                        </div>
                    </Slide>
                </CardContent>
            </Card>
        </div>
    );
}

Content.getInitialProps = async ({req}) => {
    let modelOutList = [["示例文本1", "Tag1"], ["示例文本4", "O"],["示例文本5", "O"],["示例文本2", "Tag2"],["示例文本3", "Tag3"], ["示例文本1", "Tag1"], ["示例文本1", "Tag1"], ["示例文本1", "Tag1"], ["示例文本1", "Tag1"]]
    let eventOutList= [["示例事件事件事件事件事件事件事件事件事件1", "Tag1"], ["示例事件事件事件事件事件事件事件事件事件2", "Tag2"],
                        ["示例事件事件事件事件事件事件事件事件事件3", "Tag3"]]
    const tagToColor = new Map()

    tagToColor.set("Tag1", "rgba(18, 52, 240, 0.80)")
    tagToColor.set("Tag2", "rgba(244, 208, 63, 0.80)")
    tagToColor.set("Tag3", "rgba(192, 57, 43, 0.80)")

    modelOutList = modelOutList.map( item => {
        if(tagToColor.has(item[1])){
            item.push(tagToColor.get(item[1]))
        }else{
            item.push(undefined)
        }
        
        return item;
    })

    eventOutList = eventOutList.map(item => {
        if(tagToColor.has(item[1])){
            item.push(tagToColor.get(item[1]))
        }else{
            item.push(undefined)
        }
        
        return item;
    })
    
    return (
        {
            modelOutList: modelOutList,
            eventOutList: eventOutList
        }
    );
}

export default Content;