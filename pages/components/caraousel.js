import Image from "next/image";

export default function Caraousel() {
  return (
    <>
        {/* slider 1  */}
      <div className="slider">
        <div
          className="slide-track"
          style={{
            animationDirection: "normal",
            animation: "scroll 40s linear infinite",
          }}
        >
          <div className="slide">
            <Image src={"/image/nodejs.svg"} alt="nodejs" height="64" width="64" />
          </div>
          <div className="slide">
            <Image
              src={"/image/tailwind.svg"}
              alt="tailwind"
              height="64"
              width="64"
            />
          </div>
          <div className="slide">
            <Image src={"/image/react.svg"} alt="react" height="64" width="64" />
          </div>
          <div className="slide">
            <Image
              src={"/image/javascript.svg"}
              alt="html"
              height="64"
              width="64"
            />
          </div>
          <div className="slide">
            <Image src={"/image/html.svg"} alt="html" height="64" width="64" />
          </div>
          <div className="slide">
            <Image
              src={"/image/nextjs.svg"}
              alt="html"
              height="64"
              width="64"
            />
          </div>
          <div className="slide">
            <Image src={"/image/nodejs.svg"} alt="nodejs" height="64" width="64" />
          </div>
          <div className="slide">
            <Image
              src={"/image/tailwind.svg"}
              alt="tailwind"
              height="64"
              width="64"
            />
          </div>
          <div className="slide">
            <Image src={"/image/react.svg"} alt="react" height="64" width="64" />
          </div>
          <div className="slide">
            <Image
              src={"/image/javascript.svg"}
              alt="js"
              height="64"
              width="64"
            />
          </div>
          <div className="slide">
            <Image src={"/image/html.svg"} alt="html" height="64" width="64" />
          </div>
          <div className="slide">
            <Image
              src={"/image/nextjs.svg"}
              alt="html"
              height="64"
              width="64"
            />
          </div>
        </div>
      </div>
      {/* slider 2 */}
      <div className="slider">
        <div className="slide-track" style={{ animationDirection: "reverse" }}>
          <div className="slide">
            <Image src={"/image/git.svg"} alt="git" height="64" width="64" />
          </div>
          <div className="slide">
            <Image
              src={"/image/php.svg"}
              alt="php"
              height="64"
              width="64"
            />
          </div>
          <div className="slide">
            <Image src={"/image/css.svg"} alt="css" height="64" width="64" />
          </div>
          <div className="slide">
            <Image
              src={"/image/javascript.svg"}
              alt="html"
              height="64"
              width="64"
            />
          </div>
          <div className="slide">
            <Image src={"/image/postgresql.svg"} alt="postgresql" height="64" width="64" />
          </div>
          <div className="slide">
            <Image
              src={"/image/nextjs.svg"}
              alt="postgresql"
              height="64"
              width="64"
            />
          </div>
          <div className="slide">
            <Image src={"/image/git.svg"} alt="git" height="64" width="64" />
          </div>
          <div className="slide">
            <Image
              src={"/image/php.svg"}
              alt="php"
              height="64"
              width="64"
            />
          </div>
          <div className="slide">
            <Image src={"/image/css.svg"} alt="css" height="64" width="64" />
          </div>
          <div className="slide">
            <Image
              src={"/image/javascript.svg"}
              alt="postgresql"
              height="64"
              width="64"
            />
          </div>
          <div className="slide">
            <Image src={"/image/postgresql.svg"} alt="postgresql" height="64" width="64" />
          </div>
          <div className="slide">
            <Image
              src={"/image/nextjs.svg"}
              alt="postgresql"
              height="64"
              width="64"
            />
          </div>
        </div>
      </div>
      {/* slider 3 */}
      <div className="slider">
        <div
          className="slide-track"
          style={{
            animationDirection: "normal",
            animation: "scroll 40s linear infinite",
          }}
        >
          <div className="slide">
            <Image src={"/image/javascript.svg"} alt="javascript" height="64" width="64" />
          </div>
          <div className="slide">
            <Image
              src={"/image/nodejs.svg"}
              alt="nodejs"
              height="64"
              width="64"
            />
          </div>
          <div className="slide">
            <Image src={"/image/css.svg"} alt="css" height="64" width="64" />
          </div>
          <div className="slide">
            <Image src={"/image/html.svg"} alt="html" height="64" width="64" />
          </div>
          <div className="slide">
            <Image
              src={"/image/javascript.svg"}
              alt="html"
              height="64"
              width="64"
            />
          </div>
          <div className="slide">
            <Image
              src={"/image/nextjs.svg"}
              alt="html"
              height="64"
              width="64"
            />
          </div>
          <div className="slide">
            <Image src={"/image/javascript.svg"} alt="javascript" height="64" width="64" />
          </div>
          <div className="slide">
            <Image
              src={"/image/nodejs.svg"}
              alt="nodejs"
              height="64"
              width="64"
            />
          </div>
          <div className="slide">
            <Image src={"/image/css.svg"} alt="css" height="64" width="64" />
          </div>
          <div className="slide">
            <Image
              src={"/image/html.svg"}
              alt="html"
              height="64"
              width="64"
            />
          </div>
          <div className="slide">
            <Image src={"/image/javascript.svg"} alt="javascript" height="64" width="64" />
          </div>
          <div className="slide">
            <Image
              src={"/image/nextjs.svg"}
              alt="html"
              height="64"
              width="64"
            />
          </div>
        </div>
      </div>
    </>
  );
}
