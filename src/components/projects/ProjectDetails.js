import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card blue-grey darken-1z-depth-0">
                <div className="card-content white-text">
                    <span className="card-title">Project Title - {id}</span>
                    <p>is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not
                    only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.
                    </p>
                </div>
                <div className="card-action grey darken-1">
                    <div>posted by TP</div>
                    <div>29th April</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails