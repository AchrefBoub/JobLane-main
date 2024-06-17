import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../components/Loader'
import { MetaData } from '../components/MetaData'
import { getSingleApplication } from '../actions/ApplicationActions'
import { Link } from 'react-router-dom'
import { TbLoader2 } from 'react-icons/tb'
import { deleteApplication } from '../actions/ApplicationActions'
import { useNavigate } from 'react-router'

export const ApplicationDetails = () => {

    const { applicationDetails, loading } = useSelector(state => state.application)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { id } = useParams()

    const deleteApplicationHandler = () => {
        dispatch(deleteApplication(id))
        navigate("/applied")
    }

    useEffect(() => {
        dispatch(getSingleApplication(id))
        
    }, [])

    const toUpperFirst = (str = "") => {
        return str.substring(0, 1).toUpperCase() + str.substring(1)
    }

    const convertDateFormat = (inputDate) => {
        const parts = inputDate.split('-');
        if (parts.length !== 3) {
            return "تنسيق تاريخ غير صالح";
        }

        const day = parts[2];
        const month = parts[1];
        const year = parts[0];

        return `${day}-${month}-${year}`;
    }

    function extractTime(inputString) {
        // Parse the input string as a Date object
        const dateTimeObj = new Date(inputString);

        // Extract the hours, minutes, and seconds
        const hours = dateTimeObj.getHours();
        const minutes = dateTimeObj.getMinutes();
        const seconds = dateTimeObj.getSeconds();

        // Convert to 12-hour format
        const period = hours >= 12 ? 'مساءً' : 'صباحًا';
        const hours12 = hours % 12 || 12;

        // Format the time
        const time12hr = `${hours12.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${period}`;

        return time12hr;
    }

    return (
        <>
            <MetaData title="تفاصيل الطلب" />
            <div className='bg-gray-950 min-h-screen pt-14 md:px-20 px-3 text-white'>
                {
                    loading ?
                        <Loader />
                        :
                        <div>
                            <div className='py-3 text-2xl md:text-4xl'>تفاصيل الطلب #{id}</div>

                            <div className='pt-4 pb-3'>
                                <p className='text-2xl pb-2'>تفاصيل الوظيفة:</p>
                                <div>
                                    <ul>
                                        <li className='flex gap-4 items-center'>المسمى الوظيفي: <div>{applicationDetails.job.title}</div></li>
                                        <li className='flex gap-4 items-center'>الشركة: <div>{applicationDetails.job.companyName}</div></li>
                                        <li className='flex gap-4 items-center'>الموقع: <div>{applicationDetails.job.location}</div></li>
                                        <li className='flex gap-4 items-center'>الخبرة: <div>{applicationDetails.job.experience}</div></li>
                                    </ul>
                                </div>
                            </div>

                            <div className='pt-4 pb-6'>
                                <p className='text-2xl pb-2'>تفاصيل المتقدم:</p>
                                <div>
                                    <ul>
                                        <li className='flex gap-4 items-center'>الاسم: <div>{applicationDetails.applicant.name}</div></li>
                                        <li className='flex gap-4 items-center'>البريد الإلكتروني: <div>{applicationDetails.applicant.email}</div></li>
                                        <li className='flex gap-4 items-center'>السيرة الذاتية: <Link path="_blank" to={applicationDetails.applicantResume.url} target="_blank"
                                            rel="noreferrer" className='text-blue-500 underline cursor-pointer'>{applicationDetails.applicant.name} سيرته الذاتية</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className='pt-2 pb-2'>
                                <div className='flex gap-3 items-center text-xl'>الحالة: <span className={`${applicationDetails.status === "pending" ? "text-blue-600" :
                                        applicationDetails.status === "rejected" ? "text-red-600" : "text-green-600"
                                    } font-medium`}>{toUpperFirst(applicationDetails.status)}</span> </div>
                            </div>

                            <div className='pt-2 pb-2'>
                                <div className='flex gap-3 items-center text-xl'>
                                    تم إنشاء الطلب في: {convertDateFormat(applicationDetails.createdAt.substr(0, 10))} الساعة {extractTime(applicationDetails.createdAt)}
                                </div>
                            </div>

                            <div className='py- pb-40 '>
                                {!loading ?
                                    <button onClick={() => {
                                        deleteApplicationHandler()
                                    }} className='bg-red-600 hover:bg-red-800 py-2.5 text-sm px-8 font-medium'>
                                        حذف الطلب
                                    </button>
                                    :
                                    <button className='bg-red-600 py-2 px-4 flex items-center font-bold justify-center '>
                                        <TbLoader2 className='animate-spin mx-16' size={23} />
                                    </button>
                                }
                            </div>
                        </div>
                }
            </div>
        </>
    )
}

export default ApplicationDetails;
