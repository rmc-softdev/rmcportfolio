import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 350,
  },
});

const ProjectCard = ({ category, description, name }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className="project__category"> {category} </div>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.ibb.co/MM3Zhmx/download.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className="project__tags">
          <ul>
            <li>React</li>
            <li>Javascript</li>
          </ul>
        </div>
        <div className="project__links">
          <ul>
            <li>Github</li>
            <li>View Demo</li>
            <li>View Explanation</li>
          </ul>
        </div>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
