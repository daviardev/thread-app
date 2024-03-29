export default function Modal ({ isOpen, children, user }) {
  if (!isOpen) {
    return null
  }
  return (
    <>
      <div
        onClick={() => navigator.clipboard.writeText(`@${user.username}`)}
        className='border-[var(--border-card)] rounded-2xl z-10 border-[.5px] w-auto bg-[var(--card-color)] cursor-pointer absolute mt-24 -ml-[80px] pl-4 pb-4 pt-4 pr-8 hover:bg-[var(--hover)]'
        style={{
          boxShadow: 'var(--shadow-card)'
        }}
      >
        <span className='font-semibold after:content-[""] before:content-[""]'>
          {children}
        </span>
      </div>
    </>
  )
}
