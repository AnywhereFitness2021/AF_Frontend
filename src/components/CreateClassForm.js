import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const initialFormValues = {
    name: '',
    type: '',
    startTime: '',
    duration: 0,
    intensityLevel: '',
    location: '',
    attendees: 0,
    maxClassSize: 0
};

function CreateClassForm(props) {
    const [formValues, setFormValues] = useState(initialFormValues);
    //const { push } = useHistory();
  
    // const handleCancel = () => {
    //   push('/');
    // }

    //goes in actions file
    // export const postNewClass = (class) => {
    //     return (dispatch => {
    //       dispatch({type:FETCH_START});
      
    //       dispatch(fetchStart());
    //       axiosWithAuth()
    //       .post('/', class)
    //       .then((res) => {
    //         dispatch({type: FETCH_SUCCESS, payload:res.data})
    //       })
    //       .catch((err) => {
    //         dispatch({type: FETCH_FAIL, payload:err});
    //       });
    //     })
    //   }
    //end
  
    const onSubmit = (evt) => {
      evt.preventDefault();
      //postNewClass(formValues);
      //push('/');
    };

    const onChange = (evt) => {
        setFormValues({ ...formValues, [evt.target.name]: evt.target.value });
    };
      

    const { 
      name, 
      type, 
      startTime, 
      duration, 
      intensityLevel, 
      location,
      attendees, 
      maxClassSize } = formValues


    return (
      <form onSubmit={onSubmit}>
        <div>
          <h2>Add a Class:</h2>
          <div>
            <label>
              Name of Class&nbsp;
              <input
                type="text"
                value={name}
                onChange={onChange}
                name="name"
                placeholder="enter class name here.."
              />
            </label>
          </div>
          <div>
            <label>
              Class Type:&nbsp;
              <input
                type="text"
                value={type}
                onChange={onChange}
                name="type"
                placeholder="enter type of class here.."
              />
            </label>
          </div>
          <div>
            <label>
              Choose a start time:&nbsp;
              <input
                type="time"
                value={startTime}
                onChange={onChange}
                name="startTime"
              />
            </label>
          </div>
          <div>
            <label>
              Duration (in minutes):&nbsp;
              <input
                type="number"
                value={duration}
                onChange={onChange}
                name="duration"
              />
            </label>
          </div>
          <div>
            <label>
              Intensity Level:&nbsp;
              <select value={intensityLevel} name="intensityLevel" onChange={onChange}>
                <option value=''>-- Select an Intensity Level --</option>
                <option value='Beginner'>Beginner</option>
                <option value='Intermediate'>Intermediate</option>
                <option value='Advanced'>Advanced</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Location:&nbsp;
              <input
                type="text"
                value={location}
                onChange={onChange}
                name="location"
                placeholder="enter location here.."
              />
            </label>
          </div>
          <div>
            <label>
              Current Registered Attendees:&nbsp;
              <input
                type="number"
                value={attendees}
                onChange={onChange}
                name="attendees"
              />
            </label>
          </div>
          <div>
            <label>
              Max Class Size:&nbsp;
              <input
                type="number"
                value={maxClassSize}
                onChange={onChange}
                name="maxClassSize"
              />
            </label>
          </div>
          <div>
            <button>Add</button>
            {/* <button onClick={handleCancel}>Cancel</button> */}
          </div>
        </div>
      </form>
    );
}
  
  
  export default CreateClassForm;