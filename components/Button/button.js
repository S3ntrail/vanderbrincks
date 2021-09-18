const Button = prop => {

  return(
    <button type="button" className="
      transition py-2 px-6 rounded-lg duration-700 ease-in-out bg-gradient-to-r from-indigo-300 to-indigo-600 
      hover:from-indigo-400 hover:to-indigo-600 transform 
      hover:-translate-y-2 hover:scale-110"
    >
      <p className="text-white">{prop.title}</p>
    </button>
  )
}

export default Button

// py-2 px-6 bg-gradient-to-r from-indigo-300 to-indigo-600 rounded-lg hover:bg-purple-600