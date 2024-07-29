const Services = () => {
  return (
    <section className="services-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <span>Абсолютно любой вид работы</span>
              <h2>Я обучаюсь вместе с вашими идеями и предложениями</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="service-item">
              <img src="https://mdk.pw/img/services/service-1.png" alt="Брендинг одежды" />
              <h4>Брендинг одежды</h4>
              <p>Делаю принты для вашей одежды. А так-же занимаюсь принтами одежды для ваших игровых проектов.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item">
              <img src="https://mdk.pw/img/services/service-2.png" alt="Подача контента" />
              <h4>Подача контента</h4>
              <p>Придумаю для вас уникальные статьи и оформления, правильные группировки товаров и прочие мелочи.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item">
              <img src="https://mdk.pw/img/services/service-3.png" alt="Реклама/Промо-ролики" />
              <h4>Реклама/Промо-ролики</h4>
              <p>Делаю отличные промо-ролики с озвучкой популярных исполнителей и медийных личностей интернета.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
