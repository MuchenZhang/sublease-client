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

    const [apartStyleError, setApartStyleError] = useState('');
    const [startDateError, setStartDateError] = useState('');
    const [endDateError, setEndDateError] = useState('');
    const [cityError, setCityError] = useState('');
    const [locationError, setLocationError] = useState('');
    const [rentError, setRentError] = useState('');
    const [roommateError, setRoommateError] = useState('');
    const [petError, setPetError] = useState('');
    const [furnitureError, setFurnitureError] = useState('');

    const handleSubmit = (e) => {
            e.preventDefault();

            // Check for empty fields and display errors
            if (!apartStyle) setApartStyleError('Apartment Style is required');
            if (!startDate) setStartDateError('Start Date is required');
            if (!endDate) setEndDateError('End Date is required');
            if (!city) setCityError('City is required');
            if (!location) setLocationError('Location is required');
            if (!rent) setRentError('Rent is required');
            if (!roommate) setRoommateError('Roommate selection is required');
            if (!pet) setPetError('Pet selection is required');
            if (!furniture) setFurnitureError('Furniture selection is required');

            // If any field is empty, prevent form submission
            if (
                !apartStyle ||
                !startDate ||
                !endDate ||
                !city ||
                !location ||
                !rent ||
                !roommate ||
                !pet ||
                !furniture
            ) {
                return;
            }

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
                  alert("Successfully Submitted")
                  // You might want to reset the form fields here
                } else {
                  // Request was not successful, handle error response
                  console.error('Post failed');
                  alert("Submission Failed")
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
            <select value={apartStyle} onChange={(e) => {
                    setApartStyle(e.target.value);
                    setApartStyleError('');
                }}>
                <option value="">Select an option</option>
                <option value="Studio">Studio</option>
                <option value="1b1b">1b1b</option>
                <option value="2b2b">2b2b</option>
            </select>
            {apartStyleError && <div className="error-message">{apartStyleError}</div>}
            </label>

            <label>
                Start Date:
                <DatePicker
                selected={startDate}
                onChange={(date) => {
                    setStartDate(date);
                    setStartDateError('')
                }}
                dateFormat="MM/dd/yyyy"
                />
                {startDateError && <div className = "error-message">{startDateError}</div>}
            </label>

            <label>
                End Date:
                <DatePicker
                    selected={endDate}
                    onChange={(date) => {
                        setEndDate(date);
                        setEndDateError('')
                    }}
                    dateFormat="MM/dd/yyyy"
                />
                {endDateError && <div className = "error-message">{endDateError}</div>}
            </label>

            <label>
                {/* Third party API get cities in the US */}
                City:
                <input
                    type="text"
                    value={city}
                    onChange={(e) => {
                        setCity(e.target.value);
                        setCityError('')
                    }}
                    placeholder="Enter city"
                />
                {cityError && <div className = "error-message">{cityError}</div>}
            </label>

            <label>
                Location:
                <input
                    type="text"
                    value={location}
                    onChange={(e) => {
                        setLocation(e.target.value);
                        setLocationError('')
                    }}
                    placeholder="Enter location"
                />
                {locationError && <div className = "error-message">{locationError}</div>}
            </label>

            <label>
                Rent per month:
                <input
                    type="number"
                    value={rent}
                    onChange={(e) => {
                        setRent(e.target.value);
                        setRentError('')
                    }}
                    placeholder="Enter rent"
                />
                {rentError && <div className = "error-message">{rentError}</div>}
            </label>

            <label>
                Roommate:
                <select value={roommate} onChange={(e) => {
                    setRoommate(e.target.value);
                    setRoommateError('')
                    }}>
                    <option value="">Select an option</option>
                    <option value="0">No Roommates</option>
                    <option value="1">One Roommate</option>
                    <option value="2">Two Roommates</option>
                </select>
                {roommateError && <div className = "error-message">{roommateError}</div>}
            </label>

            <label>
                Pet:
                <select value={pet} onChange={(e) => {
                    setPet(e.target.value);
                    setPetError('')
                    }}>
                    <option value="">Select an option</option>
                    <option value="0">No Pets</option>
                    <option value="1">One Pet</option>
                    <option value="2">Two Pets</option>
                </select>
                {petError && <div className = "error-message">{petError}</div>}
            </label>

            <label>
                Furniture:
                <select value={furniture} onChange={(e) => {
                    setFurniture(e.target.value);
                    setFurnitureError('')
                    }}>
                    <option value="">Select an option</option>
                    <option value="fullyFurnished">Fully Furnished</option>
                    <option value="partiallyFurnished">Partially Furnished</option>
                    <option value="notFurnished">Not Furnished</option>
                </select>
                {furnitureError && <div className = "error-message">{furnitureError}</div>}
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
