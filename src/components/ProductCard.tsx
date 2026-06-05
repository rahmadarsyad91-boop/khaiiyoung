import React, { useState } from "react";
import { Product } from "../types";

interface ProductCardProps {
  key?: string;
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);

  return (
    <div
      onClick={() => onSelect(product)}
      className="group flex flex-col space-y-4 cursor-pointer"
      id={`product-card-${product.id}`}
    >
      {/* Aspect- Ratio Img Panel */}
      <div className="relative w-full aspect-[3/4] bg-brand-surface overflow-hidden rounded-lg">
        {/* Main image view */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Hover quick overlay action */}
        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-brand-primary/45 via-brand-primary/10 to-transparent translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex justify-center">
          <span className="bg-brand-bg text-brand-primary font-sans text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded shadow-lg">
            Quick View
          </span>
        </div>

        {/* Decorative subtle Category Tag */}
        <span className="absolute top-4 left-4 bg-brand-bg/90 backdrop-blur-xs text-brand-primary font-sans text-[10px] tracking-widest uppercase font-semibold py-1 px-2.5 rounded border border-brand-surface-highest">
          {product.category}
        </span>
      </div>

      {/* Narrative block */}
      <div className="flex justify-between items-start pt-1 gap-4">
        <div className="space-y-1 flex-1 min-w-0">
          <h3 className="font-serif text-lg md:text-xl text-brand-primary tracking-tight font-normal truncate group-hover:text-brand-secondary transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-xs text-brand-text-muted font-sans tracking-wide truncate">
            {product.code || "Seasonal Curation"}
          </p>
        </div>
        <div className="text-right">
          <span className="font-sans text-base font-semibold text-brand-primary block">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Active variant dot indicator widgets */}
      {product.variants && product.variants.length > 1 && (
        <div className="flex gap-2 pt-1 z-10" onClick={(e) => e.stopPropagation()}>
          {product.variants.map((v, idx) => (
            <button
              key={v.name}
              onClick={() => setSelectedVariantIdx(idx)}
              className={`w-4.5 h-4.5 rounded-full border transition-all duration-300 relative p-0.5 cursor-pointer ${
                selectedVariantIdx === idx ? "border-brand-primary scale-110" : "border-brand-surface-highest hover:border-brand-primary/50"
              }`}
              title={v.name}
            >
              <span
                className="block w-full h-full rounded-full"
                style={{ backgroundColor: v.colorHex }}
              />
            </button>
          ))}
          <span className="text-[10px] font-sans text-brand-text-muted mt-0.5 tracking-wider self-center">
            {product.variants[selectedVariantIdx].name}
          </span>
        </div>
      )}
    </div>
  );
}
