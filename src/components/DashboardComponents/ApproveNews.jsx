"use client"

import axios from "axios";
import { FcApproval } from "react-icons/fc";
import Swal from "sweetalert2";

const ApproveNews = ({ id }) => {
    const handleApprove = async (id) => {
        console.log(id);
        const swual = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Approve it!'
        })
        if (swual.isConfirmed) {
            const res = await axios.patch(`/api/approve-news/${id}`);
            try {
                // If the request is successful, the response data will be returned.
                const data = await res.data;
                if (data.modifiedCount === 1) {
                    Swal.fire(
                        'Approved!',
                        'Your approved a news!',
                        'success'
                    )
                }
            } catch (error) {
                // If the request fails, the error object will be thrown.
                console.error(error);
            }
        }

    }
    return (
        <>
            <td onClick={() => { handleApprove(id) }} className=" text-2xl "><FcApproval /></td>
        </>
    );
};

export default ApproveNews;