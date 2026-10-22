import AppMock from "./AppMock";

// A laptop and/or a phone. Each one shows a real screenshot when `src` is set,
// otherwise a drawn screen (`mock`).
export function Laptop({ src, alt = "", mock, lang }) {
  return (
    <div className="device device-laptop">
      <div className="device-screen">
        {src ? <img src={src} alt={alt} /> : <AppMock variant={mock} lang={lang} />}
      </div>
      <div className="device-base" aria-hidden="true" />
    </div>
  );
}

export function Phone({ src, alt = "", mock, lang }) {
  return (
    <div className="device device-phone">
      <div className="device-screen">
        {src ? <img src={src} alt={alt} /> : <AppMock variant={mock} lang={lang} />}
      </div>
    </div>
  );
}
