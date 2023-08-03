import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './stylesheet.css';


const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami']; // Sample city list

const furnitureOptions = ['Furnished', 'Unfurnished', 'Partially Furnished'];

const PostingsForm = () => {
    const [apartStyle, setApartStyle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [city, setCity] = useState('');
    const [location, setLocation] = useState('');
    const [rent, setRent] = useState('');
    const [roommate, setRoommate] = useState('');
    const [pet, setPet] = useState('');
    const [furniture, setFurniture] = useState('');
    const [remarks, setRemarks] = useState('');

    const handleSubmit = (e) => {
            e.preventDefault();
            const formData = {
                apartStyle,
                startDate,
                endDate,
                city,
                location,
                rent,
                roommate,
                pet,
                furniture,
                remarks
            };

            try {
                const response = fetch('/basic/posts', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(formData),
                });
          
                if (response) {
                  // Request was successful, handle success response
                  console.log('Post successful!');
                  // You might want to reset the form fields here
                } else {
                  // Request was not successful, handle error response
                  console.error('Post failed');
                }
              } catch (error) {
                // Handle any errors that occurred during the request
                console.error('An error occurred:', error);
              }
    };

    return (
        <div className="form-container">
        <form className="apartment-form" onSubmit={handleSubmit}>
            <label>
            Apartment Style:
            <select value={apartStyle} onChange={(e) => setApartStyle(e.target.value)}>
                <option value="">Select an option</option>
                <option value="Studio">Studio</option>
                <option value="1b1b">1b1b</option>
                <option value="2b2b">2b2b</option>
            </select>
            </label>

            <label>
                Start Date:
                <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MM/dd/yyyy"
                />
            </label>

            <label>
                End Date:
                <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="MM/dd/yyyy"
                />
            </label>

            <label>
                {/* Third party API get cities in the US */}
                City:
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city"
                />
            </label>

            <label>
                Location:
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter location"
                />
            </label>

            <label>
                Rent per month:
                <input
                    type="number"
                    value={rent}
                    onChange={(e) => setRent(e.target.value)}
                    placeholder="Enter rent"
                />
            </label>

            <label>
                Roommate:
                <select value={roommate} onChange={(e) => setRoommate(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="0">No Roommates</option>
                    <option value="1">One Roommate</option>
                    <option value="2">Two Roommates</option>
                </select>
            </label>

            <label>
                Pet:
                <select value={pet} onChange={(e) => setPet(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="0">No Pets</option>
                    <option value="1">One Pet</option>
                    <option value="2">Two Pets</option>
                </select>
            </label>

            <label>
                Furniture:
                <select value={furniture} onChange={(e) => setFurniture(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="fullyFurnished">Fully Furnished</option>
                    <option value="partiallyFurnished">Partially Furnished</option>
                    <option value="notFurnished">Not Furnished</option>
                </select>
            </label>

            <label>
                Remarks:
                <textarea
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    placeholder="Enter any additional remarks"
                    rows={4}
                />
            </label>
            
            <button type="submit">Submit</button>
        </form>
        </div>
    );
};

export default PostingsForm;
