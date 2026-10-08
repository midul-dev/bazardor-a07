import Image from 'next/image';
import logo from '@/assets/logo-icon.png'
import NavLink from './NavLink';

const Header = () => {
    const date = new Date().toLocaleDateString('bn-BD', {dateStyle: 'full'})
    return (
        
        <div className='max-w-7xl mx-auto px-4 py-5 w-full'>
        <div className='flex justify-between items-center '>
            {/* logo & btn  */}
            <div className='flex items-center gap-2'>
                <Image
                    src={logo}
                    alt='Bazardor'
                    height={50}
                    width={50}
                    className='border border-green-500 p-2 bg-green-700 rounded-xl'
                />
                <div>
                    <h1 className='font-bold text-2xl'>বাজার দর</h1>
<p>{date}</p>
                </div>
            </div>
            <div className='flex gap-3'>
                <button className='btn btn-ghost hover:rounded-xl'>সাইন ইন</button>
                <button className='btn bg-green-700 text-white rounded-xl'>সাইন আপ</button>
                
            </div>
        </div>
        <NavLink/>
        </div>
       
    );
};

export default Header;