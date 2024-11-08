import React from 'react';

// Interface didefinisikan di luar fungsi komponen
interface RowPekerjaan {
  tahun: string;
  instansi: string;
  jabatan: string;
}

// Fungsi komponen RowPekerjaan didefinisikan di luar komponen utama
const RowPekerjaan: React.FC<RowPekerjaan> = (props) => {
  return (
    <div className="border-2 border-blue-600/80 rounded-lg bg-gray-400 p-2 my-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4">{props.tahun}</div>
          <div className="col-span-12 md:col-span-4">{props.instansi}</div>
          <div className="col-span-12 md:col-span-4">{props.jabatan}</div>
        </div>
      </div>
    </div>
  );
};

// Komponen utama
const RiwayatPekerjaan = () => {
  return (
    <div className="container mx-auto p-2 text-center pt-20">
      <h2 className="text-2xl">Riwayat Pekerjaan</h2>
      <div className="border-t-2 border-gray-300 mt-4"></div> {/* Batas atas */}
      
      {/* Menggunakan komponen RowPekerjaan */}
      <RowPekerjaan
        tahun="2021-2022"
        instansi="PT BFI Finance Indonesia TBK"
        jabatan="Assistant Manager"
      />
      <div className="border-t-2 border-gray-300 mt-4"></div> {/* Batas antar data */}
      
      <RowPekerjaan
        tahun="2022-2023"
        instansi="PT Freeport Indonesia"
        jabatan="Assistant Manager"
      />
      <div className="border-t-2 border-gray-300 mt-4"></div> {/* Batas antar data */}
      
      <RowPekerjaan
        tahun="2024"
        instansi="PT Bank Central Asia Tbk"
        jabatan="Assistant IT Manager"
      />
      <div className="border-t-2 border-gray-300 mt-4"></div> {/* Batas antar data */}
      
      <RowPekerjaan
        tahun="2024-sekarang"
        instansi="PT Bursa Efek Indonesia"
        jabatan="Manager"
      />
      <div className="border-t-2 border-gray-300 mt-4"></div> {/* Batas bawah */}
    </div>
  );
};

export default RiwayatPekerjaan;