function PopUser({ isOpen }) {
  return (
    <div
      className="header__pop-user-set pop-user-set"
      id="user-set-target"
      style={{ display: isOpen ? "block" : "none" }}
    >
      {/* <a href="">x</a> */}
      <p className="pop-user-set__name">Ivan Ivanov</p>
      <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>

      <div className="pop-user-set__theme">
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </div>

      <button type="button" className="_hover03">
        <a href="#popExit">Выйти</a>
      </button>

      {/* popExit (вынесем отдельно если надо) */}
      <div className="pop-exit" id="popExit">
        <div className="pop-exit__container">
          <div className="pop-exit__block">
            <div className="pop-exit__ttl">
              <h2>Выйти из аккаунта?</h2>
            </div>

            <form className="pop-exit__form" id="formExit" action="#">
              <div className="pop-exit__form-group">
                <button className="pop-exit__exit-yes _hover01" id="exitYes">
                  <a href="modal/signin.html">Да, выйти</a>
                </button>

                <button className="pop-exit__exit-no _hover03" id="exitNo">
                  <a href="main.html">Нет, остаться</a>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /popExit */}
    </div>
  );
}

export default PopUser;
