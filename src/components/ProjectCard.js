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
import { motion } from "framer-motion";

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
          image={image || "https://i.ibb.co/JrGhMjB/index.png"}
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
                <motion.div
                  initial={{ scale: 1 }}
                  whileTap={{ scale: 1.2, rotate: "-2deg" }}
                >
                  {" "}
                  <a
                    href={links.github}
                    target="_blank"
                    style={{ color: "#fff" }}
                    rel="noopener noreferrer"
                  >
                    {" "}
                    View Code
                  </a>
                </motion.div>
              </li>
            )}

            {links?.githubb && (
              <li>
                <motion.div
                  initial={{ scale: 1 }}
                  whileTap={{ scale: 1.2, rotate: "-2deg" }}
                >
                  {" "}
                  <a
                    href={links.githubb}
                    target="_blank"
                    style={{ color: "#fff" }}
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Github (backend)
                  </a>
                </motion.div>
              </li>
            )}

            {links?.githubf && (
              <li>
                <motion.div
                  initial={{ scale: 1 }}
                  whileTap={{ scale: 1.2, rotate: "-2deg" }}
                >
                  {" "}
                  <a
                    href={links.githubf}
                    target="_blank"
                    style={{ color: "#fff" }}
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Github (frontend)
                  </a>
                </motion.div>
              </li>
            )}

            {links?.demo && (
              <li>
                <motion.div
                  initial={{ scale: 1 }}
                  whileTap={{ scale: 1.2, rotate: "-2deg" }}
                >
                  {" "}
                  <a
                    href={links.demo}
                    target="_blank"
                    style={{ color: "#fff" }}
                    rel="noopener noreferrer"
                  >
                    {" "}
                    View Demo
                  </a>
                </motion.div>
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
