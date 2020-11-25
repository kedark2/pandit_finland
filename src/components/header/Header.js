import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import logo from '../../banner_1.png'
import banner from '../../pngegg.png'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1, backgroundColor: "lightyellow"
    },
    menuButton: {
        marginRight: theme.spacing(-5),
    },
    title: {
        flexGrow: 1,
    }

}));

export default function Header() {
    const classes = useStyles();

    return (
        <AppBar position="static" color="orange">
            <Toolbar backgroundColor="red" style={{ textAlign: "center", height: "80px", fontSize: "20px" }}>
                <Typography variant="h6" className={classes.title}>
                    <Link to="/"><Button color="inherit" style={{ fontSize: "20px", color: "DE5E13" }}>Home</Button></Link>
                </Typography>
                <Typography variant="h6" className={classes.title}>
                    <Link to="/gallery"><Button color="inherit" style={{ fontSize: "20px", color: "DE5E13" }}>Gallery</Button></Link>            </Typography>
                <Typography variant="h6" className={classes.title}>
                    <Link to="/about"><Button color="inherit" style={{ fontSize: "20px", color: "DE5E13" }}>About Us</Button></Link>            </Typography>
                <Typography variant="h6" className={classes.title}>
                    <Link to="/contact"><Button color="inherit" style={{ fontSize: "20px", color: "DE5E13" }}>Contact</Button></Link>
                </Typography>
                <Typography variant="h6" className={classes.title}>
                    <Link to="/services"><Button color="inherit" style={{ fontSize: "20px", color: "DE5E13" }}>Services</Button></Link>
                </Typography>
                <Typography variant="h6" className={classes.title}>
                    <Link to="/mantras"><Button color="inherit" style={{ fontSize: "20px", color: "DE5E13" }}>Mantras</Button></Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}