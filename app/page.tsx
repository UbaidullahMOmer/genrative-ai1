export default function Home() {
  return (
    <div className=" h-screen flex items-center justify-center mx-[40px]" >
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 ">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover"
          src="./Ubaidullah.jpeg"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “I am young and passionate about creating innovative projects. My experience includes a variety of projects that address unique challenges. It is my USP to work on many projects and complete them within a short period.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Ubaidullah Omer</div>
            <div className="text-slate-700 dark:text-slate-500">
              Website Developer, Danmark
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
