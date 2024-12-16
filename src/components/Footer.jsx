import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="mb-2">
                    Made with <span className="text-red-500">❤️</span> by{' '}
                    <span className="font-bold">Shariq</span>
                </p>
                <div className="flex justify-center space-x-4 mb-2">
                    <a
                        href="https://github.com/Shariq2003"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400"
                    >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/shariq-sd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </div>
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} ManifestO. All rights reserved. | MIT License
                </p>
            </div>
        </footer>
    );
};

export default Footer;
