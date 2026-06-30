import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {

    const choice = 3;

    if (choice === 1) {
        return <BookDetails />;
    }

    else if (choice === 2) {
        return <BlogDetails />;
    }

    else {
        return <CourseDetails />;
    }

}

export default App;