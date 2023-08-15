export default function Modal ({ show }) {
  return (
    <>
      <div className='top-0 left-0 absolute -mr-[9999px]' style={{ transform: show ? 'translate(743px,221px)' : 'translate(-100%, 0px)' }}>
        <div className='restart-positions'>
          <div className=''>
            <div className=''>
              <div className='' style={{ transformOrigin: 'right top' }}>
                <div className=''>
                  <div className=''>
                    <span className='' style={{ lineHeight: 'calc(1.4 * 1em)' }}>
                      Copiar enlace
                    </span>
                  </div>
                  <div className='' />
                </div>
                <hr className='' />
                <a className='' href=''>
                  <div className=''>
                    <span className='' style={{ lineHeight: 'calc(1.4 * 1em)' }}>
                      Reportar
                    </span>
                  </div>
                  <div className='' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div />
      </div>
    </>
  )
}
