import Image from 'next/image';

const AboutPage = () => {
    return (
        <section className="flex justify-center items-center bg-gray-100 fix-height py-16 px-6">
            <div className="container text-center max-w-4xl">
                {/* حركة تأثير دخول للنصوص */}
                <h1 className="text-4xl font-bold text-gray-800 mb-6 transform">
                    من نحن
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-6 transform m-10 hover:translate-x-4">
                    نحن شركة تسويق إلكتروني متخصصة في توفير حلول تسويقية مبتكرة تساعد
                    الأعمال على النمو وزيادة الوعي بالعلامات التجارية. نقدم خدمات متميزة في
                    مجالات التسويق الرقمي، تحسين محركات البحث (SEO)، وإعلانات وسائل التواصل
                    الاجتماعي، ونهدف إلى مساعدة عملائنا على تحقيق أهدافهم في عالم الإنترنت.
                </p>
                <p className="text-lg text-gray-600 mb-8 transform transition  hover:translate-x-4">
                    نحن نؤمن بالابتكار والعمل الجماعي لتحقيق نتائج مبهرة لعملائنا.
                </p>
            </div>

            {/* تأثير الحركة على الصورة */}
            <div className="mt-8">
                <Image 
                    src="/images/Logo-w.png" 
                    alt="Marketing Edge" 
                    width={500} 
                    height={500} 
                    className="mx-auto rounded-full shadow-lg transform transition duration-1000 ease-in-out hover:scale-200 hover:rotate-3 cursor-pointer"
                />
            </div>
        </section>
    );
}

export default AboutPage;
