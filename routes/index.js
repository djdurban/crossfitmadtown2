var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
        title: 'CrossFit Madtown',
        sliderImg1: "/images/header/carli_rings2.jpg",
        sliderImg2: "/images/header/wod.jpg",
        sliderImg3: "/images/header/slider1.jpg",
        sliderImg4: "/images/header/slider2.jpg",
        sliderImg5: "/images/header/slider4.jpg",
        crossfitFront: "/images/crossfit_front.jpg",
        weightliftingFront: "/images/weightlifting_front.jpg",
        youthFront: "/images/youth_front.jpg",
        backgroundImage: "/images/header/slider4.jpg"
  });
});

module.exports = router;
