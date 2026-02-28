function Loader({ label = "Загрузка..." }) {
  return (
    <div className="loader" role="status" aria-live="polite" aria-label={label}>
      <div className="loader__spinner" />
      <div className="loader__text">{label}</div>
    </div>
  );
}

export default Loader;
