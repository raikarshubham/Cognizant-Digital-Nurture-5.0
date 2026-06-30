function App() {

    const offices = [

        {
            name: "Tech Park",
            rent: 55000,
            address: "Bangalore",
            image: "office.png"
        },

        {
            name: "Business Hub",
            rent: 75000,
            address: "Hyderabad",
            image: "office.png"
        },

        {
            name: "IT Tower",
            rent: 45000,
            address: "Pune",
            image: "office.png"
        }

    ];

    return (

        <div>

            <h1>Office Space Rental App</h1>

            {
                offices.map((office, index) => (

                    <div key={index}>

                        <img
                            src={office.image}
                            alt="Office"
                            width="300"
                        />

                        <h2>{office.name}</h2>

                        <p
                            style={{
                                color:
                                    office.rent < 60000
                                        ? "red"
                                        : "green"
                            }}
                        >
                            Rent : ₹ {office.rent}
                        </p>

                        <p>
                            Address : {office.address}
                        </p>

                        <hr />

                    </div>

                ))
            }

        </div>

    );

}

export default App;