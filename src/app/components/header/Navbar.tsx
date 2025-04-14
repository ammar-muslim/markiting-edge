"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Image from 'next/image'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Marketing
        <Image className="m-1" src="/images/Green-arrow.png" width={30} height={50} alt="logo" />
        Edge
      </Link>

      <button 
        className={styles.menu}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <IoMdClose /> : <AiOutlineMenu />}
      </button>
      
      <div
        className={`${styles.navLinksWrapper} ${isMenuOpen ? styles.active : ''}`}
      >
        <ul className={styles.navLinks}>
          <li>
            <Link
              onClick={toggleMenu}
              href="/admin"
              className={styles.navLink}
            >
              المشرف
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              href="/articles"
              className={styles.navLink}
            >
              المقالات
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              href="/contact"
              className={styles.navLink}
            >
              تواصل معنا
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              href="/about"
              className={styles.navLink}
            >
              من نحن
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              href="/"
              className={styles.navLink}
            >
              الصفحة الرئيسية
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
