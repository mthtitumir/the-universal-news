import CricketCompo from "@/components/SportsComponents/CricketCompo/CricketCompo"

const SportsSubcategory = ({ params }) => {
    if (params.subcategory === 'cricket') {
        return (
            <CricketCompo />
        )
    }
    return (
        <div>SportsSubcategory</div>
    )
}

export default SportsSubcategory;