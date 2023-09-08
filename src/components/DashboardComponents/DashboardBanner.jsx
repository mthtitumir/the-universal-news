const DashboardBanner = ({text}) => {
    return (
        <div className=' border border-cyan-500 h-40 rounded-lg flex items-center justify-center'>
            <h1 className="text-3xl text-red-600 font-semibold animate-pulse">{text}</h1>
        </div>
    );
};

export default DashboardBanner;