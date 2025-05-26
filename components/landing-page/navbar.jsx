import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <div className="container landing-page-navbar">
        <div className="navbar-logo-div">
          <Link href="/" className="navbar-logo">
            <Image
              src="/logo.svg"
              alt="logo"
              width={185}
              height={100}
              className="navbar-logo-img"
            />
          </Link>
        </div>
        <div className="download-btn-div">
          <button className="download-btn">
            <Link href="/download">Download App</Link>
          </button>
        </div>
      </div>
      <div className="navbar-mobile-menu-div">
        <div className="navbar-mobile-menu-icon-div">
          <Image
            src="/menu-icon.svg"
            alt="menu"
            width={50}
            height={50}
            className="navbar-mobile-menu-icon"
          />
        </div>
        <div className="navbar-logo-div">
          <Link href="/" className="navbar-logo">
            <Image
              src="/logo.svg"
              alt="logo"
              width={120}
              height={40}
              className="navbar-logo-img-phone"
            />
          </Link>
        </div>
        <div></div>
      </div>
    </header>
  );
};

export default Navbar;
