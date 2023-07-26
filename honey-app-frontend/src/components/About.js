import './styling/About.css'
import aboutImg from "./about.png";
import { GiHoneyJar } from 'react-icons/gi'
import { MdWorkHistory } from 'react-icons/md'
import { BiMoneyWithdraw } from 'react-icons/bi'

const About = () => {
    return (
        <>
            <div className="about" id="about">
                <h2 className='ah2 about-history'>{' - Our History -'}</h2>
                <h1 className=' at2 about-title'>About Us</h1>
                <img className='about-img' src={aboutImg} />
                <div className="about-container">
                    <h2 className='about-history'>{' - Our History -'}</h2>
                    <h1 className='about-title'>About Us</h1>
                    <p className='about-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ipsum. Illo recusandae molestiae doloremque dolor nihil enim culpa sed consectetur odio asperiores incidunt, aperiam quod? Minus ratione soluta doloribus et!LoremLorem ipsum dolor sit amet consectetur adipisicing elit. Illo quod tenetur ipsam, amet culpa iste vitae ipsa, nemo corrupti dolorum possimus suscipit numquam necessitatibus? Similique debitis culpa quas neque! Sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repudiandae, nulla, necessitatibus pariatur voluptas rem enim consequuntur laborum unde consequatur illo amet eos. Sunt id fugit cumque, reprehenderit nobis commodi.</p>
                </div>
            </div>

            <div className='about-bottom'>

                <div className='ab-table-1'>
                    <GiHoneyJar className='ab-table-icon' />
                    <h2 className='ab-table-title'>Quality</h2>
                    <p className='ab-table-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className='ab-table-2'>
                    <MdWorkHistory className='ab-table-icon' />
                    <h2 className='ab-table-title'>Experience</h2>
                    <p className='ab-table-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>

                <div className='ab-table-3'>
                    <BiMoneyWithdraw className='ab-table-icon' />
                    <h2 className='ab-table-title'>Selling</h2>
                    <p className='ab-table-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>

            </div>
        </>
    );
}

export default About;