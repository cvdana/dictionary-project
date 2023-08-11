import React from "react";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        {props.photos.map((photo, index) => {
          return <img src={photo.src.tiny} alt={photo.alt} key={index} />;
        })}
      </section>
    );
  } else {
    return null;
  }
}
