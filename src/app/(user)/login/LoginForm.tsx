"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (email === "") {
      toast.error("الرجاء إدخال البريد الإلكتروني");
      setIsLoading(false);
      return;
    }

    if (password === "") {
      toast.error("الرجاء إدخال كلمة المرور");
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log({ email, password });
      toast.success("تم تسجيل الدخول بنجاح");
      router.push("/");
    } catch (error) {
      toast.error("حدث خطأ أثناء تسجيل الدخول");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={formSubmitHandler} className="space-y-6">
      <div className="space-y-2">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="email"
        >
          البريد الإلكتروني
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <FaEnvelope className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            id="email"
            className="w-full pr-10 pl-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
            placeholder="أدخل بريدك الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="password"
        >
          كلمة المرور
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <FaLock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="password"
            id="password"
            className="w-full pr-10 pl-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
            placeholder="أدخل كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </div>
      </div>

      <button
        type="submit"
        className={`w-full py-2 px-4 rounded-lg text-white font-medium transition-colors ${
          isLoading
            ? 'bg-emerald-400 cursor-not-allowed'
            : 'bg-emerald-500 hover:bg-emerald-600'
        }`}
        disabled={isLoading}
      >
        {isLoading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
      </button>
    </form>
  );
};

export default LoginForm;
