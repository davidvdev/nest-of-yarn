import Image from 'next/image'
import heroImage from '../public/heroImage.jpg'

const Hero = () => {
    return(
        <div>
            <h2 className="flex justify-center">
                Nest of Yarn
            </h2>
            <Image 
                src={heroImage} 
                alt="neutral colored skeins of yarn"
                className="blur-xs rotate-90 m-0 p-0"
            />
        </div>
    )
}

export default Hero