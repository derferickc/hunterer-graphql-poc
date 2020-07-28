import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ card: { LanguageCode, EnglishCardTitle, RulesText, ManaCost, ConvertedManaCost, ArtistCredit, SetName, SeriesNumber, ReleaseDate }}) {
    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-6">
                    <h4>Card: {EnglishCardTitle}</h4>
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
                </div>
            </div>
        </div>
    )

}