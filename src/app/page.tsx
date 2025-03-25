"use client"

import * as React from "react"
import Link from "next/link"
import flores from '../../public/img/flores.png';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { AlignCenter, Search, ShoppingBag } from "lucide-react"


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"


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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-end min-h-screen pl-8 pt-8 pb-20 gap-8 sm:pl-15 sm:pt-15 sm:pb-20 font-[family-name:var(--font-geist-sans)]">
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
            <SheetTrigger>
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

      <main className="flex overflow-hidden">

        <div className="hidden md:block">
          <div className="absolute top-[50px] left-[-200px] w-[500px] h-[800px] overflow-hidden">
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

          <div>
            <div className="flex-1"></div>
          </div>

          <div className="relative top-[-90px] right-[-220px] w-[500px] h-[800px] overflow-hidden">
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
          <div className="absolute top-[20px] left-[-120px] w-[500px] h-[800px] overflow-hidden">
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

          <div>
            <div className="flex-1"></div>
          </div>

          <div className="relative top-[-90px] right-[-380px] w-[500px] h-[800px] overflow-hidden">
            <Image
              src={flores}
              alt="Descrição da imagem"
              width={244}
              height={688}
              className="rotate-[-38deg]"
            />

            <Image
              src={flores}
              alt="Descrição da imagem"
              width={244}
              height={688}
              className="rotate-[-38deg] absolute top-[420px]"
            />
          </div>

        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
