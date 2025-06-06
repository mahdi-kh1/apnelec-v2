import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { HandMetal } from 'lucide-react';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import UserAccountnav from '@/components/UserAccountNav';

const Navbar = async () => {

    const session = await getServerSession(authOptions);

  return (
    <div className=' bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0'>
      <div className='container flex items-center justify-between'>
        <Link href='/'>
          <HandMetal />
        </Link>
        {session?.user ? (
          <UserAccountnav />
        ) : (
          <Link className={buttonVariants()} href='/sign-in'>
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
