interface ButtonProps{
    title:any;
    rounded?:any;
    heigth?:any;
    margin?:any;
}

export default function Button(props:ButtonProps){
    return(
        <button
        className={`
             bg-blue-500
              h-10 ${props.margin}
              text-white font-bold
          `}
      >
        {props.title}
      </button>

    )
}