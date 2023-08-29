import React from "react";
import styles from "./TasksList.module.css"

export default function TasksList({ allTasks, handleDelete}) {
    return (
        <ul className={styles.ul_style}>
            {allTasks.map(({title, description, id}) => (
                <li className={styles.li_style} key={id}>
                    <div style={{position:"relative"}}>
                        <h2 style={{backgroundColor:"navajowhite", margin:"0", padding:"4px"}}>{title}</h2>
                        <button className={styles.btn_style} onClick={() => handleDelete(id)}>X</button>
                    </div>
                    {!description ? null : <p style={{margin:"8px"}}>{description}</p>}
                </li>
            ))}
        </ul>
    );
}