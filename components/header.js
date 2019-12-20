import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {DonutSmall, Extension} from "@material-ui/icons"
import Link from "@material-ui/core/Link";
import Router from "next/router";

const useStyles = makeStyles(theme => ({
    headerWrapper: {
      left: 0,
      width: "100%",
      height: "80px",
      position: "-webkit-sticky",
      position: "sticky",
      top: "0px",
      zIndex: 1000
    },
    header: {
      background: "rgba(255, 255, 255, 0.98)",
      boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.06)",
      PointerEvent: "auto",
      justifyContent: "space-around",
      minHeight: "80px"
    },
    flexboxStart: {
      display: "flex",
      display: "-webkit-flex",
      justifyContent: "flex-start",
      alignItems: "flex-end"
    },
  }));

  function clickHandler(e, url){
      e.preventDefault();
      Router.push({
          pathname: url,
      })
  }


export default function Header() {
    const classes = useStyles();
    

    return (
        <header className={classes.headerWrapper}>
            <Toolbar className={classes.header}>
                <Link href="#" 
                onClick={(e)=>{clickHandler(e, "/")}} 
                color="inherit"
                underline="none">
                    <div className={classes.flexboxStart}>
                        <DonutSmall></DonutSmall>
                        <Typography variant="subtitle2">主页</Typography>
                    </div>
                </Link>

                <img src="/images/bcd.png"></img>
                
                <Link href="#" 
                onClick={(e)=>{clickHandler(e, "/")}} 
                color="inherit"
                underline="none">
                    <div className={classes.flexboxStart}>
                        <Extension></Extension>
                        <Typography variant="subtitle2">控制台</Typography>
                    </div>
                </Link>
            </Toolbar>
        </header>
    );
}