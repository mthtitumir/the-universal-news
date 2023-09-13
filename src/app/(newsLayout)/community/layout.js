import CommunityLeftBar from "@/components/CommunityComponents/CommunityLeftBar";
import CommunityRightBar from "@/components/CommunityComponents/CommunityRightBar";

export const metadata = {
    title: 'Community | The Universal News',
    description: 'Breaking Borders, Breaking News: Where the World Comes to Know',
  }
  
const CommunityLayout = ({children}) => {
    return (
        <div className="c-auto mt-5">
            <div className="grid md:grid-cols-12">
                <div className="md:col-span-2">
                    <CommunityLeftBar />
                </div>
                <div className="md:col-span-7">
                    {children}
                </div>
                <div className="md:col-span-3">
                    <CommunityRightBar />
                </div>
            </div>
        </div>
    );
};

export default CommunityLayout;