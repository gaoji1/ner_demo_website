import React from 'react';  //react
import { makeStyles } from '@material-ui/core/styles';  //样式表制作函数
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';  //向上箭头组件
import CssBaseline from '@material-ui/core/CssBaseline';  //css修正组件
import Header from "../components/header";  //顶栏组件
import Fab from '@material-ui/core/Fab'; //填充装饰组件
import ScrollTop from "../components/scroll_top"  //回到顶部组件
import Grid from '@material-ui/core/Grid';  //网格布局组件
import Paper from "@material-ui/core/Paper"  //纸张组件
import TextField from "@material-ui/core/TextField"  //多行输入框组件
import Grow from  "@material-ui/core/Grow"

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  
}));




export default function Index(props) {
  const classes = useStyles();

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
        <Grid item xs={8}>
          <Grow in={true} {...{timeout:500}}>
            <TextField
              id="outlined-multiline-static"
              label="请输入您的病历,我来为您识别^-^"
              multiline
              color="primary"
              defaultValue="请在这里输入您的病历"
              variant="outlined"
              fullWidth={true}
              rows="18"
            />
          </Grow>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={1}/>
      </Grid>
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