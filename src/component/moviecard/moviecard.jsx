import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function MovieCard(props) {
    return(
        <>
        <div className="col-lg-3 col-md-6">
            <div className="movie-card">
                <div className="card">
                    <img src={props.imgurl} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text"> <FontAwesomeIcon icon={faStar} />{props.rating} | {props.genre}</p>
                        <a href={props.link} className="btn btn-default btn-card">More Details</a>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default MovieCard;