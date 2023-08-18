export default function InputPost () {
  return (
    <>
      <div id='CreatePost' className=' z-50 bottom-0 h-full w-full overflow-hidden'>
        <div className='bg-[var-[(--background)]] h-full w-full text-[var(--primary-text-color)] overflow-auto'>
          <div className='flex items-center justify-start py-4 max-w-[500px] mx-auto border-b border-b-gray-700'>
            <button className='rounded-full px-2'>
              X
            </button>
            <div className='text-[16px] font-semibold'>Nuevo hilo</div>
          </div>

          <div id='Post' className='z-40 bottom-0 max-h-[100vh-200px] w-full px-3 max-w-[500px] mx-auto'>
            <div className=' py-2 w-full'>
              <div className='flex items-center'>
                <div className='flex items-center'>
                  <img
                    src='https://yt3.ggpht.com/09AlR_MLxWgWp4842t535WEhtT_SQ7TstD1TeKDUO3m979R05vEQ_YGBrHO-eKDC3xJJj4cX=s88-c-k-c0x00ffffff-no-rj'
                    className='rounded-full h-[35px]'
                  />
                </div>
              </div>
              <div className='relative flex items-center w-full'>
                <div className='w-[42px] mx-auto'>
                  <div className='absolute ml-4 mt-1 top-0 w-[1px] bg-gray-700 h-full' />
                </div>
                <div className='bg-black rounded-lg w-[calc(100%-50px)] text font-light'>
                  <div className='pt-2 text-gray-300 bg-black w-full'>
                    <textarea
                      style={{ resize: 'none' }}
                      placeholder='Inicia un hilo...'
                      className='w-full bg-black outline-none'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if='fileDisplay' className='mt-16' />
          <button
            className='fixed bottom-0 font-bold text-lg w-full bg-black inline-block float-right p-4 border-t border-t-gray-700'
          >
            <div v-if='!isLoading'>Post</div>

          </button>
        </div>
      </div>
    </>
  )
}
