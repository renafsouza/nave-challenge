const commentsToHTML = (comments)=>{
	return comments.map(comment=>`
		<div class="comment">
			<div><a href="#" class="commentEmail">${comment.email}:</a> <span class="commentName">${comment.name}</span></div>
			<div class="commentBody">${comment.body}</div>
		</div>`
	).join("")
}
const postsToHTML = (posts)=>{
	return`${posts.map((post)=>`
		<div class="post">
			<div class="postHeader">
				<div class="postTitle">${post.title}</div>
				<div class="postBody">${post.body}</div>
			</div>
			${commentsToHTML(post.comments)}
		</div>`
	).join("")}`
}

const render = async()=>{
	try{
		let res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
		let posts = res.data;

		res = await axios.get(`https://jsonplaceholder.typicode.com/comments`);
		let comments = res.data;

		posts.map((post)=>{
			post.comments = comments.filter((comment) => post.id == comment.postId)
		})
		
		let commentsWrapper = document.createElement("div");
		commentsWrapper.setAttribute("class","posts");
		document.body.appendChild(commentsWrapper)

		commentsWrapper.innerHTML = postsToHTML(posts)
	}catch(e){
		console.log(e)
	}
}

render();