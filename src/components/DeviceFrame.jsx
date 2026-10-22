import { Laptop, Phone } from "./Devices";

// Shows a screenshot inside a laptop or phone frame.
// frame: "laptop" | "phone" | "none"
export default function DeviceFrame({ src, alt, frame = "none" }) {
  if (frame === "laptop") return <Laptop src={src} alt={alt} />;
  if (frame === "phone") return <Phone src={src} alt={alt} />;
  return (
    <div className="device device-none">
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </div>
  );
}
