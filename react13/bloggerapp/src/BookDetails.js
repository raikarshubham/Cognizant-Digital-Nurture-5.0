function BookDetails() {

    const books = [
        { id: 1, name: "Java", price: 500 },
        { id: 2, name: "React", price: 700 },
        { id: 3, name: "Python", price: 600 }
    ];

    return (

        <div>

            <h2>Book Details</h2>

            {
                books.map(book => (

                    <p key={book.id}>
                        {book.name} - ₹{book.price}
                    </p>

                ))
            }

        </div>

    );

}

export default BookDetails;