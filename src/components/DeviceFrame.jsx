// Shows a screenshot inside a laptop or phone frame (pure CSS, no images needed).
// frame: "laptop" | "phone" | "none"
export default function DeviceFrame({ src, alt, frame = "none", eager = false }) {
  const img = <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} decoding="async" />;

  if (frame === "laptop") {
    return (
      <div className="device device-laptop">
        <div className="device-screen">{img}</div>
        <div className="device-base" aria-hidden="true" />
      </div>
    );
  }

  if (frame === "phone") {
    return (
      <div className="device device-phone">
        <div className="device-screen">{img}</div>
      </div>
    );
  }

  return <div className="device device-none">{img}</div>;
}
