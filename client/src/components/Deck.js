import React from 'react'
import { gql, useQuery } from '@apollo/client';
import Cards from './Cards';

const DECKS_QUERY = gql`
    query DecksQuery {
        search {
            _type
            _id
            _index
            _source {
                LanguageCode
                EnglishCardTitle
                RulesText
                ManaCost
                ConvertedManaCost
                ArtistCredit
                SetName
                SeriesNumber
                ReleaseDate
            }
      }
    }
`;

export default function Deck() {
    const { loading, error, data } = useQuery(DECKS_QUERY);

    if(loading) return <h4>Loading...</h4>
    if(error) return <h4>Error: {error}</h4>
    console.log(data)
    return (
        <React.Fragment>
            <h1 className="display-4 my-3 text-center">Deck</h1>
            {
                data.search.map((card) => (
                    <Cards
                        key={card._id}
                        card={card._source}
                    />
                ))
            }
            SWAG
        </React.Fragment>
    )
}