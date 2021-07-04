import React, { useEffect } from "react";
import {Button, Avatar, Typography} from "@material-ui/core";
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import {Link, useLocation} from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";
import firebase from "../firebase";

const useStyles = makeStyles({
    container: {
        height: window.innerHeight,
        width: window.innerWidth,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingText: {
        fontWeight: 'bold',
        fontSize: 60,
        marginBottom: 60
    },

    homeButton: {
        marginTop: 40,
        justifyContent: 'center',
        width: '14%',
        fontSize: 12
    }
});


const AnalyticsScreen = () => {
    const location = useLocation();
    const {storage, avatar, quizType} = location.state;
    //take storage array, in ["1", "2" , "3"]
    const classes = useStyles();
console.log(quizType);
    console.log(storage); 
   
    var res = storage.reduce(function(prev, curr){
        return (Number(prev) || 0) + (Number(curr) || 0);
    });
    console.log(res); // result

    const percentage =Math.round((res/(storage.length*4))*100); // percentage variable
    console.log(percentage);

    //passing data to firebase database
    const createDB = () => {
        
        const userRef = firebase.database().ref("userInfo");
        const userInfo = {
            options_selected : storage,
            result: percentage,
            quizType: quizType,
        };
        
        userRef.push(userInfo);
    }
    
    useEffect(()=>{
        createDB();
    },[])
    

    return (
        <div className={classes.container}>
            <Typography className={classes.headingText}>Your Result</Typography>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{marginRight: 40}}>
                    <Avatar src={avatar} style={{height: 150, width: 150}}/>
                </div>
                <div style={{height: 150, width: 150, marginLeft: 40}}>
                    <CircularProgressbar value={percentage} text={`${percentage}%`}
                                         styles={buildStyles({
                                             root: {},
                                             path: {
                                                 stroke: `rgba(62, 152, 199, ${percentage / 100})`,
                                                 strokeLinecap: 'butt',
                                                 transition: 'stroke-dashoffset 10s ease 10s',
                                                 transform: 'rotate(0.25turn)',
                                                 transformOrigin: 'center center',
                                             },
                                             trail: {
                                                 stroke: '#d6d6d6',
                                                 strokeLinecap: 'butt',
                                                 transform: 'rotate(0.25turn)',
                                                 transformOrigin: 'center center',
                                             },
                                             text: {
                                                 fill: '#f88',
                                                 fontSize: '16px',
                                             },
                                             background: {
                                                 fill: '#3e98c7',
                                             },
                                         })}
                    />
                </div>

            </div>
           
            <div style={{
                height: 30, width: 150, 
                backgroundColor: "rgb(118,206,250)", 
                marginTop: 60, 
                textAlign: "center",
                paddingTop: 10}}>
            {percentage >= 0 && percentage <= 25 ? "Low" :
                 (percentage >= 26 && percentage <= 75 ? "Mild" :
                  "High")}
                  {quizType === "1" ? " Self Esteem": (quizType === "2" ? " Anxiety" : " Loneliness" )}
            </div>

            <Button variant="contained" color="primary" className={classes.homeButton} >

            <Link to={{
                pathname: '/'
            }}
            style={{
                textDecoration: 'none',
                color: "white"
            }}
            >
                Back to Home Screen
            </Link>
            </Button>
            
        </div>        
    )
    
}


export default AnalyticsScreen;