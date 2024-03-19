function Project({ reverse, img, description, title, url }) {
  return (
    <section
      className={`${
        reverse ? "flex-row-reverse" : ""
      } flex gap-10 py-5 animate-transformUp 1s -lg:flex-col`}
    >
      <div className="w-1/2 h-1/2 -lg:w-full">
        <img
          src={img}
          alt="e-cart website"
          className="h-80 w-full object-cover object-top rounded-2xl shadow-lg"
        />
      </div>
      <div className="w-1/2 h-1/2 -lg:w-full">
        <h2 className="text-2xl font-semibold leading-loose -sm:text-xl">
          {title}
        </h2>
        <p className="text-lg leading-7 py-4 -sm:text-base">{description}</p>
        <a
          href={url}
          className="text-primary text-2xl leading-loose underline	font-semibold -sm:text-xl"
        >
          Visit&#10138;
        </a>
      </div>
    </section>
  );
}

export default Project;
