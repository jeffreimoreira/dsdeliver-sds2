import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg'; 
import { ReactComponent as LinkedInIcon } from './linkedin.svg'; 
import { ReactComponent as InstagramIcon } from './instagram.svg'; 

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ªed. do evento 
            Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior"
                    target="_new">
                        <YouTubeIcon />
                </a>
                <a href="https://www.linkedin.com/school/devsuperior"
                    target="_new">
                    <LinkedInIcon />
                </a>
                <a href="https://www.instagram.com/devsuperior.ig"
                    target="_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    );
}

export default Footer;