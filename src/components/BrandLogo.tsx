import logo from '../../public/images/brand-logo-1.png';
import Image from 'next/image';
export default function brandLogo() {
  return (
    <div className="w-36">
      <Image priority src={logo} alt='Brand Logo'></Image>
    </div>
  )
}