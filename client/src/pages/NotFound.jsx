import { Link } from "react-router-dom";

function NotFound() {
    return (
        <main className="flex flex-col md:flex-col xl:flex-row w-100 px-4 py-20 sm:px-6 md:px-8 lg:px-10 bg-black">
            <div className="flex flex-col justify-center items-center px-4 py-20 md:px-8 lg:px-2 text-gray-700 w-full text-right">
                <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-white">
                    !404 - لم يتم العثور على الصفحة
                </h1>
                <p className="text-base items-center sm:text-lg md:text-xl mt-8 mb-10 text-center text-white w-full max-w-[900px]">
                    عذرًا، الصفحة التي تبحث عنها غير موجودة أو لا توجد. حاول تحديث الصفحة أو اضغط على الزر أدناه للعودة إلى الصفحة الرئيسية.
                </p>
                <Link to="/" className="mb-10">
                    <button className="w-40 text-white font-semibold px-4 py-2 rounded blueCol md:text-sm text-xs">الذهاب إلى الصفحة الرئيسية</button>
                </Link>
            </div>
        </main>
    )
}

export default NotFound;
