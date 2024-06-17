import React, { useState } from 'react';

export const Test = () => {
    const dataArray = [
        { "1": "واحد واحد واحد" },
        { "1": "اثنان اثنان اثنان" },
        { "1": "ثلاثة ثلاثة ثلاثة" },
        { "1": "أربعة أربعة أربعة" },
        { "1": "خمسة خمسة خمسة" },
        { "1": "ستة ستة ستة" },
        { "1": "سبعة سبعة سبعة" },
        { "1": "ثمانية ثمانية ثمانية" },
        { "1": "تسعة تسعة تسعة" },
        { "1": "عشرة عشرة عشرة" },
        { "1": "أحد عشر أحد عشر أحد عشر" },
        { "1": "اثنا عشر اثنا عشر اثنا عشر" },
        { "1": "ثلاثة عشر ثلاثة عشر ثلاثة عشر" },
        { "1": "أربعة عشر أربعة عشر أربعة عشر" },
        { "1": "خمسة عشر خمسة عشر خمسة عشر" },
        { "1": "ستة عشر ستة عشر ستة عشر" },
        { "1": "سبعة عشر سبعة عشر سبعة عشر" },
        { "1": "ثمانية عشر ثمانية عشر ثمانية عشر" },
        { "1": "تسعة عشر تسعة عشر تسعة عشر" },
        { "1": "عشرون عشرون عشرون" },
        { "1": "واحد وعشرون واحد وعشرون واحد وعشرون" },
        { "1": "اثنان وعشرون اثنان وعشرون اثنان وعشرون" },
        { "1": "ثلاثة وعشرون ثلاثة وعشرون ثلاثة وعشرون" },
        { "1": "أربعة وعشرون أربعة وعشرون أربعة وعشرون" },
        { "1": "خمسة وعشرون خمسة وعشرون خمسة وعشرون" },
        { "1": "ستة وعشرون ستة وعشرون ستة وعشرون" },
        { "1": "سبعة وعشرون سبعة وعشرون سبعة وعشرون" },
        { "1": "ثمانية وعشرون ثمانية وعشرون ثمانية وعشرون" },
        { "1": "تسعة وعشرون تسعة وعشرون تسعة وعشرون" },
        { "1": "ثلاثون ثلاثون ثلاثون" }
    ];

    const itemsPerPage = 5; 
    const [currentPage, setCurrentPage] = useState(1);

    const totalPageCount = Math.ceil(dataArray.length / itemsPerPage);

    const handleNextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, totalPageCount));
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayedData = dataArray.slice(startIndex, endIndex);

    const pageButtons = [];
    const maxButtonsToShow = 3; // Maximum number of page buttons to show

    let startButton = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2));
    let endButton = Math.min(totalPageCount, startButton + maxButtonsToShow - 1);

    for (let i = startButton; i <= endButton; i++) {
        pageButtons.push(
            <button
                key={i}
                onClick={() => handlePageChange(i)}
                className={`mx-1 px-3 py-1 rounded ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black hover:bg-blue-500 hover:text-white'}`}
            >
                {i}
            </button>
        );
    }
 
    return (
        <>
            <div className='min-h-screen'>
                <div className='grid gap-5 mx-[20em] py-[10em] grid-cols-1'>
                    {displayedData.map((e, i) => (
                        <p key={i} className='bg-yellow-300 p-3 text-black'>{Object.values(e)[0]}</p>
                    ))}
                </div>



                <div className="flex justify-center mt-4">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2"
                    >
                        السابق
                    </button>
                    
                    
                    {pageButtons}


                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPageCount}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2"
                    >
                        التالي
                    </button>
                </div>



            </div>
        </>
    );
};
