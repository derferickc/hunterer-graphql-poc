import React from 'react'
import { gql, useQuery } from '@apollo/client';
import Card from './Card';

const DECKS_QUERY = gql`
    query DecksQuery {
        search {
            CardId
            Name
            Language
      }
    }
`;

export default function Decks() {
    const { loading, error, data } = useQuery(DECKS_QUERY);

    if(loading) return <h4>Loading...</h4>
    if(error) return <h4>Error: {error}</h4>

    return (
        <React.Fragment>
            <h1 className="display-4 my-3 text-center">Decks</h1>
            {/* <MissionKey /> */}
            {
                data.search.map((card) => (
                    <Card
                        key={card.CardId}
                        card={card}
                    />
                ))
            }
        </React.Fragment>
    )
}