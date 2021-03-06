import React from 'react'
import {
  Grid,
  Typography,
} from "@mui/material";
import mongoose from 'mongoose';
import Recipe from '../models/Recipe';
import Post from './post';

export default function Index({ recipes }) {

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12} px={1}>
        <Typography variant="div" style={{ display: "block" }}>

          {

            recipes.map((p) => { return <Post post={p} key={p._id} /> })

          }

        </Typography>
      </Grid >
    </Grid >
  );
}

export async function getStaticProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  const recipes = await Recipe.find().sort({ createdAt: -1 });

  return { props: { recipes: JSON.parse(JSON.stringify(recipes)) } }
}