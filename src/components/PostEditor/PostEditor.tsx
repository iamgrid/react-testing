import { savePost } from "../../api";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const user = {
	id: "123",
	name: "Alice",
};

function PostEditor() {
	let navigate = useNavigate();

	const [isSaving, isSavingSet] = useState<boolean>(false);
	const [postTitle, postTitleSet] = useState<string>("");
	const [postContent, postContentSet] = useState<string>("");
	const [postTags, postTagsSet] = useState<string>("");

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		const functionSignature = "PostEditor.tsx@handleSubmit()";
		event.preventDefault();

		isSavingSet(true);

		const post = {
			title: postTitle,
			content: postContent,
			tags: postTags.split(",").map((tag: string) => tag.trim()),
			authorId: user.id,
		};

		console.log(functionSignature, "post object:", post);

		await savePost(post);

		navigate("/posts");
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="form__field-container">
				<label htmlFor="post-title">Title</label>
				<input
					id="post-title"
					type="text"
					value={postTitle}
					onChange={(event) => postTitleSet(event.target.value)}
				/>
			</div>
			<div className="form__field-container">
				<label htmlFor="post-content">Content</label>
				<input
					id="post-content"
					type="text"
					value={postContent}
					onChange={(event) => postContentSet(event.target.value)}
				/>
			</div>
			<div className="form__field-container">
				<label htmlFor="post-tags">Tags</label>
				<input
					id="post-tags"
					type="text"
					value={postTags}
					onChange={(event) => postTagsSet(event.target.value)}
				/>
			</div>
			<div className="form__field-container">
				<button type="submit" disabled={isSaving}>
					Submit
				</button>
			</div>
		</form>
	);
}

export default PostEditor;
