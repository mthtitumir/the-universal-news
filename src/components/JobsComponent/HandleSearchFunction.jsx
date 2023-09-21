"use client";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
const HandleSearchFunction = () => {
  const [inputValue, setInputValue] = useState("");
  const handelChange = (e) => {
    setInputValue(e.target.value);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data.jobQuery)
    const query = data?.jobQuery;
    try {
      const res = await axios.get(`/api/search-job?search=${query}`);
      console.log(res.data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1 my-3">
          <label className="text-gray-600 text-base">Jobs</label>
          <input
            type="text"
            name="jobQuery"
            defaultValue={inputValue}
            onChange={handelChange}
            placeholder="Search Jobs"
            className="border w-3/4 py-2 text-zinc-500 rounded-sm px-3"
            {...register("jobQuery", { required: true })}
          />
        </div>
        <button className="primary-btn" type="submit">
          Search Jobs
        </button>
      </form>
    </div>
  );
};

export default HandleSearchFunction;
