const NewsLetter = () => {
  return (
    <section
      id="news-letter"
      className="px-5 md:border-[1px] md:border-black md:mx-20 md:text-center md:px-28 md:py-10 md:my-20"
    >
      <div className="flex flex-col">
        <h1 className="font-stix text-3xl py-0 ">NEWSLETTER</h1>
        <p className="text-sm py-0 my-5">
          SUBSCRIBE TO OUR DAILY UPDATES AND NEWSLETTERS
        </p>
        <form className="flex flex-col items-start md:flex-row md:space-x-5">
          <input
            className="px-6 py-3.5 border-[1px] w-full mb-5 border-black"
            type="email"
            placeholder="ENTER YOUR EMAIL HERE"
          />
          <button className="px-8 py-4 bg-gray-800 text-white" type="submit">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
