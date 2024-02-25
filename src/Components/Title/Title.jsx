import style from "./Title.module.scss"

export const Title = ({ title, fontSize, marginTop, marginBottom  }) => {

    const titleStyle = {
        fontSize: fontSize,
        marginTop: marginTop,
        marginBottom: marginBottom
    }

  return (
    <h1 className={style.title} style={titleStyle}>{title}</h1>
  )

}
