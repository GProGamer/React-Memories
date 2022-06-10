import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

import useStyles from "./styles";
import { Grid, CircularProgress } from "@material-ui/core";

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => {
        return state.posts;
    });
    const classes = useStyles();

    console.log(posts);
    return !posts.length ? (
        <CircularProgress />
    ) : (
        <Grid
            className={classes.mainContainer}
            container
            alignItems="stretch"
            spacing={3}
        >
            {posts.map((post) => (
                <Grid key={post._id} xs={12} sm={6} item>
                    <Post post={post} setCurrentId={setCurrentId} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Posts;
