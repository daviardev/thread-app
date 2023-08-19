export default function Options ({ viewThreadFeed, setViewThreadFeed }) {
  return (
    <>
      <div className='grid w-full items-center' style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
        <a className={viewThreadFeed ? 'text current' : 'text-[var(--secondary-text-color)] text'} onClick={() => setViewThreadFeed(true)}>
          Hilos
        </a>
        <a className={!viewThreadFeed ? 'text current' : 'text-[var(--secondary-text-color)] text'} onClick={() => setViewThreadFeed(false)}>
          Respuestas
        </a>
      </div>
    </>
  )
}
