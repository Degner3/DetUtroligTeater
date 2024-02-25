import { Title } from "../Title/Title"
import { convertDate } from "../../Helpers/ConvertDate";
import style from "./PerformanceCard.module.scss"

export const PerformanceCard = ({ stage, title, genre, image, date, endDate }) => {

  const imgSrc = `http://localhost:3000/Assets/Images/events/medium/${image}`;

  const startDate = convertDate(date);
  const stopDate = convertDate(endDate);
    
  return (
    <div className={style.performanceStyle}>
        <img src={imgSrc} alt={title} />
        <article>
            <p>{stage}</p>
            <h4>{startDate.day} {startDate.month} - {stopDate.day} {stopDate.month} {stopDate.year}</h4>
            <hr />
            <Title title={title} />
            <h3>{genre}</h3>
        </article>
    </div>
  )
}
