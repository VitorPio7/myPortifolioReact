import style from "./css/cardProject.module.css"
export default function CardProject({title, description,link, img}){
    return (
      <div className={style.fitdiv}>
        <div className={style.cardProject}>
          <div className={style.description} >
            <h1>{title}</h1>
            <p>{description}</p>
            <button>
              <a href={link}>View project</a>
            </button>
          </div>
          <div className={style.myImg}>
            <img src={img} alt="project image"/>   
          </div>
        </div>
      </div>
    );
}