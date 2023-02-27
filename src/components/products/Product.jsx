import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function Product(props) {
  return (
    <Grid item xs="auto">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={props.image}
          style={{
            objectFit: "cover",
            width: "20em",
            height: "28em",
     
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.category}
          </Typography>

          <Typography variant="inherit" color="text.secondary">
            Price: {props.price} $
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Buy</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

