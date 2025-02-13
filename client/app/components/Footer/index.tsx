import { Link } from '@remix-run/react';
import { RiMapPinFill, RiMapPinLine } from '@remixicon/react';

import { useRootLoaderData } from '~/lib/useRootLoaderData';
import { getImageUrl, getMapLink, toAddressString } from '~/utils';
import Hydrated from '../Hydrated';
import { useEffect } from 'react';

export default function Footer() {
  const { appSettings: app } = useRootLoaderData();

  useEffect(() => {
    const script = document.createElement('script');

    script.src =
      'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0&appId=950974113535167';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);
  }, []);

  return (
    <footer className="w-full min-h-[439px] bg-[#f5f8f5] py-16">
          {/* Menu Links */}
          <div className="container mx-auto flex justify-center gap-8 mb-12">
            <Link 
              to="/cau-chuyen-ve-ilo" 
              className="text-[#696969] hover:text-[#55713C] transition-colors"
            >
              Câu chuyện về ILO
            </Link>
            <span className="text-[#696969]">|</span>
            <Link 
              to="/chuong-trinh-hoc" 
              className="text-[#696969] hover:text-[#55713C] transition-colors"
            >
              Chương trình học
            </Link>
            <span className="text-[#696969]">|</span>
            <Link 
              to="/co-so-vat-chat" 
              className="text-[#696969] hover:text-[#55713C] transition-colors"
            >
              Cơ sở vật chất
            </Link>
          </div>

          <div className="container mx-auto flex justify-center gap-8 mb-12">
            <Link 
              to="/he-thong-ilo" 
              className="text-[#696969] hover:text-[#55713C] transition-colors"
            >
              Hệ thống ILO
            </Link>
            <span className="text-[#696969]">|</span>
            <Link 
              to="/ban-tin-ilo" 
              className="text-[#696969] hover:text-[#55713C] transition-colors"
            >
              Bản tin ILO
            </Link>
            <span className="text-[#696969]">|</span>
            <Link 
              to="/tuyen-sinh" 
              className="text-[#696969] hover:text-[#55713C] transition-colors"
            >
              Tuyển sinh
            </Link>
            <span className="text-[#696969]">|</span>
            <Link 
              to="/chinh-sach-du-lieu" 
              className="text-[#696969] hover:text-[#55713C] transition-colors"
            >
              Chính sách dữ liệu
            </Link>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={getImageUrl(app.app_logo)}
              alt="ILO Logo" 
              className="h-12 object-contain"
            />
          </div>

          {/* Copyright */}
          <div className="text-center text-[#696969] text-base">
            Copyright © 2022 all rights reserved
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 mt-8">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#696969] hover:text-[#55713C] transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
              </svg>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#696969] hover:text-[#55713C] transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#696969] hover:text-[#55713C] transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </footer>
  );
}


