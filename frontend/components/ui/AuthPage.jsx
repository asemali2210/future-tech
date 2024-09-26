

export default  function AuthPage({leftContent,children}) {
  return (
    <div className='auth__page'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-5'>
                    <div className='auth__page__left'>
                        <p className='c-wh fw-bold mb-3'>welcome</p>
                        <p >{leftContent}</p>
                    </div>
                </div>
                <div className='col-lg-7'>
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}