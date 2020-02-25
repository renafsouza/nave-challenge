/* eslint-disable max-len */
const postController = require(`./controllers/post`)
const commentController = require(`./controllers/comment`)
const Express = require('express');
const routes = Express.Router();

routes.get('/posts/list', postController.list);
routes.post('/posts/create', postController.create);
routes.put('/posts/update', postController.update);

routes.get('/comments/list', commentController.list);
routes.post('/comments/create', commentController.create);
routes.put('/comments/update', commentController.update);

// Export
module.exports = routes;
