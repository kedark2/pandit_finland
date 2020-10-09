import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import logo from '../../ganesh_banner1.jpg'
import banner from '../../pngegg.png'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1, backgroundColor: "lightyellow"
    },
    menuButton: {
        marginRight: theme.spacing(-15),
    },
    title: {
        flexGrow: 1,
    }

}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <header>
                <img src={banner} alt="logo" width="100%" height="200" />
            </header>


            <AppBar position="static" color="orange">
                <Toolbar backgroundColor="red">
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/"><Button color="inherit">Home</Button></Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/gallery"><Button color="inherit">Gallery</Button></Link>            </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/about"><Button color="inherit">About Us</Button></Link>            </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/contact"><Button color="inherit">Contact</Button></Link>
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}