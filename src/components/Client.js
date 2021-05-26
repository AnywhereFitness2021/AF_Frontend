import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchClasses } from '../actions/Actions';
import Loader from 'react-loader-spinner';

import '../styles/Client.css';

const Client = (props) => {
    const { fetchClasses, classes, isFetching } = props
    const [search1, setSearch1] = useState('')
    const [search2, setSearch2] = useState('')
    const [search3, setSearch3] = useState('')
    const [search4, setSearch4] = useState('')
    const [search5, setSearch5] = useState('')
    const [search6, setSearch6] = useState('')
    
    useEffect(() => {
      fetchClasses();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChange1 = e => {
        setSearch1(e.target.value)
    }
    const onChange2 = e => {
        setSearch2(e.target.value)
    }
    const onChange3 = e => {
        setSearch3(e.target.value)
    }
    const onChange4 = e => {
        setSearch4(e.target.value)
    }
    const onChange5 = e => {
        setSearch5(e.target.value)
    }
    const onChange6 = e => {
        setSearch6(e.target.value)
    }

    const filter1 = val => {
        if(search1 === '') {
            return val
        }else if (val.name.toLowerCase().includes(search1.toLowerCase())) {
            return val
    }}
    const filter2 = val => {
        if(search2 === 0) {
            return val
        }else if (val.startTime.includes(search2)) {
            return val
    }}
    const filter3 = val => {
        if(search3 === '') {
            return val
        }else if (val.duration.includes(search3)) {
            return val
    }}
    const filter4 = val => {
        if(search4 === '') {
            return val
        }else if (val.type.toLowerCase().includes(search4.toLowerCase())) {
            return val
    }}
    const filter5 = val => {
        if(search5 === '') {
            return val
        }else if (val.intensityLevel.toLowerCase().includes(search5.toLowerCase())) {
            return val
    }}
    const filter6 = val => {
        if(search6 === '') {
            return val
        }else if (val.location.toLowerCase().includes(search6.toLowerCase())) {
            return val
    }}
  
    return (
      <div>
        <div className="search-box">
            <h4>Search for Classes:</h4>
            <input className="search" type="text" placeholder="Filter by name.." onChange={onChange1}/>
            <input className="search" type="time" placeholder="Filter by time.." onChange={onChange2}/>
            <input className="search" type="number" placeholder="Filter by duration..." onChange={onChange3}/>
            <input className="search" type="text" placeholder="Filter by type..." onChange={onChange4}/>
            <input className="search" type="text" placeholder="Filter by intensity level..." onChange={onChange5}/>
            <input className="search" type="text" placeholder="Filter by location..." onChange={onChange6}/>
        </div>
        <h1>Classes Available to Join:</h1>
          {isFetching && (
              <div className="spinner">
                <Loader type="Puff" color="#204963" height="60" width="60" />
                <p>Loading Data...</p>
              </div>
            )}
        <div className="outer-class">
            {classes.filter(filter1).filter(filter2).filter(filter3)
            .filter(filter4).filter(filter5).filter(filter6).map((item) => {
            return (
                <div key={item.classId} className="class-container">
                <h2>{item.name}</h2>
                <h3>Class Type: {item.type}</h3>
                <h3>Start Time: {item.startTime}</h3>
                <h3>Intensity Level: {item.intensityLevel}</h3>
                <h3>Duration: {item.duration}</h3>
                <h3>Location: {item.location}</h3>
                <h3>Attendees: {item.attendees}</h3>
                <h3>Max Class Size: {item.maxClassSize}</h3>
                <div className="button">
                    <button onClick={() => {alert('You have been added to this class!')}}>Join this class</button>
                </div>
                </div>
            );
            })}
        </div>
      </div>
    );
  };

  const mapStateToProps = state => {
      return {
          classes: state.classes,
          isFetching: state.isFetching,
          error: state.error
      }
  }

  export default connect(mapStateToProps, { fetchClasses })(Client);