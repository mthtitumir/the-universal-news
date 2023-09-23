const DashCard = ({matrix, quantity}) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 bg-gradient-to-r from-[#1E1D74] via-[#03030A] to-[#1E1D74] shadow-xl py-3 rounded-lg hover:transition hover:duration-800 hover:ease-in-out">
            <h1 className="text-xl md:text-2xl text-white">{matrix}</h1>
            <h1 className="text-2xl md:text-4xl text-pink-500">{quantity}</h1>
        </div>
    );
};
export default DashCard;