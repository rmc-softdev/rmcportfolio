import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 350,
  },
});

const ProjectCard = ({ category, description, name, tags, links, image }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className="project__category"> {category} </div>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image || "https://i.ibb.co/GswL4gn/index.png"}
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
          <ul>{tags && tags.map((el) => <li> {el} </li>)}</ul>
        </div>
        <div className="project__links">
          <ul>
            {links?.github && (
              <li>
                <a href={links.github} style={{ color: "#fff" }}>
                  {" "}
                  Github
                </a>
              </li>
            )}

            {links?.githubb && (
              <li>
                <a href={links.github} style={{ color: "#fff" }}>
                  {" "}
                  Github (backend)
                </a>
              </li>
            )}

            {links?.githubf && (
              <li>
                <a href={links.github} style={{ color: "#fff" }}>
                  {" "}
                  Github (frontend)
                </a>
              </li>
            )}

            {links?.demo && (
              <li>
                <a href={links.demo} style={{ color: "#fff" }}>
                  {" "}
                  View Demo
                </a>
              </li>
            )}
            {/* <li>View Explanation</li> */}
          </ul>
        </div>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
