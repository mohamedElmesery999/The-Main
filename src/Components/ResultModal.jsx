import { forwardRef , useImperativeHandle , useRef} from "react"

const ResultModal = forwardRef(function ResultModal({ targetTime , remainingTime , onReset}, ref) {

    const dialog = useRef();

    const userLost = remainingTime <=0;

    const formateedRemainingTime = (remainingTime /1000).toFixed(2);

    const score = Math.round((1-remainingTime /(targetTime * 1000)) * 100);

    useImperativeHandle(ref , ()=> {
        return{
            open(){
                dialog.current.showModal();
            }
        }
    })
    return (

        <dialog ref={dialog} className="result-modal" >

            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2>Your Score-: {score}</h2>}
                <p>the target time was <strong>{targetTime} seconds.</strong></p>
                <p>you stopped the timer with<strong> {formateedRemainingTime} seconds left.</strong></p>

            <form method="dialog" onSubmit={onReset}>
                <button>close</button>
            </form>

        </dialog>
    )
});
export default ResultModal;