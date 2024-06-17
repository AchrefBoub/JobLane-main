import React from 'react'
import { MetaData } from '../components/MetaData'

export const About = () => {
  return (
    <>
      <MetaData title="حول" />
      <div className='bg-gray-950 min-h-screen pt-14 md:px-20 px-3 text-white text-right'>

        <div className='flex flex-col gap-5 md:px-0 px-2 md:pt-8 pt-4 pb-20'>
          <div>
            <p className='text-4xl pb-3 underline underline-offset-8 underPur font-bold text-right'>من نحن</p>

            <p className='text-right'>في دلني نحن أكثر من مجرد منصة للتقديم على الوظائف - نحن شركاءك في تحقيق طموحاتك المهنية. مهمتنا هي ربط الأفراد الموهوبين بفرص رائعة ترفع مستوى حياتهم المهنية والشخصية. سواء كنت خريجًا جديدًا تدخل سوق العمل أو محترفًا ذو خبرة يبحث عن آفاق جديدة، فإن دلني هنا لمساعدتك في كل خطوة.</p>
          </div>
          <div>
            <p className='text-2xl text-yellow-500 text-right'>ما يميزنا</p>
            <ul className='list-disc px-5 text-right'>
              <li><span className='font-semibold text-lg '>توافق مخصص:</span> نحن ندرك أن كل مرشح وشركة فريدة من نوعها. يضمن خوارزميات التوافق المتقدمة لدينا تناسق مهاراتك بشكل مثالي مع الأدوار التي تهمك، مما يوفر عليك الوقت والجهد.</li>
              <li><span className='font-semibold text-lg '>دعم استثنائي:</span> نجاحك هو أولويتنا. فريق الدعم المخصص لدينا على استعداد دائم لمساعدتك، بدءًا من تحسين ملفك الشخصي وحتى التحضير للمقابلات.</li>
              <li><span className='font-semibold text-lg '>فرص متنوعة:</span> سواء كنت تبحث عن عمل عن بعد، أو مهام حرة، أو وظائف تقليدية من الساعة 9 صباحًا حتى 5 مساءً، نحن نقدم مجموعة واسعة من الفرص لتناسب تفضيلاتك ونمط حياتك.</li>
              <li><span className='font-semibold text-lg '>التعلم المستمر:</span> نحن نؤمن بالتعلم مدى الحياة. احصل على الموارد، المقالات، والندوات عبر الإنترنت لتعزيز مهاراتك والبقاء في طليعة عالم العمل الديناميكي.</li>
            </ul>
          </div>

          <div>
            <p className='text-2xl text-yellow-500 text-right'>انضم إلى مجتمع دلني</p>

           <p className='pt-3 text-right'>عندما تنضم إلى دلني فأنت لست مجرد مشترك في منصة - بل أنت جزء من مجتمع ديناميكي يضم محترفين ومجندين ومرشدين. معًا، نحن نشكل مستقبل العمل، خطوة واحدة تلو الأخرى.</p>

            <p className='pt-4 text-right'>شكرًا لاختيارك دلني كشريك في التقدم المهني. ها نحن نفتح أبواب الإمكانيات أمامك، نحقق العظمة معًا!</p>
          </div>
        </div>


      </div>

    </>
  )
}
