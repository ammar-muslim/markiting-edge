import React from 'react';
import LoginForm from './LoginForm';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="text-center md:text-right md:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold text-emerald-600/90 mb-2">Marketing Edge</h1>
            <p className="text-lg text-gray-600 font-medium">تسجيل الدخول إلى حسابك</p>
            <p className="text-gray-500 mt-3 text-sm leading-relaxed">
              مرحباً بك مرة أخرى! سجل دخولك للوصول إلى جميع الميزات والخدمات المتاحة.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg w-full md:w-1/2">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">تسجيل الدخول</h2>
            <LoginForm />
            
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                ليس لديك حساب؟{' '}
                <Link href="/register" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  إنشاء حساب جديد
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;