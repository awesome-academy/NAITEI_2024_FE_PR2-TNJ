import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faPinterestP,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

interface Props {
  className?: string;
}

export default function Social({ className = '' }: Props) {
  return (
    <>
      <div className="social px-4">
        <FontAwesomeIcon
          icon={faFacebookF}
          title="Facebook"
          className={`hover:text-primary transition-all ${className} cursor-pointer mr-6`}
        />
        <FontAwesomeIcon
          icon={faTwitter}
          title="Twitter"
          className={`hover:text-primary transition-all ${className} cursor-pointer mr-6`}
        />
        <FontAwesomeIcon
          icon={faGooglePlusG}
          title="Google"
          className={`hover:text-primary transition-all ${className} cursor-pointer mr-6`}
        />
        <FontAwesomeIcon
          icon={faPinterestP}
          title="Pinterest"
          className={`hover:text-primary transition-all ${className} cursor-pointer mr-6`}
        />
        <FontAwesomeIcon
          icon={faInstagram}
          title="Instagram"
          className={`hover:text-primary transition-all ${className} cursor-pointer`}
        />
      </div>
    </>
  );
}
