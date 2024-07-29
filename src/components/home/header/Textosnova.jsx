import { Link } from "react-router-dom";
const Textosnova = () => {
  const textStyle = {
    WebkitTextStrokeColor: "black",
    WebkitTextStrokeWidth: "thin",
    color: "#ffffff",
    zIndex: 2,
  };

  return (
    <div className="textosnova">
      <div className="hs-text">
        <div style={{ textAlign: "center" }}>
          <span style={textStyle}>
            <br />
            <div style={{ zIndex: 2 }}>
              <span
                style={{
                  color: "#ffffff",
                  fontWeight: "700",
                  fontSize: "16px",
                }}
              >
                "Motion Design Keep People Wondering"
              </span>
            </div>
          </span>
          <h2>MDK.PW</h2>
          <p>
            Абсолютно любая работа для вашего
            <br />
            проекта, которая подается с душой и
            <br />
            уникальными ходовыми функциями.
          </p>
          <Link to="#" className="primary-btn">
            Заказать
          </Link>
        </div>
        <p></p>
      </div>
    </div>
  );
};

export default Textosnova;
