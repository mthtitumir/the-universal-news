"use client"
import MyModal from "@/components/HandleModal/Modal"
import useAuth from "@/hooks/useAuth";
import axios from "axios";
import { useState } from "react"
import toast from "react-hot-toast";

const ApplyModal = ({ data }) => {
    const { jobId, title, companyName, category, authorEmail } = data;
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useAuth();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const resume = form.resume.value;
        const coverLetter = form.letter.value;
        const userEmail = user?.email;
        const toastId = toast.loading("Loading...");
        const applicationData = { jobId, resume, coverLetter, employerEmail: authorEmail, userEmail };
        try {
            const response = await axios.post('/api/apply-job', applicationData);
            // Handle the response here if needed
            // console.log('API call response:', response.data);
            if (response.data.insertedId) {
                toast.dismiss(toastId);
                toast.success("Applied successfully!");
            } else {
                toast.dismiss(toastId);
                toast.error(error.message || "Application failed!");
            }
        } catch (error) {
            console.error('API call error:', error);
            toast.dismiss(toastId);
            toast.error(error.message || "Application failed!");
        }

        event.target.reset();
    }
    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} className="primary-btn">Apply Job</button>
            <>
                <MyModal setIsOpen={setIsOpen} isOpen={isOpen}>
                    <form onSubmit={handleSubmit} >
                        <div className="bg-gray-100 px-3 py-5 rounded">
                            <p className="text-base font-semibold ">
                                Applying for {title} {category}
                            </p>
                            <p className="text-gray-500 text-sm mb-4">{companyName}</p>
                        </div>
                        <hr />

                        <p className="text-base font-semibold mt-4">Your Resume</p>
                        <p className="text-gray-500 text-sm mb-2">
                            Your current resume will be submitted along with this
                            application.{" "}
                        </p>
                        <input
                            type="text"
                            name="resume"
                            placeholder="Your resume Link"
                            className="border rounded w-2/4 px-2 h-9"
                        />

                        <p className="text-base font-semibold mt-4">Cover letter *</p>
                        <p className="text-gray-500 text-sm mb-4">
                            Why should you be hired for this role?{" "}
                        </p>
                        <textarea
                            name="letter"
                            placeholder="Submit Your Cover Latter"
                            className="border w-full h-28 p-3"
                        ></textarea>

                        <p className="text-base font-semibold mt-4">Your availability</p>
                        <p className="text-gray-500 text-sm mb-4">
                            Confirm your availability
                        </p>
                        <div className="flex items-center gap-1">
                            <input type="radio" />
                            <label className="text-gray-500 text-sm">
                                Yes, I am available for work from home job, starting
                                immediately
                            </label>
                        </div>

                        <div className="flex items-center gap-1 mt-2">
                            <input type="radio" />
                            <label className="text-gray-500 text-sm">
                                No (Please specify your availability)
                            </label>
                        </div>

                        <div className="mx-auto w-3/4 text-center py-4">
                            <button className="primary-btn">Submit Application</button>
                        </div>
                    </form>
                </MyModal>
            </>
        </>
    )
}

export default ApplyModal