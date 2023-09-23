import Image from "next/image";
import {BiHome, BiPlay, BiMoney, BiShoppingBag, BiArrowToTop, BiSolidBookmark, BiShareAlt, BiVoicemail} from "react-icons/bi";
import { PiClockClockwise } from "react-icons/pi";
import { CgSandClock } from "react-icons/cg";
import { GoPeople, GoClockFill } from "react-icons/go";
import { GetSingleJobsFromDB } from "@/services/GetAllNewsFromDB";
import ApplyModal from "./ApplyModal";

const JobDetails = async ({ params }) => {
  const data = await GetSingleJobsFromDB(parseInt(params?.id));
  console.log(data, "line 10");
 
  const {jobId, status, datePosted, title, companyDetails, companyName, jobLocation, employmentType, applicationDeadline, category, experience, vacancies, requiredSkills, salary, authorEmail, instructions, jobsDescription} = data;

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

          <div className="flex items-center gap-2 bg-green-100 md:w-1/2 py-1 rounded-sm mb-3">
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
            <ApplyModal data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
