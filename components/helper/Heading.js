export default function Heading({text}){
    return(
        <div className="heading">
            <div>
                <hr/>
                <div>{text}</div>
                <hr/>
            </div>
        </div>
    )
}