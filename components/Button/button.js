const Button = prop => {

  return(
    <div className="py-2 px-6 bg-gradient-to-r from-indigo-300 to-indigo-600 rounded-lg">
      <p>{prop.title}</p>
    </div>
  )
}

export default Button