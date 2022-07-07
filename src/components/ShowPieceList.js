import React, { useEffect, useState } from 'react'



function ShowPieceList() {
    const [piece, setPiece] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/show_pieces`)
        .then((res) => res.json())
        .then((data) => setPiece(data));
    }, []);

    const displayPieces = piece.map((piecesShown) =>{
        return <h3 key={piecesShown.id}>
            Title
            {piecesShown.title},
            # of Performers
            {piecesShown.number_of_performers},
            Length of piece in minutes
            {piecesShown.length},
            Music Album
            {piecesShown.music_album},
            Movement Style
            {piecesShown.movement_style}

        </h3>

    }
    )

    return (
    <div>ShowPieceList
        <ul>
            {displayPieces}
        </ul>
    </div>
  )
}

export default ShowPieceList