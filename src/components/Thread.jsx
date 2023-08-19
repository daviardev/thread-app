import More from './Icons/More'

export default function Thread ({ user, filterThread }) {
  return (
    <>
      <div className='flex gap-[.75rem] mb-4 pb-[1.25rem] pt-[1.25rem] border-t-[var(--border-card)] border-t'>
        <div className='flex flex-col items-center'>
          <figure className='rounded-full inline-flex justify-center relative shrink-0 w-12 h-12'>
            <img
              src={user.avatar}
              alt={user.name}
              className='rounded-full'
            />
          </figure>
        </div>
        <div className='flex flex-col gap-2 flex-1'>
          <div className='flex justify-between w-full'>
            <div className='flex w-full items-center'>
              <span className='text-[.875rem] font-bold'>
                {user.username}
              </span>
            </div>
            <div className='flex gap-4 items-center'>
              <time className='text-[var(--secondary-text-color)]'>
                {new Date(filterThread.createdAt).toLocaleDateString('es-CO', {
                  day: 'numeric'
                })}
              </time>
              <More />
            </div>
          </div>
          <p>{filterThread.text}</p>
          {filterThread?.image && (
            <div className='mt-2'>
              <img
                src={filterThread?.image}
                alt='mark zukaverga'
                className='border border-[var(--border-card)] mt-0 mb-0 relative rounded-lg'
              />
            </div>
          )}
          <div className='flex gap-[.75rem] mt-[.25rem] mb-[.25rem]'>
            <div className='flex gap-[.75rem] mt-[.5rem] mb-[.5rem]'>
              <svg aria-label='Like' color='' fill='transparent' height='19' role='img' viewBox='0 0 24 22' width='20'>
                <path d='M1 7.66c0 4.575 3.899 9.086 9.987 12.934.338.203.74.406 1.013.406.283 0 .686-.203 1.013-.406C19.1 16.746 23 12.234 23 7.66 23 3.736 20.245 1 16.672 1 14.603 1 12.98 1.94 12 3.352 11.042 1.952 9.408 1 7.328 1 3.766 1 1 3.736 1 7.66Z' stroke='currentColor' stroke-width='2' />
              </svg>

              <svg aria-label='Comment' color='' fill='' height='20' role='img' viewBox='0 0 24 24' width='20'>
                <title>Comment</title>
                <path d='M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='2' />
              </svg>
              <svg aria-label='Repost' color='currentColor' fill='currentColor' height='20' role='img' viewBox='0 0 24 24' width='20'>
                <title>Repost</title>
                <path fill='' d='M19.998 9.497a1 1 0 0 0-1 1v4.228a3.274 3.274 0 0 1-3.27 3.27h-5.313l1.791-1.787a1 1 0 0 0-1.412-1.416L7.29 18.287a1.004 1.004 0 0 0-.294.707v.001c0 .023.012.042.013.065a.923.923 0 0 0 .281.643l3.502 3.504a1 1 0 0 0 1.414-1.414l-1.797-1.798h5.318a5.276 5.276 0 0 0 5.27-5.27v-4.228a1 1 0 0 0-1-1Zm-6.41-3.496-1.795 1.795a1 1 0 1 0 1.414 1.414l3.5-3.5a1.003 1.003 0 0 0 0-1.417l-3.5-3.5a1 1 0 0 0-1.414 1.414l1.794 1.794H8.27A5.277 5.277 0 0 0 3 9.271V13.5a1 1 0 0 0 2 0V9.271a3.275 3.275 0 0 1 3.271-3.27Z' />
              </svg>
              <svg aria-label='Share' color='' fill='rgb(243, 245, 247)' height='20' role='img' viewBox='0 0 24 24' width='20'>
                <title>Share</title>
                <line fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='2' x1='22' x2='9.218' y1='3' y2='10.083' />
                <polygon fill='none' points='11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334' stroke='currentColor' stroke-linejoin='round' stroke-width='2' />
              </svg>
            </div>
          </div>
          <div class='flex gap-[.5rem] items-center'>
            <span class='hover:underline cursor-pointer text-[var(--secondary-text-color)] text-[.875rem]'>
              {
              filterThread.repply_to > 1
                ? `${filterThread.repply_to + ' replies'}`
                : `${filterThread.repply_to + ' reply'
            }`
}
            </span>
            <span className='inline-block restart-positions name-subtitle'>
              ·
            </span>
            <span class='hover:underline cursor-pointer text-[var(--secondary-text-color)] text-[.875rem]'>
              {filterThread.likes.length + ' likes'}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
