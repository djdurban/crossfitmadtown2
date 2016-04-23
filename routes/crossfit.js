var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/crossfit', function(req, res, next) {
  res.render('crossfit', {
        title: 'CrossFit Madtown - CrossFit',
        subTitle: 'CrossFit',
        layout: "layouts/sub.main.hbs",
        sliderImg1: "/images/header/carli_rings2.jpg",
        sliderImg2: "/images/header/wod.jpg",
        sliderImg3: "/images/header/slider1.jpg",
        sliderImg4: "/images/header/slider2.jpg",
        sliderImg5: "/images/header/slider4.jpg",
        img1: "/images/abby_rings.jpg",
        img2: "/images/handstand.jpg",
        img3: "/images/running.jpg",
        headerImage: "/images/about_image.jpg"
  });
});

module.exports = router;
