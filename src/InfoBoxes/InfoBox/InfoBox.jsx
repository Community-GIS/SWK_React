import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'

function InfoBox({title,value,active,onClick}) {
    return (
        <Card onClick={onClick} className={`infobox ${active && 'infobox--selected'}`}>
            <CardContent>
                <Typography color="textSecondary" varient = "overline"className="infobox__title">{title}</Typography>
                <h2 className="infobox_value">{value}</h2>
                <Typography varient="subtitle2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, praesentium.</Typography>

            </CardContent>
        </Card>
    )
}

export default InfoBox