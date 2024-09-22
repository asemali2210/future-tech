import { IoReload } from "react-icons/io5"

export default  function ErorrReload() {
    const refreshPage = () => {
        window.location.reload()
    }
    return (
        <div className="error-blogs bg-dark-1">
            <div className="container-fluid">
                <div className="d-flex justify-content-center align-items-center"  style={{height: '200px'}}>
                    <button className="error__btn d-block" onClick={refreshPage}><IoReload /> Retry</button>
                </div>
            </div>
        </div>
    )
}
