interface InputProps{
    type:any;
    placeholder?:any;
    height?:any;
    width?:any;
    padding?:any;
}

export default function Input(props:InputProps){
    return(
            <input
            type={props.type}
            placeholder={props.placeholder ?? 1}
            className={`
                    h-10 bg-gray-50
                    p-${props.padding} p-3
                    border border-gray-300
                    `}
          />
        
    )
}