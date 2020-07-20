import React from 'react';

function Inputfield(props) {
    return(
        <div className="col-md-6 col-lg-4 mt-2">
            <div className="top-header-input">
                <div className="form-group mb-0">
                    <input type="text" placeholder="Search By Name" className="form-control" onChange={props.handleChange} />
                </div>
            </div>
        </div>
    )
}

export default Inputfield;

