import Navbar from "./Navbar";
import user from '../asserts/user.jpeg';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { database } from "../firebaseConfig";

const StaffView = () => {

    const history = useHistory();
    const [staffInfo, setstaffInfo] = useState({});
    const databaseRef = collection(database, "staffs");

    useEffect(() => {
        if (localStorage.getItem("staffInfo") !== "undefined" && localStorage.getItem("staffInfo") !== null) {
            setstaffInfo(JSON.parse(localStorage.getItem("staffInfo")));
        } else {
            setstaffInfo(history.location.state.data);
        }
    }, []);

    const handleSave = async (event) => {
        if (staffInfo.id) {
            const getUser = doc(database, 'staffs', staffInfo.id);
            console.log("staffsss", getUser);
            await updateDoc(getUser, {
                ...staffInfo
            }).then(res => {
                console.log(res);
                history.push("staffs")
                localStorage.removeItem("staffInfo");
            }).catch(err => {
                console.log("error", err);
            })
        } else {
            await addDoc(databaseRef, { ...staffInfo }).then(res => {
                console.log(res);
                history.push("staffs")
                localStorage.removeItem("staffInfo");
            }).catch(err => {
                console.log("error", err);
            })
        }
    }

    return (
        <>
            <Navbar />
            <div className="overflow-hidden container mx-auto flex flex-col mt-8 shadow rounded-2xl border mb-10" style={{ minHeight: "85vh", width: "65%" }}>
                <h1 className="bg-indigo-400 h-16 w-full items-center flex text-3xl pl-3 text-white font-medium uppercase">{staffInfo.first_name} {staffInfo.last_name}</h1>
                <div className="flex">
                    <img src={user} className="w-1/4 h-1/5 border-2 border-blue-200 ml-16 mt-10 rounded-xl" />
                    <div className="border-2 w-3/5 ml-10 mt-10 mb-10 pb-10 rounded-xl">
                        <div className="flex flex-col ml-5 mt-1 text-xl items-start">
                            <div className="flex-row">
                                <span className="text-gray-500 mr-14">Role:</span><span className="ml-20">{staffInfo.role}</span>
                            </div>
                            <div className="flex-row">
                                <span className="text-gray-500 mr-16">Degree:</span><span className="ml-12">{staffInfo.department}</span>
                            </div>
                            <div className="flex-row">
                                <span className="text-gray-500 mr-8">Date Of Joining:</span><span className="ml-1">{new Date(staffInfo.date_of_joining).toLocaleDateString()}</span>
                            </div>
                            <span className="text-blue-500 mt-5 mb-2">Personal Details:</span>
                            <div className="flex-row">
                                <span className="text-gray-500 mr-14">Date-of-Birth:</span><span className="ml-0">{new Date(staffInfo.date_of_birth).toLocaleDateString()}</span>
                            </div>
                            <div className="flex-row">
                                <span className="text-gray-500 mr-16">Email:</span><span className="ml-16">{staffInfo.email}</span>
                            </div>
                            <div className="flex-row">
                                <span className="text-gray-500 mr-16">Phone:</span><span className="ml-14">{staffInfo.phone}</span>
                            </div>
                            <div className="flex-row">
                                <span className="text-gray-500 mr-16">Address:</span><span className="ml-10">{staffInfo.address_line_1}, {staffInfo.address_line_2}</span>
                            </div>
                            <div className="flex-row">
                                <span className="text-gray-500 mr-16">City:</span><span className="ml-5"></span><span className="ml-16">{staffInfo.city}</span>
                            </div>
                            <div className="flex-row">
                                <span className="text-gray-500 mr-16">Pin-Code:</span><span className="ml-10">{staffInfo.pincode}</span>
                            </div>
                            <div className="flex-row">
                                <span className="text-gray-500 mr-16">State:</span><span className="ml-3"></span><span className="ml-16">{staffInfo.state}</span>
                            </div>
                            <div className="flex-row">
                                <span className="text-gray-500 mr-16">Country:</span><span className="ml-14">{staffInfo.country}</span>
                            </div>
                            {staffInfo.isExperienced === "yes" ?
                                <>
                                    <span className="text-blue-500 mt-5 mb-2">Previous Work Experience:</span>
                                    <div className="flex-row">
                                        <span className="text-gray-500 mr-5">Company Name:</span><span className="ml-5">{staffInfo.previous_company_name}</span>
                                    </div>
                                    <div className="flex-row">
                                        <span className="text-gray-500 mr-6">Designation:</span><span className="ml-12">{staffInfo.designation}</span>
                                    </div>
                                    <div className="flex-row">
                                        <span className="text-gray-500 mr-6">Experience:</span><span className="ml-14">{staffInfo.experience} years</span>
                                    </div>
                                    <div className="flex-row">
                                        <span className="text-gray-500 mr-16">Location:</span><span className="ml-10">{staffInfo.location}</span>
                                    </div>
                                    <div className="flex-row">
                                        <span className="text-gray-500 mr-8">Date of Joining:</span><span className="ml-2">{new Date(staffInfo.previous_joining_date).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex-row">
                                        <span className="text-gray-500 mr-6">Date of Relieving:</span><span className="ml-0">{new Date(staffInfo.previous_resignation_date).toLocaleDateString()}</span>
                                    </div>
                                </> : <></>
                            }
                            <span className="text-blue-500 mt-5 mb-2">Educational Details:</span>
                            <span>X Standard</span>
                            <div className="flex-row">
                                <span className="text-gray-500 mr-16">Year:</span><span className="ml-6"></span><span className="ml-16">{staffInfo.se_year}</span>
                            </div>
                            <div className="flex-row">
                                <span className="text-gray-500 mr-16">Institution:</span><span className="ml-8">{staffInfo.se_institution}</span>
                            </div>
                            {staffInfo.isStudyHSE === "yes" ?
                                <>
                                    <span className="mt-4">XII Standard</span>
                                    <div className="flex-row">
                                        <span className="text-gray-500 mr-16">Year:</span><span className="ml-6"></span><span className="ml-16">{staffInfo.hse_year}</span>
                                    </div>
                                    <div className="flex-row">
                                        <span className="text-gray-500 mr-16">Institution:</span><span className="ml-8">{staffInfo.hse_institution}</span>
                                    </div>
                                </> : <></>
                            }
                            {staffInfo.isStudyPolytechnic === "yes" ?
                                <>
                                    <span className="mt-4">Polytechnic</span>
                                    <div className="flex-row">
                                        <span className="text-gray-500 mr-16">Degree:</span><span className="ml-16">{staffInfo.polytechnic_year}</span>
                                    </div>
                                    <div className="flex-row">
                                        <span className="text-gray-500 mr-16">Year:</span><span className="ml-6"></span><span className="ml-16">{staffInfo.polytechnic_year}</span>
                                    </div>
                                    <div className="flex-row">
                                        <span className="text-gray-500 mr-16">Institution:</span><span className="ml-8">{staffInfo.polytechnic_institution}</span>
                                    </div>
                                </> : <></>
                            }
                        </div>
                    </div>
                </div>
                {history?.location?.state?.data?.id ?
                    <>
                        <div className=" w-1/5 mr-auto">
                            <button
                                className="bg-blue-500 w-1/8 py-3 px-8 ml-8 mr-4 rounded-xl text-xl text-white mb-5 hover:bg-blue-200 hover:text-blue-500"
                                onClick={() => history.push('staffs')}
                            >
                                Back
                            </button>
                        </div>
                    </>
                    :
                    <div className="flex">
                        <div className=" w-1/5 mr-auto">
                            <button
                                className="bg-blue-500 w-1/8 py-3 px-5 ml-8 mr-4 rounded-xl text-xl text-white mb-5 hover:bg-blue-200 hover:text-blue-500"
                                onClick={() => history.push('add-staff')}
                            >
                                Previous
                            </button>
                        </div>
                        <div className=" w-1/5 ml-auto">
                            <button
                                className="bg-blue-500 w-1/8 py-3 px-5 mr-0 rounded-xl text-xl text-white mb-5 hover:bg-blue-200 hover:text-blue-500"
                                onClick={handleSave}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default StaffView;