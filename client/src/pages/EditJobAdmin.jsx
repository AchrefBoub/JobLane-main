import React, { useEffect, useState } from 'react';
import { MetaData } from '../components/MetaData';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../components/Loader';
import { getJobData, updateJobData } from '../actions/AdminActions';
import { Sidebar } from '../components/Sidebar';
import { RxCross1 } from 'react-icons/rx';
import { MdOutlineLocationOn, MdOutlineFeaturedPlayList, MdOutlineWorkOutline, MdWorkspacesOutline, MdAttachMoney, MdOutlineReceiptLong } from 'react-icons/md';
import { BiImageAlt } from 'react-icons/bi';
import { TbLoader2 } from 'react-icons/tb';
import { BiBuilding } from 'react-icons/bi';
import { toast } from 'react-toastify';

export const EditJobAdmin = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    const { loading, jobData } = useSelector(state => state.admin);

    const [sideTog, setSideTog] = useState(false);

    const [title, setTitle] = useState(jobData.title);
    const [description, setDescription] = useState(jobData.description);
    const [companyName, setCompanyName] = useState(jobData.companyName);
    const [location, setLocation] = useState(jobData.location);
    const [skillsRequired, setSkillsRequired] = useState(jobData.skillsRequired);
    const [experience, setExperience] = useState(jobData.experience);
    const [salary, setSalary] = useState(jobData.salary);
    const [category, setCategory] = useState(jobData.category);
    const [employmentType, setEmploymentType] = useState(jobData.employmentType);

    const [logo, setLogo] = useState(jobData.companyLogo.url);
    const [logoName, setLogoName] = useState("اختر شعار جديد");

    const logoChange = (e) => {
        if (e.target.name === "logo") {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setLogo(reader.result);
                    setLogoName(e.target.files[0].name);
                }
            };

            reader.readAsDataURL(e.target.files[0]);
        }
    }

    const postEditHandler = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        dispatch(getJobData(id));
    }, []);

    useEffect(() => {
        setTitle(jobData.title);
        setDescription(jobData.description);
        setCompanyName(jobData.companyName);
        setLocation(jobData.location);
        setSkillsRequired(jobData.skillsRequired);
        setExperience(jobData.experience);
        setSalary(jobData.salary);
        setCategory(jobData.category);
        setEmploymentType(jobData.employmentType);
        setLogo(jobData.companyLogo.url);
    }, [jobData]);

    const updateJobHandler = () => {
        let skillsArr = skillsRequired;
        if (typeof (skillsRequired) === "string") {
            skillsArr = skillsRequired.split(",");
        }

        if (logo.includes("cloudinary")) {
            toast.info("يرجى اختيار شعار جديد!");
        } else {
            const updatedData = {
                title,
                companyName,
                location,
                skillsRequired: skillsArr,
                experience,
                salary,
                category,
                employmentType,
                companyLogo: logo,
                description
            }

            dispatch(updateJobData(id, updatedData));
        }
    }

    return (
        <>

            <MetaData title="تعديل تفاصيل الوظيفة" />
            <div className='bg-gray-950 min-h-screen pt-14 md:px-20 px-3 text-white' dir="rtl">
                {
                    loading ? <Loader /> :

                        <div>
                            <div className="pt-1 fixed right-0 z-20 pr-0">
                                <div onClick={(() => setSideTog(!sideTog))} className='cursor-pointer blueCol px-3 py-2' size={44} >
                                    {!sideTog ? "القائمة" : <RxCross1 />}
                                </div>
                            </div>

                            <Sidebar sideTog={sideTog} />
                            <div className=' flex justify-center w-full items-start pt-6'>

                                <form onSubmit={postEditHandler} className=' md:flex hidden  shadow-gray-700  w-full md:mx-0 mx-8' action="">
                                    <div className='flex flex-col w-full justify-start items-start pt-4 gap-3'>
                                        <div className='text-4xl pb-1 font-medium border-b border-gray-500 w-full'>
                                            تعديل تفاصيل الوظيفة
                                        </div>
                                        <div className='flex gap-3 pt-3'>
                                            {/* عنوان الوظيفة */}
                                            <div className='bg-white flex justify-center items-center'>
                                                <div className='text-gray-600 px-2'>
                                                    <MdOutlineWorkOutline size={20} />
                                                </div>
                                                <input
                                                    value={title} onChange={(e) => setTitle(e.target.value)}
                                                    required placeholder='عنوان الوظيفة' type="text" className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />
                                            </div>

                                            {/* اسم الشركة */}
                                            <div className='bg-white flex justify-center items-center'>
                                                <div className='text-gray-600 px-2'>
                                                    <BiBuilding size={20} />
                                                </div>
                                                <input
                                                    value={companyName} onChange={(e) => setCompanyName(e.target.value)}
                                                    required placeholder='اسم الشركة' type="text" className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />
                                            </div>

                                            {/* شعار الشركة */}
                                            <div>
                                                <div className='bg-white flex w-[15.2rem] justify-center items-center'>
                                                    <div className='text-gray-600 px-2'>
                                                        {
                                                            logo.length !== 0 ?
                                                                <img src={logo} className='w-[3em]' alt="" /> :
                                                                <BiImageAlt size={20} />
                                                        }
                                                    </div>
                                                    <label htmlFor='logo' className='outline-none w-full cursor-pointer text-black px-1 pr-3 py-2 '>
                                                        {logoName.length === 0 ? <span className='text-gray-500 font-medium'>اختر شعار الشركة...</span>
                                                            : logoName}
                                                    </label>
                                                    <input id='logo' name='logo' required
                                                        onChange={logoChange}
                                                        placeholder='شعار' accept="image/*" type="file" className='outline-none  w-full hidden text-black px-1 pr-3 py-2' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex gap-3'>
                                            {/* الخبرة */}
                                            <div className='bg-white flex justify-center items-center'>
                                                <div className='text-gray-600 px-2'>
                                                    <MdOutlineReceiptLong size={20} />
                                                </div>
                                                <input
                                                    value={experience} onChange={(e) => setExperience(e.target.value)}
                                                    required placeholder='الخبرة' type="text" className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />
                                            </div>

                                            {/* الموقع */}
                                            <div className='bg-white flex justify-center items-center'>
                                                <div className='text-gray-600 px-2'>
                                                    <MdOutlineLocationOn size={20} />
                                                </div>
                                                <input
                                                    value={location} onChange={(e) => setLocation(e.target.value)}
                                                    required placeholder='الموقع' type="text" className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />
                                            </div>

                                            {/* الراتب */}
                                            <div className='bg-white flex justify-center items-center'>
                                                <div className='text-gray-600 px-2'>
                                                    <MdAttachMoney size={20} />
                                                </div>

                                                <input
                                                    value={salary} onChange={(e) => setSalary(e.target.value)}
                                                    required placeholder='الراتب' type="text" className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />
                                            </div>
                                        </div>

                                        <div className='flex w-[48rem] gap-3'>
                                            {/* وصف الوظيفة */}
                                            <div className='bg-white w-full flex justify-center items-center'>
                                                <div className='text-gray-600 md:pb-12 pb-8 px-2'>
                                                    <MdOutlineFeaturedPlayList size={20} />
                                                </div>
                                                <textarea
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                    placeholder='وصف الوظيفة' type="text" className='outline-none w-full text-black bold-placeholder px-1 pr-3 py-2' />
                                            </div>
                                        </div>

                                        <div className='flex gap-3 w-[48rem]'>
                                            {/* المهارات المطلوبة */}
                                            <div className='bg-white w-full flex justify-center items-center'>
                                                <div className='text-gray-600 px-2'>
                                                    <MdWorkspacesOutline size={20} />
                                                </div>
                                                <textarea
                                                    value={skillsRequired}
                                                    onChange={(e) => setSkillsRequired(e.target.value)}
                                                    placeholder='المهارات المطلوبة (افصل بين كل مهارة بفاصلة)' type="text" className='outline-none w-full text-black bold-placeholder px-1 pr-3 py-2' />
                                            </div>

                                            {/* نوع الوظيفة */}
                                            <div className='bg-white flex w-[15rem] justify-center items-center'>
                                                <div className='text-gray-600 px-2'>
                                                    <TbLoader2 size={20} />
                                                </div>
                                                <select
                                                    value={employmentType} onChange={(e) => setEmploymentType(e.target.value)}
                                                    className='outline-none w-full text-gray-500 px-1 pr-3 py-2 bold-placeholder'>
                                                    <option value="دوام كامل">دوام كامل</option>
                                                    <option value="دوام جزئي">دوام جزئي</option>
                                                    <option value="مؤقت">مؤقت</option>
                                                </select>
                                            </div>

                                            {/* فئة الوظيفة */}
                                            <div className='bg-white flex w-[13rem] justify-center items-center'>
                                                <div className='text-gray-600 px-2'>
                                                    <TbLoader2 size={20} />
                                                </div>
                                                <select
                                                    value={category} onChange={(e) => setCategory(e.target.value)}
                                                    className='outline-none w-full text-gray-500 px-1 pr-3 py-2 bold-placeholder'>
                                                    <option value="تكنولوجيا المعلومات">تكنولوجيا المعلومات</option>
                                                    <option value="تسويق">تسويق</option>
                                                    <option value="مالية">مالية</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='bg-blue-600 mt-6 w-full justify-center flex cursor-pointer text-white px-1 pr-3 py-2' onClick={updateJobHandler}>
                                            تحديث بيانات الوظيفة
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                }
            </div>
        </>
    )
}
