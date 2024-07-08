import { useEffect, useState } from 'react';
import messageIcon from "../assets/images/online ordering/messageIcon.svg"
const ScrollBottomBar = () => {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const triggerScrollPos = 750;
        if (currentScrollPos > triggerScrollPos) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };
    return (
        <>

            {/* small device bottom sticky */}
            <div data-aos='fade-up' className={`${isSticky ? 'lg:hidden bg-[#141817] py-2 w-full fixed text-white z-[99] left-0 bottom-0 right-0 flex gap-4 justify-center border-t border-[#d9d9d9] border-opacity-20' : 'hidden'} transition-all`}>
                <img src={messageIcon} alt="" />
                <button className="py-2.5 px-12 text-sm rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Create you site</button>
            </div>
            {/* small device bottom sticky */}
        </>
    );
};

export default ScrollBottomBar;