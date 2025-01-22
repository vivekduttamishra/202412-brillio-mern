const express = require('express');
const visitCounter=require('../business/visit-counter');


const router= express.Router();

//  /api/admin/log/200
//  /api/admin/log/404
router
    .route('/logs/:status')
    .get(visitCounter.showVisits);

router
   .route('/html-logs/:status')
   .get(visitCounter.showVisitsTable);


module.exports = router;
