export default function InputPost ({ user }) {
  return (
    <>
      <div
        className='sticky rounded-lg mb-6 bg-[var(--background)]'
        style={{ boxShadow: 'rgba(0, 0, 0, .25) 0 0px 55px, rgba(0, 0, 0, .12) 0 -12px 30px, rgba(0, 0, 0, .12) 0 4px 6px, rgba(0, 0, 0, .17) 0 12px 13px, rgba(0, 0, 0, .09) 0 -3px 3px' }}
      >
        <div className='flex items-center justify-start py-4 max-w-[500px] mx-auto border-b border-b-[var(--border-card)]'>
          <div className='text-[16px] font-semibold ml-4'>
            Nuevo hilo
          </div>
        </div>

        <div className='max-h-[100vh-200px] px-3 max-w-[500px] mx-auto'>
          <div className='py-2 w-full'>
            <div className='flex items-center'>
              <div className='flex items-center'>
                <img
                  src={user.avatar}
                  alt={`Foto del perfil ${user.username}`}
                  className='rounded-full h-[35px]'
                />
              </div>
            </div>
            <div className='relative flex items-center w-full'>
              <div className='w-[42px] mx-auto'>
                <div className='absolute ml-4 mt-1 top-0 w-[1px] bg-[var(--border-card)] h-full' />
              </div>
              <div className='w-[calc(100%-45px)] text font-light'>
                <div className='text-[var(--primary-text-color)] bg-[var(--background)]'>
                  <textarea
                    style={{ resize: 'none' }}
                    placeholder='Inicia un hilo...'
                    className='w-full bg-[var(--background)] outline-none pt-2'
                  />
                </div>
              </div>
              <button className='font-bold text-lg pl-4 border-[var(--border-card)] rounded-2xl z-10 border-[.5px] bg-[var(--card-color)] py-2 pr-4 hover:bg-[var(--hover)]'>
                Publicar
              </button>
            </div>
            <div className='mt-4' />
          </div>
        </div>
      </div>
    </>
  )
}
