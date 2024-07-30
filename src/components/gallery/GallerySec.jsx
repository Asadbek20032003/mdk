import { useEffect, useState } from "react";
import mixitup from "mixitup";
import { GalleryData } from "./galleryData";
const GallerySec = () => {
  useEffect(() => {
    const mixer = mixitup(".gallery-filter");

    document.querySelector(".gallery-controls").addEventListener("click", (e) => {
      if (e.target && e.target.matches("li[data-filter]")) {
        mixer.filter(e.target.getAttribute("data-filter"));
      }
    });
  }, []);

  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(GalleryData);
    setCollection([...new Set(GalleryData.map((item) => item.titile))]);
  }, []);

  const gallery_filter = (itemData) => {
    const filterData = GalleryData.filter((item) => item.titile == itemData);
    setData(filterData);
  };

  return (
    <section className="gallery-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="gallery-controls">
              <ul>
                <li onClick={() => setData(GalleryData)}>All Galery</li>
                {collection.map((item) => (
                  <li
                    key={item}
                    onClick={() => {
                      gallery_filter(item);
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="row gallery-filter" id="MixItUpF8AC71">
            <div className="">
              <div className="video__map ">
                {data.map((item) => (
                  <div key={item.id} className="gs-item">
                    <video width="100%" height="auto" src={item.src} autoPlay muted loop id="bgVideo">
                      <source src={item.src} type="video/mp4" />
                    </video>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 mix all event">
                  <div className="gs-item">
                    <video
                      width="100%"
                      height="auto"
                      src="https://mdk.pw/img/port/ae.mp4"
                      autoPlay
                      muted
                      loop
                      id="bgVideo"
                    >
                      <source src="https://mdk.pw/img/port/ae.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className="col-lg-6 mix all model other">
                  <div className="gs-item">
                    <video
                      width="100%"
                      height="auto"
                      src="https://mdk.pw/img/port/Comp 12222_2.mp4"
                      autoPlay
                      muted
                      loop
                      id="bgVideo"
                    >
                      <source src="https://mdk.pw/img/port/Comp 12222_2.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 mix all model">
                  <div className="gs-item">
                    <video
                      width="100%"
                      height="auto"
                      src="https://mdk.pw/img/port/photo_2024-02-12_21-32-55.mp4"
                      autoPlay
                      muted
                      loop
                      id="bgVideo"
                    >
                      <source src="https://mdk.pw/img/port/photo_2024-02-12_21-32-55.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className="col-lg-6 mix all event">
                  <div className="gs-item">
                    <video
                      width="100%"
                      height="auto"
                      src="https://mdk.pw/img/port/photo_2023-06-26_10-05-39.mp4"
                      autoPlay
                      muted
                      loop
                      id="bgVideo"
                    >
                      <source src="https://mdk.pw/img/port/photo_2023-06-26_10-05-39.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className="col-lg-6 mix all other">
                  <div className="gs-item">
                    <video
                      width="100%"
                      height="auto"
                      src="https://mdk.pw/img/port/jerry.mp4"
                      autoPlay
                      muted
                      loop
                      id="bgVideo"
                    >
                      <source src="https://mdk.pw/img/port/jerry.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className="col-lg-6 mix all fashion">
                  <div className="gs-item">
                    <video
                      width="100%"
                      height="auto"
                      src="https://mdk.pw/img/port/Comp 1_1.mp4"
                      autoPlay
                      muted
                      loop
                      id="bgVideo"
                    >
                      <source src="https://mdk.pw/img/port/Comp 1_1.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mix all fashion" style={{ display: "flex", flexWrap: "wrap" }}>
              <div className="gs-item">
                <video
                  width="100%"
                  height="auto"
                  src="https://mdk.pw/img/port/Comp 113.mp4"
                  autoPlay
                  muted
                  loop
                  id="bgVideo"
                >
                  <source src="https://mdk.pw/img/port/Comp 113.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="col-lg-6 mix all fashion event">
                <div className="gs-item">
                  <video
                    width="100%"
                    height="auto"
                    src="https://mdk.pw/img/port/Comp 1 volumetric.mp4"
                    autoPlay
                    muted
                    loop
                    id="bgVideo"
                  >
                    <source src="https://mdk.pw/img/port/Comp 1 volumetric.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="col-lg-6 mix all fashion event">
                <div className="gs-item">
                  <video
                    width="100%"
                    height="auto"
                    src="https://mdk.pw/img/port/Comp 1.mp4"
                    autoPlay
                    muted
                    loop
                    id="bgVideo"
                  >
                    <source src="https://mdk.pw/img/port/Comp 1.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mix all fashion event" style={{ display: "flex", flexWrap: "wrap" }}>
              <div className="gs-item">
                <video
                  width="100%"
                  height="auto"
                  src="https://mdk.pw/img/port/qwinsnew.mp4"
                  autoPlay
                  muted
                  loop
                  id="bgVideo"
                >
                  <source src="https://mdk.pw/img/port/qwinsnew.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="col-lg-6 mix all fashion event">
                <div className="gs-item">
                  <video
                    width="100%"
                    height="auto"
                    src="https://mdk.pw/img/port/alkatras.mp4"
                    autoPlay
                    muted
                    loop
                    id="bgVideo"
                  >
                    <source src="https://mdk.pw/img/port/alkatras.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySec;
