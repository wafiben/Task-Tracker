import React, { useState } from "react";
const AddTask = ({onAdd}) => {
    const [text,setText ] = useState('');
    const [day,setDay ] = useState('');
    const [reminder,setReminder ] = useState(false);
    const onSubmit=(event)=>{
        event.preventDefault();
        if(!text){
            alert('please add text')
            return
        }
        onAdd({text,day,reminder})
        setText('');
        setDay('');
        setReminder(false);

    }

    return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input  
            type="text" 
            placeholder="Add Task"
            value={text}
            onChange={(event)=>setText(event.target.value)}/>

        </div>
        <div className="form-control">
            <label>Day & Time</label>
            <input type="text"
             placeholder="Day & Time"
             value={day}
            onChange={(event)=>setDay(event.target.value)}/>
        </div>
        <div className="form-control form-control-check ">
            <label>Set Reminder</label>
            <input 
            checked={reminder }
            type="checkbox" 
            placeholder="Day & Time"
            value={reminder}
            onChange={(event)=>setReminder(event.currentTarget.checked)}/>
        </div>
        <input type="submit" value="Sve task" className="btn btn-block"/>

    </form>
    
    )
}

export default AddTask;
