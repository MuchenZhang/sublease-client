import React, { useState, useEffect } from 'react';

import './stylesheet.css';


const mockPostings = [
    // Replace this with the API result
    { id: 11, title: 'Mock Posting 11', date: '2023-07-25', content: 'This is the content of mock posting 11.'},
    { id: 12, title: 'Mock Posting 12', date: '2023-07-26', content: 'This is the content of mock posting 12.' },
    { id: 13, title: 'Mock Posting 13', date: '2023-07-27', content: 'This is the content of mock posting 13.' },
    { id: 14, title: 'Mock Posting 14', date: '2023-07-28', content: 'This is the content of mock posting 14.' },
    { id: 15, title: 'Mock Posting 15', date: '2023-07-29', content: 'This is the content of mock posting 15.' },
    { id: 16, title: 'Mock Posting 16', date: '2023-07-30', content: 'This is the content of mock posting 16.' },
    { id: 17, title: 'Mock Posting 17', date: '2023-07-31', content: 'This is the content of mock posting 17.' },
    { id: 18, title: 'Mock Posting 18', date: '2023-08-01', content: 'This is the content of mock posting 18.' },
    { id: 19, title: 'Mock Posting 19', date: '2023-08-02', content: 'This is the content of mock posting 19.' },
    { id: 20, title: 'Mock Posting 20', date: '2023-08-03', content: 'This is the content of mock posting 20.' }
];

const tagsData = ['Studio', '2b2b', '4b4b', 'Summer Semester', 'Pet-friendly', 'under $1000', 'Parking Spaces', 'Atlanta'];

const PostingsList = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
    // Implement your search logic here, for example, filter the `postings` array
    // based on the `searchQuery`, and return the filtered results.
    };
    const [postings, setPostings] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        fetch('/basic/posts')
            .then((response) => response.json())
            .then((data) => setPostings(data))
            .catch((error) => console.error('Error fetching posts:', error));
    }, []);

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    const [selectedTags, setSelectedTags] = useState([]);

    const handleAddTag = (tag) => {
        if (!selectedTags.includes(tag)) {
            setSelectedTags((prevTags) => [...prevTags, tag]);
        }
        console.log(selectedTags)
    };

    const handleRemoveTag = (tag) => {
        setSelectedTags((prevTags) => prevTags.filter((t) => t !== tag));
    };

    return (
        <div className="postings-container">
            <div className="search-container">
                <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for postings..."
                />
                <button className="search-btn" onClick={handleSearch}>Search</button>
                <div className="tags-container">
                    {tagsData.map((tag) => (
                        <button
                        key={tag}
                        className="tag-btn"
                        onClick={() =>
                            selectedTags.includes(tag)
                            ? handleAddTag(tag)
                            : handleRemoveTag(tag)
                        }
                        >
                        {tag}
                        </button>
                    ))}
                </div>
            </div>
            
            <div className="postings-list">
                {postings.map((post) => (
                <div key={post.id} onClick={() => handlePostClick(post)}>
                    <h3>{post.location}</h3>
                </div>
                ))}
            </div>
            <div className="post-details">
                {selectedPost ? (
                <>
                    <h2>{selectedPost.location}</h2>
                    <p>City: {selectedPost.city}</p>
                    <p>Apartment Style: {selectedPost.apartStyle}</p>
                    <p>Rent: ${selectedPost.rent}</p>
                    <p>Remarks: {selectedPost.remarks}</p>
                    <p>Contact: {selectedPost.contact}</p>
                </>
                ) : (
                <p>Select a posting to view details</p>
                )}
            </div>
        </div>
    );
};

export default PostingsList;
