// import { json } from "body-parser";
import Post from "./Post.js";


class PostController {
    //создаем пользователя
    async create(req, res) {
        try {
            const { author, title, content, picture } = req.body;
            const post = await Post.create({ author, title, content, picture })
            console.log(req.body)
            res.json(post);
        }
        catch {
            res.status(500).json(e);
        }
    };
    // получаем всех
    async getAll(req, res) {
        try {

            const post = await Post.find();
            return res.json(post)
        }
        catch {
            res.status(500).json(e);

        }

    }
    // получаем одного
    async getOne(req, res) {
        try {
                const { id } = req.params;
                const post = await Post.findById(id);
                return res.json(post);
        }
        catch {
            res.status(500).json('error');

        }
    }

    // обновляем нужного
    async update(req, res) {
        try { 
            const post = req.body;
            const updatePost = await Post.findByIdAndUpdate(post._id, post, {new: true});
            return res.json(updatePost);
        }
        catch {
            res.status(500).json(e);

        }
    }
    // удаляем одного
    async delete(req, res) {
        try { 
            const { id } = req.params;
            const post = await Post.findByIdAndDelete(id)
            return res.json(post);

        }
        catch {
            res.status(500).json(e);

        }
    }
}


export default new PostController()