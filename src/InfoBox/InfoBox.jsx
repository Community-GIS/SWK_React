import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'

function InfoBox({title,value}) {
    return (
        <Card className="infobox">
            <CardContent>
                <Typography className="infobox__title">{title}</Typography>
                <h2 className="infobox_value">{value}</h2>
            </CardContent>
        </Card>
    )
}

export default InfoBox
