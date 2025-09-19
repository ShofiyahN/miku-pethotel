import { motion } from 'framer-motion';

const ServicesSection = () => {
  return (
    <div className="min-h-screen">
      {/* Banner */}
      <div className="relative h-64 overflow-hidden">
        {/* Background Color as a placeholder for a banner image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3e78bb] to-[#3e78bb]"></div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Layanan & Fasilitas
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white"
          >
            Kenyamanan Terbaik untuk Kucing Kesayangan Anda
          </motion.p>
        </div>
      </div>
      
      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-amber-800 mb-12"
          >
            Jenis Layanan
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-amber-50 p-6 rounded-lg shadow-md"
            >
              <div className="bg-amber-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2 text-center">Penitipan Harian</h3>
              <p className="text-gray-600">
                Layanan penitipan kucing harian ideal untuk Anda yang memiliki kesibukan singkat atau perjalanan dalam satu hari. Kucing Anda akan mendapatkan perhatian penuh dari staff kami.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-amber-50 p-6 rounded-lg shadow-md"
            >
              <div className="bg-amber-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2 text-center">Penitipan Bulanan</h3>
              <p className="text-gray-600">
                Untuk kebutuhan jangka panjang, layanan penitipan bulanan kami menawarkan diskon khusus. Termasuk pemeriksaan kesehatan rutin dan laporan mingguan mengenai kondisi kucing Anda.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-amber-50 p-6 rounded-lg shadow-md"
            >
              <div className="bg-amber-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2 text-center">Grooming</h3>
              <p className="text-gray-600">
                Layanan grooming profesional untuk menjaga kebersihan dan kesehatan kucing Anda. Mencakup mandi, potong kuku, pembersihan telinga, dan styling sesuai permintaan.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-amber-50 p-6 rounded-lg shadow-md"
            >
              <div className="bg-amber-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2 text-center">Jemput-Antar</h3>
              <p className="text-gray-600">
                Layanan jemput-antar untuk memudahkan Anda. Kucing akan dijemput dan diantar kembali dengan kendaraan khusus yang nyaman dan aman untuk transportasi hewan.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section - New Addition */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-amber-800 mb-12"
          >
            Daftar Harga
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="bg-amber-100 py-6 px-4">
                <h3 className="text-2xl font-bold text-center text-amber-800">Paket Standar</h3>
                <div className="flex justify-center mt-4">
                  <span className="text-amber-800 text-4xl font-bold">Rp150K</span>
                  <span className="text-amber-600 self-end ml-1">/ hari</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Kamar standar (1.5m x 1.5m)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Makanan 2x sehari</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Waktu bermain 30 menit/hari</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Update foto 1x sehari</span>
                  </li>
                </ul>
                <button className="mt-8 w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition duration-300">Pilih Paket</button>
              </div>
            </motion.div>
            
            {/* Premium Package */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform scale-105 z-10 border-2 border-amber-400"
            >
              <div className="bg-amber-400 py-6 px-4 relative">
                <div className="absolute top-0 right-0 bg-amber-800 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">TERLARIS</div>
                <h3 className="text-2xl font-bold text-center text-amber-800">Paket Premium</h3>
                <div className="flex justify-center mt-4">
                  <span className="text-amber-800 text-4xl font-bold">Rp250K</span>
                  <span className="text-amber-700 self-end ml-1">/ hari</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Kamar premium (2m x 2m)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Makanan premium 3x sehari</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Waktu bermain 1 jam/hari</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Update foto & video 2x sehari</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Grooming basic 1x (min. 3 hari)</span>
                  </li>
                </ul>
                <button className="mt-8 w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition duration-300">Pilih Paket</button>
              </div>
            </motion.div>
            
            {/* VIP Package */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="bg-amber-600 py-6 px-4">
                <h3 className="text-2xl font-bold text-center text-white">Paket VIP</h3>
                <div className="flex justify-center mt-4">
                  <span className="text-white text-4xl font-bold">Rp350K</span>
                  <span className="text-amber-100 self-end ml-1">/ hari</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Kamar VIP (3m x 3m) dengan AC</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Makanan premium sesuai kebutuhan</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Waktu bermain tak terbatas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Update foto & video 3x sehari</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Grooming lengkap 1x (min. 2 hari)</span>
                  </li>
                </ul>
                <button className="mt-8 w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition duration-300">Pilih Paket</button>
              </div>
            </motion.div>
          </div>
          
          {/* Add-on Services */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-amber-800 mb-6">Layanan Tambahan</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <span className="text-gray-700">Grooming Dasar (mandi, sisir, potong kuku)</span>
                <span className="text-amber-700 font-semibold">Rp100K</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <span className="text-gray-700">Grooming Premium (+ styling, parfum)</span>
                <span className="text-amber-700 font-semibold">Rp150K</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <span className="text-gray-700">Layanan Jemput-Antar (per arah)</span>
                <span className="text-amber-700 font-semibold">Rp50K</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <span className="text-gray-700">Konsultasi dengan Dokter Hewan</span>
                <span className="text-amber-700 font-semibold">Rp200K</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <span className="text-gray-700">Pemotretan Profesional</span>
                <span className="text-amber-700 font-semibold">Rp150K</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <span className="text-gray-700">Pelatihan Dasar (per sesi)</span>
                <span className="text-amber-700 font-semibold">Rp120K</span>
              </div>
            </div>
            <p className="mt-6 text-gray-500 text-sm">* Harga dapat berubah sewaktu-waktu. Silakan hubungi kami untuk informasi terbaru.</p>
          </motion.div>
          
          {/* Discount Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-amber-100 rounded-lg shadow-md border-l-4 border-amber-500"
          >
            <h3 className="text-xl font-bold text-amber-800 mb-3">Diskon Spesial</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-amber-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Diskon 10% untuk penitipan 7 hari atau lebih</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-amber-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Diskon 15% untuk penitipan 14 hari atau lebih</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-amber-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Diskon 20% untuk penitipan 30 hari atau lebih</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-amber-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Diskon 5% untuk member</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
      
      {/* Facilities */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-amber-800 mb-12"
          >
            Fasilitas Tambahan
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2 text-center">CCTV 24 Jam</h3>
              <p className="text-gray-600">
                Pantau aktivitas kucing Anda kapan saja melalui aplikasi mobile kami. Kamera CCTV terpasang di setiap kamar dan area bermain, memberikan ketenangan pikiran saat Anda jauh.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2 text-center">Area Bermain</h3>
              <p className="text-gray-600">
                Area bermain luas dengan berbagai mainan interaktif untuk stimulasi fisik dan mental. Kucing Anda akan mendapatkan waktu bermain terjadwal setiap hari dengan pengawasan.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2 text-center">Makanan Khusus</h3>
              <p className="text-gray-600">
                Kami menyediakan berbagai pilihan makanan premium yang dapat disesuaikan dengan kebutuhan diet khusus kucing Anda, termasuk pilihan untuk kucing dengan alergi atau kondisi kesehatan tertentu.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2 text-center">Perawatan Medis</h3>
              <p className="text-gray-600">
                Staff terlatih untuk memberikan perawatan medis dasar dan pemberian obat sesuai dengan resep. Bekerjasama dengan dokter hewan terpercaya untuk penanganan darurat.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2 text-center">Update Foto/Video</h3>
              <p className="text-gray-600">
                Dapatkan update foto dan video kucing Anda secara berkala selama masa penitipan, dikirimkan melalui WhatsApp atau email untuk memberi Anda ketenangan pikiran.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2 text-center">Staff Profesional</h3>
              <p className="text-gray-600">
                Seluruh staff kami telah mengikuti pelatihan khusus penanganan kucing dan memiliki sertifikasi perawatan hewan peliharaan untuk memastikan kucing Anda mendapat perawatan terbaik.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-amber-800 mb-12"
          >
            Kami Menjamin
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-amber-50 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-amber-700 mb-4">Kesehatan dan Kebersihan</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Pembersihan kandang dan area bermain setiap hari</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Penggantian alas tidur dan bak pasir secara berkala</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Pemeriksaan kesehatan dasar setiap hari</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Sanitasi peralatan makan dan minum</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-amber-50 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-amber-700 mb-4">Kenyamanan dan Keamanan</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Kamar individual yang luas dan nyaman</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Pengaturan suhu ruangan yang ideal</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Pengawasan 24 jam oleh staff yang terlatih</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Pemisahan area untuk kucing yang tidak bersahabat</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;