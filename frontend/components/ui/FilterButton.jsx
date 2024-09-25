
export default function FilterButton({tag,btnTag, onFilter}){
    return(
        <button className={`col text-nowrap  btn__filter__item bg-dark-2 ${tag == `${btnTag}` && `--active`}`}
            onClick={() => onFilter(`${btnTag}`)} >
                {btnTag}
        </button>
    )
}