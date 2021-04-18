import { Component } from 'react'


class layout extends Component {

    render() {
        // let a=["india","pak", "dubai","china","australia","USA","UK"]


        // const changeHandler =(event) =>{
        //     console.log(event.target.value)
        // }
        return (
            // <select>{a.map( (i, indx)=>{ return <option key={indx} value={i}>{i}</option>})}</select>
            // <select onChange={(event)=>{changeHandler(event)}}>{a.map( (i, indx)=>{ return <option key={indx} value={i} >{i}</option>})}</select>
            
            <div class="media">
                <img class="mr-3" src="..." alt="Generic placeholder image" />
                    <div class="media-body">
                        <h5 class="mt-0">Media heading</h5>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
            </div>
            
        );
    }
}
//map(()=>{ })
export default layout;