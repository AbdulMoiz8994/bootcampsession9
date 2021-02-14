import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {SvgIcon,TextField ,Checkbox,FormControlLabel,Button,Link } from '@material-ui/core';
import LineChart from './LineChart'
import {BarChart} from './BarChart'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '40 auto',
      textAlign: 'center',
    marginTop: "50px"
  },
  home:{
    fontSize: '40px'
  },
  form:{
    textAlign: 'center',
    width: "100%"
  },
  checkbox:{
  marginTop: '20px',
  marginLeft: '-90px'
  },
  button:{
    width: "15%",
  },
  Link:{
  margin: '10px',
     
  }
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function SvgIconsColor() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HomeIcon color="secondary" className={classes.home} />
      <h2 style={{textAlign: "center"}}>Sign in</h2>
      <div  className={classes.form}>
      <form noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Email" variant="outlined" /><br/><br/><br/>
      <TextField id="outlined-basic" label="Password" variant="outlined" />
    </form>
      </div>
      <FormControlLabel className={classes.checkbox}
        control={
          <Checkbox
          name="checkedB"
          color="primary"
          
          />
        }
        label="Remember me"
      />
      <br/><br/>

      <Button variant="contained" className={classes.button} color="primary" disableElevation>
      Sign up
    </Button>
    <br/><br/>
    
    <Link
      component="button"
      variant="body2"
      // onClick={() => {
      //   console.info("I'm a button.");
      // }}
    >
      Forget Password
    </Link>
    <br/>
    <Link 
    className={classes.Link}
      component="button"
      variant="body2"
      onClick={() => {
        console.info("I'm a button.");
      }}
    >
      Don't have an account ? Sign Up
    </Link>
    <br/>
    <LineChart/>
    <br/>
    <BarChart/>
    </div>

  );
}
