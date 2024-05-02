import { useFormContextCreateCourse } from "@/forms"
import { useFieldArray } from "react-hook-form"

const ManageNotes = ({ chapterIndex }: { chapterIndex: number }) => {
    const {
      register,
      control,
      formState: { errors },
    } = useFormContextCreateCourse()
  
    const { append, remove, fields } = useFieldArray({
      name: `chapters.${chapterIndex}.notes`,
      control,
    })
    return (
      <div className=' space-y-4'>
        {/* Loop through notes fields  */}
        {fields.map((note, notesIndex) => {
          return (
            <div key={note.id} className='py-4 bg-slate-700 p-6 rounded-lg shadow-xl'>
              <div>
                <div className='flex justify-between'>
                  <div className='mb-2 font-semibold'>Note</div>
                  <button
                    type='button'
                    onClick={() => {
                      // Remove: notes index
                      remove(notesIndex)
                    }}
                    className='text-red-400 text-xs underline underline-offset-4'
                  >
                    Remove note
                  </button>
                </div>
                <label title={'Title'} className='inline-block'>
                  <div className='mb-1'>Content</div>
                  <input
                    placeholder='Enter note'
                    className='border-2 border-gray-600  rounded-lg px-2 py-1 bg-transparent'
                    //   Register: Chapter notes content
                    {...register(
                      `chapters.${chapterIndex}.notes.${notesIndex}.content`,
                    )}
                  />
                  <div className='text-red-600'>
                    {/* Error: Chapter notes content */}
                    {
                      errors.chapters?.[chapterIndex]?.notes?.[notesIndex]
                        ?.content?.message
                    }
                  </div>
                </label>
              </div>
            </div>
          )
        })}
  
        <button
          type='button'
          onClick={() => {
            // Append: Notes content
            append({ content: '' })
          }}
          className='text-gray-600 text-center w-full border border-rose-800 text-gray-300 rounded-lg py-2'
        >
          add note
        </button>
      </div>
    )
  }
  
  export default ManageNotes;