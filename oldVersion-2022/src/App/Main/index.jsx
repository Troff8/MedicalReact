import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from '../../Pages/Main'
import SpecialistsPage from '../../Pages/Specialists'
import ServicesPage from '../../Pages/Services'
import PreviewsPage from '../../Pages/Previews'
import ContactsPage from '../../Pages/Contacts'
import styles from './styles.css'

const Main = () => {
    return (
        <div className={styles.main}>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/specialists' element={<SpecialistsPage />} />
                <Route path='/services' element={<ServicesPage />} />
                <Route path='/previews' element={<PreviewsPage />} />
                <Route path='/contacts' element={<ContactsPage />} />
            </Routes>
        </div>
    )
}

export default Main
