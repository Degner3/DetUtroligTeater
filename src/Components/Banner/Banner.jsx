import { convertDate } from "../../Helpers/ConvertDate";
import { useFetch } from "../../Hooks/useFetch"
import { Title } from "../Title/Title"
import style from "./Banner.module.scss"

export const Banner = () => {
  
  const data = useFetch("http://localhost:3000/events/6");
  const event = data.data;
  console.log("banner", event);

  const imgSrc = `http://localhost:3000/Assets/Images/events/medium/${event?.image}`;

  const startDate = convertDate(event?.startdate);
  const stopDate = convertDate(event?.stopdate);

  return (
    <header className={style.bannerStyle}>
        <article>
          <p>{event?.stage.name}</p>
          <h4>{startDate.day} {startDate.month} - {stopDate.day} {stopDate.month} {stopDate.year}</h4>
          <hr />
          <Title title={event?.title} fontSize="65px" marginTop={"18px"} />
          <h3>{event?.genre.name}</h3>
        </article>
        <figure>
          <img src={imgSrc} alt={event?.title} />
        </figure>
    </header>
  )
}
