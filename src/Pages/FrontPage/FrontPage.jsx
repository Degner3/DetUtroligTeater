import { Banner } from "../../Components/Banner/Banner"
import { PerformanceCard } from "../../Components/PerformanceCard/PerformanceCard";
import { useFetch } from "../../Hooks/useFetch"
import style from "./FrontPage.module.scss"

export const FrontPage = () => {

  const data = useFetch("http://localhost:3000/events?attributes=id,title,image");
  const events = data.data;
  console.log("Forstillinger",events);


  return (
    <section className={style.frontStyle}>
      <Banner />
      <section className={style.performances}>
        {events?.map((item) => {
          return (
            <PerformanceCard 
              key={item.id}
              // image={item.image}
              stage={item.stage.name}
              date={item.startdate}
              endDate={item.stopdate}
              title={item.title}
              genre={item.genre.name}
            />
          );
        })}
      </section>
    </section>
  );
}
