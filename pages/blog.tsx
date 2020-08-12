import { getSortedPostsData } from "./../utils/posts";
import PostList from "../components/PostList";

const Blog: React.FC<{ allPostsData: PostMetadata[] }> = ({ allPostsData }) => {
	return (
		<main>
			<PostList posts={allPostsData} />
		</main>
	);
};

export default Blog;

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}
