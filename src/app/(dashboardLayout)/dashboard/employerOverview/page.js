import React from 'react';

const EmployerOverview = () => {
    return (
        <div>
            <div className="stats shadow flex justify-between">

                <div className="stat">

                    <div className="stat-title">Total Likes</div>
                    <div className="stat-value text-primary">25.6K</div>
                </div>

                <div className="stat">

                    <div className="stat-title">Page Views</div>
                    <div className="stat-value text-secondary">2.6M</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Tasks done</div>
                    <div className="stat-value">86%</div>
                </div>

            </div>
        </div>
    );
};

export default EmployerOverview;