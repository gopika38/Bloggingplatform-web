import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/posts').then(res => setPosts(res.data));
  }, []);

  return (
    <Container>
      <h1 className="text-center mb-4">Blog Posts</h1>
      <Row>
        {posts.map(post => (
          <Col key={post._id} md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content.substring(0, 100)}...</Card.Text>
                <Button variant="primary" as={Link} to={`/post/${post._id}`}>Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;