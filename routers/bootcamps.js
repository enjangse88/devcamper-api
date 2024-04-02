const express = require('express');
const { getBootcamps, 
        getBootcamp,
        createBootcamp,
        updateBootcamp,
        deleteBootcamp
       } = require('../controllers/bootcamps');
const router = express.Router();

// router.get('/', (req, res) => {
//     res.status(200).json({success: true, msg: 'Show all bootcamps'});
//  });
 
//  router.get('/:id', (req, res) => {
//      res.status(200).json({success: true, msg: `show ${req.params.id} bootcamp`});
//  });
 
//  router.post('/', (req, res) => {
//      res.status(201).json({success: true, msg: 'post from bootcamps'});
//  });
 
//  router.put('/', (req, res) => {
//      res.status(201).json ({success: true, msg: 'put update to bootcamp'});
//  });
router
   .route('/')
   .get(getBootcamps)
   .post(createBootcamp);

router.route('/:id')
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp);
   
module.exports = router;