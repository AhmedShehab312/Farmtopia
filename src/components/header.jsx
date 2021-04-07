import i18n from "../i18n";

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? i18n.t("Header.title") : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? i18n.t("Header.paragraph")  : 'Loading'}</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
