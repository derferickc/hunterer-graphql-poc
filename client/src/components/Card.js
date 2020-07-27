import React from 'react';

export default function Card({ card: { CardId, Name, Language }}) {
    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-6">
                    <h4>Card:{' '} { Name }</h4>
                    <p>
                        CardId: { CardId }
                    </p>
                    <p>
                        Language: { Language }
                    </p>
                </div>
            </div>
        </div>
    )

}