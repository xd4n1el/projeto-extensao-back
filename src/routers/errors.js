const express = require('express');
const router = express.Router();

router.get('*', (req, res) => {
    res.status(404).send({ success: false, error: 'Rota não encontrada.' })
});
router.post('*', (req, res) => {
    res.status(404).send({ success: false, error: 'Rota não encontrada.' })
});

module.exports = router;