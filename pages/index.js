import React, {useState} from 'react';  //react
import { makeStyles } from '@material-ui/core/styles';  //样式表制作函数
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';  //向上箭头组件
import CssBaseline from '@material-ui/core/CssBaseline';  //css修正组件
import Header from "../components/header";  //顶栏组件
import Fab from '@material-ui/core/Fab'; //填充装饰组件
import ScrollTop from "../components/scroll_top"  //回到顶部组件
import Grid from '@material-ui/core/Grid';  //网格布局组件
import TextField from "@material-ui/core/TextField"  //多行输入框组件
import Grow from  "@material-ui/core/Grow"  //淡入动画组件
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';  //向下箭头组件
import { Typography } from '@material-ui/core';  //maertial ui文字组件
import List from '@material-ui/core/List';  //列表
import ListItem from '@material-ui/core/ListItem';  //列表项
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';  //列表项副动作
import ListItemText from '@material-ui/core/ListItemText'; // 列表项中文本
import Checkbox from '@material-ui/core/Checkbox';  //复选框
import Button from "@material-ui/core/Button";  //按钮
import Dialog from "@material-ui/core/Dialog";  //对话框



const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  list: {
  },
  
}));




function Index(props) {
  const classes = useStyles();  //样式表
  const [corpus, setCorpus] = useState("请在这里输入您的病历")  //输入文本
  const [modelList, setModelList] = useState(new Map())  //模型列表
  
  const handleCorpusChange = (e) => { 
    setCorpus(e.target.value)
  }


  const handleModelListChange = (e, model) => {
    setModelList((modelList)=>{
      modelList.set(model, e.target.checked);
      return new Map(modelList)
    });
  }

  

  return (
    <div>
      <CssBaseline></CssBaseline>
      <Header></Header>
      {/* 返回顶部锚点 */}
      <div 
      style={{height:"0px"}}
      id="back-to-top-anchor" />
      {/* 占位div */}
      <div style={{height:"3.8rem"}} />
      <Grid container spacing={3}>
        <Grid item xs={1}/>
        {/* 输入框体 已经开发完成 */}
        <Grid item xs={8}>
          <Grow in={true} {...{timeout:800}}>
            <TextField
              id="outlined-multiline-static"
              label="请输入您的病历,我来为您识别^-^"
              multiline
              color="primary"
              defaultValue="请在这里输入您的病历"
              variant="outlined"
              fullWidth={true}
              rows="18"
              onChange={handleCorpusChange}
            />
          </Grow>
        </Grid>
        {/* 这里开发模型选择 与 识别启动按钮 */}
        <Grid item xs={2}>
          {/* 上级flex容器 采用spaceBteween对齐方式 */}
          <div 
          style={{
            height: "23.1rem",
            display: "flex",
            flexDirection:"column", 
            justifyContent:"space-between"}}
          >
            {/* 下级子flex容器 采用flex-start 对齐方式 */}
            <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            >
              {/* 提示文字：模型列表（model list） */}
              <Grow
              in={true}
              style={{transformOrigin: "0 0 0"}}
              {...{timeout: 1300}} 
              >
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                      <ExpandMoreIcon fontSize="small"></ExpandMoreIcon>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="button">Model List</Typography>
                    </Grid>
                </Grid>
              </Grow>
              {/* 真正的模型列表 */}
              <Grow
                    in={true}
                    {...{timeout: 1800}}
              >
                <List dense className={classes.list}>
                  {props.models.map(model => {
                    const labelId = `checkbox-list-secondary-label-${model}`;
                    return (
                        <ListItem key={model} button>
                          <ListItemText id={labelId} primary={model} />
                          <ListItemSecondaryAction>
                            <Checkbox
                              edge="end"
                              onChange={(e)=>(handleModelListChange(e, model))}
                              checked={modelList.has(model) && modelList.get(model)}
                              inputProps={{ 'aria-labelledby': labelId }}
                            />
                          </ListItemSecondaryAction>
                        </ListItem>
                    );
                  })}
                </List>
              </Grow>
            </div>
            {/* 下级子flex容器 采用flex-end 对齐方式 */}
            <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end"
            }}
            >
              <Grow
              in={true}
              {...{timeout: 1800}}
              >
                <Button 
                variant="contained" 
                color="primary"
                >
                  识别实体/事件</Button>
              </Grow>
            </div>
          </div>

        </Grid>
        <Grid item xs={1}/>
      </Grid>
      <Typography>{`corpus: ${corpus}`}</Typography>

      {props.models.map(model=>{
        return (
          <p key={model}>{`key:${model} value:${modelList.get(model)}`}</p>
        );
      })}
      <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
        <ScrollTop {...props}>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
    </div>
    
  );
}

Index.getInitialProps = async ({req}) => {
  return ({
    models: ["lstm", "lstm-cnn", "bert", "bert-glove", "bert-brown"]
  });
}

export default Index;