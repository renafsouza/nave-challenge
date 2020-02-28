/* eslint-disable max-len */
const postController = require(`./controllers/post`)
const commentController = require(`./controllers/comment`)
const Express = require('express');
const routes = Express.Router();

routes.get('/posts', postController.list);
routes.post('/posts', postController.create);
routes.put('/posts', postController.update);

routes.get('/comments', commentController.list);
routes.post('/comments', commentController.create);
routes.put('/comments', commentController.update);

// Export
module.exports = routes;
