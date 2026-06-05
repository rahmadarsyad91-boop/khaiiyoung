import React, { useState, useEffect } from "react";
import { ChevronRight, ArrowLeft, Heart, ShoppingBag, Plus, Minus, FileText, Ruler, RefreshCw, Truck } from "lucide-react";
import { Product, ProductVariant } from "../types";
import { PRODUCTS } from "../data";
import ProductCard from "./ProductCard";

interface ProductDetailViewProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, size: string, variant: ProductVariant, qty: number) => void;
  onSelectProduct: (product: Product) => void;
}

export default function ProductDetailView({
  product,
  onBack,
  onAddToCart,
  onSelectProduct,
}: ProductDetailViewProps) {
  const [activeImage, setActiveImage] = useState(product.image);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState<"desc" | "specs" | "shipping" | "none">("desc");

  // Reset internal states on product change
  useEffect(() => {
    setActiveImage(product.image);
    setSelectedSize(product.sizes && product.sizes.length > 0 ? product.sizes[0] : "One Size");
    setSelectedVariant(product.variants && product.variants.length > 0 ? product.variants[0] : { name: "Default", colorHex: "#181916" });
    setQuantity(1);
    setActiveAccordion("desc");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [product]);

  const relatedProducts = PRODUCTS.filter((p) =>
    product.relatedIds.includes(p.id)
  );

  const handleAdd = () => {
    if (!selectedVariant) return;
    onAddToCart(product, selectedSize, selectedVariant, quantity);
  };

  return (
    <div className="w-full bg-brand-bg py-12 px-6 md:px-16 max-w-7xl mx-auto space-y-16 animate-fade-in">
      
      {/* Breadcrumbs / Back navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-surface-highest pb-6">
        <div className="flex items-center gap-2.5 text-xs uppercase tracking-widest text-brand-text-muted">
          <button
            onClick={onBack}
            className="hover:text-brand-primary transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-brand-surface-highest" />
          <span className="text-brand-text-muted">{product.category}</span>
          <ChevronRight className="w-3.5 h-3.5 text-brand-surface-highest" />
          <span className="text-brand-primary font-semibold">{product.name}</span>
        </div>

        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-primary hover:text-brand-secondary transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 duration-300" />
          Back to Collection
        </button>
      </div>

      {/* Main Details Panel Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Visual gallery (Col span: 7) */}
        <div className="lg:col-span-7 flex flex-col md:flex-row-reverse gap-4">
          {/* Active Main display visual container */}
          <div className="flex-1 aspect-[3/4] bg-brand-surface rounded-lg overflow-hidden border border-brand-surface-high relative">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Thumbnails row/column if gallery exists */}
          {product.gallery && product.gallery.length > 1 && (
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-x-visible custom-scrollbar py-2 md:py-0 w-full md:w-20">
              {product.gallery.map((imgUrl, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`w-16 md:w-20 aspect-[3/4] border rounded overflow-hidden aspect-[3/4] flex-shrink-0 transition-all duration-300 cursor-pointer ${
                    activeImage === imgUrl
                      ? "ring-1 ring-brand-primary border-brand-primary"
                      : "border-brand-surface-highest hover:border-brand-text-muted"
                  }`}
                >
                  <img src={imgUrl} alt="Thumbnail representation" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Narrative details (Col span: 5) */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Header Metadata */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-brand-text-muted font-mono block">
              {product.code || "Seasonal Curation"}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl text-brand-primary tracking-tight font-normal leading-tight">
              {product.name}
            </h1>
            <p className="font-serif text-2xl text-brand-primary font-light">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <p className="text-sm text-brand-text-muted leading-relaxed font-sans">
            {product.description}
          </p>

          <hr className="border-brand-surface-highest" />

          {/* Options select widget */}
          <div className="space-y-6">
            
            {/* Color variants */}
            {product.variants && product.variants.length > 0 && (
              <div className="space-y-3">
                <span className="block text-xs uppercase tracking-widest font-bold text-brand-primary">
                  Colors: <span className="font-normal text-brand-text-muted font-sans ml-1">{selectedVariant?.name}</span>
                </span>
                <div className="flex gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v.name}
                      onClick={() => setSelectedVariant(v)}
                      className={`w-7 h-7 rounded-full border transition-all duration-300 relative p-1 cursor-pointer ${
                        selectedVariant?.name === v.name
                          ? "border-brand-primary scale-110"
                          : "border-brand-surface-highest hover:border-brand-primary/50"
                      }`}
                      title={v.name}
                    >
                      <span
                        className="block w-full h-full rounded-full"
                        style={{ backgroundColor: v.colorHex }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizing options */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-3">
                <span className="block text-xs uppercase tracking-widest font-bold text-brand-primary">
                  Size: <span className="font-normal text-brand-text-muted font-sans ml-1">{selectedSize}</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-4.5 py-2.5 text-xs font-sans border rounded transition-all duration-300 cursor-pointer ${
                        selectedSize === s
                          ? "bg-brand-primary border-brand-primary text-white font-bold"
                          : "bg-transparent border-brand-surface-highest text-brand-text-muted hover:border-brand-primary"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector Option */}
            <div className="space-y-3">
              <span className="block text-xs uppercase tracking-widest font-bold text-brand-primary">
                Quantity
              </span>
              <div className="flex items-center border border-brand-surface-highest w-32 bg-white rounded">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3.5 py-2 text-brand-text-muted hover:bg-brand-surface transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="flex-1 text-center text-sm font-semibold text-brand-primary">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3.5 py-2 text-brand-text-muted hover:bg-brand-surface transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>

          {/* Dynamic interactive Add to Bag actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAdd}
              className="flex-1 bg-brand-primary text-white py-4 px-6 text-xs font-semibold uppercase tracking-widest hover:bg-brand-secondary transition-all duration-300 shadow-md flex items-center justify-center gap-3 cursor-pointer rounded-sm active:scale-[0.99]"
              id="add-to-bag-detail"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Bag
            </button>
            <button
              onClick={() => alert(`Format produk ${product.name} disimpan ke daftar keinginan!`)}
              className="hidden sm:flex border border-brand-surface-highest text-brand-text-muted hover:text-brand-primary hover:border-brand-primary p-4 rounded items-center justify-center transition-all cursor-pointer"
              aria-label="Add to wishlist"
            >
              <Heart className="w-4 h-4" />
            </button>
          </div>

          <hr className="border-brand-surface-highest" />

          {/* Beautiful Narrative Accordions */}
          <div className="space-y-2.5">
            
            {/* Description Tab */}
            <div className="border border-brand-surface-highest rounded-lg overflow-hidden bg-brand-surface/30">
              <button
                onClick={() => setActiveAccordion(activeAccordion === "desc" ? "none" : "desc")}
                className="w-full text-left py-3.5 px-4 flex justify-between items-center bg-transparent cursor-pointer hover:bg-brand-surface/40"
              >
                <span className="text-xs uppercase tracking-widest font-bold text-brand-primary flex items-center gap-2">
                  <FileText className="w-4 h-4 text-brand-text-muted" />
                  Details & Description
                </span>
                <span className="text-xs font-semibold text-brand-text-muted">
                  {activeAccordion === "desc" ? "−" : "+"}
                </span>
              </button>
              {activeAccordion === "desc" && (
                <div className="p-4 bg-white/70 border-t border-brand-surface-highest text-xs text-brand-text-muted leading-relaxed space-y-2">
                  <p>{product.description}</p>
                  <p><strong>Code Ref:</strong> {product.code}</p>
                </div>
              )}
            </div>

            {/* Specifications Tab */}
            <div className="border border-brand-surface-highest rounded-lg overflow-hidden bg-brand-surface/30">
              <button
                onClick={() => setActiveAccordion(activeAccordion === "specs" ? "none" : "specs")}
                className="w-full text-left py-3.5 px-4 flex justify-between items-center bg-transparent cursor-pointer hover:bg-brand-surface/40"
              >
                <span className="text-xs uppercase tracking-widest font-bold text-brand-primary flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-brand-text-muted" />
                  Dimensions & Materials
                </span>
                <span className="text-xs font-semibold text-brand-text-muted">
                  {activeAccordion === "specs" ? "−" : "+"}
                </span>
              </button>
              {activeAccordion === "specs" && (
                <div className="p-4 bg-white/70 border-t border-brand-surface-highest text-xs text-brand-text-muted leading-relaxed space-y-3">
                  <div>
                    <h5 className="font-bold text-brand-primary uppercase tracking-wider text-[10px] mb-1">Materials & Care:</h5>
                    <p className="whitespace-pre-line">{product.materialsAndCare}</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-primary uppercase tracking-wider text-[10px] mb-1">Dimensions:</h5>
                    <p className="whitespace-pre-line">{product.dimensions}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Shipping & Returns Tab */}
            <div className="border border-brand-surface-highest rounded-lg overflow-hidden bg-brand-surface/30">
              <button
                onClick={() => setActiveAccordion(activeAccordion === "shipping" ? "none" : "shipping")}
                className="w-full text-left py-3.5 px-4 flex justify-between items-center bg-transparent cursor-pointer hover:bg-brand-surface/40"
              >
                <span className="text-xs uppercase tracking-widest font-bold text-brand-primary flex items-center gap-2">
                  <Truck className="w-4 h-4 text-brand-text-muted" />
                  Shipping & Returns
                </span>
                <span className="text-xs font-semibold text-brand-text-muted">
                  {activeAccordion === "shipping" ? "−" : "+"}
                </span>
              </button>
              {activeAccordion === "shipping" && (
                <div className="p-4 bg-white/70 border-t border-brand-surface-highest text-xs text-brand-text-muted leading-relaxed space-y-1">
                  <p>{product.shippingAndReturns}</p>
                  <p>Packaged responsibly in 100% compostable boxes to preserve planetary health.</p>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>

      {/* Recommended curated additions matching Screenshot */}
      <div className="border-t border-brand-surface-highest pt-16 space-y-8">
        <div className="text-center md:text-left space-y-1">
          <span className="text-xs uppercase tracking-widest text-brand-text-muted font-semibold">Curated Pairings</span>
          <h2 className="font-serif text-2xl text-brand-primary">Complete the Sanctuary</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {relatedProducts.slice(0, 4).map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onSelect={onSelectProduct}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
