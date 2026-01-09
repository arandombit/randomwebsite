import confetti from 'canvas-confetti'

export default props => (
  <button
    onClick={() => confetti()}
    className='appearance-none py-2 px-4 bg-blue-400 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-opacity-75'
  >
    { props.children }
  </button>
)
