import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { database } from "../firebaseConfig";
import Navbar from "./Navbar";
import { FaEdit, FaTrash } from 'react-icons/fa';

const StaffProfiles = () => {

    const history = useHistory();

    const [staffs, setstaffs] = useState([]);
    const [isBatchFilter, setBatchFilter] = useState(false);
    const [isDeptFilter, setDeptFilter] = useState(false);
    const [filters, setFilters] = useState({
        "role": "All Roles",
        "dept": "All Departments"
    })
    const databaseRef = collection(database, "staffs");
    const [allstaffs, setAllstaffs] = useState([]);

    useEffect(() => {
        getstaffs();
    }, [])

    const getstaffs = async () => {
        getDocs(databaseRef).then(res => {
            const staffsInfo = res.docs.map(doc => {
                return { ...doc.data(), id: doc.id };
            });
            setAllstaffs([...staffsInfo]);
            setstaffs([...staffsInfo]);
        }).catch(err => {
            console.log("error", err);
        })
    }

    const handleFilterChange = (event) => {
        let filter = filters;
        if (event.target.name === "role") {
            filter.role = event.target.value;
            setFilters(filter)
        } else {
            filter.dept = event.target.value;
            setFilters(filter)
        }
        let selectedstaffs = [...allstaffs];
        console.log("all", selectedstaffs);
        console.log(filter);

        selectedstaffs = filter.role !== "All Roles" ? selectedstaffs.filter(staff => staff.role === filter.role) : [...selectedstaffs];
        console.log("role", selectedstaffs);

        selectedstaffs = filter.dept !== "All Departments" ? selectedstaffs.filter(staff => staff.department === filter.dept) : [...selectedstaffs];
        console.log("dept", selectedstaffs);

        setstaffs(selectedstaffs)
    }

    const handleDelete = async (id) => {
        deleteDoc(doc(database, "staffs", id)).then(res => {
            console.log(res);
            getstaffs();
        }).catch(err => {
            console.log("error", err);
        })
    }

    return (
        <>
            <Navbar />
            <div className="overflow-hidden container mx-auto flex flex-col mt-8 shadow rounded-2xl border mb-10" style={{ minHeight: "85vh", width: "65%" }}>
                <h1 className="bg-blue-400 h-16 w-full items-center flex text-3xl pl-10 text-white font-medium">Staffs</h1>
                <div className="flex">
                    <select
                        id="countries"
                        onChange={handleFilterChange}
                        name="role"
                        class=" mx-4 mt-6 bg-gray-200 border border-indigo-600 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-1/10 p-2.5 "
                    >
                        <option value="All Roles" selected>All Roles</option>
                        <option value="HOD">HOD</option>
                        <option value="Professor">Professor</option>
                        <option value="Assistant Professor">Assistant Professor</option>
                    </select>
                    <select
                        id="countries"
                        onChange={handleFilterChange}
                        name="dept"
                        class="mx-4 mt-6 bg-gray-200 border border-indigo-600 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-1/10 p-2.5 "
                    >
                        <option value="All Departments" selected>All Departments</option>
                        <option value="Computer Science and Engineering">CSE</option>
                        <option value="Information Technology">IT</option>
                        <option value="Mechanical Engineering">ME</option>
                        <option value="Civil Engineering">CE</option>
                        <option value="Electronics and Communication Engineering">ECE</option>
                        <option value="Electricals and Electronics Engineering">EEE</option>
                    </select>
                    <button
                        onClick={() => history.push('/add-staff')}
                        className="ml-auto mr-10 hover:bg-indigo-200 hover:text-indigo-500 hover:border-indigo-500 hover:border px-4 mt-6 rounded-xl bg-indigo-500 text-white"
                    >
                        Add Staff
                    </button>
                </div>
                <div className="grid mt-2">
                    <table className="border-2 table-auto m-4 rounded-xl overflow-hidden" style={{ borderCollapse: "inherit" }}>
                        <thead className="">
                            <tr className="text-white bg-blue-700" style={{ background: "" }}>
                                <th className="p-5">
                                    Sl.No
                                </th>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Department
                                </th>
                                <th>
                                    Role
                                </th>
                                <th>

                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {staffs.length ? staffs.map((staff, index) => {
                                return (
                                    <tr className={((index + 1) % 2) === 0 ? "bg-blue-100" : ""}>
                                        <td className="border-2">
                                            {index + 1}
                                        </td>
                                        <td className="p-4 border-2">
                                            <span
                                                className=" underline cursor-pointer hover:text-blue-700"
                                                onClick={() => history.push({ pathname: "staff-view", state: { data: staff } })}
                                            >
                                                {staff.first_name} {staff.last_name}
                                            </span>
                                        </td>
                                        <td className="border-2">
                                            {staff.department}
                                        </td>
                                        <td className="border-2">
                                            {staff.role}
                                        </td>
                                        <td className="border-2">
                                            <div className="flex ml-4">
                                                <FaEdit
                                                    className="mr-4 cursor-pointer hover:text-blue-700"
                                                    onClick={() => history.push({ pathname: "add-staff", state: { data: staff } })}
                                                />
                                                <FaTrash
                                                    className="mr-4 cursor-pointer hover:text-blue-700"
                                                    onClick={() => handleDelete(staff.id)}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }) :
                                <></>}
                        </tbody>

                    </table>
                    {staffs.length === 0 ?
                        <p>
                            No Staffs Found
                        </p>
                        : <></>}
                </div>
            </div>
        </>
    )
}

export default StaffProfiles;