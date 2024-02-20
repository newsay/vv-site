import "./globals.css";


export default function Home() {
  return (
    <>
      <div className="w-full h-64"
        style={{
          background: "linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6)), url(images/stage.jpg) center/cover fixed"
        }}>

        <div className="flex justify-center items-center h-full">
          <div className="block text-white italic text-right">
            <h1 className="md:text-8xl">
              "Lorem Ipsum!"
            </h1>
            <h2 className="md:text-xl">-Ipsum Lorem</h2>
          </div>
        </div>
      </div>
      <div className="w-full h-64"
        style={{
          background: "linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6)), url(images/theatre.jpg) center/cover fixed"
        }}>

        <div className="flex justify-center items-center h-full">
          <div className="block text-white italic text-right">
            <h1 className="md:text-8xl">
              "Lorem Ipsum!"
            </h1>
            <h2 className="md:text-xl">-Ipsum Lorem</h2>
          </div>
        </div>
      </div>

      <p>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industrys standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in
        the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like
        Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here, content here, making it
        look like readable English.
      </p>
    </>
  );
}
