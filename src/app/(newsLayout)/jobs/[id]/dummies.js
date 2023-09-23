// const handleSubmit = async (event) => {
//     event.preventDefault();
//     const form = event.target;

//     const resume = form.resume.value;
//     const coverLetter = form.letter.value;
//     const userEmail = user?.email;
//     const applicationData = {jobId, resume, coverLetter, employerEmail: authorEmail, userEmail};
//     try {
//       const response = await axios.post('/api/apply-job', applicationData);
//       // Handle the response here if needed
//       console.log('API call response:', response.data);
//     } catch (error) {
//       console.error('API call error:', error);
//     }

//     // console.log(response.data);
//     // console.log(resume, coverLetter, userEmail);
//     event.target.reset();
// }




// --------------------


<button
    className="px-7 py-4 bg-cyan-500 text-white rounded text-lg"
    onClick={() => window.my_modal_2.showModal()}
>
    Apply Now
</button>


// --------------------

{/* <dialog id="my_modal_2" className="modal">
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
          </dialog> */}


// --------------------
// --------------------