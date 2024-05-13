import style from 'module.css'

function Button(){

    const styles = {
            backgroundColor: 'lightblue',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer'
    }

    return(
        <button style={styles} className={styles} >Click me</button>
    );
}

export default Button