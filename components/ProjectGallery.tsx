"use client";

import Image from "next/image";
import { useState } from "react";
import ImageModal from "./ImageModal";
import { ScanSearch } from "lucide-react";

type GalleryItem = {
  image: string;
  label: string;
};

type ProjectGalleryProps = {
  gallery: GalleryItem[];
};

export default function ProjectGallery({
  gallery,
}: ProjectGalleryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModalAt = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  return (
    <section className="py-10">
      <h2 className="text-4xl lg:text-6xl font-[100] [font-family:var(--font-clash)] lg:[font-family:var(--font-antar)]">
        Gallery
      </h2>

      <p className="text-sm text-gray-500 mt-2 mb-6">
        Scroll horizontally to explore the project • Click to view.
      </p>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {gallery.map((item, index) => (
          <div key={index} onClick={() => openModalAt(index)} className="flex-shrink-0 text-left group ">
            <div className="relative group-hover:scale-[1.02] transition-transform duration-300 ">
            <Image src={item.image} alt={item.label} width={500} height={300} className="w-[320px] md:w-[500px] 
            h-auto border border-neutral-200 dark:border-neutral-800 
            "/>
            <div className="absolute w-full inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity 
            duration-300 flex items-center justify-center z-50"><ScanSearch className="text-white"/></div>
            </div>

            <p className="mt-3 text-sm text-gray-700 dark:text-gray-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <ImageModal
          images={gallery}
          currentIndex={currentImageIndex}
          setCurrentIndex={setCurrentImageIndex}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
}