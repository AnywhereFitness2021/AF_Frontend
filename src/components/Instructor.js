// create update and delete a class
//need to be able to take attendance for a class (NOT DOABLE YET)

//Should be able to see only their own classes(NOT DOABLE YET)

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router';
import { fetchClasses, editClass, deleteClass } from '../actions/Actions';
import { connect } from 'react-redux';
// import '../styles/Client.css';

const Instructor = (props) => {
    const { push } = useHistory();
    const { classes, isFetching, error, dispatch, fetchClasses } = props;

    useEffect(() => {
        fetchClasses();
    }, []);
    
    const handleDeleteClick = (item) => {
        axiosWithAuth().delete(`https://anywhere-fitness-2021.herokuapp.com/api/classes/${item.classId}`)
             .then(res => {
                 console.log(res);
                 fetchClasses();
             })
             .catch(err => {
                 console.log(err);
             })       
}

    return (
        <div>
            <h1>Hi Instructor!</h1>
            <button onClick={() => push(`/addclass`)}>Add a Class!</button>
            <h2>Upcoming Classes:</h2>
            {classes.map(item => {
                return(
                    <div key={item.classId}>
                        <h2>{item.name}: {item.type}.</h2>
                        <p>Starts at {item.startTime} and goes for {item.duration}.</p>
                        <p>Located in: {item.location}. Intensity level: {item.intensityLevel}</p>
                        <p>Max Class Size: {item.maxClassSize} Current Attendance Total: {item.attendees}</p>
                        <span>
                            <button onClick={() => {push(`/editclass/${item.classId}`)}}>Edit Class</button>
                            <button onClick={() => handleDeleteClick(item)}>Delete Class</button>
                            <button>Take Attendance</button>
                        </span>
                        
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        classes: state.classes,
        isFetching: state.isFetching,
        error: state.error,
    };
};

export default connect(mapStateToProps, { fetchClasses })(Instructor);