import React from 'react';
import styled from 'styled-components';

// Styled components
const CardContainer = styled.div`
  max-width: 400px; /* Atur lebar maksimal card */
  margin: 1rem auto; /* Margin otomatis untuk pusat */
  padding: 1.5rem;
  background-color: #ffffff; /* Warna latar belakang card */
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Bayangan untuk efek kedalaman */
`;

const SkillsContainer = styled.div`
  padding: 1rem; /* Padding di dalam container */
`;

const SkillItem = styled.div`
  margin-bottom: 1.5rem;
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
`;

const SkillBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`;

const SkillBar = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  height: 20px;
  position: relative;
`;

const SkillProgress = styled.div<{ width: string }>`
  height: 100%;
  background-color: #4caf50; /* Warna hijau untuk progress */
  width: ${(props) => props.width};
  transition: width 0.3s ease;
`;

const SkillRating = styled.span`
  position: absolute;
  right: 5px;
  top: 2px;
  font-size: 0.8rem;
  color: #333;
`;

const skillsData = [
  { title: 'Native', rating: 4 },
  { title: 'Corel Draw', rating: 4 },
  { title: 'Photography', rating: 4 },
];

const Skills: React.FC = () => {
  return (
    <CardContainer>
        <h1>My Skills</h1>
      <SkillsContainer>
        {skillsData.map((skill) => (
          <SkillItem key={skill.title}>
            <SkillTitle>{skill.title}</SkillTitle>
            <SkillBarContainer>
              <SkillBar>
                <SkillProgress width={`${(skill.rating / 5) * 100}%`} />
                <SkillRating>{skill.rating} / 5</SkillRating>
              </SkillBar>
            </SkillBarContainer>
          </SkillItem>
        ))}
      </SkillsContainer>
    </CardContainer>
  );
};

export default Skills;