import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

function Image() {
    const [images, setImages] = useState([]);
    const [file, setFile] = useState(null);
    const [editingImage, setEditingImage] = useState(null);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await axios.get('http://localhost:3010/uploads');
            setImages(response.data);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    const handleUpload = async () => {
        if (!file) return;
        const formData = new FormData();
        formData.append('file', file);

        try {
            await axios.post('http://localhost:3010/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            fetchImages(); // Refresh the image list
            setFile(null); // Clear the file input
        } catch (error) {
            console.error('Error uploading the file:', error);
        }
    };

    const handleDelete = async (filename) => {
        try {
            await axios.delete(`http://localhost:3010/image/${filename}`);
            fetchImages(); // Refresh the image list
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };

    const handleEdit = async (filename) => {
        if (!file) return;
        const formData = new FormData();
        formData.append('file', file);

        try {
            await axios.put(`http://localhost:3010/image/${filename}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            fetchImages(); // Refresh the image list
            setEditingImage(null); // Clear the editing state
            setFile(null); // Clear the file input
        } catch (error) {
            console.error('Error editing the file:', error);
        }
    };

    return (
        <div className="App">
            <h1>Image Manager</h1>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Upload Image</button>
            <h2>Uploaded Images</h2>
            {images.map((image) => (
                <div key={image.filename}>
                    <h3>{image.filename}</h3>
                    <img
                        src={`http://localhost:3010/image/${image.filename}`}
                        alt={image.filename}
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                    <button onClick={() => handleDelete(image.filename)}>Delete</button>
                    <button onClick={() => setEditingImage(image)}>Edit</button>
                    {editingImage && editingImage.filename === image.filename && (
                        <div>
                            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                            <button onClick={() => handleEdit(image.filename)}>Save Changes</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Image;
