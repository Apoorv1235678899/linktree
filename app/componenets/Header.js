import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../api/auth/...nextauth/route";


export  default async function Header(){
   const session = await getServerSession(authOptions);
   console.log(session);
   
    return(
        <header className="bg-white border-b flex justify-between p-4">
          <div className="max-w-4xl flex justify-between mx-auto px-6">
          <div className="flex gap-6 ">
  <Link href={'/'}>LinkList</Link> 
  

  <nav className="flex items-center gap-7 text-slate-500 text-sm">
    <Link  href={'/about'}>About</Link> 
    <Link  href={'/pricing'}>Pricing</Link> 
    <Link  href={'/contact'}>Contact</Link> 

  </nav>
  </div>
  <div>
    <nav  className="flex gap-4 text-sm text-slate-500">
         <Link href={'/login'}>Sign In</Link>
         <Link href={'/login'}>Create Account</Link>
         </nav>
          </div>
        

  </div>
      </header>
    );
}
