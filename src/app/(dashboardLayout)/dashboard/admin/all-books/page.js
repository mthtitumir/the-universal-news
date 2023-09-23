import DashboardBanner from "@/components/DashboardComponents/DashboardBanner";
import DeleteButton from "@/components/DashboardComponents/DeleteButton";
import useModeratorAllBooks from "@/hooks/TanStackHooks/ModeratorHooks/useModeratorAllBooks"
import { GetAllBooks } from "@/services/GetAllNews";

const AllBooks = async () => {
  const allBooks = await GetAllBooks();
  return (
    <div className='p-3 md:pr-0'>
      <DashboardBanner text={`All Books - ${allBooks?.length}`} />
      <div className='mt-5 border rounded-lg border-cyan-500 p-3'>
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
                <th>Moderator</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className=''>
              {
                allBooks?.map(books => (
                  <tr className="" key={books?.id}>
                    <td>{books?.id}</td>
                    <td>{books?.name}</td>
                    <th>{books?.ratings}</th>
                    <td>{books?.category}</td>
                    <td>{books?.price}</td>
                    <td>{books?.authorName}</td>
                    <td>{books?.publisher}</td>
                    <td>{books?.moderatorEmail}</td>
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

export default AllBooks