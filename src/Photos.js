import React from "react";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map((photo, index) => {
            return (
              <div className="col-4 mb-4" key={index}>
                <a
                  href={photo.src.original}
                  target="blank"
                  rel="noreferrer"
                  title="Original photo"
                >
                  <img
                    src={photo.src.landscape}
                    alt={photo.alt}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
