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

// Komponen ContactForm
const ContactForm: React.FC = () => {
  const [ratings, setRatings] = useState<number[]>([]);
  const averageRating = ratings.length > 0 ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(2) : 0;

  const handleRatingChange = (rating: number) => {
    setRatings([...ratings, rating]);
  };

  return (
    <FormContainer>
      <h1>Contact Form</h1>
      {/* Form fields go here (e.g., name, email, message) */}
      
      <h2>Rate my CV Online:</h2>
      <RatingStars onRatingChange={handleRatingChange} />
      <AverageRating>Average Rating: {averageRating} Stars</AverageRating>
      
      {/* Submit button and other form elements can be added here */}
    </FormContainer>
  );
};

export default ContactForm;