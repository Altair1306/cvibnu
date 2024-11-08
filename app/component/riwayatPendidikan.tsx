import React from 'react';

// Deklarasikan interface di luar komponen
interface RowRiwayatProps {
  jenjang: string;
  sekolah: string;
  tahun: string;
}

// Fungsi komponen untuk baris riwayat pendidikan
const RowRiwayat: React.FC<RowRiwayatProps> = (props) => {
  return (
    <div className="border-2 border-blue-600/80 rounded-lg bg-gray-400 p-2 my-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4">{props.jenjang}</div>
          <div className="col-span-12 md:col-span-4">{props.sekolah}</div>
          <div className="col-span-12 md:col-span-4">{props.tahun}</div>
        </div>
      </div>
    </div>
  );
};

// Komponen utama
const RiwayatPendidikan: React.FC = () => {
  return (
    <div className="container mx-auto p-2 text-center pt-20">
      <h2 className="text-2xl">Riwayat Pendidikan</h2>
      <div className="border-t-2 border-gray-300 mt-4"></div>

      {/* Data Riwayat Pendidikan */}
      <RowRiwayat jenjang="SD" sekolah="SD Al-Ma'soem" tahun="2009-2010" />
      <div className="border-t-2 border-gray-300 mt-4"></div>

      <RowRiwayat jenjang="SD" sekolah="SD Al-Falah" tahun="2011-2012" />
      <div className="border-t-2 border-gray-300 mt-4"></div>

      <RowRiwayat jenjang="SD" sekolah="SDN Kujang 1" tahun="2013-2016" />
      <div className="border-t-2 border-gray-300 mt-4"></div>

      <RowRiwayat jenjang="SMP" sekolah="SMP FK Bina Muda" tahun="2016-2019" />
      <div className="border-t-2 border-gray-300 mt-4"></div>

      <RowRiwayat jenjang="SMA" sekolah="SMA Bina Muda" tahun="2019-2022" />
      <div className="border-t-2 border-gray-300 mt-4"></div>

      <RowRiwayat jenjang="Sarjana" sekolah="MU" tahun="2022-sekarang" />
      <div className="border-t-2 border-gray-300 mt-4"></div>
    </div>
  );
};

export default RiwayatPendidikan;