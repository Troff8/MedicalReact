import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import styles from './styles.css'
const App = () => {
    const isMobile = screen.width < 500
    return (
        <div className={styles.app}>
            <Header isMobile={isMobile} />
            <Main />
            <Footer />
        </div>
    )
}

export default App
