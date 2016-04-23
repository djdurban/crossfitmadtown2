var express = require('express');
var router = express.Router();

var api = {
      index: function (req, res, next) {
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
      },

      crossfit: function (req, res, next) {
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
      },

      summercamp2016: function (req, res, next) {
            res.render('summercamp-2016', {
                  title: 'CrossFit Madtown - Summer Camp 2016',
                  subTitle: 'Summer Camp 2016',
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
      },

      trainingcamp: function (req, res, next) {
            res.render('trainingcamp', {
                  title: 'CrossFit Madtown - Summer Camp 2016',
                  subTitle: 'Summer Camp 2016',
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
      }
};

/* GET home page. */
router.get('/', api.index);

//Get CrossFit page
router.get('/crossfit', api.crossfit);

//Get CrossFit page
router.get('/summercamp-2016', api.summercamp2016);

//Get CrossFit page
router.get('/training-camps', api.trainingcamp);


module.exports = router;
