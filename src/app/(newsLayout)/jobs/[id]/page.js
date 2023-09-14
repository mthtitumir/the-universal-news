"use client";
import Image from "next/image";
import {BiHome, BiPlay, BiMoney, BiShoppingBag, BiArrowToTop, BiSolidBookmark, BiShareAlt, BiVoicemail} from "react-icons/bi";
import { PiClockClockwise } from "react-icons/pi";
import { CgSandClock } from "react-icons/cg";
import { GoPeople, GoClockFill } from "react-icons/go";
import axios from "axios";
import useAuth from "@/hooks/useAuth";
import Spinner from "@/components/ErrorComponents/Spinner";
import useSingleJob from "@/hooks/TanStackHooks/useSingleJob";

const JobDetails = ({ params }) => {
  const {user, loading} = useAuth();
  const id = parseInt(params?.id);
  const [singleJob, singleJobLoading] = useSingleJob(id);
  // console.log(singleJob);
  if(!singleJob){
    return <Spinner />
  }
  // const [jobDetails, setjobDetails] = useState({});
  // useEffect(() => {
  //   const singlejob = async () => {
  //     const resposne = await axios.get(`/api/single-job-details/${idP}`);
  //     setjobDetails(resposne.data);
  //   };
  //   singlejob();
  // }, [idP]);
  const {jobId, status, datePosted, title, companyDetails, companyName, jobLocation, employmentType, applicationDeadline, category, experience, vacancies, requiredSkills, salary, authorEmail, instructions, jobsDescription} = singleJob;

  const handleSubmit = async (event) => {
      event.preventDefault();
      const form = event.target;
      
      const resume = form.resume.value;
      const coverLetter = form.letter.value;
      const userEmail = user?.email;
      const applicationData = {jobId, resume, coverLetter, employerEmail: authorEmail, userEmail};
      try {
        const response = await axios.post('/api/apply-job', applicationData);
        // Handle the response here if needed
        console.log('API call response:', response.data);
      } catch (error) {
        console.error('API call error:', error);
      }
      
      // console.log(response.data);
      // console.log(resume, coverLetter, userEmail);
      event.target.reset();
  }
  

  return (
    <div className="p-4 border c-auto">
      <Image
        height={600}
        width={1000}
        src="https://i.ibb.co/tm7PK2c/r1920.jpg"
        alt="Details Image"
        className="mx-auto my-10"
      ></Image>

      <h1 className="capitalize text-center font-semibold text-2xl">
        {employmentType} {title} at{" "}
        {companyName}
      </h1>

      {/* card */}
      <div className="card w-3/4 mx-auto bg-white mb-3 rounded-sm border-gray-500">
        <div className="card-body">
          <div className=" flex items-center gap-1 border border-gray-200 p-1 rounded-sm w-1/4 text-sm text-gray-500 ">
            <BiArrowToTop className="text-blue-500  text-base"></BiArrowToTop>
            <p>Actively hiring</p>
          </div>
          <h2 className="card-title text-lg">{title}</h2>
          <p className="text-gray-400 font-bold text-sm">{companyName}</p>

          <div className="flex items-center gap-2 mt-3">
            <BiHome className="text-gray-400 text-lg"></BiHome>
            <p className="text-sm text-gray-500 ">{jobLocation}</p>
          </div>

          <div className="flex justify-start gap-10 items-center mt-3">
            <div className="flex items-center gap-2">
              <BiPlay className="text-gray-400 text-lg"></BiPlay>
              <p className="text-sm text-gray-500 ">{"Tomorrow"}</p>
            </div>
            <div className="flex items-center gap-2">
              <BiMoney className="text-gray-400 text-lg"></BiMoney>
              <p className="text-sm text-gray-500 ">
                {salary} /year
              </p>
            </div>
            <div className="flex items-center gap-2">
              <BiShoppingBag className="text-gray-400 text-lg"></BiShoppingBag>
              <p className="text-sm text-gray-500 ">{experience}</p>
            </div>
            <div className="flex items-center gap-2">
              <CgSandClock className="text-gray-400 text-lg"></CgSandClock>
              <p className="text-sm text-gray-500 ">{applicationDeadline}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-green-100 w-28 py-1 rounded-sm mb-3">
            <PiClockClockwise className=" text-green-500 "></PiClockClockwise>
            <p className="text-sm text-green-500 ">{datePosted}</p>
          </div>

          <div className="flex justify-between items-center text-xl text-blue-600">
            <div className="flex items-center gap-2 text-gray-500">
              <GoPeople className="text-xl "></GoPeople>
              <p className="text-base">28 application</p>
            </div>

            <div className="flex items-center gap-2">
              <BiSolidBookmark></BiSolidBookmark>
              <BiShareAlt></BiShareAlt>
            </div>
          </div>
          <hr />

          <p className="text-base font-semibold my-4">About {companyName}</p>
          <p className="text-gray-500 text-sm">{companyDetails}</p>
          <div className="border p-3 rounded-lg md:mx-3">
            <p className="text-sm font-semibold my-2 text-gray-600">
              Activity on Universal Jobs
            </p>

            <div className="flex items-center gap-5 text-gray-500 text-base ">
              <div className="flex items-center gap-2">
                <GoClockFill></GoClockFill>
                <p>Hiring since {applicationDeadline}</p>
              </div>
              <div className="flex items-center gap-2">
                <BiVoicemail></BiVoicemail>
                <p>4 opportunities Posted</p>
              </div>
            </div>
          </div>

          <p className="text-base font-semibold mt-4">About The Job</p>
          <p className="text-gray-500 text-sm">{title}</p>

          <p className="text-gray-500 text-sm mt-8 mb-4">
            {" "}
            The ideal candidate has a thorough understanding of WordPress
            development standards and best practices. Strong front-end skills
            and experience creating and working with custom themes is required.
          </p>

          <p className="text-gray-500 text-sm mb-4">
            Responsibilities and Duties At least 1 year WordPress and front-end
            experience Strong knowledge of PHP Developing custom elements/themes
            in visual studio Building UI is to specifications based on provided
            PSD mockups Responsive design fundamentals Responsive frameworks
            (Foundation, Bootstrap, etc) Setting up custom fields / ACF plugin
            and using inside templates Setting up custom post types and using
            inside templates Add features/functionality via custom
            Javascript/jQuery Implementing plugins when plugins are ideal (and
            knowing when they are not) Implementing 3rd-party libraries and
            basic APIs Required Experience, Skills and Qualifications Possesses
            strong attention to detail Hits deadlines Understanding of UX is a
            plus
          </p>

          <p className="text-base font-semibold mt-4">Skill(s) required</p>
          <div className="flex items-center gap-4 text-center md:w-2/4">
            {requiredSkills?.map((skill) => (
              <p className="badge" key={skill}>{skill}</p>
            ))}
          </div>

          <p className="text-base font-semibold mt-4">Salary</p>
          <p className="text-gray-500 text-sm mb-4">{salary}</p>

          <p className="text-base font-semibold ">Number of openings</p>
          <p className="text-gray-500 text-sm mb-4">{vacancies}</p>

          <div className="mx-auto text-center w-full">
            <button
              className="px-7 py-4 bg-cyan-500 text-white rounded text-lg"
              onClick={() => window.my_modal_2.showModal()}
            >
              Apply Now
            </button>
          </div>

          {/* Open the modal using ID.showModal() method */}
          <dialog id="my_modal_2" className="modal">
            <form method="dialog" onSubmit={handleSubmit} className="modal-box">
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
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
