const {Comment} = require(`../models`);
const uuid = require('uuid/v4');
const list = async (req, res)=>{
    try{
        return res.status(200).send(await Comment.findAll())
    }catch(error){
        console.log(error)
        return res.status(500).send(error);
    }
}
const create = async (req, res)=>{
    try{
        let {id, postId, author, message} = req.body;
        let newComment = await Comment.create({
            id,
            postId,
            author,
            message,
            createdAt: new Date(),
            updatedAt: new Date(),

        });
        return res.status(201).send(newComment);
    }catch(error){
        return res.status(500).send(error);
    }
}
const update = async (req, res)=>{
    try{
        let {id} = req.params;
        let {set} = req.body; 
        let updated = await Comment.update(set, { where:{id} });
        return res.status(201).send(updated);
    }catch(error){
        console.log(error)
        return res.status(500).send(error);
    }

}
module.exports = {list, create, update}