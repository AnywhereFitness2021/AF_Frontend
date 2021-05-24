import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const initialFormValues = {
    name: '',
    type: '',
    startTime: '',
    duration: 0,
    intensityLevel: 0,
    location: '',
    currentAttendees: 0,
    maxClassSize: 0
};

function CreateClassForm(props) {
    const [formValues, setFormValues] = useState(initialFormValues);
    //const { push } = useHistory();
  
    // const cancelButton = () => {
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
      

    const { name, type, startTime, duration, intensityLevel, location, currentAttendees, maxClassSize } = formValues
    return (
      <form onSubmit={onSubmit}>
        <div>
          <h2>Your Name:</h2>
          <div>
            <label>
              Name&nbsp;
              <input
                type="text"
                value={name}
                onChange={onChange}
                name="name"
                placeholder="enter name here.."
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
              <input
                type="range"
                min="0"
                max="10"
                valueAsNumber={intensityLevel}
                onChange={onChange}
                name="intensityLevel"
              />
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
                value={currentAttendees}
                onChange={onChange}
                name="currentAttendees"
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
            <button>Submit</button>
            {/* <button onClick={cancelButton}>Cancel</button> */}
          </div>
        </div>
      </form>
    );
}
  
  
  export default CreateClassForm;