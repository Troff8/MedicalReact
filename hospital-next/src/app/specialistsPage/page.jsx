import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import HeaderPage from '../components/HeaderPage/HeaderPage';

export default function Page() {
    return (
        <>
            <Header />
            <Menu
                items={[
                    {
                        title: 'Главная',
                        url: '#',
                    },
                    {
                        title: 'Специалисты',
                        url: 'specialistsPage',
                    },
                    {
                        title: 'Услуги',
                        url: 'servicesPage',
                    },
                    {
                        title: 'Профосмотры',
                        url: 'inspectionPage',
                    },
                    {
                        title: 'Контакты',
                        url: 'inspectionPage',
                    },
                ]}
            />
            <HeaderPage />
        </>
    );
}
