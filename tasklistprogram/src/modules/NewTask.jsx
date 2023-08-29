import React from "react";
import styles from "./NewTask.module.css"

export default function NewTask({ newTask, handleChange, handleSubmit}) {
    return (
        <form className={styles.task_form} onSubmit={handleSubmit}>
            <input
                name="title"
                placeholder="New task"
                value={newTask.title || ""}
                onChange={handleChange}
                style={{padding:"5px"}}
            />
            {!newTask.title ? null : (
                <>
                    <textarea
                        name="description"
                        placeholder="Details..."
                        value={newTask.description || ""}
                        onChange={handleChange}
                        style={{padding:"5px"}}
                     />
                    <button className={styles.button_form} type="submit">Add Task</button>
                </>
            )}
        </form>
    );
}