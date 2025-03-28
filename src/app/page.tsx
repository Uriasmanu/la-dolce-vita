"use client"

import * as React from "react"
import Link from "next/link"
import flores from '../../public/img/flores.png';
import chocolate from '../../public/img/chocolate.png';
import bolo from '../../public/img/bolo.png';


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { AlignCenter, Diamond, Search, ShoppingBag } from "lucide-react"


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { Button } from "@/components/ui/button";


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

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-end min-h-screen pt-8 pb-20 gap-8 pl-0 sm:pt-15 sm:pb-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <div className="hidden md:block pr-30">
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

        <div className="block md:hidden">

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
                  <h2 className="text-2xl marck-script-regular text-[#F4DA43]">Chef masterpiece af</h2>
                  <h1 className="text-6xl afacad ">LA DOLCE VITA</h1>
                  <div className="flex w-[80%] items-center gap-1">
                    <div className="border border-[#DAC23A] bg-[#DAC23A] w-full h-0.5"></div>
                    <Diamond className="stroke-[#DAC23A] w-8 h-8" />
                    <div className="border border-[#DAC23A] bg-[#DAC23A] w-full h-0.5"></div>
                  </div>
                  <p className="text-1xl w-[500px] marck-script-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

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
                  <h2 className="text-1xl marck-script-regular text-[#F4DA43]">Chef masterpiece af</h2>
                  <h1 className="text-3xl afacad ">LA DOLCE VITA</h1>
                  <div className="flex w-[80%] items-center gap-1">
                    <div className="border border-[#DAC23A] bg-[#DAC23A] w-full h-0.5"></div>
                    <Diamond className="stroke-[#DAC23A] w-8 h-8" />
                    <div className="border border-[#DAC23A] bg-[#DAC23A] w-full h-0.5"></div>
                  </div>
                  <p className="text-sm w-[350px] marck-script-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

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

        <div className="flex flex-col overflow-hidden relative w-screen h-full">
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
                  <h2 className="text-2xl marck-script-regular text-[#F4DA43]">familly traditior</h2>
                  <h1 className="text-6xl afacad ">OUR STOTY</h1>
                  <div className="flex w-[80%] items-center gap-1">
                    <div className="border border-[#DAC23A] bg-[#DAC23A] w-full h-0.5"></div>
                    <Diamond className="stroke-[#DAC23A] w-8 h-8" />
                    <div className="border border-[#DAC23A] bg-[#DAC23A] w-full h-0.5"></div>
                  </div>
                  <p className="text-1xl w-[500px] marck-script-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

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
                  <h2 className="text-1xl marck-script-regular text-[#F4DA43]">Chef masterpiece af</h2>
                  <h1 className="text-3xl afacad ">LA DOLCE VITA</h1>
                  <div className="flex w-[80%] items-center gap-1">
                    <div className="border border-[#DAC23A] bg-[#DAC23A] w-full h-0.5"></div>
                    <Diamond className="stroke-[#DAC23A] w-8 h-8" />
                    <div className="border border-[#DAC23A] bg-[#DAC23A] w-full h-0.5"></div>
                  </div>
                  <p className="text-sm w-[350px] marck-script-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

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
      </main >
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div >
  );
}
