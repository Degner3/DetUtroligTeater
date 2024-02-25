import { ActorsCard } from "../../Components/ActorsCard/ActorsCard";
import { Title } from "../../Components/Title/Title";
import { useFetch } from "../../Hooks/useFetch"
import style from "./ActorsPage.module.scss"



export const ActorsPage = () => {

  const data = useFetch("http://localhost:3000/actors");
  const actors = data.data;
  console.log("Skuespiller", actors);
  

  return (
    <section className={style.actorsStyle}>
      <Title title="Skuespillere" fontSize="65px" marginBottom="28px" />
      <section>
      {actors?.map((item) => {
            return (
              // <Link to={`/news/${item.id}`} key={item.id}>
                <ActorsCard
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  description={item.description}
                />
              // </Link>
            );
          })}
          {/* <hr /> */}
      </section>
    </section>
  )
}
