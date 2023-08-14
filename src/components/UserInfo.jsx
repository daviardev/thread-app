import Bio from './Bio'
import Links from './Links'

export default function UserInfo () {
  return (
    <>
      <nav className='pt-4 pb-4 screen'>
        <section className='container-info flex justify-between items-center'>
          <div className='col-[1]'>
            <h2 className='name-title' style={{ lineHeight: 'calc(1.30 * 1em)' }}>
              Jerson David Silva Arjona
            </h2>
            <div className='mt-0.5'>
              <div className='flex items-center'>
                <span className='name-subtitle' style={{ lineHeight: 'calc(1.4 * 1em)' }}>
                  daviardev
                </span>
                <div className='ml-1'>
                  <span className='content-trhead'>
                    threads.net
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-[2]'>
            <div className='content-image'>
              <figure className='h-16 w-16'>
                <img
                  height='100%'
                  width='100%'
                  alt='Foto del perfil de daviardev'
                  className='rounded-full object-cover'
                  src='https://yt3.ggpht.com/09AlR_MLxWgWp4842t535WEhtT_SQ7TstD1TeKDUO3m979R05vEQ_YGBrHO-eKDC3xJJj4cX=s88-c-k-c0x00ffffff-no-rj'
                />
              </figure>
            </div>
          </div>
        </section>
        <Bio />
        <Links />
      </nav>
    </>
  )
}
