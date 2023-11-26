import React, { useState, useEffect } from "react";

// components
import Alert from "./Alert";
import List from "./List";

// css file
import "./index.css";

const getLocalStroge = () =>{
  const list = localStorage.getItem('list')
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }else{
    return []
  }
}
const Index = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStroge());
  const [isEditeing, setIsEditing] = useState(false);
  const [editID, setEditeID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    if (!name) {
      // display alert
        showAlert(true,'please input value', 'danger')
        // setTimeout(()=>{
        //     showAlert(false,)
        // },1000)
    } else if (name && isEditeing) {
      // edit input
      setList(list.map(item =>{
        if(item.id === editID){
          return {...item, title:name}
        }
        return item
      }))
      setName('')
      setIsEditing(false)
      setEditeID(null)
      showAlert(true,'Value changed successfully', 'danger')
    } else {
      // show alert
      showAlert(true, 'New item added', 'danger')
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({show,msg,type})
  };
  const clearList = () =>{
    showAlert(true,'Empty item list', 'danger');
    setList([])
  }
  const removeItem = (id) =>{
    showAlert(true,'One item remove','danger')
    setList(list.filter((item)=>item.id !==id));
  }
  const editItem = (id) =>{
    const specificItem = list.find(item => item.id == id);
    setIsEditing(true)
    setEditeID(id)
    setName(specificItem.title)
    showAlert(true,'Ready item for edit','success')
  }
  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list))
  },[list])
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-btn">{isEditeing ? "edit" : "submit"}</button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>Clear Items</button>
        </div>
      )}
    </section>
  );
};

export default Index;
