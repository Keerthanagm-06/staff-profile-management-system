import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";

const AddStaff = () => {

    const history = useHistory();
    const [isExperienced, setExperienced] = useState("no");
    const [isStudyPolytechnic, setStudyPolytechnic] = useState("no");
    const [isStudyHSE, setStudyHSE] = useState("no");
    const [staffInfo, setstaffInfo] = useState({
        staff_id: "",
        role: "",
        department: "",
        date_of_joining: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        date_of_birth: "",
        address_line_1: "",
        address_line_2: "",
        city: "",
        pincode: "",
        state: "",
        country: "",
        previous_company_name: "",
        designation: "",
        experience: "",
        location: "",
        previous_joining_date: "",
        previous_resignation_date: "",
        se_year: "",
        se_institution: "",
        hse_year: "",
        hse_institution: "",
        polytechnic_degree: "",
        polytechnic_year: "",
        polytechnic_institution: "",
    })

    useEffect(() => {
        console.log();
        if (history?.location?.state?.data?.id) {
            console.log("hi");
            setstaffInfo(history.location.state.data);
            setStudyHSE(history.location.state.data.isStudyHSE);
            setStudyPolytechnic(history.location.state.data.isStudyPolytechnic);
            setExperienced(history.location.state.data.isExperienced);
        } else if (localStorage.getItem("staffInfo") !== "undefined" && localStorage.getItem("staffInfo") !== null) {
            setstaffInfo(JSON.parse(localStorage.getItem("staffInfo")));
            setStudyHSE(JSON.parse(localStorage.getItem("staffInfo")).isStudyHSE);
            setStudyPolytechnic(JSON.parse(localStorage.getItem("staffInfo")).isStudyPolytechnic);
            setExperienced(JSON.parse(localStorage.getItem("staffInfo")).isExperienced);
        }
    }, []);

    const handleInputChange = async (event) => {
        let staff = { ...staffInfo };
        staff[event.target.name] = event.target.value;
        setstaffInfo(staff);
    }

    const handlePreview = async (event) => {
        let staff = { ...staffInfo, isStudyHSE, isStudyPolytechnic, isExperienced };
        setstaffInfo(staff);
        console.log(staffInfo);
        localStorage.setItem("staffInfo", JSON.stringify(staff));
        history.push('/staff-view');
    }

    return (
        <>
            <Navbar />
            <div className="overflow-hidden container mx-auto flex flex-col mt-8 shadow rounded-2xl border mb-10" style={{ minHeight: "85vh", width: "65%" }}>
                <h1 className="bg-indigo-400 h-16 w-full items-center flex text-3xl pl-3 text-white font-medium">{staffInfo.id ? "Edit" : "Add"} Staff</h1>
                <div className="m-5 border-2 border-gray-200 pb-4">
                    <div className="flex">
                        <input
                            type="text"
                            className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                            style={{ "width": "48.5%" }}
                            placeholder="Staff Id"
                            name="staff_id"
                            value={staffInfo.staff_id}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                            style={{ "width": "48.5%" }}
                            placeholder="Current Role"
                            name="role"
                            value={staffInfo.role}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex">
                        <input
                            type="text"
                            className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                            style={{ "width": "48.5%" }}
                            placeholder="Current Department"
                            name="department"
                            value={staffInfo.department}
                            onChange={handleInputChange}
                        />
                        <input
                            type="date"
                            className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                            style={{ "width": "48.5%" }}
                            title="Date Of Joining"
                            name="date_of_joining"
                            value={staffInfo.date_of_joining}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="bg-blue-500 mt-1 p-2 text-white flex text-xl">Personal Information</div>
                <div className="m-5 border-2 border-gray-200 pb-4">
                    <div className="flex">
                        <input
                            type="text"
                            className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                            style={{ "width": "48.5%" }}
                            placeholder="First Name"
                            name="first_name"
                            value={staffInfo.first_name}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                            style={{ "width": "48.5%" }}
                            placeholder="Last Name"
                            name="last_name"
                            value={staffInfo.last_name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex">
                        <input
                            type="text"
                            className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                            style={{ "width": "48.5%" }}
                            placeholder="Email"
                            name="email"
                            value={staffInfo.email}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                            style={{ "width": "48.5%" }}
                            placeholder="Phone"
                            name="phone"
                            value={staffInfo.phone}
                            onChange={handleInputChange}
                        />
                        <input
                            type="date"
                            className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl mr-3"
                            style={{ "width": "48.5%" }}
                            placeholder="Last Name"
                            title="Date of Birth"
                            name="date_of_birth"
                            value={staffInfo.date_of_birth}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex">
                        <input
                            type="text"
                            className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                            style={{ "width": "48.5%" }}
                            placeholder="Address Line 1"
                            name="address_line_1"
                            value={staffInfo.address_line_1}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                            style={{ "width": "48.5%" }}
                            placeholder="Address Line 2"
                            name="address_line_2"
                            value={staffInfo.address_line_2}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex">
                        <input
                            type="text"
                            className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                            style={{ "width": "48.5%" }}
                            placeholder="City"
                            name="city"
                            value={staffInfo.city}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                            style={{ "width": "48.5%" }}
                            placeholder="Pin Code"
                            name="pincode"
                            value={staffInfo.pincode}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex">
                        <input
                            type="text"
                            className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                            style={{ "width": "48.5%" }}
                            placeholder="State"
                            name="state"
                            value={staffInfo.state}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                            style={{ "width": "48.5%" }}
                            placeholder="Country"
                            name="country"
                            value={staffInfo.country}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="bg-blue-500 mt-1 p-2 text-white flex text-xl">Previous Work Experience</div>
                <div className="m-5 border-2 border-gray-200 pb-4">
                    <div className="flex ml-3 mt-3 ">
                        Do you have any previous Experience?
                        <input
                            type="radio"
                            className="ml-4"
                            value="yes"
                            id="yes"
                            checked={isExperienced === "yes"}
                            onChange={(e) => setExperienced(e.target.value)}
                        />
                        <label for="yes" className="ml-3">yes</label>
                        <input
                            type="radio"
                            className="ml-4"
                            value="no"
                            id="no"
                            checked={isExperienced === "no"}
                            onChange={(e) => setExperienced(e.target.value)}
                        />
                        <label for="no" className="ml-3">no</label>
                    </div>
                    {isExperienced === "yes" && <>
                        <div className="flex">
                            <input
                                type="text"
                                className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                                style={{ "width": "48.5%" }}
                                placeholder="Previous Company Name"
                                name="previous_company_name"
                                value={staffInfo.previous_company_name}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                                style={{ "width": "48.5%" }}
                                placeholder="Designation"
                                name="designation"
                                value={staffInfo.designation}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="flex">
                            <input
                                type="number"
                                className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                                style={{ "width": "48.5%" }}
                                placeholder="Experience"
                                name="experience"
                                value={staffInfo.experience}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                                style={{ "width": "48.5%" }}
                                placeholder="Location"
                                name="location"
                                value={staffInfo.location}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="flex">
                            <input
                                type="date"
                                className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                                style={{ "width": "48.5%" }}
                                title="Previous Joining Date"
                                name="previous_joining_date"
                                value={staffInfo.previous_joining_date}
                                onChange={handleInputChange}
                            />
                            <input
                                type="date"
                                className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                                style={{ "width": "48.5%" }}
                                title="Resignation Date"
                                name="previous_resignation_date"
                                value={staffInfo.previous_resignation_date}
                                onChange={handleInputChange}
                            />
                        </div>
                    </>
                    }
                </div>
                <div className="bg-blue-500 mt-0 p-2 text-white flex text-xl">Educational Information</div>
                <div className="m-5 border-2 border-gray-200 pb-4">
                    <div className="flex">
                        <input
                            type="text"
                            className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                            style={{ "width": "48.5%" }}
                            placeholder="10th Standard"
                            disabled
                        />
                        <input
                            type="text"
                            className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                            style={{ "width": "48.5%" }}
                            placeholder="year"
                            name="se_year"
                            value={staffInfo.se_year}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex">
                        <input
                            type="text"
                            className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                            style={{ "width": "98%" }}
                            placeholder="Institution"
                            name="se_institution"
                            value={staffInfo.se_institution}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="m-5 border-2 border-gray-200 pb-4">

                    <div className="flex ml-3 mt-3 ">
                        Do you study Higher Secondary Education?
                        <input
                            type="radio"
                            className="ml-4"
                            value="yes"
                            id="yes"
                            checked={isStudyHSE === "yes"}
                            onChange={(e) => setStudyHSE(e.target.value)}
                        />
                        <label for="yes" className="ml-3">yes</label>
                        <input
                            type="radio"
                            className="ml-4"
                            value="no"
                            id="no"
                            checked={isStudyHSE === "no"}
                            onChange={(e) => setStudyHSE(e.target.value)}
                        />
                        <label for="no" className="ml-3">no</label>
                    </div>
                    {isStudyHSE === "yes" ?
                        <>
                            <div className="flex">
                                <input
                                    type="text"
                                    className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                                    style={{ "width": "48.5%" }}
                                    placeholder="12th Standard"
                                    disabled
                                />
                                <input
                                    type="text"
                                    className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                                    style={{ "width": "48.5%" }}
                                    placeholder="year"
                                    name="hse_year"
                                    value={staffInfo.hse_year}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex mb-1">
                                <input
                                    type="text"
                                    className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                                    style={{ "width": "98%" }}
                                    placeholder="Institution"
                                    name="hse_institution"
                                    value={staffInfo.hse_institution}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </>
                        :
                        <>
                        </>
                    }
                </div>
                <div className="m-5 border-2 border-gray-200 pb-4">

                    <div className="flex ml-3 mt-3 ">
                        Do you study PolyTechnic College?
                        <input
                            type="radio"
                            className="ml-4"
                            value="yes"
                            id="yes"
                            checked={isStudyPolytechnic === "yes"}
                            onChange={(e) => setStudyPolytechnic(e.target.value)}
                        />
                        <label for="yes" className="ml-3">yes</label>
                        <input
                            type="radio"
                            className="ml-4"
                            value="no"
                            id="no"
                            checked={isStudyPolytechnic === "no"}
                            onChange={(e) => setStudyPolytechnic(e.target.value)}
                        />
                        <label for="no" className="ml-3">no</label>
                    </div>
                    {isStudyPolytechnic === "yes" ?
                        <>
                            <div className="flex">
                                <input
                                    type="text"
                                    className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                                    style={{ "width": "48.5%" }}
                                    placeholder="Degree"
                                    name="polytechnic_degree"
                                    value={staffInfo.polytechnic_degree}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                                    style={{ "width": "48.5%" }}
                                    placeholder="year"
                                    name="polytechnic_year"
                                    value={staffInfo.polytechnic_year}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex mb-1">
                                <input
                                    type="text"
                                    className="border-2 border-gray-300 p-2 ml-3 mt-4 hover:border-blue-500 focus:border-blue-500 rounded-xl"
                                    style={{ "width": "98%" }}
                                    placeholder="Institution"
                                    name="polytechnic_institution"
                                    value={staffInfo.polytechnic_institution}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </>
                        :
                        <>
                        </>
                    }
                </div>
                <button
                    className="bg-blue-500 w-1/8 py-3 px-5 ml-auto mr-4 rounded-xl text-xl text-white mb-5 hover:bg-blue-200 hover:text-blue-500"
                    onClick={handlePreview}
                >
                    Preview
                </button>
            </div>
        </>
    )
}

export default AddStaff;