const BlogPosts = ({ posts }) => {
  return (
    <div>
      <h2>BlogPosts</h2>
      <ul>
        {posts?.map(post => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default BlogPosts;
