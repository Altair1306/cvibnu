import React from 'react';
import styled from 'styled-components';
import foto from "../image/myphoto.jpeg";
import "../image/myphoto.css";
import RiwayatPendidikan from "./riwayatPendidikan";
import RiwayatPekerjaan from "./riwayatPekerjaan";
import FavColor from "./favColor";
import ContactForm from "./ContactForm";
import Skills from "./Skills";
import PersonalInfo from './PersonalInfo';



const BodyContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  padding: 2rem;
  text-align: center;
`;

function Profile (){
    return <img src={foto.src} alt="Ibnu Profile" className="myphoto"/>;
  }

const Body: React.FC = () => {
  return (
    <BodyContainer>
        <h1 className="text-black font-bold">CV ONLINE</h1>
      <h1 className="text-3xl"> Muhammad Ibnu</h1>
      <Profile />
       {/* Pekerjaan */}
       <h2 className="text-2xl font-semibold text-gray-600 mt-2">
          Mahasiswa
        </h2>

        {/* Deskripsi Singkat */}
        <p className="text-gray-500 max-w-lg mx-auto mt-4">
          Saya adalah seorang mahasiswa yang sedang belajar dalam membangun aplikasi web
          dan mobile. Saya selalu berusaha memberikan solusi terbaik untuk
          tugas yang diberikan.
        </p>

        <PersonalInfo />

        <Skills />

        <RiwayatPendidikan/>
        
        <RiwayatPekerjaan/>
      
        {/* <FavColor /> */}

        <ContactForm/>

        
    </BodyContainer>
  );
};

export default Body;