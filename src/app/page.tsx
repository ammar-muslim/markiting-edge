// "use client"
// import React, { useEffect } from 'react';
import { FaRegClock, FaRegHandshake, FaPen, FaHeart, FaReply, FaComment } from 'react-icons/fa';
import Link from 'next/link';
import HeroAnimations from './components/animations/HeroAnimations';

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      {/* قسم الهيرو المبتكر */}
      <section className="min-h-screen relative bg-black overflow-hidden flex items-center justify-center">
        {/* خلفية متحركة */}
        <div className="absolute inset-0 z-0">
          <div className="absolute w-full h-full bg-emerald-500 skew-y-6 transform -translate-y-24"></div>
          <div className="absolute w-full h-full bg-purple-600 skew-y-12 transform translate-y-36 opacity-40"></div>
          <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-pink-400 blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute left-0 bottom-0 w-96 h-96 rounded-full bg-blue-400 blur-3xl opacity-20 animate-pulse"></div>
        </div>
        
        {/* أشكال هندسية متحركة */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className={`absolute bg-white opacity-10 rounded-lg animate-float-${i+1}`}
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                transform: `rotate(${i * 45}deg)`,
              }}
            ></div>
          ))}
        </div>
        
        {/* المحتوى الرئيسي */}
        <div className="relative z-10 px-6 py-12 text-right max-w-4xl mx-auto">
          <div className="mb-8">
          </div>
          
          <h1 className="text-7xl font-bold mb-6 text-white transform -skew-x-6 inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">
              اهلاً بك
            </span>
            <br />
            <span className="text-white text-6xl mt-2 block">في موقعنا المبتكر</span>
          </h1>
          
          <p className="text-xl text-white/80 mb-12 backdrop-blur-sm bg-black/20 p-4 rounded-lg border-r-4 border-emerald-500 transform hover:scale-105 transition-transform duration-300">
            نحن هنا لمساعدتك في <span className="text-emerald-300 font-bold">تطوير أعمالك</span> وتوسيع نطاقك عبر الإنترنت بطرق إبداعية غير مسبوقة. دعنا نحقق أهدافك معًا!
          </p>
          
          <div className="flex flex-wrap gap-4 justify-end">
            <Link href="#services">
              <span className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-emerald-600 bg-white rounded-lg transition duration-300 ease-out border-2 border-emerald-500 hover:border-transparent">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-emerald-500 group-hover:translate-x-0 ease">
                  <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-emerald-500 transition-all duration-300 transform group-hover:translate-x-full ease">تعرف على خدماتنا</span>
                <span className="relative invisible">تعرف على خدماتنا</span>
              </span>
            </Link>
            
            <Link href="#contact">
              <span className="bg-transparent text-white border-2 border-white/30 hover:border-white px-8 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm inline-flex items-center gap-2">
                <span>تواصل معنا</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
        
        {/* شريط متحرك */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-pink-500 via-emerald-500 to-blue-500 h-2 animate-gradient-x"></div>
      </section>

      {/* قسم خدماتنا */}
      <section id="services" className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">خدماتنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <FaRegClock className="text-4xl text-emerald-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">إعلانات محركات البحث</h3>
            <p className="text-gray-600">استراتيجيات مخصصة لزيادة ظهورك في محركات البحث مثل جوجل.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <FaRegHandshake className="text-4xl text-emerald-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">التسويق عبر وسائل التواصل الاجتماعي</h3>
            <p className="text-gray-600">تحسين حساباتك على منصات التواصل الاجتماعي لزيادة التفاعل والمبيعات.</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
            <FaPen className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">كتابة المحتوى</h3>
            <p className="text-gray-600">محتوى متميز يساعد على جذب الانتباه وتحقيق النتائج المرجوة.</p>
          </div>
        </div>
      </section>

      {/* قسم المقالات */}
      <section className="py-16 px-6 text-center bg-gray-100">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">مقالاتنا الأخيرة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* المقال الأول */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-700 mb-4 hover:text-emerald-600 transition-colors duration-200">
              كيفية تحسين محركات البحث لموقعك
            </h3>
            <p className="text-gray-600 mb-4">تعرف على أفضل استراتيجيات SEO لتحسين ترتيب موقعك في محركات البحث.</p>
            <Link href="/articles/seo">
              <span className="text-emerald-600 hover:underline cursor-pointer transition duration-200">
                قراءة المزيد
              </span>
            </Link>
          </div>
          
          {/* المقال الثاني */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-700 mb-4 hover:text-emerald-600 transition-colors duration-200">
              التسويق عبر وسائل التواصل الاجتماعي: دليل شامل
            </h3>
            <p className="text-gray-600 mb-4">اكتشف كيف يمكن لوسائل التواصل الاجتماعي أن تعزز نمو عملك.</p>
            <Link href="/articles/social-media-marketing">
              <span className="text-emerald-600 hover:underline cursor-pointer transition duration-200">
                قراءة المزيد
              </span>
            </Link>
          </div>

          {/* المقال الثالث */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-700 mb-4 hover:text-emerald-600 transition-colors duration-200">
              أفضل ممارسات كتابة المحتوى
            </h3>
            <p className="text-gray-600 mb-4">تعلم كيفية كتابة محتوى يجذب ويحتفظ بالزوار.</p>
            <Link href="/articles/content-writing">
              <span className="text-emerald-600 hover:underline cursor-pointer transition duration-200">
                قراءة المزيد
              </span>
            </Link>
          </div>
        </div>
        
        {/* زر "جميع المقالات" */}
        <Link href="/articles">
          <span className="mt-6 inline-block bg-emerald-500 text-white py-2 px-6 rounded-full text-lg transition duration-300 hover:bg-emerald-700 cursor-pointer transform hover:scale-105">
            جميع المقالات
          </span>
        </Link>
      </section>

      {/* قسم الآراء */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">آراء عملائنا</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          <div className="bg-white p-4 rounded-lg shadow-md w-full">
            <div className="flex items-center space-x-3 mb-4">
              <div>
                <p className="font-semibold text-gray-700">أحمد فؤاد</p>
                <p className="text-gray-500 text-sm">عميل</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">"خدمة ممتازة! ساعدونا بشكل كبير في تحسين نتائج أعمالنا."</p>
            <div className="flex space-x-2 text-gray-400">
              <FaHeart className="text-xl shadow-2xs text-red-800 cursor-pointer" />
              <FaReply className="text-xl text-gray-600 cursor-pointer" />
              <FaComment className="text-xl text-blue-500 cursor-pointer" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md w-full">
            <div className="flex items-center space-x-3 mb-4">
              <div>
                <p className="font-semibold text-gray-700">سمية علي</p>
                <p className="text-gray-500 text-sm">عميل</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">"التسويق عبر وسائل التواصل الاجتماعي كان المفتاح في زيادة المبيعات!"</p>
            <div className="flex space-x-2 text-gray-400">
              <FaHeart className="text-xl shadow-2xs text-red-800 cursor-pointer" />
              <FaReply className="text-xl text-gray-600 cursor-pointer" />
              <FaComment className="text-xl text-blue-500 cursor-pointer" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md w-full">
            <div className="flex items-center space-x-3 mb-4">
              <div>
                <p className="font-semibold text-gray-700">محمد عبدالله</p>
                <p className="text-gray-500 text-sm">عميل</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">"أفضل خدمة تسويقية استفدنا منها على الإطلاق!"</p>
            <div className="flex space-x-2 text-gray-400">
              <FaHeart className="text-xl shadow-2xs text-red-800 cursor-pointer" />
              <FaReply className="text-xl text-gray-600 cursor-pointer" />
              <FaComment className="text-xl text-blue-500 cursor-pointer" />
            </div>
          </div>
        </div>
      </section>

      {/* قسم الاتصال */}
      <section className="py-16 px-6 bg-emerald-500 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">هل أنت جاهز لتطوير أعمالك؟</h2>
          <p className="text-lg mb-8 opacity-90">تواصل معنا اليوم واحصل على استشارة مجانية</p>
          <Link href="/contact">
            <span className="bg-white text-emerald-600 py-3 px-8 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all duration-300 cursor-pointer inline-block shadow-lg hover:shadow-xl">
              تواصل معنا
            </span>
          </Link>
        </div>
      </section>

      <HeroAnimations />
    </div>
  );
}

export default HomePage;
