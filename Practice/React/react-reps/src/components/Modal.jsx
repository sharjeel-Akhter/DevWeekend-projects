
const Modal = ({ setIsOpen }) => {
    return (
        <div className="overlay" onClick={() => setIsOpen(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <p>Hello EveryOne!</p>
                <br />
                <button onClick={() => setIsOpen(false)}>Close</button>
            </div>

        </div>
    )
}

export default Modal
