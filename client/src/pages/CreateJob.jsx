import React, { useState, useEffect } from 'react';
import { MetaData } from '../components/MetaData';
import { Sidebar } from '../components/Sidebar';
import { MdOutlineLocationOn, MdOutlineFeaturedPlayList, MdOutlineWorkOutline, MdWorkspacesOutline, MdAttachMoney, MdOutlineReceiptLong } from 'react-icons/md';
import { BiImageAlt } from 'react-icons/bi';
import { TbLoader2 } from 'react-icons/tb';
import { BiBuilding } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { createJobPost } from '../actions/JobActions';
import { RxCross1 } from 'react-icons/rx';

export const CreateJob = () => {
  const { loading } = useSelector(state => state.job);

  const [sideTog, setSideTog] = useState(false);

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [skillsRequired, setSkillsRequired] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [category, setCategory] = useState("");
  const [employmentType, setEmploymentType] = useState("");

  const [logo, setLogo] = useState("");
  const [logoName, setLogoName] = useState("");

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
  };

  const postHandler = (e) => {
    e.preventDefault();
    const skillsArr = skillsRequired.split(",");
    const data = { title, description, companyName, location, logo, skillsRequired: skillsArr, experience, salary, category, employmentType };

    dispatch(createJobPost(data));

    setTitle("");
    setDescription("");
    setCompanyName("");
    setLocation("");
    setSalary("");
    setExperience("");
    setSkillsRequired("");
    setCategory("");
    setEmploymentType("");
    setLogo("");
    setLogoName("");
  };

  return (
    <>
      <MetaData title="نشر وظيفة" />
      <div className='bg-gray-950 min-h-screen pt-12 md:px-20 px-3 text-white' dir="rtl">
        <div className="pt-4 fixed left-0 z-20 pl-0">
          <div onClick={() => setSideTog(!sideTog)} className='cursor-pointer blueCol px-3 py-2' size={44}>
            {!sideTog ? "قائمة" : <RxCross1 />}
          </div>
        </div>

        <Sidebar sideTog={sideTog} />

        <div className='flex justify-center w-full items-start pt-6'>
          <form onSubmit={postHandler} className='md:flex hidden shadow-gray-700 w-full md:mx-0 mx-8' action="">
            <div className='flex flex-col w-full justify-start items-start pt-4 gap-3'>
              <div className='text-4xl pb-1 font-medium border-b border-gray-500 w-full'>
                نشر وظيفة
              </div>
              <div className='flex gap-3 pt-3'>
                {/* Job Title */}
                <div className='bg-white flex justify-center items-center'>
                  <div className='text-gray-600 px-2'>
                    <MdOutlineWorkOutline size={20} />
                  </div>
                  <input
                    value={title} onChange={(e) => setTitle(e.target.value)}
                    required placeholder='عنوان الوظيفة' type="text" className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />
                </div>

                {/* Company Name */}
                <div className='bg-white flex justify-center items-center'>
                  <div className='text-gray-600 px-2'>
                    <BiBuilding size={20} />
                  </div>
                  <input
                    value={companyName} onChange={(e) => setCompanyName(e.target.value)}
                    required placeholder='اسم الشركة' type="text" className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />
                </div>

                {/* Company Logo */}
                <div>
                  <div className='bg-white flex w-[15.2rem] justify-center items-center'>
                    <div className='text-gray-600 px-2'>
                      {logo.length !== 0 ? <img src={logo} className='w-[3em]' alt="" /> : <BiImageAlt size={20} />}
                    </div>
                    <label htmlFor='logo' className='outline-none w-full cursor-pointer text-black px-1 pr-3 py-2 '>
                      {logoName.length === 0 ? <span className='text-gray-500 font-medium'>اختر شعار الشركة...</span> : logoName}
                    </label>
                    <input id='logo' name='logo' required onChange={logoChange} placeholder='Logo' accept="image/*" type="file" className='outline-none w-full hidden text-black px-1 pr-3 py-2' />
                  </div>
                </div>
              </div>

              <div className='flex gap-3'>
                {/* Experience */}
                <div className='bg-white flex justify-center items-center'>
                  <div className='text-gray-600 px-2'>
                    <MdOutlineReceiptLong size={20} />
                  </div>
                  <input
                    value={experience} onChange={(e) => setExperience(e.target.value)}
                    required placeholder='الخبرة' type="text" className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />
                </div>

                {/* Location */}
                <div className='bg-white flex justify-center items-center'>
                  <div className='text-gray-600 px-2'>
                    <MdOutlineLocationOn size={20} />
                  </div>
                  <input
                    value={location} onChange={(e) => setLocation(e.target.value)}
                    required placeholder='الموقع' type="text" className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />
                </div>

                {/* Salary */}
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
                {/* Job Description */}
                <div className='bg-white w-full flex justify-center items-center'>
                  <div className='text-gray-600 md:pb-12 pb-8 px-2'>
                    <MdOutlineFeaturedPlayList size={20} />
                  </div>
                  <textarea
                    value={description} onChange={(e) => setDescription(e.target.value)}
                    placeholder='وصف الوظيفة' type="text" className='outline-none w-full text-black bold-placeholder px-1 pr-3 py-2' />
                </div>
              </div>

              <div className='flex gap-3 w-[48rem]'>
                {/* Skills Required */}
                <div className='bg-white w-full flex justify-center items-center'>
                  <div className='text-gray-600 md:pb-12 pb-8 px-2'>
                    <MdWorkspacesOutline size={20} />
                  </div>
                  <textarea
                    value={skillsRequired} onChange={(e) => setSkillsRequired(e.target.value)}
                    placeholder='المهارات المطلوبة' type="text" className='outline-none w-full text-black bold-placeholder px-1 pr-3 py-2' />
                </div>
              </div>

              <div className='flex gap-3'>
                {/* Category */}
                <div className='bg-white flex justify-center items-center'>
                  <select required onChange={(e) => setCategory(e.target.value)} value={category} name="" id="large" className="block w-full px-6 py-2 text-base text-gray-900 border border-gray-300 bg-gray-50 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900">
                    <option selected value="">اختر الفئة</option>
                    <option value="Technology">تكنولوجيا</option>
                    <option value="Marketing">تسويق</option>
                    <option value="Finance">مالية</option>
                    <option value="Sales">مبيعات</option>
                    <option value="Legal">قانونية</option>
                    <option value="HR">موارد بشرية</option>
                    <option value="Design">تصميم</option>
                    <option value="Operations">عمليات</option>
                    <option value="Other">أخرى</option>
                  </select>
                </div>

                {/* Employment Type */}
                <div className='bg-white flex justify-center items-center'>
                  <select required onChange={(e) => setEmploymentType(e.target.value)} value={employmentType} name="" id="large" className="block w-full px-6 py-2 text-base text-gray-900 border border-gray-300 bg-gray-50 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900">
                    <option selected value="">نوع الوظيفة</option>
                    <option value="Full Time">دوام كامل</option>
                    <option value="Part Time">دوام جزئي</option>
                    <option value="Contract">عقد</option>
                    <option value="Internship">تدريب</option>
                    <option value="Remote">عن بعد</option>
                  </select>
                </div>
              </div>

              <div className='flex w-[48rem]'>
                {/* Submit Button */}
                <button disabled={loading} className='w-full flex justify-center items-center blueBg border-gray-500 border mt-2 py-2 hover:bg-transparent hover:text-white text-lg'>
                  {loading ? <TbLoader2 className="animate-spin" size={21} /> : "نشر الوظيفة"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
