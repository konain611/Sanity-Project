"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <div>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    
    
    <section className="">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">
          Pitchfork Kickstarter Taxidermy
        </h1>
        <div className="h-1 w-20 bg-yellow-500 rounded" />
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven't
        heard of them man bun deep jianbing selfies heirloom prism food truck
        ugh squid celiac humblebrag.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="https://dummyimage.com/720x400"
            alt="content"
          />
          <h3 className="tracking-widest text-yellow-400 text-xs font-medium title-font">
            SUBTITLE
          </h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">
            Chichen Itza
          </h2>
          <p className="leading-relaxed text-base">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery
            hexagon disrupt edison bulbche.
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="https://dummyimage.com/721x401"
            alt="content"
          />
          <h3 className="tracking-widest text-yellow-400 text-xs font-medium title-font">
            SUBTITLE
          </h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">
            Colosseum Roma
          </h2>
          <p className="leading-relaxed text-base">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery
            hexagon disrupt edison bulbche.
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="https://dummyimage.com/722x402"
            alt="content"
          />
          <h3 className="tracking-widest text-yellow-400 text-xs font-medium title-font">
            SUBTITLE
          </h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">
            Great Pyramid of Giza
          </h2>
          <p className="leading-relaxed text-base">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery
            hexagon disrupt edison bulbche.
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="https://dummyimage.com/723x403"
            alt="content"
          />
          <h3 className="tracking-widest text-yellow-400 text-xs font-medium title-font">
            SUBTITLE
          </h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">
            San Francisco
          </h2>
          <p className="leading-relaxed text-base">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery
            hexagon disrupt edison bulbche.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>

  )
}
