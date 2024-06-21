"use client";

import * as React from "react";
import { useState } from "react";
import { items } from "../components/data/bots.json";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function StoryCarousel() {
  const { story } = items;
  return (
    <Carousel className="w-full sm:w-4/5 ">
      <CarouselContent>
        {story.map((item, index) => (
          <CarouselItem key={index} className="">
            <div className="p-1">
              <Card className="py-6 px-2 sm:p-12 bg-[#DDEFEF12] border-[#DDEFEF32] text-[#6A8FB1]">
                <CardContent className="flex items-center justify-center">
                  <div className=" text-left ml-5">
                    <h2 className="font-bold text-3xl text-center">
                      {item.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-center">
                      <br />
                      {item.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-[#DDEFEF12] border-[#DDEFEF32] text-[#6A8FB1] scale-125" />
      <CarouselNext className="bg-[#DDEFEF12] border-[#DDEFEF32] text-[#6A8FB1] scale-125" />
    </Carousel>
  );
}

export function BotCarousel() {
  const { bots } = items;
  return (
    <Carousel className="w-full sm:w-4/5">
      <CarouselContent>
        {bots.map((bot, index) => (
          <CarouselItem key={index}>
            <Card className="py-6 px-2 sm:p-12 bg-[#DDEFEF12] border-[#DDEFEF32] text-[#6A8FB1]">
              <CardContent className="text-center h-86 flex items-center flex-col">
                <div className="font-bold text-3xl p-12">
                  <h2>{bot.name + (bot.year != "" ? " - " + bot.year : "")}</h2>
                </div>
                <div className="flex justify-center gap-10 flex-col sm:flex-row">
                  <div>
                    <Image
                      className="object-scale-down"
                      src={bot.imageUrl}
                      alt="slides"
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "auto", height: "300px" }}
                    />
                  </div>
                  <div className="text-left flex items-start flex-col p-6 pl-0">
                    <p className="text-xs sm:text-sm">
                      <br />
                      {"The team was " +
                        bot.play +
                        " in offical play during the " +
                        bot.year +
                        " season."}
                    </p>
                    <div className="p-6 pl-0">
                      <h1 className="font-bold">Awards && Accomplishments</h1>
                      <ul className="list-disc ml-12 text-xs">
                        {bot.awards.map((award, index) => (
                          <li className="p-1" key={index}>
                            {award}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-[#DDEFEF12] border-[#DDEFEF32] text-[#6A8FB1] scale-125" />
      <CarouselNext className="bg-[#DDEFEF12] border-[#DDEFEF32] text-[#6A8FB1] scale-125" />
    </Carousel>
  );
}
