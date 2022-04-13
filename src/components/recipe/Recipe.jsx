
const Recipe = (props) => {
    return (
        <div className="col-3">
            <div className="card mt-5">
                <img src={props.img} className="card-img-top" alt="image" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text"><span style={{ fontWeight: 'bold' }}>Ingrediantai:</span>
                        <ul style={{ listStyleType: 'none' }}>
                            <li >{props.amount1} {props.ingr1}</li>
                            <li>{props.amount2} {props.ingr2}</li>
                            <li>{props.amount3} {props.ingr3}</li>
                            <li>{props.amount4} {props.ingr4}</li>
                            <li>{props.amount5} {props.ingr5}</li>
                            <li>{props.amount6} {props.ingr6}</li>
                            <li>{props.amount7} {props.ingr7}</li>
                            <li>{props.amount8} {props.ingr8}</li>
                            <li>{props.amount9} {props.ingr9}</li>
                            <li>{props.amount10} {props.ingr10}</li>
                            <li>{props.amount11} {props.ingr11}</li>
                            <li>{props.amount12} {props.ingr12}</li>
                            <li>{props.amount13} {props.ingr13}</li>
                            <li>{props.amount14} {props.ingr14}</li>
                            <li>{props.amount15} {props.ingr15}</li>
                            <li>{props.amount16} {props.ingr16}</li>
                            <li>{props.amount17} {props.ingr17}</li>
                            <li>{props.amount18} {props.ingr18}</li>
                            <li>{props.amount19} {props.ingr19}</li>
                            <li>{props.amount20} {props.ing20}</li>
                        </ul>
                    </p>
                    <p className="card-text">
                        {/* <span style={{ fontSize: '20px', marginRight: '10px' }}>....</span> */}
                        <button type="button" className="btn btn-primary">Save</button>
                    </p>
                </div>
            </div>
        </div>

    );
}

export default Recipe;