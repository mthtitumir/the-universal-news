"use client"
import axios from "axios";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const DeleteNews = ({ id }) => {
    const handleDelete = async (id) => {
        // console.log(id);
        const swual = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
        if (swual.isConfirmed) {
            const res = await axios.delete(`/api/delete-news/${id}`);
            try {
                // If the request is successful, the response data will be returned.
                const data = await res.data;
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
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
            <td onClick={() => { handleDelete(id) }} className="text-center text-2xl text-red-600"><MdDelete /></td>
        </>
    )
}

export default DeleteNews