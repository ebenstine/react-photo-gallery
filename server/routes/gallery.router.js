const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require("../modules/pool.js");
// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route

router.put("/like/:id", (req, res) => {
    const queryText = `
      UPDATE "gallery" SET "likes" = likes +1 WHERE "id" = $1;
  `;
    pool
      .query(queryText, [req.params.id])
      .then((result) => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(`We got an error... ${err}`);
        res.sendStatus(500);
      });
  }); // END PUT Route
  
  //POST⬇
  router.post("/", (req, res) => {
    const { path, description, likes } = req.body;
  
    const queryText = `
      INSERT INTO "gallery" (path, description, likes)
      VALUES ($1, $2, $3);
      `;
    const values = [path, description, likes];
    pool
      .query(queryText, values)
      .then((result) => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  });
  
  // GET Route⬇
  router.get("/", (req, res) => {
    const queryText = `SELECT * FROM "gallery" ORDER BY "id"; `;
    pool
      .query(queryText)
      .then((result) => {
        console.log(`the result from the get route is ${result}`);
        res.send(result.rows); //galleryItems
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  }); // END GET Route
  
  
  module.exports = router;
  







































































































/*/*router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route */

// GET Route
/*router.get('/', (req, res) => {
    res.send(galleryItems);
}); // END GET Route

module.exports = router;*/