var express = require('express');
var router = express.Router();

var api = {
      index: function (req, res, next) {
            res.render('index', {
                  title: 'CrossFit Madtown',
                  crossfitFront: "/images/crossfit_front.jpg",
                  weightliftingFront: "/images/weightlifting_front.jpg",
                  youthFront: "/images/youth_front.jpg",
                  backgroundImage: "/images/header/slider4.jpg",
                  PROD_MODE: process.env.PROD_MODE
            });
      },

      crossfit: function (req, res, next) {
            res.render('crossfit', {
                  title: 'CrossFit Madtown - CrossFit',
                  subTitle: 'CrossFit',
                  layout: "layouts/sub.main.hbs",
                  img1: "/images/abby_rings.jpg",
                  img2: "/images/handstand.jpg",
                  img3: "/images/running.jpg",
                  headerImage: "/images/about_image.jpg",
                  PROD_MODE: process.env.PROD_MODE
            });
      },

      olympiclifting: function (req, res, next) {
            res.render('olympiclifting', {
                  title: 'CrossFit Madtown - Olympic Weightlifting',
                  subTitle: 'Olympic Weightlifting',
                  layout: "layouts/sub.main.hbs",
                  img1: "/images/abby_rings.jpg",
                  img2: "/images/handstand.jpg",
                  img3: "/images/running.jpg",
                  headerImage: "/images/about_image.jpg",
                  PROD_MODE: process.env.PROD_MODE
            });
      },

      summercamp2016: function (req, res, next) {
            res.render('summercamp-2016', {
                  title: 'CrossFit Madtown - Summer Camp 2016',
                  subTitle: 'Summer Camp 2016',
                  layout: "layouts/sub.main.hbs",
                  img1: "/images/abby_rings.jpg",
                  img2: "/images/handstand.jpg",
                  img3: "/images/running.jpg",
                  headerImage: "/images/about_image.jpg",
                  PROD_MODE: process.env.PROD_MODE
            });
      },

      trainingyouth: function (req, res, next) {
            res.render('training-youth', {
                  title: 'CrossFit Madtown - Youth Athletic Performance Training',
                  subTitle: 'Youth Athletic Performance Training',
                  layout: "layouts/sub.main.hbs",
                  img1: "/images/abby_rings.jpg",
                  img2: "/images/handstand.jpg",
                  img3: "/images/running.jpg",
                  headerImage: "/images/about_image.jpg",
                  PROD_MODE: process.env.PROD_MODE
            });
      },

      traininghs: function (req, res, next) {
            res.render('training-hs', {
                  title: 'CrossFit Madtown - High School Athletic Performance Training',
                  subTitle: 'High School Athletic Performance Training',
                  layout: "layouts/sub.main.hbs",
                  img1: "/images/abby_rings.jpg",
                  img2: "/images/handstand.jpg",
                  img3: "/images/running.jpg",
                  headerImage: "/images/about_image.jpg",
                  PROD_MODE: process.env.PROD_MODE
            });
      },

      trainingsport: function (req, res, next) {
            res.render('training-sport', {
                  title: 'CrossFit Madtown - Sport Specific Athletic Performance Training',
                  subTitle: 'Sport Specific Athletic Performance Training',
                  layout: "layouts/sub.main.hbs",
                  img1: "/images/abby_rings.jpg",
                  img2: "/images/handstand.jpg",
                  img3: "/images/running.jpg",
                  headerImage: "/images/about_image.jpg",
                  PROD_MODE: process.env.PROD_MODE
            });
      },

      trainingcamp: function (req, res, next) {
            res.render('trainingcamp', {
                  title: 'CrossFit Madtown - Summer Camp 2016',
                  subTitle: 'Summer Camp 2016',
                  layout: "layouts/sub.main.hbs",
                  img1: "/images/abby_rings.jpg",
                  img2: "/images/handstand.jpg",
                  img3: "/images/running.jpg",
                  headerImage: "/images/about_image.jpg",
                  PROD_MODE: process.env.PROD_MODE
            });
      },

      hotmammas: function (req, res, next) {
            res.render('hotmammas', {
                  title: 'CrossFit Madtown - Hot Mammas',
                  subTitle: 'Hot Mammas',
                  layout: "layouts/sub.main.hbs",
                  img1: "/images/abby_rings.jpg",
                  img2: "/images/handstand.jpg",
                  img3: "/images/running.jpg",
                  headerImage: "/images/about_image.jpg",
                  PROD_MODE: process.env.PROD_MODE
            });
      },

      coaches: function (req, res, next) {
            res.render('coaches', {
                  title: 'CrossFit Madtown - Coaches',
                  subTitle: 'Coaches',
                  layout: "layouts/sub.main.hbs",
                  img1: "/images/abby_rings.jpg",
                  img2: "/images/handstand.jpg",
                  img3: "/images/running.jpg",
                  headerImage: "/images/about_image.jpg",
                  PROD_MODE: process.env.PROD_MODE
            });
      }
};

/* GET home page. */
router.get('/', api.index);

//Get CrossFit page
router.get('/crossfit', api.crossfit);

//Get Olympic Weightlifting page
router.get('/olympic-lifting', api.olympiclifting);

//Get CrossFit page
router.get('/youth-athletic-performance-training', api.trainingyouth);

//Get CrossFit page
router.get('/high-school-athletic-performance-training', api.traininghs);

//Get CrossFit page
router.get('/sport-specific-athletic-performance-training', api.trainingsport);

//Get CrossFit page
router.get('/summercamp-2016', api.summercamp2016);

//Get CrossFit page
router.get('/training-camps', api.trainingcamp);

//Get Hot Mammas page
router.get('/hot-mammas', api.hotmammas);

//Get Coaches page
router.get('/coaches', api.coaches);

module.exports = router;
