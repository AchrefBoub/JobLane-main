import React, { useState } from 'react';
import { MetaData } from '../components/MetaData';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram, AiOutlineTwitter, AiTwotoneMail } from 'react-icons/ai';
import { BiMinus, BiPlus } from 'react-icons/bi';

export const Contact = () => {

    const [que1, setQue1] = useState(false);
    const [que2, setQue2] = useState(false);
    const [que3, setQue3] = useState(false);

    return (
        <>
            <MetaData title="اتصل بنا" />
            <div className='bg-gray-950 min-h-screen pt-14 md:px-20 px-3 text-white'>

                <div className='flex flex-col gap-5 md:px-0 px-2 md:pt-8 pt-4 pb-20'>

                    <div>
                        <p className='text-4xl pb-3 underline underline-offset-8 underPur font-bold'>اتصل بنا</p>

                        <p>نحن متحمسون للسماع منك! إذا كان لديك أي أسئلة أو استفسارات أو ملاحظات، فلا تتردد في الاتصال بنا باستخدام معلومات الاتصال المقدمة أدناه. رضاك ومشاركتك مع منصتنا هما أولوياتنا الرئيسية، ونحن هنا لمساعدتك بأي طريقة نستطيع.</p>
                    </div>

                    <div>
                        <div class=' '>
                            <p class='text-2xl text-yellow-500'>معلومات الاتصال</p>

                            <div class='mt-4'>
                                <p class='text-xl pb-1'>العنوان:</p>
                                <p class='text-lg'>
                                    جامعة الشهيد حمه لخضر الوادي الجزائر
                                </p>
                            </div>


                            <div class='mt-4'>
                                <p class='text-xl pb-1'>البريد الإلكتروني:</p>
                                <ul class='list-disc pl-4 text-lg'>
                                    <li>الاستفسارات العامة: info@delni.com</li>
                                    <li>الدعم: support@delni.com</li>
                                    <li>طلبات الوظائف: jobs@delni.com</li>
                                </ul>
                            </div>

                            <div class='mt-4'>
                                <p class='text-xl pb-1'>الهاتف:</p>
                                <ul class='list-disc pl-4 text-lg'>
                                    <li>دعم العملاء: +123-456-7890</li>
                                    <li>الموارد البشرية والاستفسارات الوظيفية: +123-456-7891</li>
                                </ul>
                            </div>
                        </div>

                        <p className='text-xl pt-3 pb-1'>وسائل التواصل الاجتماعي:</p>
                        <ul >
                            <div className='flex gap-5 pt-1 items-center'>
                                <BsFacebook size={26} />
                                <AiFillInstagram size={30} />
                                <AiOutlineTwitter size={30} />
                                <AiTwotoneMail size={28} />
                            </div>
                        </ul>
                    </div>

                    <div>
                        <p className='text-2xl pb-4 text-yellow-500'>الأسئلة الشائعة (FAQs):</p>

                        <div id="accordion-collapse" data-accordion="collapse">
                            <h2 id="accordion-collapse-heading-1">
                                <button onClick={()=>setQue1(!que1)}  type="button" className="flex items-center justify-between w-full p-5 font-medium text-right text-gray-500 border dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400  dark:hover:bg-gray-900" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                    <span>كيف يمكنني إنشاء حساب على منصتكم للتقديم على الوظائف؟</span>
                                    <svg data-accordion-icon className={`w-3 h-3 rotate-180 shrink-0 ${que1 ? 'transform rotate-0' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-1" className={`${que1? "flex":"hidden"}`}  aria-labelledby="accordion-collapse-heading-1">
                                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-950">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">جواب: لإنشاء حساب، انقر على زر "التسجيل" الموجود في الزاوية العلوية اليمنى من الصفحة الرئيسية. قم بملء معلوماتك الشخصية، بما في ذلك اسمك وعنوان بريدك الإلكتروني وكلمة مرور آمنة. بمجرد إنشاء حسابك، يمكنك البدء في استكشاف الوظائف.</p>
                                </div>
                            </div>
                            <h2 id="accordion-collapse-heading-2">
                                <button onClick={()=>setQue2(!que2)}  type="button" className="flex items-center justify-between w-full p-5 font-medium text-right text-gray-500 border dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400  dark:hover:bg-gray-900" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                    <span>ما الذي يجب أن أضمنه في طلب الوظيفة؟</span>
                                    <svg data-accordion-icon className={`w-3 h-3 rotate-180 shrink-0 ${que2 ? 'transform rotate-0' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-2" className={`${que2? "flex":"hidden"}`}  aria-labelledby="accordion-collapse-heading-2">
                                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">جواب: من الضروري صياغة طلب وظيفة فعال يمكن أن يساعدك في التميز أمام أصحاب العمل المحتملين. تأكد من إدراج سيرة ذاتية مصممة تصميمًا متخصصًا تبرز خبراتك ومهاراتك ذات الصلة. علاوة على ذلك، كن واضحًا في طريقة تواصل مؤهلاتك مع متطلبات الوظيفة المعلنة.</p>
                                </div>
                            </div>
                            <h2 id="accordion-collapse-heading-3">
                                <button onClick={()=>setQue3(!que3)} type="button" className="flex items-center justify-between w-full p-5 font-medium text-right text-gray-500 border dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400  dark:hover:bg-gray-900" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false"
                                aria-controls="accordion-collapse-body-3">
                                    <span>كيف يمكنني التحقق من حالة طلب الوظيفة الخاص بي؟</span>
                                    <svg data-accordion-icon className={`w-3 h-3 rotate-180 shrink-0 ${que3 ? 'transform rotate-0' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-3" className={`${que3 ? "flex" : "hidden"}`} aria-labelledby="accordion-collapse-heading-3">
                                <div className="p-5  border border-t-0 border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">جواب: بعد تقديم طلباتك، يمكنك تسجيل الدخول إلى لوحة تحكم حسابك. هنا، ستجد قسمًا يعرض طلباتك المقدمة بالإضافة إلى حالاتها الحالية. الحالات قد تشمل قبولها، رفضها أو قيد الانتظار.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


        </>
    )
}

export default Contact;
