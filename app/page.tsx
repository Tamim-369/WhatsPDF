import { Button } from "@/components/ui/button";
import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  icons,
  MonitorSmartphoneIcon,
  ZapIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    name: "Store your pdf documents",
    description:
      "Keep all your PDF files securely stored and easily accessible anytime, anywhere",
    icon: GlobeIcon,
  },
  {
    name: "Blazing fast Responses",
    description:
      "Experience lighting-fast answers to your queries, ensuring you get the information you need",
    icon: ZapIcon,
  },
  {
    name: "Chat Memorisation",
    description:
      "Our intelligent chatbot remembers previous interactions, providing a seamless and personalized experience",
    icon: BrainCogIcon,
  },
  {
    name: "Interactive PDF Viewer",
    description:
      "Engage with your PDFs like never before using our intuitive and interactive viewer",
    icon: EyeIcon,
  },
  {
    name: "Cloud Backup",
    description:
      "Rest assuerd knowing your documents are safely backed up on the cloud, protected from loss or danger",
    icon: GlobeIcon,
  },
  {
    name: "Responsive Access Devices",
    description:
      "Access and chat with your PDFs seamlessly on any device, whether it's a laptop, desktop, or mobile device",
    icon: MonitorSmartphoneIcon,
  },
];

export default function Home() {
  return (
    <main className="overflow-scroll h-full p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600 ">
      <div className="bg-white py-10 sm:py-28 rounded-md drop-shadow-xl lg:px-10">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl sm:text-center">
            <h1 className="text-base font-semibold leading-7 text-indigo-600">
              Your interactive document assistent
            </h1>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform your PDFs into interactive conversations
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Intorducing{" "}
              <span className="font-bold text-indigo-600">WhatsPDF</span>
              <br className="mb-4" />
              Upload your document, and our chatbot will answer
              questions,summarize content, and answer all your quoerys ideal for
              everyone, <span>WhatsPDF</span>
              turns static documents into{" "}
              <span className="font-bold">dynamic conversations </span>
              enhancing productivity 10x fold effortlessly
            </p>
          </div>
          <Button asChild className="mt-4">
            <Link href={"/dashboard"}>Get Started</Link>
          </Button>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              alt="App Screenshot"
              src={"https://i.imgur.com/VciRSTI.jpeg"}
              width={2432}
              height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]"></div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 ">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900 ">
                  <feature.icon
                    aria-hidden="true"
                    className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                  />
                </dt>
                <dd>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
