import { Link } from "react-router-dom";

function UnAuthorized() {
    return (
        <main className="flex flex-col md:flex-col xl:flex-row w-100 px-4 py-20 sm:px-6 md:px-8 lg:px-10 bg-black">
            <div className="flex flex-col justify-center items-center px-4 py-20 md:px-8 lg:px-2 text-gray-700 w-full">
                <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-white">
                    401 - غير مصرح!
                </h1>
                <p className="text-base items-center sm:text-lg md:text-xl mt-8 mb-10 text-center text-white w-full max-w-[900px]">
                    عذرًا، يبدو أنك قمت بمحاولة الوصول إلى صفحة لا تمتلك صلاحيات للوصول إليها! حاول تسجيل الدخول باستخدام مستخدم مختلف أو العودة إلى الصفحة الرئيسية.
                </p>
                <Link to="/">
                    <button className="w-40 text-white font-semibold px-4 py-2 blueCol rounded bg-grey md:text-sm text-xs mb-10">
                        الذهاب إلى الصفحة الرئيسية
                    </button>
                </Link>
            </div>
        </main>
    );
}

export default UnAuthorized;
