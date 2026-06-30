function CourseDetails() {

    const courses = [
        { id: 1, name: "Java Full Stack" },
        { id: 2, name: "React JS" },
        { id: 3, name: "Python" }
    ];

    return (

        <div>

            <h2>Course Details</h2>

            {
                courses.map(course => (

                    <p key={course.id}>
                        {course.name}
                    </p>

                ))
            }

        </div>

    );

}

export default CourseDetails;