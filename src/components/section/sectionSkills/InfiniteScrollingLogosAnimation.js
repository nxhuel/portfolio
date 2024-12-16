import React from 'react';
import { motion } from 'framer-motion';


const SkillsLogoData = [
    { src: '/assets/java.png', alt: 'javalogo' },
    { src: '/assets/spring.png', alt: 'springlogo' },
    { src: '/assets/spring-boot.png', alt: 'springbootlogo' },
    { src: '/assets/spring-security.png', alt: 'springsecuritylogo' },
    { src: '/assets/mysql.png', alt: 'mysqllogo' },
    { src: '/assets/sql-server.png', alt: 'sqlserverlogo' },
    { src: '/assets/linux.png', alt: 'linuxlogo' },
    { src: '/assets/github.png', alt: 'githublogo' },
    { src: '/assets/uml.png', alt: 'umllogo' },
    { src: '/assets/react.png', alt: 'reactlogo' },
    { src: '/assets/tailwind.png', alt: 'tailwindlogo' },
];


export const InfiniteScrollingLogosAnimation = () => {
    return (
        <>
            <div className="container">
                <h2 className="text-start text-2xl font-bold mb-8  text-black">
                    HABILIDADES:
                </h2>
            </div>
            <div className="container flex justify-center">
                <div className="flex overflow-hidden justify-center items-center pt-2 w-[80%]">
                    <motion.div
                        transition={{
                            duration: 15,
                            ease: 'linear',
                            repeat: Infinity,
                        }}
                        initial={{ translateX: 0 }}
                        animate={{ translateX: '-50%' }}
                        className="flex flex-none gap-16 pr-16"
                    >
                        {[...new Array(2)].fill(0).map((_, index) => (
                            <React.Fragment key={index}>
                                {SkillsLogoData.map(({ src, alt }) => (
                                    <img
                                        key={alt}
                                        src={src}
                                        alt={alt}
                                        className="h-15 w-auto flex-none"
                                    />
                                ))}
                            </React.Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </>
    );
};

