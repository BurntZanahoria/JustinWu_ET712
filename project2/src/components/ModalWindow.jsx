function ModalWindow({ product, closeModal }) {

  return (
    <div className="modal-overlay">

      <div className="modal">

        <button
          className="close-btn"
          onClick={closeModal}
        >
          X
        </button>

        <img src={product.image} alt={product.title} />

        <h2>{product.title}</h2>

        <p>{product.description}</p>

      </div>

    </div>
  );
}

export default ModalWindow;