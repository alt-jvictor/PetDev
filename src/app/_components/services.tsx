"use client";

import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Scissors,
  Syringe,
  CarTaxiFront,
  Hotel,
  Clock,
} from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react";

const services = [
  {
    title: "Banho e Tosa",
    description:
      "Inclui banho com produtos especificos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
    duration: "1h",
    price: "$50",
    icon: <Scissors />,
    linkText:
      "Ola, vi no site sobre Banho e tosa e gostaria de mais informacões.",
  },
  {
    title: "Consulta Veterinária",
    description:
      "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
    duration: "1h",
    price: "$45",
    icon: <Syringe />,
    linkText:
      "Ola, vi no site sobre Consulta veterinaria e gostaria de mais informacões.",
  },
  {
    title: "Táxi Pet",
    description:
      "Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que nao tem tempo ou transporte adequado para locomover os animais.",
    duration: "2h",
    price: "$80",
    icon: <CarTaxiFront />,
    linkText: "Ola, vi no site sobre Taxi Pet e gostaria de mais informações.",
  },
  {
    title: "Hotel para pets",
    description:
      "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espacos seguros, confortáveis.",
    duration: "1h",
    price: "$60",
    icon: <Hotel />,
    linkText:
      "Ola, vi no site sobre Hotel para pets e gostaria de mais informacões.",
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="text-4xl font-bold mb-12">Serviços</h2>

          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {services.map((Item, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                  >
                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-6 h-full flex flex-col">
                      <div className="flex-1 flex items-start justify-between">
                        <div className="flex gap-3">
                          <span className="text3xl">{Item.icon}</span>
                          <div>
                            <h3 className="font-bold text-xl my-1">
                              {Item.title}
                            </h3>
                            <p className="text-gray-400 text-sm select-none">
                              {Item.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{Item.duration}</span>
                        </div>

                        <a
                          target="_blank"
                          href={`https://wa.me/5511987654321?text=Olá vim pelo site e gostaria de mais informações sobre ${Item.title}`}
                          className=" flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300"
                        >
                          <WhatsappLogoIcon className="w-5 h-5" />
                          Entrar em contato
                        </a>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={scrollPrev}
              className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-1 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={scrollNext}
              className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-9 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
