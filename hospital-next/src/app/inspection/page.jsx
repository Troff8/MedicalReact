import Menu from '../components/Menu/Menu';
import HeaderPage from '../components/HeaderPage/HeaderPage';
import { url } from '../utils/const/url';

export default function Page() {
    return (
        <>
            <Menu
                items={url}
            />
            <HeaderPage text={'Профосмотры'} />
            <p>inspection</p>
        </>
    );
}
