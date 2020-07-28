import React from 'react';
import Subtype from './Subtype';

export default function Card({
    card: { _index, _type, _id },
    carddetails: { LanguageCode, EnglishCardTitle, RulesText, ManaCost, ConvertedManaCost, ArtistCredit, SetName, SeriesNumber, ReleaseDate, CardSubTypes }
}) {

    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-12">
                    <h4>Card: {EnglishCardTitle}</h4>
                    <hr></hr>
                    <h5>Card Info</h5>
                    <ul>
                        <li>_index: {_index}</li>
                        <li>_type: {_type}</li>
                        <li>_id: {_id}</li>
                    </ul>

                    <h5>Card Details</h5>
                    <ul>
                        <li>LanguageCode: {LanguageCode}</li>
                        <li>EnglishCardTitle: {EnglishCardTitle}</li>
                        <li>RulesText: {RulesText}</li>
                        <li>ManaCost: {ManaCost}</li>
                        <li>ConvertedManaCost: {ConvertedManaCost}</li>
                        <li>ArtistCredit: {ArtistCredit}</li>
                        <li>SetName: {SetName}</li>
                        <li>SeriesNumber: {SeriesNumber}</li>
                        <li>ReleaseDate: {ReleaseDate}</li>
                    </ul>

                    <Subtype subtypes={CardSubTypes}/>
                    {/* <ul>
                        {CardSubTypes.map((subtype) => {
                            return (subtype)
                            ? (<li>{subtype}</li>)
                            : (<li>No Sub Types</li>)
                        })}
                    </ul> */}
                </div>
            </div>
        </div>
    )
}