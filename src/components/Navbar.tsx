import BrandLogo from '@/components/BrandLogo';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export default function Homepage() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-16 bg-white shadow grid grid-cols-2 items-center px-6 z-50">
        <div className="col-span-1 justify-self-start">
          <BrandLogo></BrandLogo>
        </div>
        <div className="col-span-1 justify-self-end">
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/" />
            <AvatarFallback>MO</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className='h-16'></div>
    </>
  );
}