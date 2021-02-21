const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');

//read
router.get('/', ( req, res, next) => {
	Post.find()
	.then((posts) => {
		res.json(posts);
	})
	.catch(err => console.log(err));

});

//create

router.post('/add', ( req, res, next) => {
	const title = req.body.title;
	const body  = req.body.body;
	newPost = new Post({
		title: title,
		body: body
	});
	newPost.save()
	.then(post =>{
		res.json(post);
	})
	.catch(err => console.log(err) );
});


// Update

// Delete

module.exports = router;