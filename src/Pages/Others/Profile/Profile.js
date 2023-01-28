import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const photoURLRef = useRef(user.photoURL);
    const handleSubmit = event => {
        event.preventDefault();
        console.log(name);
        console.log(photoURLRef.current.value);
    }

    const handleNameChange = event => {
        setName(event.target.value);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control onChange={handleNameChange} defaultValue={name} type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control ref={photoURLRef} type="text" defaultValue={user?.photoURL} placeholder="Photo URL" />
            </Form.Group>


            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Profile;