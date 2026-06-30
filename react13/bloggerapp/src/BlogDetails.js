function BlogDetails() {

    const blogs = [
        { id: 1, title: "React Basics" },
        { id: 2, title: "JavaScript ES6" },
        { id: 3, title: "Spring Boot" }
    ];

    return (

        <div>

            <h2>Blog Details</h2>

            {
                blogs.map(blog => (

                    <p key={blog.id}>
                        {blog.title}
                    </p>

                ))
            }

        </div>

    );

}

export default BlogDetails;