import Image from "next/image";

function ValuePropositionSection() {
  return (
    <section>
      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="absolute overflow-hidden pointer-events-none index-x-0 -top-40 -z-10 transform-gpu blur-3xl sm:-top-80">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50% - 11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#ffad7d] opacity-30 sm:left-[calc(50% - 30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div>
          <div className="max-w-6xl px-6 mx-auto lg:px-8">
            <div className="flow-root mt-16 sm:mt-24">
              <div className="p-2 -m-2 rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src="/dashboard-preview.jpg"
                  alt="product preview"
                  width={1364}
                  height={866}
                  quality={100}
                  priority
                  className="p-2 bg-white rounded-md shadow-2xl sm:p-8 md:p-20 ring-1 ring-gray-900/5"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute overflow-hidden pointer-events-none index-x-0 -top-40 -z-10 transform-gpu blur-3xl sm:-top-80">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50% - 13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#ffad7d] opacity-30 sm:left-[calc(50% - 36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </section>
  );
}

export default ValuePropositionSection;
