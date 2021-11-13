import useAuth from '../../hooks/useAuth';
import { IoMenuSharp } from 'react-icons/io5'

const PrivateHeader = ({ handleToggle }) => {
    const { user } = useAuth();
    return (
        <div className="px-8 py-4 bg-yellow-900 font-semibold w-11/12 xs:w-full sm:w-full rounded-b xs:rounded-none sm:rounded-none mx-auto sticky top-0 flex justify-between items-center">
            <h1 className="text-3xl text-white xs:hidden sm:hidden">Dashboard</h1>
            <button onClick={() => handleToggle()}><IoMenuSharp className="text-4xl text-white hidden xs:block sm:block" /></button>
            <h1 className="text-2xl text-white">{user?.displayName}</h1>
        </div>
    );
};

export default PrivateHeader;