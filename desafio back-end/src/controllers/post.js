const {Post} = require(`../models`);
const uuid = require('uuid/v4');
const list = async (req, res)=>{
    try{
        return res.status(200).send(await Post.findAll())
    }catch(error){
        console.log(error)
        return res.status(500).send(error);
    }
}
const create = async (req, res)=>{
    try{
        let {id, title, author, text} = req.body; 
        let newPost = await Post.create({
            id,
            title,
            author,
            text,
            createdAt: new Date(),
            updatedAt: new Date(),

        });
        return res.status(201).send(newPost);
    }catch(error){
        console.log(error)
        return res.status(500).send(error);
    }
}
const update = async (req, res)=>{
    try{
        let {where, set} = req.body; 
        let updated = await Post.update(set, { where });
        return res.status(201).send(updated);
    }catch(error){
        console.log(error)
        return res.status(500).send(error);
    }

}
module.exports = {list, create, update}