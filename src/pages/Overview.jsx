import React from 'react';

function OurAcademics() {
  return (
    <div className="w-full bg-white mt-10 px-4 sm:px-8 lg:px-20">
      <div className="my-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div className="w-full lg:w-2/3 space-y-6">
          <h4 className="tracking-widest uppercase text-md  border border-black px-3 py-1 inline-block">
            Overview
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-tight">
            Developing caring learners who are actively growing and achieving
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Dictum at fames placerat sociosqu mus ultrices. Aliquet torquent eget magnis nam laoreet nascetur.
            Ante adipiscing rhoncus feugiat vehicula quis a mus felis montes. Molestie pede neque vestibulum nunc
            leo ridiculus mollis rutrum sed volutpat porta.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="flex items-start space-x-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFq5ThVIQrHt540Yo-PgvC5gl0t3ScuS3SAURCsvvcGzSdltktCZkNeyOITGmcloxX8jg&usqp=CAU"
                className="w-8 h-8 object-contain"
                alt="Academic Icon"
              />
              <div>
                <h3 className="text-lg md:text-xl font-bold">Academic excellence</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  At ante tellus justo quam fusce. Vehicula montes at interdum morbi maecenas diam.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFq5ThVIQrHt540Yo-PgvC5gl0t3ScuS3SAURCsvvcGzSdltktCZkNeyOITGmcloxX8jg&usqp=CAU"
                className="w-8 h-8 object-contain"
                alt="Global Icon"
              />
              <div>
                <h3 className="text-lg md:text-xl font-bold">Across the globe</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  At ante tellus justo quam fusce. Vehicula montes at interdum morbi maecenas diam.
                </p>
              </div>
            </div>
          </div>

          <button className="mt-2 px-6 py-3 bg-[#8e44ad] text-white font-semibold  hover:bg-white hover:border-[#8e44ad] hover:text-[#8e44ad] border-1 transition">
            Discover More
          </button>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <img
            src="https://webkit.moxcreative.com/acadrova/wp-content/uploads/sites/20/2023/06/happy-student-hugging-her-father-after-receiving-diploma-on-graduation-day-at-the-university--1536x1024.jpg"
            alt="Graduation"
            className="w-full h-[350px] md:h-[450px] lg:h-[500px] object-cover "
          />
          <div className="absolute bottom-4 left-4 md:-left-6 border-l-4 border-[#8e44ad] bg-white shadow-xl p-5 md:p-6 max-w-xs md:max-w-sm">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Sit curae libero fusce letius suscipit si duis leo natoque ante. Lobortis auctor montes pellentesque
              feugiat curae porta odio elit egestas in eros.
            </p>
            <h4 className="mt-2 font-semibold text-gray-800">Diane H. Carlson</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurAcademics;
