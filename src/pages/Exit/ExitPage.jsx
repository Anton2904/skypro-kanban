import { useNavigate } from "react-router-dom";

function ExitPage({ setIsAuth }) {
  const navigate = useNavigate();

  const handleYes = (e) => {
    e.preventDefault();
    setIsAuth(false);
    navigate("/login", { replace: true });
  };

  const handleNo = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
  };

  return (
    <div className="wrapper">
      <div className="pop-exit" style={{ display: "block" }}>
        <div className="pop-exit__container">
          <div className="pop-exit__block">
            <div className="pop-exit__ttl">
              <h2>Выйти из аккаунта?</h2>
            </div>

            <form className="pop-exit__form" id="formExit" action="#">
              <div className="pop-exit__form-group">
                <button className="pop-exit__exit-yes _hover01" id="exitYes" onClick={handleYes}>
                  Да, выйти
                </button>

                <button className="pop-exit__exit-no _hover03" id="exitNo" onClick={handleNo}>
                  Нет, остаться
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExitPage;
