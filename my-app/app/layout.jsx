import '@styles/globals.css'
import Menu from '@components/menu'

const RootLayout = ({children}) => {
  return (
    <html>
        <body>
            <Menu />
            {children}
        </body>
    </html>
  )
}

export default RootLayout