import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="hero-section-content">
          <h1>Learn Anytime, Anywhere</h1>
          <p>Join our 3,000+ happy student users.</p>
        </div>
      </div>
      <div className="hero-section-images">
        <div className="container hero-section-images-div">
          <div className="hero-mobile-app-div">
            <div className="hero-mobile-app-div-image">
              <Image
                src="/hero-phone.svg"
                alt="mobile-app-icon"
                width={300}
                height={200}
              />
            </div>
            <p className="hero-mobile-app-div-title">ACEplus on Mobile</p>
            <div className="hero-mobile-app-download-div">
              <div className="hero-mobile-app-download-div-android">
                <Image
                  src="/android-icon.svg"
                  alt="android-icon"
                  width={24}
                  height={24}
                />
                <Link href="https://play.google.com/store/apps/details?id=com.app.aceplus">
                  Download on the Google Play
                </Link>
              </div>
              <div className="hero-mobile-app-download-div-apple">
                <Image
                  src="/apple-icon.svg"
                  alt="apple-icon"
                  width={24}
                  height={24}
                />
                <Link href="https://apps.apple.com/in/app/aceplus-speaking-soft-skills/id6742319474">
                  Download on the Apple Store
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-desktop-app-div">
            <div className="hero-desktop-app-div-image">
              <Image
                src="/hero-mac.svg"
                alt="desktop-image"
                width={300}
                height={200}
              />
            </div>
            <p className="hero-desktop-app-div-title">ACEplus on Desktop</p>
            <div className="hero-mobile-app-download-div">
              <div className="hero-mobile-app-download-div-windows">
                <Image
                  src="/window-icon.svg"
                  alt="windows-icon"
                  width={24}
                  height={24}
                />
                <p>Download on Windows</p>
              </div>
              <div className="hero-mobile-app-download-div-mac">
                <Image
                  src="/apple-icon.svg"
                  alt="apple-icon"
                  width={24}
                  height={24}
                />
                <p>Download on Mac</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
