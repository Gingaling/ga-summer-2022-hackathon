import BlogList from '../BlogList/BlogList';
import useFetch from '../useFetch/useFetch';

const Posts = () => {
	const { data: blogs, isPending, error } = useFetch(
		'http://localhost:8000/blogs'
	);

	return (
		<div className="posts">
			{error &&
				<div>
					{error}
				</div>}
			{isPending && <div>Loading...</div>}
			<BlogList blogs={blogs} title="All Blogs" />
		</div>
	);
};

export default Posts;
