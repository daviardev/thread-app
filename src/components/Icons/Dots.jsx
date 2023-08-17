const Dots = props => (
  <svg
    width={24}
    height={24}
    fill='currentColor'
    className='relative block'
    aria-label='M\xE1s'
    viewBox='0 0 24 24'
    {...props}
  >
    <circle
      cx={12}
      cy={12}
      r={10}
      fill='none'
      stroke='var(--primary-text-color)'
      strokeWidth={2}
    />
    <title>Más</title>
    <path
      fillRule='evenodd'
      d='M7.5 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM16.5 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z'
      clipRule='evenodd'
    />
  </svg>
)
export default Dots
