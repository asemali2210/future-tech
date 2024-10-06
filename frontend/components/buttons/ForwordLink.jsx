import Link from "next/link";
import '@/styles/components/UI/forwrod-btn.scss';
import { BsArrowUpRight } from "react-icons/bs";

export default function ForwordLink({href,content}) {
  return (
    <button className={`forword__btn w-100 `}>
        <Link href={href} className="text-nowrap overflow-hidden d-flex align-items-center justify-content-center">
            {content} 
            <BsArrowUpRight className='__link-icon c-main ms-2'/>
        </Link>
    </button>
 )
};