import Image from "next/image"
import { Lightbulb, DollarSign, BookOpen, TrendingUp } from 'lucide-react'
 
export default function WhyChooseUs() {
  return (
    <section className="bg-[#a1f3f5] py-16 px-4 md:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-[#ff8d23] font-semibold text-sm uppercase tracking-wide mb-2">
          HOW WE DO
        </p>
        <h2 className="text-[#005355] text-4xl md:text-5xl font-bold">
          Why Choose Us
        </h2>
      </div>
 
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-[#000000] text-3xl md:text-4xl font-bold mb-6 leading-tight">
              We Are Expert & Do Our Best For Your Goal
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              ADVAIT delivers innovative, scalable, and tailored IT solutions that help businesses enhance efficiency, reduce costs, and stay ahead of the competition.
            </p>
 
            {/* Feature Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Innovative Solution */}
              <div className="bg-[#ffffff] rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-[#01c1a1] rounded-full p-3 flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-[#000000] font-bold text-lg mb-2">
                      Innovative Solution
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We deliver cutting-edge IT solutions tailored to your business needs.
                    </p>
                  </div>
                </div>
              </div>
 
              {/* Cost-efficiency */}
              <div className="bg-[#ffffff] rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-[#01c1a1] rounded-full p-3 flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-[#000000] font-bold text-lg mb-2">
                      Cost-efficiency
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We help reduce costs while improving overall efficiency.
                    </p>
                  </div>
                </div>
              </div>
 
              {/* Industry Expertise */}
              <div className="bg-[#ffffff] rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-[#01c1a1] rounded-full p-3 flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-[#000000] font-bold text-lg mb-2">
                      Industry Expertise
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Benefit from our deep understanding of diverse industry sectors.
                    </p>
                  </div>
                </div>
              </div>
 
              {/* Scalability */}
              <div className="bg-[#ffffff] rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-[#01c1a1] rounded-full p-3 flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-[#000000] font-bold text-lg mb-2">
                      Scalability
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Our services grow with your business, ensuring long-term value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
 
          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-4e6xdXWlLoJuMVqrNoiJ3Vgyorp5KF.png"
                alt="Team collaboration - people working together around laptops"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}