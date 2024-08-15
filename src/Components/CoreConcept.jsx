
function CoreConcept({title,description ,image}){
    return(
      <li>
         <h3>{title}</h3>
        <p>{description}</p>
        <img src={image} alt={title}/>

      </li>
    )
  }

  export default CoreConcept;