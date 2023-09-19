"use client"
import DashboardBanner from "@/components/DashboardComponents/DashboardBanner";
import DeleteButton from "@/components/DashboardComponents/DeleteButton";
import EditBook from "@/components/DashboardComponents/Moderator/EditBookModal";
import MyModal from "@/components/HandleModal/Modal";
import useModeratorAllBooks from "@/hooks/TanStackHooks/ModeratorHooks/useModeratorAllBooks"
import { useState } from "react";
import { BiEdit } from "react-icons/bi";

const ModeratorAllBooks = () => {
  const [myBooks] = useModeratorAllBooks();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='p-3 md:pr-0'>
      <DashboardBanner text={"My Books"} />
      <div className='mt-5 border rounded-lg border-cyan-500 py-2'>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Ratings</th>
                <th>Category</th>
                <th>Price</th>
                <th>AuthorName</th>
                <th>Publisher</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className=''>
              {
                myBooks?.map(books => (
                  <tr className="" key={books?.id}>
                    <td>{books?.id}</td>
                    <td>{books?.name}</td>
                    <th>{books?.ratings}</th>
                    <td>{books?.category}</td>
                    <td>{books?.price}</td>
                    <td>{books?.authorName}</td>
                    <td>{books?.publisher}</td>
                    <>
                      <td className="text-center text-2xl text-cyan-600" onClick={() => setIsOpen(!isOpen)}>
                        <BiEdit />
                      </td>
                      <MyModal isOpen={isOpen} setIsOpen={setIsOpen} >
                        <EditBook singleBook={books} />
                      </MyModal>
                    </>
                    <DeleteButton path={`/api/moderator/book-delete-edit/${books?.id}`} />
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ModeratorAllBooks