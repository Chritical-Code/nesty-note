import styles from "./Follower.module.css"

type FolloweProps = {
    mouseMode: string,
}

export default function Follower({mouseMode}: FolloweProps){
    function handleMouseMove(){
        console.log("Mouse moved.");
    }
    
    if(mouseMode == "drag"){
        return(
            <>
                <div className={styles.follower} ></div>
                <div className={styles.net} onMouseMove={() => handleMouseMove()}></div>
            </>
        );
    }
}