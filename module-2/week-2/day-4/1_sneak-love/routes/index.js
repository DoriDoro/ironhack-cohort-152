const express = require("express");
const router = express.Router();
const UserModel = require('./../models/User');
const SneakerModel = require('./../models/Sneaker');
const TagModel = require('./../models/Tag');

/* ---home page --- */
router.get("/", (req, res) => {
  res.render("index");
});

/* --- products, sneakers or collections --- */
router.get("/sneakers/:cat", (req, res) => {
  const filter = req.params.cat !== 'collection' ? { category: req.params.cat} : {};

  SneakerModel.find(filter)
  .then(dbRes => {
    // console.log('dbRes sneakers/cat--', dbRes); // dbRes: data of sneakers, mongoDB
    // console.log(req.params.cat); // display the categories: 'whole' collection, men, women or kids
    
    res.render("products", {sneakers: dbRes, category: req.params.cat});
  }) 
  .catch(dbErr => console.log(dbErr));
});


router.get("/one-product/:id", (req, res, next) => {
  SneakerModel.findById(req.params.id)
  .then(dbRes => {
    res.render("one_product", {sneaker: dbRes});
  })
  .catch(dbErr => console.log(dbErr));
});

router.get("/prod-add", (req, res) => {
  res.render("products_add");
});


/* --- product management: -- edit, delete --- */
router.get("/products", (req, res) => {

  SneakerModel.find()
  .then(dbRes => {
    // console.log(dbRes);
    res.render("products", {sneakers: dbRes, tags: dbRes }); // category: "",
  }) 
  .catch(dbErr => console.log(dbErr));
});

router.get("/prod-manage", (req, res) => {
  SneakerModel.find().then(dbRes => {
    // console.log(dbRes)
    res.render("products_manage", { sneakers: dbRes});
  })
  .catch(dbErr => console.log(dbErr));
});

router.get('/product-edit/:id',  (req, res, next) => {
  SneakerModel.findById({_id:req.params.id})
      .then((dbRes)=>{
      // console.log('start ---');
        // console.log({_id:req.params.id});
        // console.log("here", dbRes);
        
      res.render("product_edit", { sneaker: dbRes });  
      // form: /prod-edit/{{sneaker._id}}     
      })
      .catch((dbErr)=>{
      console.log("there was error editing the sneaker", dbErr)
      res.redirect('/prod-manage')
      })
});

router.get('/prod-manage/:id/delete',  (req, res, next) => {
  SneakerModel.findByIdAndRemove({_id:req.params.id})
   .then((dbRes)=>{
     console.log("sneakers was deleted");
     res.redirect('/prod-manage')
   })
   .catch((dbErr)=>{
     console.log("there was error deleting the sneaker", dbErr)
   })
});


/* --- authentification: -- signin, login, logout --- */
router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/signin", (req, res) => {
  res.render("signin");
});

router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});



module.exports = router;








/* ----- used before but not necessary anymore  -------- */

  // TagModel.find()
  // .then(tagDbRes => res.render("products", {tags: tagDbRes}))
  // .catch(err => console.log(err));


