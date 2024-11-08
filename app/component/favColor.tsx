
"use client";
import React, { useState, useEffect } from 'react';

const FavColor: React.FC = () => {
  // Ambil warna dari localStorage atau gunakan "Biru" sebagai default
  const [warna, setWarna] = useState<string>(
    localStorage.getItem('warnaFavorit') || 'Biru'
  );

  // Simpan warna ke localStorage setiap kali warna berubah
  useEffect(() => {
    localStorage.setItem('warnaFavorit', warna);
  }, [warna]);

  // Fungsi untuk mengubah warna background sesuai pilihan
  const getBackgroundColor = (color: string) => {
    switch (color) {
      case 'Merah':
        return '#ef4444'; // Red-500
      case 'Kuning':
        return '#f59e0b'; // Yellow-500
      case 'Biru':
        return '#3b82f6'; // Blue-500
      case 'Hijau':
        return '#10b981'; // Green-500
      case 'Ungu':
        return '#8b5cf6'; // Purple-500
      default:
        return '#ffffff'; // Default: White
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center"
      style={{ backgroundColor: getBackgroundColor(warna) }}
    >
      <h1 className="text-white text-3xl mb-6">
        Warna Favorit saya adalah {warna}
      </h1>
      <hr className="m-10 border-white" />
      <p className="text-white mb-4">Ubah state warna ke warna:</p>

      <div className="space-x-4">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setWarna('Merah')}
        >
          Merah
        </button>

        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setWarna('Kuning')}
        >
          Kuning
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setWarna('Biru')}
        >
          Biru
        </button>

        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setWarna('Hijau')}
        >
          Hijau
        </button>

        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setWarna('Ungu')}
        >
          Ungu
        </button>
      </div>
    </div>
  );
};

export default FavColor;
