import { useState } from "react";


const Todo = () => {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");

    const addToList = (e) => {
        e.preventDefault();
        list.push(item);
        setList([...list]);
    }

    const removeItem = (index) => {
        list.splice(index, 1);
        setList([...list]);
    }
    return (
        <div>
            <form action="" onSubmit={addToList}>
            <input onChange={(event) => setItem(event.target.value)} type="text" name="" id="" placeholder="Enter Todo Name" />  
            <button type="submit">Add item</button>
            <table>
                <tbody>
                    {
                        list.length!==0?(
                            list.map((element, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{element}</td> 
                                        <td><button onClick={() => removeItem(i)}>Remove</button></td>
                                    </tr>
                                )
                            })
                        ):(<td>No item added</td>)
                    }
                </tbody>
            </table>
            </form>
        </div>
    );
};

export default Todo;