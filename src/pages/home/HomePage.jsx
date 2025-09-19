import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const HomeSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-screen max-h-[80vh] overflow-hidden bg-[#3e78bb] py-4">
        {/* Split Layout */}
        <div className="relative z-10 h-full flex">
          {/* Left Side - Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center px-8 md:px-8">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4 font-dynapuff"
            >
              Stay Happy, Stay at Miku House
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-[#ffcc00] mb-4"
            >
              Cat Hotel & Grooming
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-white/90 mb-8 max-w-md"
            >
              Tempat penitipan dan grooming kucing yang mengutamakan kenyamanan, keamanan, dan kasih sayang di Palu
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#ff914d] text-white px-8 py-3 rounded-full font-medium hover:bg-[#ff914d]/90 transition duration-300 shadow-lg"
              onClick={() => window.open('https://wa.me/6285158166840')}
            >
              Pesan Sekarang
            </motion.button>
          </div>

          {/* Right Side - Image with Reveal Effect */}
          <div className="hidden md:block md:w-1/2 relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 1.1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              {/* Placeholder for image - replace src with your actual image */}
              {/* <div className="w-full h-full bg-gradient-to-br from-[#ffcc00]/20 to-[#ff914d]/20 flex items-center justify-center">
                <div className="text-white/50 text-center">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v6.114A5.25 5.25 0 105.25 16.5H15a2.5 2.5 0 000-5V5.82l2.804-.56A1 1 0 0018 4.18V3z"/>
                  </svg>
                  <p className="text-sm">Your Cat Image Here</p>
                </div>
              </div> */}
              {/* Uncomment and replace with your image URL */}
              <div className=''>
                <img 
                  src="https://www.dropbox.com/scl/fi/ib76f7n0rwtb77xuuza5n/IMG_2060.JPG?rlkey=xkdd1pf1s1evhqmruvprmt87c&st=ovk9lgac&raw=1" 
                  // alt="MIKU HOUSE Cat Hotel"
                  className="w-full h-full object-cover"
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
              
            </motion.div>
            
            {/* Soft overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#3e78bb]/30"></div>
          </div>
        </div>

        {/* Abstract Cat Decorations */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-0 left-0 md:w-40 w-32 h-32 md:h-40"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white fill-current">
            <path d="M40,120 Q10,100 40,80 Q70,60 40,40 Q10,20 40,10 Q70,0 100,10 Q130,20 160,10 Q190,0 190,30 Q190,60 160,80 Q130,100 160,120 Q190,140 160,160 Q130,180 100,170 Q70,160 40,180 Q10,200 10,170 Q10,140 40,120 Z" />
          </svg>
        </motion.div>
      </div>
      
      {/* Vision and Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-[#3e78bb] mb-12"
          >
            Visi & Misi
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#3e78bb]/5 p-6 rounded-lg shadow-md border-l-4 border-[#ffcc00]"
            >
              <h3 className="text-xl font-semibold text-[#3e78bb] mb-4">Visi</h3>
              <p className="text-gray-700">
                Menjadi cat hotel dan grooming terpercaya di Palu yang memberikan layanan terbaik dan penuh cinta.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#3e78bb]/5 p-6 rounded-lg shadow-md border-l-4 border-[#ff914d]"
            >
              <h3 className="text-xl font-semibold text-[#3e78bb] mb-4">Misi</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-2">
                <li>Menyediakan layanan higienis, aman, dan nyaman</li>
                <li>Memberikan ketenangan bagi pemilik dan pengalaman menyenangkan bagi kucing</li>
                <li>Mengedepankan pelayanan profesional dengan hati</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Advantages Section */}
      <section className="py-16 bg-[#3e78bb]">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-[#ffffff] mb-12"
          >
            Keunggulan MIKU HOUSE
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src='https://www.dropbox.com/scl/fi/w90s8b9d0fx5nf9hx9f32/view-adorable-persian-domestic-cat-1.jpg?rlkey=3n9ckb2ecbtojpi1e46vq2bo5&st=0jqrxewv&raw=1'
                className='p-1 rounded-xl aspect-square object-cover'
              />
              
              <h3 className="text-xl font-semibold text-[#3e78bb] m-2">Playtime Harian</h3>
              <p className="text-gray-600">
                Setiap kucing mendapat playtime harian untuk menjaga kebugaran dan mengurangi stres selama menginap.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src='https://www.dropbox.com/scl/fi/w0p43bsm9y4o0cqe4mua8/cute-cat-lifestyle.jpg?rlkey=7z2fcfv0vciajg73wvvbchqzs&st=uv8ryi8e&raw=1'
                className='p-1 rounded-xl aspect-square object-cover'
              />
              <h3 className="text-xl font-semibold text-[#3e78bb] m-2">Lingkungan Bersih & Nyaman</h3>
              <p className="text-gray-600">
                Lingkungan yang selalu terjaga kebersihannya dengan ventilasi dan sirkulasi udara yang baik.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src='https://www.dropbox.com/scl/fi/zg0vgb8yqn9iwec2lxmyq/adorable-looking-kitten-with-cage.jpg?rlkey=mtqp6kt3mf8vq3hrzbhylaoqn&st=yseu6m7k&raw=1'
                className='p-1 rounded-xl aspect-square object-cover'
              />
              <h3 className="text-xl font-semibold text-[#3e78bb] m-2">Layanan Antar-Jemput</h3>
              <p className="text-gray-600">
                Tersedia layanan antar-jemput kucing untuk kenyamanan Anda di area Kota Palu dan sekitarnya.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-[#3e78bb] mb-12"
          >
            Pertanyaan Umum (FAQ)
          </motion.h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "Boleh bawa makanan sendiri?",
                a: "Ya, sangat disarankan agar kucing tetap nyaman."
              },
              {
                q: "Apakah harus vaksin?",
                a: "Ya, vaksin dasar sangat disarankan demi keamanan bersama."
              },
              {
                q: "Apakah tersedia AC?",
                a: "Belum, namun ventilasi dan sirkulasi udara terjaga dengan baik."
              },
              {
                q: "Apakah grooming bisa tanpa menginap?",
                a: "Bisa, silakan hubungi admin untuk jadwal."
              },
              {
                q: "Jemput-antar mencakup area mana saja?",
                a: "Kota Palu dan area sekitar. Hubungi admin untuk informasi lebih lanjut."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#3e78bb]/5 p-6 rounded-lg border-l-4 border-[#ffcc00]"
              >
                <h3 className="font-semibold text-[#3e78bb] mb-2">Q: {faq.q}</h3>
                <p className="text-gray-700">A: {faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Information Section */}
      <section className="py-16 bg-[#3e78bb]">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-[#ffffff] mb-12"
          >
            Informasi Kontak
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-[#ffcc00]/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3e78bb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#3e78bb] mb-2">Alamat</h3>
              <p className="text-gray-600">
                Graha Khayangan Hills<br />
                Kawatuna Blok D2<br />
                Palu
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-[#ff914d]/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3e78bb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#3e78bb] mb-2">WhatsApp</h3>
              <p className="text-gray-600">
                0851 5816 6840
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-[#ffcc00]/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3e78bb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#3e78bb] mb-2">Jam Operasional</h3>
              <p className="text-gray-600">
                Setiap hari<br />
                10.00 - 23.00
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-[#ff914d]/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3e78bb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#3e78bb] mb-2">Media Sosial</h3>
              <div className="space-y-2">
                <p className="text-gray-600 text-sm">@mikuhouse.plw</p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-[#3e78bb] hover:text-[#ff914d] transition duration-300">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.979-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="text-[#3e78bb] hover:text-[#ff914d] transition duration-300">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;