import { getAllPostsIds, getPostData } from "../../utils/posts";

const Post: React.FC<{ postData: PostMetadataWithHtml }> = ({ postData }) => {
	return (
		<div>
			<h1>{postData.title}</h1>
			<small>{postData.date}</small>
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
		</div>
	);
};

export default Post;

export async function getStaticPaths() {
	const paths = getAllPostsIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	console.log(postData);
	return {
		props: {
			postData,
		},
	};
}
