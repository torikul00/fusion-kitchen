import { useState } from "react";
import MainContainer from "./MainContainer";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Faq = () => {
    const [openItemsLeft, setOpenItemsLeft] = useState([false, false, false]); // Initialize state for left column items
    const [openItemsRight, setOpenItemsRight] = useState([false, false, false]); // Initialize state for right column items

    const toggleOpenLeft = (index) => {
        const updatedOpenItems = [...openItemsLeft];
        updatedOpenItems[index] = !updatedOpenItems[index];
        setOpenItemsLeft(updatedOpenItems);
    };

    const toggleOpenRight = (index) => {
        const updatedOpenItems = [...openItemsRight];
        updatedOpenItems[index] = !updatedOpenItems[index];
        setOpenItemsRight(updatedOpenItems);
    };

    const items = [
        {
            title: "Does Square have tools for complex businesses?",
            description: "Yes, Square hYes, Square has a range of tools Yes, Square has a range of tools Yes, Square has a range of tools Yes, From point of sale and payroll to team management and more, Square has everything you need to run your business."
        },
        {
            title: "How does Square help small businesses?",
            description: "Square helps small businesses by providing easy-to-use tools for accepting payments, managing inventory, and tracking sales. Additionally, Square offers features like invoicing, payroll, and customer engagement tools."
        },
        {
            title: "How does Square help small businesses?",
            description: "Square helps small businesses by providing easy-to-use tools for accepting payments, managing inventory, and tracking sales. Additionally, Square offers features like invoicing, payroll, and customer engagement tools."
        },
        {
            title: "How does Square help small businesses?",
            description: "Square helps small businesses by providing easy-to-use tools for accepting payments, managing inventory, and tracking sales. Additionally, Square offers features like invoicing, payroll, and customer engagement tools."
        },
        {
            title: "How does Square help small businesses?",
            description: "Square helps small businesses by providing easy-to-use tools for accepting payments, managing inventory, and tracking sales. Additionally, Square offers features like invoicing, payroll, and customer engagement tools."
        },
        {
            title: "Can Square be used for online businesses?",
            description: "Yes, Square offers solutions for online businesses, including e-commerce platforms, payment processing, and integrations with popular online marketplaces. Square's tools are designed to help businesses of all types thrive in the digital landscape."
        }
    ];
    return (
        <MainContainer>
            <div className="py-10">
                <h1 className='text-[25px] mb-10 sm:text-[30px] md:text-[45px] lg:text-[60px] font-bold'>FAQ</h1>
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col w-full md:w-1/2">
                        {items.slice(0, 3).map((item, index) => (
                            <div key={index} className={`border-t-2 py-7 border-[#DDDDDD] w-full md:w-[90%] overflow-hidden ${openItemsLeft[index] ? 'transition expand' : 'transition'} ${index === 2 ? 'border-b-2' : ''}`} style={{ maxHeight: openItemsLeft[index] ? '230px' : '80px' }}>
                                <div onClick={() => toggleOpenLeft(index)} className="flex justify-between items-center cursor-pointer">
                                    <h1 className="text-sm sm:text-[18px]">{item.title}</h1>
                                    {openItemsLeft[index] ? <AiOutlineMinus className="mr-3 text-[#68b935]" size={20} /> : <AiOutlinePlus className="mr-3 text-[#68b935]" size={20} />}
                                </div>
                                <p className="text-sm md:text-[16px] text-[#808080] mt-7">{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col w-full md:w-1/2 mt-[-2px]">
                        {items.slice(3).map((item, index) => (
                            <div key={index} className={`border-t-2 py-7 border-[#DDDDDD] w-full md:w-[90%] overflow-hidden ${openItemsRight[index] ? 'transition expand' : 'transition'} ${index === items.length - 4 ? 'border-b-2' : ''}`} style={{ maxHeight: openItemsRight[index] ? '230px' : '80px' }}>
                                <div onClick={() => toggleOpenRight(index)} className="flex justify-between items-center cursor-pointer">
                                    <h1 className="text-sm sm:text-[18px]">{item.title}</h1>
                                    {openItemsRight[index] ? <AiOutlineMinus className="mr-3 text-[#68b935]" size={20} /> : <AiOutlinePlus className="mr-3 text-[#68b935]" size={20} />}
                                </div>
                                <p className="text-sm md:text-[16px] text-[#808080] mt-7">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-16">
                    <p className="text-sm text-[#808080] mb-10">Malesuada aliquam mauris nibh ac. Enim diam aliquam in quis etiam diam. Venenatis sed at metus sodales nibh natoque porta risus. Pellentesque vitae in malesuada nec gravida elit quis parturient ac. Ipsum eu et vitae commodo. Amet nulla sem arcu eget nisl ornare porttitor.</p>
                    <p className="text-sm text-[#808080] mb-10">Egestas est amet velit ullamcorper. Maecenas odio dis eget nullam vitae sed. Eget elit nulla lectus volutpat risus posuere. Nunc at odio cursus suspendisse facilisis donec fermentum montes. Pellentesque tortor nequ.</p>
                    <p className="text-sm text-[#808080]">Blandit pretium augue turpis laoreet. Pretium in purus cursus arcu non feugiat porttitor. Lorem vel porta in arcu odio interdum id eu. Ut quis tempor pellentesque eu. Et consequat fringilla pulvinar et mauris netus nunc euismod. Vestibulum quis enim at ornare nulla mattis condimentum. Elit ac nunc iaculis mi fringilla duis. Et lacus semper sociis elit. Aenean pellentesque mi praesent ut etiam.</p>
                </div>
            </div>

        </MainContainer>
    );
};

export default Faq;