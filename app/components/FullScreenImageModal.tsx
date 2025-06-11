"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface ImageModalProps {
  selectedImage: { src: string; alt: string } | null;
  onClose: () => void;
}

export default function ImageModal({ selectedImage, onClose }: ImageModalProps) {
  // Close modal on escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selectedImage) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [selectedImage, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  if (!selectedImage) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-100 bg-black/20 hover:bg-black/30 transition-colors rounded-full p-2 cursor-pointer"
          aria-label="Close modal"
        >
          <X size={24} className="text-white" />
        </button>
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            fill
            className="object-contain"
            sizes="100vw"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    </div>
  );
} 