import React from 'react';
import styled from 'styled-components';

// Styled components
const InfoContainer = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  max-width: 600px; /* Atur lebar maksimal card */
  margin: 1rem auto; /* Margin otomatis untuk pusat */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Bayangan untuk efek kedalaman */
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Membagi menjadi dua kolom */
  gap: 1.5rem; /* Jarak antar item */
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
`;

const InfoBullet = styled.span`
  margin-right: 0.3rem; /* Jarak antara bullet dan teks */
  color: #4caf50; /* Warna bullet */
  font-size: 1.5rem; /* Ukuran bullet yang lebih besar */
`;

const InfoTitle = styled.h3`
  font-size: 1rem;
  color: #333;
  margin: 0; /* Menghapus margin default */
  font-weight: 600; /* Menebalkan font judul */
`;

const InfoValue = styled.p`
  font-size: 0.95rem; /* Ukuran font sedikit lebih besar */
  color: #555;
  margin: 0; /* Menghapus margin default */
`;

const MyInfos = {
  Tempat:"Sumedang",
  TanggalLahir: "29 Oktober 2004",
  Gender: "Laki-laki",
  TinggiBadan: "170 cm",
  BeratBadan: "74 kg",
  StatusPernikahan: "Belum Menikah",
  Whatsapp: "+62 812-2470-1369",
  Email: "mibnu5678@gmail.com",
};

const PersonalInfo: React.FC = () => {
  return (
    <InfoContainer>
      
      {Object.entries(MyInfos).map(([key, value]) => (
        <InfoItem key={key}>
          <InfoBullet>•</InfoBullet>
          <div>
            <InfoTitle>{key.replace(/([A-Z])/g, ' $1')}</InfoTitle>
            <InfoValue>{value}</InfoValue>
          </div>
        </InfoItem>
      ))}
    </InfoContainer>
  );
};

export default PersonalInfo;