export default function Options () {
  return (
    <>
      <div className='grid w-full items-center' style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
        <a href='#' className='h-12 text-center name-subtitle current'>
          Hilos
        </a>
        <a href='#' className='text-center h-12 name-subtitle'>
          Respuestas
        </a>
      </div>
    </>
  )
}
