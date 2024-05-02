'use client'
import { useFormContextCreateCourse } from '@/forms'
import ManageChapters from './ManageChapters'
import CourseTitle from './CourseTitle'

export const NewCourse = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useFormContextCreateCourse()

  const onSubmit = handleSubmit((data) => {
    console.log('Form submitted: 🎉', data)
  });
  return (
    
      <div className='py-6 px-4 bg-slate-800 mt-8 text-white shadow-sm rounded-lg'>
        <div className='text-xl mb-2 font-bold'>New Course</div>
        <form
          className='space-y-3'
          onSubmit={onSubmit}
        >
          <CourseTitle />

          <ManageChapters />

          <div className='text-red-600 text-sm mt-1'>
            {/* Error: Course chapters */}
            {errors.chapters?.message}
          </div>

          <button
            className='px-4 py-2 bg-blue-600 rounded-lg text-white'
            type='submit'
          >
            Submit
          </button>
        </form>
      </div>
    
  )
}


