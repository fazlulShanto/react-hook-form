"use client"
import { useFormContextCreateCourse } from "@/forms";
import React from "react";

const CourseTitle: React.FC = () => {
    const {
        register,
        formState: { errors },
    } = useFormContextCreateCourse()
    return (<label title='Title'>
        <div className='mb-2'>Title</div>
        <input
            placeholder='Enter course title'
            className='border-2 border-gray-600  rounded-lg px-2 py-1 bg-transparent'
            // Register: course title
            {...register('title')}
        />
        <div className='text-red-600 text-sm mt-1'>
            {/* Error: Course title */}
            {errors.title?.message}
        </div>
    </label>);
}

export default CourseTitle;