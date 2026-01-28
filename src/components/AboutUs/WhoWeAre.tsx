import WhoWeAreImage from "../../assets/WhoWeAreImage.png";
import { Check } from "lucide-react";

function DoTogether() {
  const targets = [
    "Non-Profit Organization.",
    "Companies",
    "Private Sector",
    "Individuals",
  ];
  return (
    <>
      <div className="min-h-screen bg-[#F0F8FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-2xl overflow-hidden ">
              <div className="w-full h-full  flex items-center justify-center">
                <img
                  src={WhoWeAreImage}
                  alt="Who We Are - Our Team"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="600"
                  className="rounded-lg aspect-3/4 object-cover"
                  style={{ willChange: "transform" }}
                />
              </div>
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Who We Are?
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Psykiater.no is a private psychiatric clinic offering fast
                access to psychiatrists, psychologists, and specialists in
                addiction medicine. We help individuals, companies, non-profits,
                and public sector clients. We provide flexible care through
                secure video or telephone consultations, as well as in-person
                visits in Oslo and Ski.
              </p>
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 max-w-2xl">
                  {targets.map((text, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-700 flex items-center justify-center shadow-sm">
                        <Check
                          size={20}
                          strokeWidth={3}
                          className="text-white"
                        />
                      </div>

                      <span className="text-[#374151] text-lg font-medium tracking-tight">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    </>
  );
}

export default DoTogether;
