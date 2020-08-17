import Link from "next/link";
import styled from "styled-components";
import specialBox from "./reusable/specialBox";

const Wrapper = styled.div`
	position: relative;
	width: 95%;
	max-width: 600px;
`;

const Ul = styled.ul`
	list-style-type: none;
	padding: 1rem;
	margin: 0;
	width: 100%;
`;

const Post = styled.li`
	margin: 3rem 0;
	padding: 1.5rem;
	${specialBox};
`;

export interface PostListProps {
	posts: PostMetadata[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
	return (
		<Wrapper>
			<Ul>
				{posts.map(({ date, id, title }, i) => (
					<Post key={i}>
						<Link href="/blog/[id]" as={`/blog/${id}`}>
							<a>{title}</a>
						</Link>
						<br />
						<small>{date}</small>
					</Post>
				))}
			</Ul>
		</Wrapper>
	);
};

export default PostList;
