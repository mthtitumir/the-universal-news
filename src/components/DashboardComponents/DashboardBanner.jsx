const DashboardBanner = ({text}) => {
    return (
        <div style={{ backgroundImage: `url("https://i.ibb.co/gD5PQVY/Green-Minimalist-Flatlay-Linked-In-Banner-3.png")`, backgroundSize: 'cover', backgroundPosition: 'center' }} className=' border border-cyan-500 h-40 rounded-lg flex items-center justify-center relative'>
            <h1 className="text-3xl text-white font-semibold absolute bottom-6">{text}</h1>
        </div>
    );
};

export default DashboardBanner;