import React, { useState } from 'react';
import { Switch, useHistory, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PrivateHeader from '../Shared/PrivateHeader/PrivateHeader';
import AddProduct from './AddProduct/AddProduct';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import ManageProducts from './ManageProducts/ManageProducts';
import { IoGridSharp, IoAddCircleSharp, IoPersonAddSharp, IoFileTrayFullSharp, IoHammerSharp, IoExitSharp, IoCardSharp, IoDocumentTextSharp, IoStarSharp, IoCloseSharp } from "react-icons/io5";
import Dashboard from './Dashboard/Dashboard';
import logo from '../../images/logo.png'
import Pay from './Pay/Pay';
import MyOrders from './MyOrders/MyOrders';
import Review from './Review/Review';
import useAuth from '../hooks/useAuth';
import AdminRoute from '../AdminRoute/AdminRoute';

const PrivateLayout = () => {
    const [toggle, setToggle] = useState(false);
    let { path, url } = useRouteMatch();
    const history = useHistory()
    const { admin, logOut } = useAuth();
    // console.log(admin);

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <div className="flex items-start min-h-screen">
                <div className={`w-3/12 min-h-screen bg-yellow-900 px-6 flex justify-between items-start flex-col sticky top-0 xs:hidden sm:hidden`}>
                    <div className="w-full font-sans flex items-start flex-col gap-6">
                        <div className="flex justify-between items-center w-full">
                            <div className="py-4 border-b border-gray-300 w-full flex items-center gap-3">
                                <img className="w-8" src={logo} alt="" />
                                <Link to="/">
                                    <h2 className="text-2xl font-bold text-white tracking-wider">Jewelliaa</h2>
                                </Link>
                            </div>
                        </div>
                        <Link className="flex items-center gap-4 font-normal text-white" to={`${url}`}> <IoGridSharp className="text-2xl" /> Dashboard</Link>
                        {
                            admin && <div className="w-full font-sans flex items-start flex-col gap-6">
                                <Link className="flex items-center gap-4 font-normal text-white" to={`${url}/add-product`}><IoAddCircleSharp className="text-2xl" />Add Product</Link>

                                <Link className="flex items-center gap-4 font-normal text-white" to={`${url}/make-admin`}><IoPersonAddSharp className="text-2xl" />Make Admin</Link>

                                <Link className="flex items-center gap-4 font-normal text-white" to={`${url}/manage-all-orders`}><IoHammerSharp className="text-2xl" />Manage All Orders</Link>

                                <Link className="flex items-center gap-4 font-normal text-white" to={`${url}/manage-products`}><IoFileTrayFullSharp className="text-2xl" />Manage Products</Link>
                            </div>
                        }
                        {
                            !admin && <div className="w-full font-sans flex items-start flex-col gap-6">
                                <Link className="flex items-center gap-4 font-normal text-white" to={`${url}/pay`}><IoCardSharp className="text-2xl" />Pay</Link>

                                <Link className="flex items-center gap-4 font-normal text-white" to={`${url}/my-orders`}><IoDocumentTextSharp className="text-2xl" />My Orders</Link>

                                <Link className="flex items-center gap-4 font-normal text-white" to={`${url}/review`}><IoStarSharp className="text-2xl" />Review</Link>
                            </div>
                        }
                    </div>
                    <button onClick={() => logOut(history)} className="mb-10 text-xl text-white font-bold flex items-center gap-4 mt-5"><IoExitSharp className="text-2xl" />Log Out</button>
                </div>


                {/* Responsive dashboard menu */}
                <div className={`w-3/12 xs:w-10/12 sm:w-10/12 xs:fixed sm:fixed xs:top-0 sm:top-0 xs:left-0 sm:left-0 min-h-screen bg-yellow-900 px-6 flex justify-between items-start flex-col sticky top-0 xs:z-10 sm:z-10 xs:shadow sm:shadow ${toggle && "xs:block sm:block"} hidden`}>
                    <div className="w-full font-sans flex items-start flex-col gap-6">
                        <div className="flex justify-between items-center w-full">
                            <div className="py-4 border-b border-gray-300 w-full flex items-center gap-3">
                                <img className="w-8" src={logo} alt="" />
                                <Link to="/">
                                    <h2 className="text-2xl font-bold text-white tracking-wider">Jewelliaa</h2>
                                </Link>
                            </div>
                            <button onClick={handleToggle} className="text-2xl text-white hidden xs:block sm:block"><IoCloseSharp /></button>
                        </div>
                        <Link onClick={handleToggle} className="flex items-center gap-4 font-normal text-white" to={`${url}`}> <IoGridSharp className="text-2xl" /> Dashboard</Link>
                        {
                            admin && <div className="w-full font-sans flex items-start flex-col gap-6">
                                <Link onClick={handleToggle} className="flex items-center gap-4 font-normal text-white" to={`${url}/add-product`}><IoAddCircleSharp className="text-2xl" />Add Product</Link>

                                <Link onClick={handleToggle} className="flex items-center gap-4 font-normal text-white" to={`${url}/make-admin`}><IoPersonAddSharp className="text-2xl" />Make Admin</Link>

                                <Link onClick={handleToggle} className="flex items-center gap-4 font-normal text-white" to={`${url}/manage-all-orders`}><IoHammerSharp className="text-2xl" />Manage All Orders</Link>

                                <Link onClick={handleToggle} className="flex items-center gap-4 font-normal text-white" to={`${url}/manage-products`}><IoFileTrayFullSharp className="text-2xl" />Manage Products</Link>
                            </div>
                        }
                        {
                            !admin && <div className="w-full font-sans flex items-start flex-col gap-6">
                                <Link onClick={handleToggle} className="flex items-center gap-4 font-normal text-white" to={`${url}/pay`}><IoCardSharp className="text-2xl" />Pay</Link>

                                <Link onClick={handleToggle} className="flex items-center gap-4 font-normal text-white" to={`${url}/my-orders`}><IoDocumentTextSharp className="text-2xl" />My Orders</Link>

                                <Link onClick={handleToggle} className="flex items-center gap-4 font-normal text-white" to={`${url}/review`}><IoStarSharp className="text-2xl" />Review</Link>
                            </div>
                        }
                    </div>
                    <button onClick={() => logOut(history)} className="mb-10 text-xl text-white font-bold flex items-center gap-4 mt-5"><IoExitSharp className="text-2xl" />Log Out</button>
                </div>


                <div className="w-full">
                    <PrivateHeader handleToggle={handleToggle} />
                    <Switch>
                        <PrivateRoute exact path={`${path}`}>
                            <Dashboard></Dashboard>
                        </PrivateRoute>
                        <AdminRoute path={`${url}/add-product`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <AdminRoute path={`${url}/make-admin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${url}/manage-products`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                        <AdminRoute path={`${url}/manage-all-orders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </AdminRoute>
                        <PrivateRoute path={`${url}/pay`}>
                            <Pay></Pay>
                        </PrivateRoute>
                        <PrivateRoute path={`${url}/my-orders`}>
                            <MyOrders></MyOrders>
                        </PrivateRoute>
                        <PrivateRoute path={`${url}/review`}>
                            <Review></Review>
                        </PrivateRoute>
                    </Switch>
                </div>
            </div>
        </>
    );
};

export default PrivateLayout;