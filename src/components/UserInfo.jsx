import Links from './Links'

export default function UserInfo ({ user }) {
  return (
    <>
      <nav className='pt-4 pb-4'>
        <section className='container-info flex justify-between items-center'>
          <div className='col-[1]'>
            <h2 className='name-title' style={{ lineHeight: 'calc(1.30 * 1em)' }}>
              {user.name}
            </h2>
            <div className='mt-0.5'>
              <div className='flex items-center'>
                <span className='name-subtitle' style={{ lineHeight: 'calc(1.4 * 1em)' }}>
                  {user.username}
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
              <figure className='h-16 w-16 md:w-[84px] md:h-[84px]'>
                <img
                  height='100%'
                  width='100%'
                  alt={`Foto del perfil de ${user.username}`}
                  className='rounded-full object-cover'
                  src={user.avatar}
                />
              </figure>
            </div>
          </div>
        </section>
        <section className='mt-4'>
          <p classname='name-subtitle'>
            {user.bio}
          </p>
        </section>
        <Links user={user} />
      </nav>
    </>
  )
}
