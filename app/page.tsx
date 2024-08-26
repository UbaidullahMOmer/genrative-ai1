import Image from "next/image";

export default function Home() {
  return (
    <div className=" h-screen flex items-center justify-center mx-[40px]">
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 ">
        <Image
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover"
          src="https://lh3.googleusercontent.com/a/ACg8ocLPx0pEzYBIxki07T1kZA7BIIAD7kFcmOSvQH2pzyqA4H-0qg3p=s288-c-no"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
