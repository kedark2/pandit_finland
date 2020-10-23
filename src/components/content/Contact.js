import React from 'react'
import { AppBar, Toolbar, makeStyles, Typography, Button, TextField } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
export default function Contact() {
    const classes = useStyles();

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Full Name" variant="outlined" />
                <br />
                <TextField id="outlined-basic" label="email" variant="outlined" />
                <br />
                <TextField id="outlined-basic" label="Feedback" variant="outlined" />
                <br />
                <Button variant="contained" color="primary"> Submit</Button>
            </form>
        </div>
    );
}