import logo from './GloboLogo.png';
import { useHistory } from 'react-router';
import '../index.css';

const Header = ({subtitle}) => {
    const history = useHistory();
    const navHome = () => {
        history.push('/');
    }
    return ( 
    <header className="row">
     <div className="col-md-5">
         <img src={logo} className="logo pointer" alt="logo" onClick={navHome}/>
     </div>
     <div className="col-md-7 mt-5 subtitle">
         {subtitle}
     </div>
 </header>   
)};

export default Header;