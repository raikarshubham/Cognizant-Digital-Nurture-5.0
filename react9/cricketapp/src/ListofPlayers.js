function ListofPlayers() {

    const players = [
        { name: "Virat", score: 95 },
        { name: "Rohit", score: 80 },
        { name: "Gill", score: 60 },
        { name: "Rahul", score: 72 },
        { name: "Hardik", score: 68 },
        { name: "Jadeja", score: 77 },
        { name: "Ashwin", score: 65 },
        { name: "Shami", score: 50 },
        { name: "Bumrah", score: 88 },
        { name: "Siraj", score: 55 },
        { name: "Kuldeep", score: 74 }
    ];

    const lowScore = players.filter(player => player.score < 70);

    return (
        <div>

            <h2>List of Players</h2>

            {
                players.map((player, index) => (
                    <p key={index}>
                        {player.name} - {player.score}
                    </p>
                ))
            }

            <h2>Players with Score below 70</h2>

            {
                lowScore.map((player, index) => (
                    <p key={index}>
                        {player.name} - {player.score}
                    </p>
                ))
            }

        </div>
    );

}

export default ListofPlayers;