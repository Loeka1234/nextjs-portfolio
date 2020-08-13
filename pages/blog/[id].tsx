import { getAllPostsIds, getPostData } from "../../utils/posts";
import { GetStaticProps, GetStaticPaths } from "next";

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

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllPostsIds();
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postData = await getPostData(params.id);
	console.log(postData);
	return {
		props: {
			postData,
		},
		revalidate: false,
	};
};
