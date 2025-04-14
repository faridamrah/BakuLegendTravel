import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Top Bar */}
      <div className="bg-[#003580] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex space-x-4">
            <span>USD</span>
            <span>AZN</span>
            <span>EUR</span>
          </div>
          <div className="flex space-x-4">
            <span>AZ</span>
            <span>EN</span>
            <span>RU</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <div className="relative">
                {/* Custom text-based logo */}
                <div className="logo-text">
                  <span className="text-[#003580] font-bold text-2xl">BAKU</span>
                  <span className="text-[#feba02] font-bold text-2xl">LEGEND</span>
                  <span className="text-[#1E90FF] font-bold text-2xl">TRAVEL</span>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="nav-link">Ana Səhifə</Link>
              <Link href="#tours" className="nav-link">Turlar</Link>
              <Link href="#hotels" className="nav-link">Otellər</Link>
              <Link href="#transfers" className="nav-link">Transferlər</Link>
              <Link href="#contact" className="nav-link">Əlaqə</Link>
              <button className="btn-primary">Daxil ol</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Search */}
      <div id="home" className="relative min-h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558005530-a7958896ec60?q=80&w=1974&auto=format&fit=crop"
            alt="Beautiful Bali landscape"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Search Box */}
        <div className="relative max-w-7xl mx-auto pt-16 px-4">
          <div className="search-box bg-white rounded-xl shadow-lg p-6">
            <div className="flex space-x-1 mb-6 border-b">
              <button className="tab-base tab-active">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Aviabilet
                </span>
              </button>
              <button className="tab-base tab-inactive">Aviabilet + Otel</button>
              <button className="tab-base tab-inactive">Hazır Turlar</button>
              <button className="tab-base tab-inactive">Otel</button>
              <button className="tab-base tab-inactive">Transfer</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Haradan</label>
                <input type="text" className="input-field" placeholder="Bakı (GYD)" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Haraya</label>
                <input type="text" className="input-field" placeholder="Şəhər seçin" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gediş tarixi</label>
                <input type="date" className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Qayıdış tarixi</label>
                <input type="date" className="input-field" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sərnişinlər</label>
                <select className="input-field">
                  <option>1 böyük</option>
                  <option>2 böyük</option>
                  <option>2 böyük, 1 uşaq</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sinif</label>
                <select className="input-field">
                  <option>Ekonom</option>
                  <option>Biznes</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <button className="btn-secondary px-12">
                Axtar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Tours Section */}
      <div id="tours" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-8">Populyar Turlar</h2>
          
          {/* Tour Categories */}
          <div className="mb-10 flex flex-wrap justify-center gap-4">
            <button className="px-4 py-2 bg-[#003580] text-white rounded-md">Bütün Turlar</button>
            <button className="px-4 py-2 bg-white text-[#003580] border border-[#003580] rounded-md">Avropa</button>
            <button className="px-4 py-2 bg-white text-[#003580] border border-[#003580] rounded-md">Asiya</button>
            <button className="px-4 py-2 bg-white text-[#003580] border border-[#003580] rounded-md">Amerika</button>
            <button className="px-4 py-2 bg-white text-[#003580] border border-[#003580] rounded-md">Ekzotik</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="aspect-w-16 aspect-h-9 mb-4 relative rounded-lg overflow-hidden h-[200px]">
                <Image
                  src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80"
                  alt="Paris"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium text-gray-900">Paris Turu</h3>
                <p className="mt-2 text-gray-600">7 gecə / 8 gün</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">€899</span>
                  <button className="btn-primary">Rezervasiya</button>
                </div>
              </div>
            </div>

            <div className="feature-card">
              <div className="aspect-w-16 aspect-h-9 mb-4 relative rounded-lg overflow-hidden h-[200px]">
                <Image
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80"
                  alt="Dubai"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium text-gray-900">Dubai Turu</h3>
                <p className="mt-2 text-gray-600">5 gecə / 6 gün</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">$799</span>
                  <button className="btn-primary">Rezervasiya</button>
                </div>
              </div>
            </div>

            <div className="feature-card">
              <div className="aspect-w-16 aspect-h-9 mb-4 relative rounded-lg overflow-hidden h-[200px]">
                <Image
                  src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&q=80"
                  alt="Maldives"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium text-gray-900">Maldivlər Turu</h3>
                <p className="mt-2 text-gray-600">6 gecə / 7 gün</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">$1299</span>
                  <button className="btn-primary">Rezervasiya</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <button className="btn-secondary">Bütün Turları Göstər</button>
          </div>
        </div>
      </div>
      
      {/* Hotels Section */}
      <div id="hotels" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-8">Populyar Otellər</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="aspect-w-16 aspect-h-9 mb-4 relative rounded-lg overflow-hidden h-[200px]">
                <Image
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80"
                  alt="Luxury Hotel"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium text-gray-900">Fairmont Baku</h3>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-2 text-gray-600">Bakı, Azərbaycan</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">$220/gecə</span>
                  <button className="btn-primary">Bron et</button>
                </div>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="aspect-w-16 aspect-h-9 mb-4 relative rounded-lg overflow-hidden h-[200px]">
                <Image
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
                  alt="Luxury Hotel"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium text-gray-900">Four Seasons</h3>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-2 text-gray-600">Bakı, Azərbaycan</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">$250/gecə</span>
                  <button className="btn-primary">Bron et</button>
                </div>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="aspect-w-16 aspect-h-9 mb-4 relative rounded-lg overflow-hidden h-[200px]">
                <Image
                  src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&q=80"
                  alt="Luxury Hotel"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium text-gray-900">Hilton Baku</h3>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-2 text-gray-600">Bakı, Azərbaycan</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">$190/gecə</span>
                  <button className="btn-primary">Bron et</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Transfers Section */}
      <div id="transfers" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-8">Transfer Xidmətləri</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-[200px] relative overflow-hidden rounded-t-xl">
                <div className="absolute inset-0 bg-blue-600 bg-opacity-90">
                  <div className="flex items-center justify-center h-full">
                    <svg className="h-24 w-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Hava Limanı Transferi</h3>
                <p className="mt-2 text-gray-600 mb-4">Bakı Heydər Əliyev Aeroportu - Şəhər Mərkəzi arası rahat və sürətli transfer xidməti. 24/7 əlçatan.</p>
                <ul className="mb-4 space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Qarşılama və yolasalma
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Təcrübəli sürücülər
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Rahat avtomobillər
                  </li>
                </ul>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">$25</span>
                  <button className="btn-primary">Sifariş et</button>
                </div>
              </div>
            </div>
            
            <div className="feature-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-[200px] relative overflow-hidden rounded-t-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500">
                  <div className="flex items-center justify-center h-full">
                    <svg className="h-24 w-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">VIP Transfer</h3>
                <p className="mt-2 text-gray-600 mb-4">Premium lüks avtomobillərlə bütün Bakı şəhəri və əyalətləri üzrə transfer xidməti. Şəxsi sürücü ilə.</p>
                <ul className="mb-4 space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Lüks Mercedes-Benz avtomobilləri
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    İngilis dilində danışan sürücülər
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Pulsuz Wi-Fi və içkilər
                  </li>
                </ul>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">$50</span>
                  <button className="btn-primary">Sifariş et</button>
                </div>
              </div>
            </div>
            
            <div className="feature-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-[200px] relative overflow-hidden rounded-t-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700">
                  <div className="flex items-center justify-center h-full">
                    <svg className="h-24 w-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Qrup Transferi</h3>
                <p className="mt-2 text-gray-600 mb-4">Böyük qruplar, korporativ müştərilər və turlar üçün xüsusi transfer xidmətləri. Mini avtobuslar və avtobuslar.</p>
                <ul className="mb-4 space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    8-50 nəfərlik qruplar üçün
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Korporativ tədbirlər üçün xüsusi paketlər
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Təhlükəsizlik və rahatlıq
                  </li>
                </ul>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">$80</span>
                  <button className="btn-primary">Sifariş et</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <button className="btn-secondary">Bütün Transfer Xidmətləri</button>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Əlaqə</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Bizimlə əlaqə saxlayın və səyahət planınızı müzakirə edək.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Məlumat</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-gray-500">
                    <p>Sarayevo 22A, Bakı, Azərbaycan 1149</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-gray-500">
                    <p>+994 (50) 653 9333</p>
                    <p>+994 (70) 653 9333</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-gray-500">
                    <p>info@bakulegendtravel.az</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-gray-500">
                    <p>Bazar ertəsi - Cümə: 9:00 - 18:00</p>
                    <p>Şənbə: 10:00 - 16:00</p>
                    <p>Bazar: Bağlıdır</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Mesaj göndərin</h3>
              <form action="#" method="POST" className="mt-4 grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Adınız</label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      placeholder="Adınız"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      placeholder="Email ünvanınız"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mesaj</label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      placeholder="Mesajınız"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Göndər
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Xidmətlərimiz</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Bütün səyahət ehtiyaclarınız üçün hərtərəfli xidmətlər təqdim edirik.
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Aviabiletlər</h3>
                <p className="mt-2 text-base text-gray-500">
                  Dünyanın istənilən nöqtəsinə aviabiletlərin satışı və rezervasiyası. Ən əlverişli qiymətlərlə təyyarə biletləri.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Otel rezervasiyası</h3>
                <p className="mt-2 text-base text-gray-500">
                  Dünyanın hər yerindəki otellərə rezervasiya. Fərqli büdcə və zövqlərə uyğun otel seçimləri və xüsusi təkliflər.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Viza dəstəyi</h3>
                <p className="mt-2 text-base text-gray-500">
                  Viza əldə etmək prosesində peşəkar dəstək. Müxtəlif ölkələrə viza alınması üçün sənədlərin hazırlanması.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Turlar</h3>
                <p className="mt-2 text-base text-gray-500">
                  Dünyanın ən məşhur şəhərlərinə və məkanlarına paket və fərdi turlar. Şri-Lanka, Tailand, Türkiyə, Dubay və digər populyar istiqamətlərə səyahətlər.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Korporativ səyahətlər</h3>
                <p className="mt-2 text-base text-gray-500">
                  Şirkətlər üçün xüsusi səyahət həlləri. İşgüzar səfərlər, konfranslar və korporativ tədbirlər üçün tam təşkilati dəstək.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Transfer xidmətləri</h3>
                <p className="mt-2 text-base text-gray-500">
                  Hava limanı və otel transferləri. Rahatlığınız üçün təhlükəsiz və etibarlı nəqliyyat xidmətləri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Baku Legend Travel</h3>
              <p className="text-gray-400">
                Azərbaycanın ən etibarlı turizm şirkətlərindən biri. Sizin xəyalınızdakı səyahəti reallaşdırırıq.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Əlaqə</h3>
              <address className="not-italic text-gray-400">
                <p>Sarayevo 22A</p>
                <p>Bakı, Azərbaycan 1149</p>
                <p className="mt-2">+994 (50) 653 9333</p>
                <p>+994 (70) 653 9333</p>
                <p className="mt-2">info@bakulegendtravel.az</p>
              </address>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Xidmətlər</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Aviabiletlər</li>
                <li>Otel rezervasiyası</li>
                <li>Viza dəstəyi</li>
                <li>Turlar</li>
                <li>Korporativ səyahətlər</li>
                <li>Transfer xidmətləri</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Bizi izləyin</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/bakulegendtravel" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/bakulegendtravel/" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Baku Legend Travel. Bütün hüquqlar qorunur.</p>
          </div>
        </div>
      </footer>
    </main>
  )
} 