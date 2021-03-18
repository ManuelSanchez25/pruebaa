const router = require('express').Router();

const helloRoute = require('./hello');

router.use('/hello', helloRoute);
router.get('/estoyvivo', (req, res) =>{
    res.json({"status":"si estoy vivo"});
})

module.exports = router;