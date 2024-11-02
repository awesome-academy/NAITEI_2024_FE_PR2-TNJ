import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faPinterestP,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export default function Social() {
  return (
    <>
      <div className="social px-4">
        <FontAwesomeIcon
          icon={faFacebookF}
          className="hover:text-primary cursor-pointer  mr-6"
        />
        <FontAwesomeIcon
          icon={faTwitter}
          className="hover:text-primary cursor-pointer mr-6"
        />
        <FontAwesomeIcon
          icon={faGooglePlusG}
          className="hover:text-primary cursor-pointer mr-6"
        />
        <FontAwesomeIcon
          icon={faPinterestP}
          className="hover:text-primary cursor-pointer mr-6"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="hover:text-primary cursor-pointer"
        />
      </div>
    </>
  );
}
