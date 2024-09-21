import Link from "next/link";
import '@/styles/components/UI/forwrod-btn.scss';
import { BsArrowUpRight } from "react-icons/bs";

export default function ForwordLink({href,arrow, radius,content}) {
  return (
    <button className={`forword__btn`}>
        <Link href={href}>
            {content} 
            <BsArrowUpRight className='__link-icon c-main ms-2'/>
        </Link>
    </button>
 )
};