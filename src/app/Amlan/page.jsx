import Image from 'next/image'
import Icon from './HO3 png.png'
import Insta from './insta.png'
import Linkedin from './linkedin.png'
import Twitter from './twitter.png'
import BgImg from './pngwing 7.png'
export default function Footer() {
    return(
		<div className="bg-black xl:pt-[27.06rem] lg:pt-16 pt-10">
        <div className="flex flex-wrap sm:flex-nowrap">
          <div className="left md:block pt-10 lg:mr-[13.8775rem] sm:mr-[5rem] 2xl:pl-[9.5rem] sm:pl-[4rem] pl-[2rem] -sm:text-center -sm:m-auto">
            <Image fill={false} src={Icon} className="lg:w-[19.375rem] sm:w-[12rem] w-[8rem] 2xl:h-[7.0625rem] xl:h-[6rem] opacity-[0.9100000262260437] -sm:m-auto"></Image>
            <h2 className="2xl:w-[32.625rem] xl:w-[25rem] 2xl:h-[6.125rem] xl:h-[4rem] xl:text-[1.8125rem] sm:text-[1.4rem] md:mt-[4.81rem] mt-[2rem] md:mb-[4.63rem] mb-[2rem] text-white font-bold leading-[218.523%] -sm:m-auto -sm:text-center -sm:my-6">Want to become a sponsor of Hackodisha 3.0?</h2>
            <button className="inline-flex justify-center items-center gap-[0.625rem] px-[2.375rem] py-[1.5rem] bg-[#CA40CD] rounded-2xl md:rounded-[3.5625rem] sm:w-26 xl:w-[21.9375rem] h-20 sm:h-[5rem] text-[#FFEAEA] text-[1.2rem] lg:text-[1.375rem] font-bold leading-[147.023%] hover:bg-fuchsia-400 ease-in duration-100 text-center">Become a sponsor</button>        
          </div>

          <div className="pr-[3.5rem] text-white sm:max-md:pt-[5rem] -sm:pl-[4rem] -sm:m-auto">
		            <p className=" font-thin text-justify leading-[147.023%] xl:text-[3.5rem] md:text-[2rem] sm:text-[1.5rem] text-[#06EBE5] mb-[1.75rem] -sm:mb-[1rem] -sm:mt-[2.5rem] -sm:text-center">Sitemap</p>
					<ul className="inline-flex flex-col justify-center items-start gap-[0.625rem] xl:text-[2.25rem] md:text-[1.5rem] sm:text-[1rem] font-bold text-justify leading-[147.023%] -sm:items-center">
						
						<li className='hover:text-slate-500 cursor-pointer '>
							Home
						</li>
						<li className='hover:text-slate-500 cursor-pointer '>
							About us
						</li>
						<li className='hover:text-slate-500 cursor-pointer '>
							Prizes
						</li>
						<li className='hover:text-slate-500 cursor-pointer '>
							Contact us
						</li>
                        <li className='hover:text-slate-500 cursor-pointer '>
							Sponsors
						</li>
						<li className='hover:text-slate-500 cursor-pointer '>
							FAQs
						</li>
					</ul>
				</div>
				<div className="px-[3.5rem] text-white text-center sm:max-md:pt-[5rem] -sm:m-auto -sm:text-center">
				    <p className=" font-thin text-justify leading-[147.023%] xl:text-[3.5rem] md:text-[2rem] sm:text-[1.5rem] text-[#06EBE5] mb-[1.75rem] -sm:pt-5 ">Socials</p>
					<ul className="inline-flex flex-col justify-between shrink-0">
						<li><a className="text-center mb-5" href=""><Image fill={false} className="sm:w-[2.75rem] w-8 sm:h-[2.75rem] h-8 m-auto mb-5" src={Insta} ></Image></a></li>
						<li><a className="text-center mb-5" href=""><Image fill={false} className="sm:w-[3rem] w-8 sm:h-[3rem] h-8 m-auto mb-5" src={Linkedin} ></Image></a></li>
						<li><a className="text-center mb-5" href=""><Image fill={false} className="sm:w-10 w-8 sm:h-10 h-8 m-auto mb-5" src={Twitter} ></Image></a></li>
					</ul>
				</div>
          </div>
		  <hr className="h-[0.0625rem] bg-gray-200 dark:bg-gray-800 border-0 mt-[4rem] mb-[2.81rem]"></hr>
		  <h2 className="text-[#D9D9D9] sm:text-[1rem] lg:text-[1.625rem] text-center font-bold leading-[147.023%] pb-[3.62rem] opacity-[0.8999999761581421]">Hackodisha 3.0 © 2023. Powered by Webwiz, NIT Rourkela.</h2>
		  </div>
    );
}