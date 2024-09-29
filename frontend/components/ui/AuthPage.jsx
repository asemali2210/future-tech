

export default  function AuthPage({leftContent,children}) {
  return (
    <div className='auth__page py-5 bg-dark-1 br-b br-t'>
        <div className='container'>
            <div className='row justify-content-lg-between row-gap-4 row-gap-lg-0'>
                <div className='col-lg-4'>
                    <div className='auth__page__left'>
                        <p className='c-wh fw-bold mb-3 hd-xlg text-capitalize'>welcome</p>
                        <p className="h4 fw-normal" >{leftContent}</p>
                    </div>
                </div>
                <div className='col-lg-6'>
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}