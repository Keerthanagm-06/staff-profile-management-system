import { Link } from "react-router-dom";
import Header from "./Header";
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    const history = useHistory();
    return (
        <>
            {/* <Header /> */}
            <nav className='p-3 sticky top-0' style={{ background: "linear-gradient(to right, #1522ED, #157AED, #15D0ED, #15EDE6)" }}>
                <div className="flex container mx-auto" style={{ width: "65%" }}>
                    <Link href='/staffs' legacyBehavior>
                        <a className='inline-flex items-center p-2 mr-4 '>
                            <span className='text-xl text-white font-bold uppercase tracking-wide'>
                                Staff Profiles Management
                            </span>
                        </a>
                    </Link>
                    <button className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'>
                        <svg
                            className='w-6 h-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        </svg>
                    </button>
                    <div className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
                        <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                            <span className="text-indigo-500 font-bold mr-4 text-2xl">Admin</span>
                            <Link legacyBehavior>
                                <a onClick={() => history.push('signin')} className='hover:text-blue-600 text-blue-900 hover:underline lg:inline-flex lg:w-auto w-full rounded text-white font-bold items-center justify-center hover:text-white '>
                                    Logout
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;