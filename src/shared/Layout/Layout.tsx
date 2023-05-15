import Footer from '../../widgets/Footer/Footer'
import Header from '../../widgets/Header/Header'

interface IProps {
  children: React.ReactNode
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
