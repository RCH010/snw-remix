import type { ComponentPropsWithoutRef } from 'react';

function PostForm({method= 'post', ...props}: ComponentPropsWithoutRef<'form'>) {


  return (
    <form method={method} className='flex flex-col gap-4' {...props}>
      <div className='flex flex-col'>
        <label htmlFor='title' className='mb-2 text-gray-600'>
          Title
        </label>
        <input
          className='p-4'
          name='title'
          placeholder='Title of your post'
        />
        
      </div>
      <div className='flex flex-col'>
        <label htmlFor='body' className='mb-2 text-gray-600'>
          Body
        </label>
        <textarea
          className='p-4'
          name='body'
          placeholder='Write something amazing'
        />
      </div>
      
      <button
        type='submit'
        className='transition rounded text-blue-700 font-bold py-4 px-6 transparent hover:bg-gray-100'
      >
        Create Post
      </button>
    </form>
  );
}

export default PostForm;
