import style from "./ActorsCard.module.scss"


export const ActorsCard = ({ name, description, image }) => {

  const imgSrc = `http://localhost:3000/Assets/Images/actors/${image}`;

  return (
    <div className={style.actorStyle}>
      <img src={imgSrc} alt={name} />
      <article>
        <div>
          <h3>{name}</h3>
          <p>{description.substring(0, 200)}....</p>
        </div>
        <button>Hello</button>
      </article>
    </div>
  );
}
