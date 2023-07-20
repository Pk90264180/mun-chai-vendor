import { FC } from 'react';
import { Link, Stack } from '@mui/material';
import './Footer.css';
import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

const Footer: FC = () => {
  //   const history = useLocation();
  // const host2 = history.pathname;
  const path = window.location.pathname;

  const navigate = useNavigate();

  const handleClick = (e: React.SyntheticEvent, url: string) => {
    const links = document.querySelectorAll('a');
    links.forEach((link) => {
      if (link === e.currentTarget) {
        link.classList.add('highlight');
      } else {
        link.classList.remove('highlight');
      }
    });

    navigate(url);
  };

  return (
    <Stack
      id="footer"
      direction="row"
      justifyContent="space-around"
      sx={{ boxShadow: '0 -5px 5px #aaa', margin: '0 30px', padding: '20px 0' }}
    >
      <Link
        className={
          path === '/neworder' || path === '/'
            ? 'highlight'
            : +'' + 'bottom-link  '
        }
        onClick={(e) => handleClick(e, '/neworder')}
      >
        <img src="/new-orders-icon.png" alt="New Orders Icon" />
        <span>New Orders</span>
      </Link>

      <Link
        className={path === '/accepted' ? 'highlight' : +'' + 'bottom-link  '}
        onClick={(e) => handleClick(e, '/accepted')}
      >
        <img src="/accepted-icon.png" alt="Accepted Icon" />
        <span>Accepted</span>
      </Link>

      <Link
        className={path === '/delivered' ? 'highlight' : +'' + 'bottom-link  '}
        onClick={(e) => handleClick(e, '/delivered')}
      >
        <img src="/delivered-icon.png" alt="Delivered Icon" />
        <span>Delivered</span>
      </Link>
    </Stack>
  );
};

export default Footer;
