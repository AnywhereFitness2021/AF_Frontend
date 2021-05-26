import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { classFormSchema as schema} from '../schema/classformSchema';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';


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
    const [formErrors, setFormErrors] = useState({});
    const { push } = useHistory();
  
    const handleCancel = () => {
      push('/instructor');
    }

    

  //   const checkSchema = (name, value) => {
  //     yup.reach(schema, name).validate(value)
  //     .then(() => {
  //         setFormErrors({...formErrors, [name]: ''});
  //     }).catch((err) => {
  //         if (err.errors) { 
  //             setFormErrors({...formErrors, [name]: err.errors[0]});
  //         }
  // });

// };
  
    const onSubmit = (evt) => {
      evt.preventDefault();
      axiosWithAuth().post('/classes', formValues)
           .then(res => {
            console.log(res);
            push('/instructor');
           })
           .catch(err => {
             console.log(err);
           })
    };

    const onChange = (evt) => {
        let { name, value } = evt.target;
        setFormValues({ ...formValues, [name]: value });
        // checkSchema(name, value);
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
            <div className="error">{formErrors.name}</div>
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
            <div className="error">{formErrors.type}</div>
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
            <div className="error">{formErrors.startTime}</div>
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
            <div className="error">{formErrors.duration}</div>
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
            <div className="error">{formErrors.intensityLevel}</div>
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
            <div className="error">{formErrors.location}</div>
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
            <div className="error">{formErrors.attendees}</div>
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
            <div className="error">{formErrors.maxClassSize}</div>
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
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </form>
    );
}
  
  
  export default CreateClassForm;