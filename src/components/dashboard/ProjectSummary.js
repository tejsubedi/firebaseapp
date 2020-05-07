import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="card  blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title">{project.title}</span>
                <div className="card-action grey darken-1">
                    <p>posted by TP</p>
                    <p>29th April</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary