import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from './Card'

export default function About() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Card />

            </Grid>
            <Grid item xs={12}>
                <Card />

            </Grid>
        </Grid>

    )
}