
export default function List(){
    const numbers = [ 1, 2,  3, 4, 5 ];
    return (
        <h1>
        {numbers.map((number) => <span key={number}>{number * 2} </span>)}
        </h1>
    )
}