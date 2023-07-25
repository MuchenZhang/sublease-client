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



const PostingsList = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
    // Implement your search logic here, for example, filter the `postings` array
    // based on the `searchQuery`, and return the filtered results.
    };
    const [postings, setPostings] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        // Simulate API call and set the postings
        // In a real app, you would call your API to fetch the postings
        setPostings(mockPostings);
    }, []);

    const handlePostClick = (post) => {
        setSelectedPost(post);
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
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="postings-list">
                {postings.map((post) => (
                <div key={post.id} onClick={() => handlePostClick(post)}>
                    <h3>{post.title}</h3>
                    <p>{post.date}</p>
                </div>
                ))}
            </div>
            <div className="post-details">
                {selectedPost ? (
                <>
                    <h2>{selectedPost.title}</h2>
                    <p>{selectedPost.content}</p>
                </>
                ) : (
                <p>Select a posting to view details</p>
                )}
            </div>
        </div>
    );
};

export default PostingsList;
