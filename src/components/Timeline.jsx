import React from 'react';

const Timeline = ({ chirp }) => {
    return (
        <div className="row d-flex justify-content-center mt-3">
            <div className="col-sm-4 card rounded shadow my-4 pb-3 bg-primary">
                <div className="card-header bg-primary">
                    <h4 className="text-light pt-2 text-secondary">
                        {chirp.username}
                    </h4>
                </div>
                <div className="card-body bg-light rounded shadow">
                    <p className="card-text">
                        {chirp.message}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
