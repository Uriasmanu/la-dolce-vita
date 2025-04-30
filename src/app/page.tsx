"use client"

import * as React from "react"
import Link from "next/link"
import flores from '../../public/img/flores.png';
import chocolate from '../../public/img/chocolate.png';
import bolo from '../../public/img/bolo.png';
import boloVerde from '../../public/img/boloVerde.png';


import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { AlignCenter, Diamond, Search, ShoppingBag } from "lucide-react"


import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { Button } from "@/components/ui/button";
import { useWhatsApp } from "@/hook/useWhatsApp";


const menuItems: { title: string; href: string }[] = [
  {
    title: "INICIO",
    href: "#inicio",
  },
  {
    title: "SOBRE",
    href: "#sobre",
  },
  {
    title: "PREÇOS",
    href: "#precos",
  },
  {
    title: "PRODUTOS",
    href: "#produtos",
  },
  {
    title: "CONTATO",
    href: "#contato",
  },
]


const cardapioItems: {
  title: string;
  fatias: string;
  peso: string;
  recheios: string;
  textoButton: string;
}[] = [
    {
      title: "Bento Cake",
      fatias: "2 a 4 fatias",
      peso: "(400g a 500g)",
      recheios: "Opções de recheio disponíveis sob consulta.",
      textoButton: "Saber Mais",
    },
    {
      title: "Bolo P",
      fatias: "10 a 15 fatias",
      peso: "(1kg a 1,5kg)",
      recheios: "Opções de recheio disponíveis sob consulta.",
      textoButton: "Saber Mais",
    },
    {
      title: "Bolo M",
      fatias: "20 a 25 fatias",
      peso: "(2kg a 2,5kg)",
      recheios: "Opções de recheio disponíveis sob consulta.",
      textoButton: "Saber Mais",
    },
    {
      title: "Bolo G",
      fatias: "30 a 35 fatias",
      peso: "(3kg a 3,5kg)",
      recheios: "Opções de recheio disponíveis sob consulta.",
      textoButton: "Saber Mais",
    },
  ];

const massasRecheios: { massa: string, recheio: string }[] = [
  { massa: "Baunilha", recheio: "Mousse de Leite Ninho" },
  { massa: "Red Velvet", recheio: "Brigadeiro" },
  { massa: "Chocolate", recheio: "Geleia de Morango" },
  { massa: "Chocolate", recheio: "Mousse de Chocolate" }
];

export default function Home() {
  const { sendMessage } = useWhatsApp();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-end min-h-screen pt-8 pb-20 gap-8 pl-0 sm:pt-15 sm:pb-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <div className="hidden pr-30">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-8">
              {menuItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink>
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <Search className="stroke-[#DAC23A]" />
              </NavigationMenuItem>

              <NavigationMenuItem>
                <ShoppingBag className="stroke-[#DAC23A]" />
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden">

          <Sheet>
            <SheetTrigger className="mr-8">
              <AlignCenter className="stroke-[#DAC23A] w-8 h-8" />
            </SheetTrigger>
            <SheetContent>
              <NavigationMenu>
                <NavigationMenuList className="flex flex-col items-start gap-4 p-4">
                  {menuItems.map((item, index) => (
                    <NavigationMenuItem key={index}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink>
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}

                </NavigationMenuList>
              </NavigationMenu>
            </SheetContent>
          </Sheet>

        </div>
      </header>

      <main className="w-screen h-full">

        <div className="flex overflow-hidden relative w-full h-[90vh]">
          <div className="hidden md:block">
            <div className="absolute top-[-70px] left-[-220px] w-[500px] h-[800px] overflow-hidden">
              <Image
                src={flores}
                alt="Descrição da imagem"
                width={450}
                height={250}
                className="-rotate-12 "
              />

              <Image
                src={flores}
                alt="Descrição da imagem"
                width={450}
                height={250}
                className="-rotate-12"
              />
            </div>

            <div className="absolute top-40 ml-35 w-[300px]">

              <div className="flex w-[70rem] h-[20rem] gap-10">
                <div>
                  <Image
                    src={bolo}
                    alt="Descrição da imagem"
                    width={650}
                    height={400}
                  />
                </div>

                <div className="flex flex-col text-center gap-2 items-center">
                  <h2 className="text-2xl marck-script-regular text-[#F4DA43]">Receitas que encantam</h2>
                  <h1 className="text-6xl afacad ">LA DOLCE VITA</h1>
                  <div className="flex w-[80%] items-center gap-1">
                    <div className="border border-[#DAC23A] bg-[#DAC23A] w-full h-0.5"></div>
                    <Diamond className="stroke-[#DAC23A] w-8 h-8" />
                    <div className="border border-[#DAC23A] bg-[#DAC23A] w-full h-0.5"></div>
                  </div>
                  <p className="text-1xl w-[500px] marck-script-regular">Da escolha dos ingredientes ao toque final: tudo é feito com alma.
                  </p>

                  <div className="flex w-full justify-center gap-4 py-4">
                    <Button className="cursor-pointer rounded-[2px]">DESCOBRIR</Button>
                    <Button
                      className="bg-white text-[#DAC23A] border border-[#DAC23A] hover:bg-[#DAC23A]/10 transition-colors cursor-pointer rounded-[2px]"
                    >COMPRAR</Button>
                  </div>
                </div>

              </div>
            </div>

            <div className="absolute top-[-90px] right-[-220px] w-[500px] h-[800px] overflow-hidden">
              <Image
                src={flores}
                alt="Descrição da imagem"
                width={500}
                height={300}
                className="rotate-[-48deg]"
              />

              <Image
                src={flores}
                alt="Descrição da imagem"
                width={500}
                height={300}
                className="rotate-[-48deg]"
              />
            </div>

          </div>

          <div className="block md:hidden">
            <div className="absolute top-[-60px] left-[-160px] w-[500px] h-[800px] overflow-hidden">
              <Image
                src={flores}
                alt="Descrição da imagem"
                width={244}
                height={688}
                className="rotate-[-15deg]"
              />

              <Image
                src={flores}
                alt="Descrição da imagem"
                width={244}
                height={688}
                className="rotate-[-15deg] absolute top-[420px]"
              />
            </div>

            <div className="absolute top-21 ml-11 w-[350px]">

              <div className="flex flex-col-reverse w-[20rem] h-[25rem] gap-5">
                <div>
                  <Image
                    src={bolo}
                    alt="Descrição da imagem"
                    width={320}
                    height={10}
                  />
                </div>

                <div className="flex flex-col text-center gap-2 items-center">
                  <h2 className="text-1xl marck-script-regular text-[#F4DA43]">Receitas que encantam</h2>
                  <h1 className="text-3xl afacad ">LA DOLCE VITA</h1>
                  <div className="flex w-[80%] items-center gap-1">
                    <div className="border border-[#DAC23A] bg-[#DAC23A] w-full h-0.5"></div>
                    <Diamond className="stroke-[#DAC23A] w-8 h-8" />
                    <div className="border border-[#DAC23A] bg-[#DAC23A] w-full h-0.5"></div>
                  </div>
                  <p className="text-sm w-[350px] marck-script-regular">Da escolha dos ingredientes ao toque final: tudo é feito com alma.
                  </p>

                  <div className="flex w-full justify-center gap-4 py-4">
                    <Button className="cursor-pointer rounded-[2px]">DESCOBRIR</Button>
                    <Button
                      className="bg-white text-[#DAC23A] border border-[#DAC23A] hover:bg-[#DAC23A]/10 transition-colors cursor-pointer rounded-[2px]"
                    >COMPRAR</Button>
                  </div>
                </div>

              </div>
            </div>

            <div className="relative top-[-60px] right-[-290px] w-[500px] h-[800px] overflow-hidden">
              <Image
                src={flores}
                alt="Descrição da imagem"
                width={244}
                height={688}
                className="rotate-[-35deg]"
              />

              <Image
                src={flores}
                alt="Descrição da imagem"
                width={244}
                height={688}
                className="rotate-[-35deg] absolute top-[420px]"
              />
            </div>

          </div>

        </div>

        <div className="flex flex-col overflow-hidden relative w-screen sm:h-full">
          <div className="hidden md:block">
            <div className="absolute top-[-70px] left-[-220px] w-[500px] h-[800px] overflow-hidden">
              <Image
                src={chocolate}
                alt="Descrição da imagem"
                width={450}
                height={250}
                className="-rotate-12 "
              />


              <Image
                src={chocolate}
                alt="Descrição da imagem"
                width={450}
                height={250}
                className="-rotate-12"
              />
            </div>

            <div className="absolute top-[-70px] left-[150px] w-[500px] h-[800px] overflow-hidden">
              <Image
                src={chocolate}
                alt="Descrição da imagem"
                width={150}
                height={250}
                className="-rotate-12 "
              />


              <Image
                src={chocolate}
                alt="Descrição da imagem"
                width={150}
                height={250}
                className="-rotate-12"
              />
            </div>

            <div className="absolute top-40 ml-35 w-[300px]">

              <div className="flex w-[80rem] h-[20rem] justify-center">

                <div className="flex flex-col text-center gap-2 items-center">
                  <h2 className="text-2xl marck-script-regular text-[#F4DA43]">Doçura com propósito</h2>
                  <h1 className="text-6xl afacad ">Nossa Historia</h1>
                  <div className="flex w-[80%] items-center gap-1">
                    <div className="border border-[#DAC23A] bg-[#DAC23A] w-full h-0.5"></div>
                    <Diamond className="stroke-[#DAC23A] w-8 h-8" />
                    <div className="border border-[#DAC23A] bg-[#DAC23A] w-full h-0.5"></div>
                  </div>
                  <p className="text-1xl w-[500px] marck-script-regular">Desde pequena, sonhava em viver entre massas e confeitos. Hoje, esse sonho virou realidade — e cada doce é feito com o mesmo carinho de quem nunca desistiu.</p>

                  <h2 className="text-2xl ole-regular text-[#D4D4D4]">fernandes</h2>
                </div>
              </div>

            </div>


            <div className="absolute top-[-70px] right-[-150px] w-[500px] h-[800px] overflow-hidden">
              <Image
                src={chocolate}
                alt="Descrição da imagem"
                width={150}
                height={250}
                className="-rotate-12 "
              />


              <Image
                src={chocolate}
                alt="Descrição da imagem"
                width={150}
                height={250}
                className="-rotate-12"
              />
            </div>

            <div className="absolute top-[-90px] right-[-220px] w-[500px] h-[800px] overflow-hidden">

              <Image
                src={chocolate}
                alt="Descrição da imagem"
                width={500}
                height={300}
                className="rotate-[-48deg]"
              />

              <Image
                src={chocolate}
                alt="Descrição da imagem"
                width={500}
                height={300}
                className="rotate-[-48deg]"
              />
            </div>

          </div>

          <div className="block md:hidden">
            <div className="absolute top-[-10px] left-[-160px] w-[500px] h-[800px] overflow-hidden">
              <Image
                src={chocolate}
                alt="Descrição da imagem"
                width={280}
                height={688}
                className="rotate-[-15deg]"
              />

              <Image
                src={chocolate}
                alt="Descrição da imagem"
                width={280}
                height={688}
                className="rotate-[-15deg] absolute top-[420px]"
              />
            </div>

            <div className="absolute top-21 ml-10 w-[350px]">

              <div className="flex flex-col-reverse w-[20rem] h-[25rem] gap-5">

                <div className="flex flex-col text-center gap-2 items-center">
                  <h2 className="text-1xl marck-script-regular text-[#F4DA43]">Doçura com propósito</h2>
                  <h1 className="text-3xl afacad ">Nossa Historia</h1>
                  <div className="flex w-[80%] items-center gap-1">
                    <div className="border border-[#DAC23A] bg-[#DAC23A] w-full h-0.5"></div>
                    <Diamond className="stroke-[#DAC23A] w-8 h-8" />
                    <div className="border border-[#DAC23A] bg-[#DAC23A] w-full h-0.5"></div>
                  </div>
                  <p className="text-sm w-[350px] marck-script-regular">Desde pequena, sonhava em viver entre massas e confeitos. Hoje, esse sonho virou realidade — e cada doce é feito com o mesmo carinho de quem nunca desistiu.</p>

                  <h2 className="text-2xl ole-regular text-[#D4D4D4]">fernandes</h2>
                </div>
              </div>

            </div>

            <div className="relative top-[-10px] right-[-290px] w-[500px] h-[800px] overflow-hidden">
              <Image
                src={chocolate}
                alt="Descrição da imagem"
                width={280}
                height={688}
                className="rotate-[-35deg]"
              />

              <Image
                src={chocolate}
                alt="Descrição da imagem"
                width={280}
                height={688}
                className="rotate-[-35deg] absolute top-[420px]"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center bg-[#E47A7C] sm:h-[20rem] h-[10rem] relative sm:top-[-70%] top-[-100px]">
          <h3 className="sm:text-3xl text-2xl text-center ole-regular sm:w-[30%] w-[80%]"></h3>
        </div>

        <div className="flex flex-col overflow-hidden relative w-screen sm:h-[90rem] sm:top-[-70%] top-[-220px]">
          <div className="hidden md:block">
            <div className="absolute top-[-70px] left-[-220px] w-[500px] h-[800px] overflow-hidden">
              <Image
                src={chocolate}
                alt="Descrição da imagem"
                width={250}
                height={250}
                className="-rotate-12"
              />


              <Image
                src={flores}
                alt="Descrição da imagem"
                width={450}
                height={250}
                className="-rotate-12"
              />
            </div>

            <div className="absolute top-[10px] left-[150px] w-[500px] h-[800px] overflow-hidden">

              <Image
                src={chocolate}
                alt="Descrição da imagem"
                width={150}
                height={250}
                className="-rotate-12"
              />
            </div>

            <div className="absolute top-40 ml-35 w-[300px]">

              <div className="flex w-[80rem] h-[20rem] justify-center">

                <div className="flex flex-col text-center gap-2 items-center">
                  <h2 className="text-2xl marck-script-regular text-[#F4DA43]">Ofertas Irresistíveis para Você</h2>
                  <h1 className="text-6xl afacad ">OFERTAS DOCES</h1>
                  <div className="flex w-[80%] items-center gap-1">
                    <div className="border border-[#DAC23A] bg-[#DAC23A] w-full h-0.5"></div>
                    <Diamond className="stroke-[#DAC23A] w-8 h-8" />
                    <div className="border border-[#DAC23A] bg-[#DAC23A] w-full h-0.5"></div>
                  </div>
                  <p className="text-1xl w-[500px] marck-script-regular">Conheça nossas opções de bolos e combinações deliciosas! O preço varia de R$ 55,00 a R$ 70,00 o quilo.</p>

                </div>
              </div>

            </div>


            <div className="absolute top-[0px] right-[-260px] w-[500px] h-[800px] overflow-hidden">
              <Image
                src={chocolate}
                alt="Descrição da imagem"
                width={150}
                height={250}
                className="-rotate-12"
              />


              <Image
                src={flores}
                alt="Descrição da imagem"
                width={450}
                height={250}
                className="rotate-[-45deg]"
              />
            </div>

          </div>

          <div className="block md:hidden">
            <div className="absolute top-[-10px] left-[-160px] w-[500px] h-[800px] overflow-hidden">
              <Image
                src={chocolate}
                alt="Descrição da imagem"
                width={110}
                height={688}
                className="rotate-[-15deg] relative top-[150px] left-[160px]"
              />

              <Image
                src={flores}
                alt="Descrição da imagem"
                width={280}
                height={688}
                className="rotate-[-15deg] absolute top-[420px]"
              />
            </div>

            <div className="absolute top-21 ml-10 w-[350px]">

              <div className="flex flex-col-reverse w-[20rem] h-[25rem] gap-5">

                <div className="flex flex-col text-center gap-2 items-center">
                  <h2 className="text-1xl marck-script-regular text-[#F4DA43]">Ofertas Irresistíveis para Você</h2>
                  <h1 className="text-3xl afacad ">OFERTAS DOCES</h1>
                  <div className="flex w-[80%] items-center gap-1">
                    <div className="border border-[#DAC23A] bg-[#DAC23A] w-full h-0.5"></div>
                    <Diamond className="stroke-[#DAC23A] w-8 h-8" />
                    <div className="border border-[#DAC23A] bg-[#DAC23A] w-full h-0.5"></div>
                  </div>
                  <p className="text-sm w-[280px] marck-script-regular">
                    Conheça nossas opções de bolos e combinações deliciosas! O preço varia de R$ 55,00 a R$ 70,00 o quilo.
                  </p>
                </div>

              </div>

            </div>

            <div className="relative top-[-10px] right-[-260px] w-[500px] h-[800px] overflow-hidden">
              <Image
                src={chocolate}
                alt="Descrição da imagem"
                width={110}
                height={688}
                className="rotate-[-35deg] relative top-[150px]"
              />

              <Image
                src={flores}
                alt="Descrição da imagem"
                width={280}
                height={688}
                className="rotate-[-35deg] absolute top-[420px]"
              />
            </div>
          </div>

          <div className="relative sm:top-[35%] top-[-130px] sm:w-[100%] flex gap-5 px-[8%] h-[30rem] overflow-x-auto scroll-snap-x scroll-snap-mandatory no-scrollbar">
            {cardapioItems.map((item, index) => (
              <div key={index} className="border border-[#D4D4D4] py-[3%] sm:w-[18rem] w-[290px] h-[25rem] flex-shrink-0 scroll-snap-align-start">
                <div className="flex flex-col items-center gap-4 p-4">
                  <h3 className="text-3xl text-[#DAC23A]">{item.title}</h3>
                  <p className="text-lg font-semibold">{item.fatias}</p>
                  <p className="text-gray-600">{item.peso}</p>
                  <div className="border border-[#D4D4D4] w-full"></div>
                  <p className="text-center px-4 text-gray-700">{item.recheios}</p>
                  <button
                    className="mt-4 px-6 py-2 bg-[#DAC23A] text-white rounded-lg cursor-pointer"
                    onClick={() => sendMessage(item.title)}
                  >
                    {item.textoButton}

                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="sm:flex relative sm:top-[35%] top-[-65px] sm:left-[5%] sm:h-[30rem] sm:w-[75%] justify-evenly">

            <div className="flex flex-col w-full h-[15rem] gap-5">

              <div className="flex flex-col text-center gap-2 items-center sm:w-[30rem]">
                <h1 className="sm:text-3xl text-2xl afacad w-full">Opções de Combinação:</h1>
                <div className="flex w-[80%] items-center gap-1">
                  <Diamond className="stroke-[#DAC23A] w-6 h-6" />
                  <div className="border border-[#DAC23A] bg-[#DAC23A] w-full h-0.5"></div>
                </div>
              </div>
              <div className="px-16">
                {massasRecheios.map((opcao, index) => (
                  <div key={index} className="mb-4">
                    <p className="sm:text-1xl font-bold">{opcao.massa}</p>
                    <p>{opcao.recheio}</p>
                  </div>
                ))}
              </div>

            </div>
            <div className="sm:w-[70rem]">
              <Image
                src={boloVerde}
                alt="Descrição da imagem"
                width={680}
                height={150}
                className="sm:w-full w-[85%] ml-5 h-auto sm:my-0 my-[8rem]"
              />
            </div>
          </div>
        </div>
      </main >
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div >
  );
}
