import Image from "next/image"
import Wrapper from "./Wrapper"


const Footer = () => {
  return (
    <footer>
        <Wrapper>

            <div className=" border flex flex-col md:flex-row md:justify-around items-center py-8">
                {/* Left Side */}
                <div className=" flex items-center   ">
                    <Image src="/piaicLogo.png" alt="Panaverse Logo" height={100} width={100} />
                    <h4 className=" text-xl font-bold">Panaverse</h4>
                </div>

                {/* Middle Side */}
                <ul className="flex flex-col md:flex-row items-center gap-x-3 gap-y-2 mt-4 font-semibold ">
                    <li className=" hover:bg-red-700 hover:text-white px-1 py-1 rounded-md"><a href="https://www.piaic.org/">PIAIC</a></li>
                    <li className=" hover:bg-red-700 hover:text-white px-1 py-1 rounded-md"><a href="https://www.piaic.org/about">About</a></li>
                    <li className=" hover:bg-red-700 hover:text-white px-1 py-1 rounded-md"><a href="https://portal.piaic.org/signup">Sign Up</a></li>
                    <li className=" hover:bg-red-700 hover:text-white px-1 py-1 rounded-md"><a href="https://www.piaic.org/howitworks">How its Work</a></li>
                </ul>

                {/* Right Side Icon */}
                <ul className=" flex gap-x-3 mt-3">
                 <a href="https://www.facebook.com/groups/panaverse"><li> <Image src="/fbLogo.png" alt="Facebook"  height={30} width={30}/></li></a>
                 <a href="https://www.youtube.com/@panaverse/streams"><li><Image src="/youtube.png" alt="Youtube" height={30} width={30} /></li></a>
                  <a href="https://twitter.com/Panaverse_edu"><li><Image src="/twitter.png" alt="Twitter" height={30} width={30} /></li></a>
                   <a href="https://github.com/panaverse"><li><Image src="/github.png" alt="Github" height={30} width={30} /></li></a>
                </ul>
            </div>
            
        </Wrapper>
    </footer>
  )
}

export default Footer