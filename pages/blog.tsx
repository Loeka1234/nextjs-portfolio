import { getSortedPostsData } from "./../utils/posts";
import PostList from "../components/PostList";
import styled from "styled-components";

const Section = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const H1 = styled.h1`
	margin: 3rem 0 0;
	font-size: 5rem;
`;

const Blog: React.FC<{ allPostsData: PostMetadata[] }> = ({ allPostsData }) => {
	return (
		<>
			<Section>
				<H1>Blog</H1>
				<PostList posts={allPostsData} />
			</Section>
		</>
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
