import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from '../../Pages/MainPage'
import SpecialistsPage from '../../Pages/SpecialistsPage'
import ServicesPage from '../../Pages/ServicesPage'
import PreviewsPage from '../../Pages/PreviewsPage'
import ContactsPage from '../../Pages/ContactsPage'
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
