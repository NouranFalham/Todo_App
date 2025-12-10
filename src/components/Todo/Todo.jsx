export default function Todo({todoinfo , isCompleted , deleteTodo , completeTodo} ) {
    return (
        <>
        <main>
            <li className="d-flex justify-content-between point mt-2">
                {isCompleted? <del><i class="fa-solid fa-circle"></i>{todoinfo}</del>:<span><i class="fa-solid fa-circle"></i>{todoinfo}</span>}
                <div className="d-flex gap-5 ">
                    <span onClick={deleteTodo}>❌</span>
                    <span onClick={completeTodo}>✔</span>
                </div>
            </li>
        </main>
        
        </>
    )
}
