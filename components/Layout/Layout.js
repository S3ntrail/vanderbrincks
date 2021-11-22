import Navbar from 'components/Global/Navbar/navbar'

const Layout = ({ children }) => {
  return(
    <div>
      <Navbar />
        {children}
    </div>
  )
}

export default Layout