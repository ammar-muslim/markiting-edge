import React from "react";
import RegisterForm from "./RegisterForm";
import Link from 'next/link';

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="text-center md:text-right md:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold text-emerald-600/90 mb-2">Marketing Edge</h1>
            <p className="text-lg text-gray-600 font-medium">انضم إلينا وابدأ رحلتك</p>
            <p className="text-gray-500 mt-3 text-sm leading-relaxed">
              انضم إلى مجتمعنا واحصل على وصول كامل إلى جميع الموارد والميزات المتاحة.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg w-full md:w-1/2">
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">إنشاء حساب جديد</h2>
            <RegisterForm />
            
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                لديك حساب بالفعل؟{' '}
                <Link href="/login" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  تسجيل الدخول
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
