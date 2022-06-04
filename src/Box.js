import React from "react"

export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#FFC312" : "#EA2027"
    }
    
    return (
        <div 
            style={styles} 
            className="box"
            onClick={props.toggle}
        >
        </div>
    )
}