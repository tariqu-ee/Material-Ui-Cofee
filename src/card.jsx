import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default function OutlinedCard(props) {
  const { avatarUrl, title, price, imageUrl, description } = props;
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatarUrl}>R</Avatar>}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={price}
      />
      <CardMedia
        style={{
          height: "200px",
          backgroundSize: "contain",
        }}
        image={imageUrl}
        title="Paella dish"
      />

      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">BUY NOW</Button>
        <Button size="small">OFFER</Button>
      </CardActions>
    </Card>
  );
}
