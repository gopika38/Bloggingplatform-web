import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/posts', { title, content });
    navigate('/');
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card className="p-4 shadow-lg" style={{ width: '500px' }}>
        <h2 className="text-center mb-4">Create a New Post</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Write your post here..." value={content} onChange={(e) => setContent(e.target.value)} required />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">Publish</Button>
        </Form>
      </Card>
    </Container>
  );
}

export default CreatePost;