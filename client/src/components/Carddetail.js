import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const CARDDETAIL_QUERY = gql`
    query CardDetailQuery($card_id: String!) {
        cardinfo(CardID: $card_id) {
            CardData {
                CardFeature {
                    Id
                }
            }
        }
    }
`;

export default function Carddetail(props) {
    let { card_id } = props.match.params;
    console.log(card_id);

    const { loading, error, data } = useQuery(CARDDETAIL_QUERY, {
        variables: { card_id }
    });

    console.log(data)

    if(loading) return <h4>Loading...</h4>
    if(error) return <h4>Error: {error}</h4>
    console.log(data.cardinfo.CardData.CardFeature.Id)
    const {
        Id
    } = data.cardinfo.CardData.CardFeature
    

    return (
        <div className="card card-body mb-3">
            <div className="d-inline">
                <span className="col-md-6">CardFeature Id: {Id}</span>
                <span className="col-md-6">
                    <Link className="btn btn-secondary" to="/">Back</Link>
                </span>
            </div>
        </div>
    )
}