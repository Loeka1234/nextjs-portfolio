import Link from "next/link";
import styled from "styled-components";
import specialBox from "./reusable/specialBox";

const Wrapper = styled.div`
	width: 500px;
	margin: 1rem;
	${specialBox};
`;

const Ul = styled.ul`
	list-style-type: none;
    padding: 1rem;
    margin: 0;
`;

const Post = styled.li`
    margin: 1rem 0;
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
						<Link href={`/blog/${id}`}>
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
