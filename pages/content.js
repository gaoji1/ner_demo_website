import React, {useState} from 'react';  //react
import { makeStyles } from '@material-ui/core/styles';  //样式表工具
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
import Button from "@material-ui/core/Button"  //按钮组件
import OutputCard from "../components/output_card"  //输出卡片组件

function Content(props) {
    return (
        <div>
            <OutputCard
            {...props}
            ></OutputCard>
        </div>
    );
}

Content.getInitialProps = async ({req}) => {
    let modelOutList = [["示例文本1", "Tag1"], ["示例文本4", "O"],["示例文本5", "O"],["文本2", "Tag2"],["示例文本3", "Tag3"], ["示例文本1", "Tag1"], ["示例文本1", "Tag1"], ["示例1", "Tag1"], ["示例文本1", "Tag1"]]
    let eventOutList= [["示例事件事件事件事件事件事件事件事件事件1", "Tag1"], ["示例事件事件事件事件事件事件事件事件事件2", "Tag2"],
                        ["示例事件事件事件事件事件事件事件事件事件3", "Tag3"]]
    const tagToColor = new Map()

    const modelName = "lstm-cnn"

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
            eventOutList: eventOutList,
            modelName: modelName
        }
    );
}


export default Content;