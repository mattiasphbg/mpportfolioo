import Image from "next/image";

export default function CompanyLogos() {
  return (
    <section className="bg-[#1C1C1C] py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-3xl font-bold text-white md:mb-16 md:text-4xl">
          I&apos;ve worked with
          <br />
          the likes of:
        </h2>
        <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-3 md:gap-12">
          <div className="flex items-center justify-center">
            <Image
              src="https://res.cloudinary.com/dxhfq1g84/image/upload/v1733748675/Sogeti_Logo_WHITE_CMYK_rnxhne.png"
              alt="sogeti"
              width={200}
              height={40}
              className="h-10 w-auto opacity-80 transition-opacity hover:opacity-100"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://res.cloudinary.com/dxhfq1g84/image/upload/v1680790327/fitp/mockdata-removebg-preview_g8qei6.png"
              alt="Ocado"
              width={160}
              height={40}
              className="h-10 w-auto opacity-80 transition-opacity hover:opacity-100"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://res.cloudinary.com/dxhfq1g84/image/upload/v1733748692/LOGO_HABYGG_RGB_HA_Color_webb1_hzorsp.png"
              alt="Enate"
              width={140}
              height={40}
              className="h-10 w-auto opacity-80 transition-opacity hover:opacity-100"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://res.cloudinary.com/dxhfq1g84/image/upload/v1733749388/6645c2fb12b1bb375302d5dd_logo-color_k2bwow.jpg"
              alt="TMF Group"
              width={120}
              height={40}
              className="h-15 w-auto opacity-80 transition-opacity hover:opacity-100"
            />
          </div>
          {/* <div className="flex items-center justify-center">
            <Image
              src="/relo-logo.svg"
              alt="Relo"
              width={140}
              height={40}
              className="h-8 w-auto opacity-80 transition-opacity hover:opacity-100"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/cornerstone-logo.svg"
              alt="Cornerstone Commercial Finance"
              width={180}
              height={40}
              className="h-8 w-auto opacity-80 transition-opacity hover:opacity-100"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
