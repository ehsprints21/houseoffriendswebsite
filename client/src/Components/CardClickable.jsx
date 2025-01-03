import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function MediaCard(props) {
  let navigate = useNavigate();
  return (
    <>
      <Card
        variant="elevation"
        elevation={4}
        sx={{
          padding: "0",
          display: { xs: "block", md: "none" },
          borderRadius: 5,
        }}
      >
        <CardMedia component="img" image={props.Photo} alt="new photo" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.Title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: 14 }}
          >
            {props.Message}
          </Typography>
        </CardContent>
      </Card>

      <Card
        variant="elevation"
        elevation={4}
        sx={{
          width: "100%",
          padding: "6%",
          display: { xs: "none", md: "block" },
          borderRadius: 5,
        }}
      >
        <CardMedia component="img" image={props.Photo} alt="new photo" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.Title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: 14 }}
          >
            {props.Message}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
