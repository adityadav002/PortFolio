import "../styles/Projects.css";

function Modal({ show, onClose, linkurl, videourl, posterurl, desc }) {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <video
          src={videourl}
          poster={posterurl}
          muted
          controls
          style={{ display: "block", width: "100%", borderRadius: "10px" }}
        />
        <br />
        <p>{desc}</p>
        <a
          className="live_preview"
          href={linkurl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Preview
        </a>
      </div>
    </div>
  );
}

export default Modal;
