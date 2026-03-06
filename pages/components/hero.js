import Image from "next/image";

export default function Hero() {
  return (
    <header className="section pt-20 pb-12 border-b border-border animate-fadeUp hero-header">
      <div className="status-badge">
        <span className="status-dot"></span>
        Open to Work
      </div>
      <div className="name-wrapper">
        <h1 className="heading-display">Ansar Fadillah</h1>
        <Image
          src="/image/peace.png"
          alt="Peace hand gesture"
          width={100}
          height={100}
          className="peace-image"
        />
      </div>
      <div className="title-line">
        <span className="role-tag">Backend Developer</span>
        <span className="years-badge">3 yrs experience</span>
      </div>
      <p className="tagline">
        Professional JSON mover. I take JSON from here and put it over there.
      </p>
    </header>
  );
}
