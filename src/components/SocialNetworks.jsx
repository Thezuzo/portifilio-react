import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn /> },
    { name: "github", icon: <FaGithub /> },
    { name: "instagram", icon: <FaInstagram /> }
]

const SocialNetworks = () => {
    return (
        <sections id="social-networks">
            {socialNetworks.map((network) => (
                <a href="#" className='social-btn' id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
        </sections>
    )
}

export default SocialNetworks