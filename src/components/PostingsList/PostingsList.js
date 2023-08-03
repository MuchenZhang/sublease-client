import React, { useState, useEffect } from 'react';

import './stylesheet.css';


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
