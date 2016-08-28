var express = require('express');
var router = express.Router();
var madtownBlog = require('../Queries/madtown_blog.js');
var calendar = require('../Queries/calendar.js');

var api = {
      index: function (req, res, next) {
            res.render('index', {
                  title: 'CrossFit Madtown',
                  crossfitFront: "/images/crossfit_front.jpg",
                  weightliftingFront: "/images/weightlifting_front.jpg",
                  youthFront: "/images/youth_front.jpg",
                  backgroundImage: "/images/header/slider4.jpg",
                  testimonials: "testimonials.main",
                  PROD_MODE: process.env.PROD_MODE
            });
      },

      calendarCrossFit: function (req, res, next) {
            res.render('calendar', {
                  title: 'CrossFit Madtown - Calendar',
                  subTitle: 'CrossFit',
                  layout: "layouts/popout.hbs",
                  PROD_MODE: process.env.PROD_MODE,
                  eventData:JSON.stringify(calendar.getItems())
            });
      },

      calendarYouth: function (req, res, next) {
            res.render('calendar', {
                  title: 'CrossFit Madtown - Calendar',
                  subTitle: 'CrossFit',
                  layout: "layouts/popout.hbs",
                  PROD_MODE: process.env.PROD_MODE,
                  eventData:JSON.stringify(calendar.getItems())
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
                  testimonials: "testimonials.crossfit",
                  PROD_MODE: process.env.PROD_MODE,
                  eventData:JSON.stringify(calendar.getItems())
            });
      },

      olympiclifting: function (req, res, next) {
            res.render('olympiclifting', {
                  title: 'CrossFit Madtown - Olympic Weightlifting',
                  subTitle: 'Olympic Weightlifting',
                  layout: "layouts/sub.main.hbs",
                  testimonials: "testimonials.olympiclifting",
                  PROD_MODE: process.env.PROD_MODE,
                  eventData:JSON.stringify(calendar.getItems())
            });
      },

      youthfall2016: function (req, res, next) {
            res.render('apschedule', {
                  title: 'CrossFit Madtown - Athletic Performance Fall 2016',
                  subTitle: 'Athletic Performance 2016',
                  layout: "layouts/sub.main.hbs",
                  testimonials: "testimonials.athleticperformance",
                  PROD_MODE: process.env.PROD_MODE
            });
      },

      trainingyouth: function (req, res, next) {
            res.render('training-youth', {
                  title: 'CrossFit Madtown - Youth Athletic Performance Training',
                  subTitle: 'Youth Athletic Performance Training',
                  layout: "layouts/sub.main.hbs",
                  testimonials: "testimonials.athleticperformance",
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
                  testimonials: "testimonials.athleticperformance",
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
                  testimonials: "testimonials.athleticperformance",
                  headerImage: "/images/about_image.jpg",
                  PROD_MODE: process.env.PROD_MODE
            });
      },

      athleticperformance: function (req, res, next) {
            res.render('athleticperformance', {
                  title: 'CrossFit Madtown - Athletic Performance Training',
                  subTitle: 'Athletic Performance Training',
                  layout: "layouts/sub.main.hbs",
                  testimonials: "testimonials.athleticperformance",
                  PROD_MODE: process.env.PROD_MODE
            });
      },

      hotmammas: function (req, res, next) {
            res.render('hotmammas', {
                  title: 'CrossFit Madtown - Hot Mammas',
                  subTitle: 'Hot Mammas',
                  layout: "layouts/sub.main.hbs",
                  PROD_MODE: process.env.PROD_MODE,
                  eventData:JSON.stringify(calendar.getItems())
            });
      },

      coaches: function (req, res, next) {
            res.render('coaches', {
                  title: 'CrossFit Madtown - Coaches',
                  subTitle: 'Coaches',
                  layout: "layouts/sub.main.hbs",
                  testimonials: "testimonials.hotmammas",
                  PROD_MODE: process.env.PROD_MODE
            });
      },

      registration: function (req, res, next) {
            res.render('registration', {
                  title: 'CrossFit Madtown - Membership Registration',
                  subTitle: 'Membership Registration',
                  layout: "layouts/sub.main.hbs",
                  img1: "/images/abby_rings.jpg",
                  img2: "/images/handstand.jpg",
                  img3: "/images/running.jpg",
                  headerImage: "/images/about_image.jpg",
                  testimonials: "testimonials.crossfit",
                  PROD_MODE: process.env.PROD_MODE
            });
      },

      wod: function (req, res, next) {
            var title = "";
            var type = "workout_" + req.params.subtype.toLowerCase();
            var date = req.params.date;


            switch(type) {
                  case "workout_crossfit":
                    title = "CrossFit Workout of the Day";
                    break;
                  case "workout_olympic":
                    title = "Olympic Workout of the Day"
                    break;
            }

            madtownBlog.getItem(type, date, function (err, response) {
                  res.render('wod', {
                        title: 'CrossFit Madtown - ' + title,
                        subTitle: title,
                        layout: "layouts/sub.main.hbs",
                        PROD_MODE: process.env.PROD_MODE,
                        Workouts: response && response.Items
                  });

            });
      },

};

/* GET home page. */
router.get('/', api.index);

//Get CrossFit page
router.get('/crossfit', api.crossfit);

//Get CrossFit page
router.get('/calendar', api.calendarCrossFit);

//Get Olympic Weightlifting page
router.get('/olympic-lifting', api.olympiclifting);

//Get CrossFit page
router.get('/youth-athletic-performance-training', api.trainingyouth);

//Get CrossFit page
router.get('/high-school-athletic-performance-training', api.traininghs);

//Get CrossFit page
router.get('/sport-specific-athletic-performance-training', api.trainingsport);

//Get CrossFit page
router.get('/youthfall2016', api.youthfall2016);

//Get CrossFit page
router.get('/athletic-performance', api.athleticperformance);

//Get Hot Mammas page
router.get('/hot-mammas', api.hotmammas);

//Get Coaches page
router.get('/coaches', api.coaches);

//Get Registration page
router.get('/register', api.registration);

//Get WOD page
router.get('/wod/:subtype/:date', api.wod);


module.exports = router;
