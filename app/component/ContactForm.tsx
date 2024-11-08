"use client";

import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for RatingStars
const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Star = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== 'active', // Jangan meneruskan prop 'active'
})<{ active: boolean }>`
  font-size: 2rem;
  cursor: pointer;
  color: ${props => (props.active ? '#FFD700' : '#ddd')}; /* Warna bintang aktif dan tidak aktif */
`;

// Komponen RatingStars
const RatingStars: React.FC<{ onRatingChange: (rating: number) => void }> = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (value: number) => {
    setRating(value);
    onRatingChange(value);
  };

  return (
    <StarsContainer>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          active={star <= rating}
          onClick={() => handleClick(star)}
        >
          ★
        </Star>
      ))}
    </StarsContainer>
  );
};

// Styled components for ContactForm
const FormContainer = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  max-width: 600px;
  margin: 1rem auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const AverageRating = styled.h2`
  margin-top: 1rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// Komponen ContactForm
const ContactForm: React.FC = () => {
  const [ratings, setRatings] = useState<number[]>([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  
  const averageRating = ratings.length > 0 ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(2) : 0;

  const handleRatingChange = (rating: number) => {
    setRatings([...ratings, rating]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle form submission, e.g., sending data to an API or logging it
    console.log('Name:', name);
    console.log('Comment:', comment);
    // Reset fields after submission
    setName('');
    setComment('');
  };

  return (
    <FormContainer>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <h2>Rate my CV Online:</h2>
        <RatingStars onRatingChange={handleRatingChange} />
        <AverageRating>Average Rating: {averageRating} Stars</AverageRating>
        
        <Input 
          type="text" 
          placeholder="Your Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <TextArea 
          placeholder="Your Comment" 
          value={comment} 
          onChange={(e) => setComment(e.target.value)} 
          required 
        />
        
        <button type="submit">Submit</button>
      </form>
    </FormContainer>
  );
};

export default ContactForm;
