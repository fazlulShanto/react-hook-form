import { useFormContextCreateCourse } from "@/forms"
import { useFieldArray } from "react-hook-form"
import ManageNotes from "./ManageNotes"

const ManageChapters = () => {
    const {
      register,
      control,
      formState: { errors },
    } = useFormContextCreateCourse()
  
    const { append, remove, fields } = useFieldArray({
      name: 'chapters',
      control,
    })
    return (
      <div className=' space-y-4 '>
        {/* Loop through chapter fields */}
        {fields.map((chapter, chapterIndex) => {
          return (
            <div
              className='p-6 bg-zinc-900 shadow-lg rounded-lg space-y-3'
              key={chapter.id}
            >
              <div className='flex justify-between'>
                <div className='text-lg mb-2 font-semibold'>Chapters</div>{' '}
                <button
                  type='button'
                  onClick={() => {
                    // Remove: chapter index
                    remove(chapterIndex)
                  }}
                  className='text-red-400 text-xs border border-red-700 rounded-md px-2 hover:bg-white/10'
                >
                  Remove chapter
                </button>
              </div>
  
              <label title={'Title'}>
                <div className='mb-1'>Chapter title</div>
                <input
                  className='border-2 border-gray-600  rounded-lg px-2 py-1 bg-transparent'
                  placeholder='Enter chapter title...'
                  // Register: chapter title
                  {...register(`chapters.${chapterIndex}.title`)}
                />
                <div className='text-red-600'>
                  {/* Error: Chapter title */}
                  {errors.chapters?.[chapterIndex]?.title?.message}
                </div>
              </label>
              <ManageNotes chapterIndex={chapterIndex} />
              <div className='text-red-600 text-sm mt-1'>
                {/* Error: Chapter notes */}
                {errors.chapters?.[chapterIndex]?.notes?.message}
              </div>
            </div>
          )
        })}

        <div className="flex w-full justify-center mt-4">

  
        <button
          type='button'
          onClick={() => {
              // Append: notes
              append({ notes: [], title: '' })
            }}
            className='text-center text-gray-200 px-4 rounded-lg underline-offset-4 py-2  border border-green-500 hover:bg-white/10'
            >
          add chapter
        </button>
            </div>
      </div>
    )
  }

  export default ManageChapters;