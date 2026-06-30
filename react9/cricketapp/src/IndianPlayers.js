function IndianPlayers() {

    const players = [
        "Virat",
        "Rohit",
        "Gill",
        "Rahul",
        "Hardik",
        "Jadeja"
    ];

    const [p1, p2, p3, p4, p5, p6] = players;

    const oddPlayers = [p1, p3, p5];
    const evenPlayers = [p2, p4, p6];

    const T20players = ["Surya", "Pant", "Rinku"];

    const RanjiPlayers = ["Pujara", "Rahane", "Iyer"];

    const merged = [...T20players, ...RanjiPlayers];

    return (

        <div>

            <h2>Odd Team Players</h2>

            {
                oddPlayers.map((player, index) => (
                    <p key={index}>{player}</p>
                ))
            }

            <h2>Even Team Players</h2>

            {
                evenPlayers.map((player, index) => (
                    <p key={index}>{player}</p>
                ))
            }

            <h2>Merged Players</h2>

            {
                merged.map((player, index) => (
                    <p key={index}>{player}</p>
                ))
            }

        </div>

    );

}

export default IndianPlayers;