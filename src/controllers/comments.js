const Comment = require('../models/comment');

const createComment = async (req, res) => {
    try {
        const values = req.body;

        if(!values?.name || !values?.message) throw new Error('400');

        if(typeof values.name !== 'string' || typeof values.message !== 'string') throw new Error('400');

        const comment = await Comment.create(values);

        res.status(201).send({ success: true, comment });
    } catch ({ message }) {
        if(message === '400') res.status(400).send({ success: false, error: 'Dados inválidos para processar.' })
        else res.status(500).send({ success: false, error: 'Ocorreu um erro, por favor, tente novamente mais tarde.' })
    }
};

const getComments = async (req, res) => {
    try {
        const comments = await Comment.find({});

        if(comments.length === 0) throw new Error('404');

        const response = {
            success: true,
            comments,
        }

        res.send(response);
    } catch ({ message }) {
        if (message === '404') res.status(404).send({ success: false, error: 'Não há comentários registrados.' })
        else res.status(500).send({ success: false, error: 'Ocorreu um erro, por favor, tente novamente mais tarde.' })
    }
};

module.exports = {
    createComment,
    getComments,
}