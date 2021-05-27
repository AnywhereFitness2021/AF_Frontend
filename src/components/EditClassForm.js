import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialFormValues = {
    name: '',
    type: '',
    startTime: '',
    duration: 0,
    intensityLevel: '',
    location: '',
    attendees: 0,
    maxClassSize: 0,
    userId: '',
};



const EditClassForm = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues);
    
    const { id } = useParams();
    const { push } = useHistory();

    useEffect(() => {
        axiosWithAuth().get(`/classes/${id}`)
            .then(res => {
                console.log(res.data);
                setFormValues(res.data);
            })
            .catch(err => {
                console.log('ERROR', err);
            })
    }, [id])

    const onSubmit = (evt) => {
        evt.preventDefault();

        const itemToBeSubmit = {
            name: formValues.name.trim(),
            type: formValues.type.trim(),
            startTime: formValues.startTime,
            duration: formValues.duration.trim(),
            intensityLevel: formValues.intensityLevel.trim(),
            location: formValues.location.trim(),
            attendees: formValues.attendees,
            maxClassSize: formValues.maxClassSize,
            userId: id,
        }

        axiosWithAuth().put(`/classes/${id}`, itemToBeSubmit)
            .then(res => {
                console.log(res);
                push(`/instructor/${id}`);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const onChange = (evt) => {
        const { name, value } = evt.target;
        setFormValues({...formValues, [name] : value })
      };


    const handleCancel = () => {
        push(`/instructor/${id}`);
      }


    return (
        <form onSubmit={onSubmit}>
        <div>
          <h2>Edit your Class:</h2>
          <div>
            {/* <div className="error">{formErrors.name}</div> */}
            <label>
              Name of Class&nbsp;
              <input
                type="text"
                value={formValues.name}
                onChange={onChange}
                name="name"
                placeholder="enter class name here.."
              />
            </label>
          </div>
          <div>
            {/* <div className="error">{formErrors.type}</div> */}
            <label>
              Class Type:&nbsp;
              <input
                type="text"
                value={formValues.type}
                onChange={onChange}
                name="type"
                placeholder="enter type of class here.."
              />
            </label>
          </div>
          <div>
            {/* <div className="error">{formErrors.startTime}</div> */}
            <label>
              Choose a start time:&nbsp;
              <input
                type="time"
                value={formValues.startTime}
                onChange={onChange}
                name="startTime"
              />
            </label>
          </div>
          <div>
            {/* <div className="error">{formErrors.duration}</div> */}
            <label>
              Duration (in minutes):&nbsp;
              <input
                type="text"
                value={formValues.duration}
                onChange={onChange}
                name="duration"
              />
            </label>
          </div>
          <div>
            {/* <div className="error">{formErrors.intensityLevel}</div> */}
            <label>
              Intensity Level:&nbsp;
              <select value={formValues.intensityLevel} name="intensityLevel" onChange={onChange}>
                <option value=''>-- Select an Intensity Level --</option>
                <option value='Beginner'>Beginner</option>
                <option value='Intermediate'>Intermediate</option>
                <option value='Advanced'>Advanced</option>
              </select>
            </label>
          </div>
          <div>
            {/* <div className="error">{formErrors.location}</div> */}
            <label>
              Location:&nbsp;
              <input
                type="text"
                value={formValues.location}
                onChange={onChange}
                name="location"
                placeholder="enter location here.."
              />
            </label>
          </div>
          <div>
            {/* <div className="error">{formErrors.attendees}</div> */}
            <label>
              Current Registered Attendees:&nbsp;
              <input
                type="number"
                value={formValues.attendees}
                onChange={onChange}
                name="attendees"
              />
            </label>
          </div>
          <div>
            {/* <div className="error">{formErrors.maxClassSize}</div> */}
            <label>
              Max Class Size:&nbsp;
              <input
                type="number"
                value={formValues.maxClassSize}
                onChange={onChange}
                name="maxClassSize"
              />
            </label>
          </div>
          <div>
            <button>Update</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </form>
    )
}

export default EditClassForm;