export default function ProductCard(props) {
    

    console.log(props);
    


    return (
        <div className="col" key={props.id}>
            <div className="card">
                <img src={props.thumb} alt={props.title} className="card-img-top" />
            </div>
                <p className="card-title">{props.title}</p>
        </div>
    )
}