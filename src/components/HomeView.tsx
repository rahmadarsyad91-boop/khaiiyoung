import React, { useState } from "react";
import { ArrowRight, Compass, ShieldCheck, HeartPulse, Sparkles, Filter } from "lucide-react";
import { Product } from "../types";
import ProductCard from "./ProductCard";

interface HomeViewProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onExplore: () => void;
}

export default function HomeView({ products, onSelectProduct, onExplore }: HomeViewProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Ceramics", "Apparel", "Accessories", "Home Decor", "Textiles", "Lighting", "Art"];

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="space-y-20 pb-20 animate-fade-in">
      
      {/* Editorial Luxury Split Hero Section */}
      <section className="relative w-full overflow-hidden bg-brand-surface py-20 lg:py-28 px-6 md:px-16" id="hero-section">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Typography on Hero Left Column (Col width: 6) */}
          <div className="lg:col-span-6 space-y-6 lg:pr-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-brand-bg/85 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-brand-surface-highest">
              <Sparkles className="w-3.5 h-3.5 text-brand-secondary animate-pulse" />
              <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-brand-primary">
                VOLUME I / SEASONAL EDIT
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-primary tracking-tight font-normal leading-tight">
              The Luxury of Silences & Space
            </h1>

            <p className="font-sans text-sm md:text-base text-brand-text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
              Sophisticated curations for thoughtful living. Handcrafted stoneware, organic French linen, and timeless accessories designed to celebrate the quiet spaces.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button
                onClick={onExplore}
                className="bg-brand-primary text-white py-4 px-8 text-xs font-semibold uppercase tracking-widest hover:bg-brand-secondary transition-all duration-300 shadow-md flex items-center justify-center gap-3.5 cursor-pointer rounded-sm"
                id="hero-explore-btn"
              >
                Explore Collection
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#philosophy"
                className="border border-brand-primary/20 text-brand-primary py-4 px-8 text-xs font-semibold uppercase tracking-widest hover:border-brand-primary hover:bg-white transition-all duration-300 text-center rounded-sm"
              >
                Our Philosophy
              </a>
            </div>
          </div>

          {/* Hero Visual on Right Column (Col width: 6) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-brand-surface-high">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA86GL8_Zq8V3_C8A5rVNUQGCWyB9d7__Je5YpDp0jBmUYIxvQU5SnDt8v39AYLB6AFczlWqwVrV-eyG6qO2HxfARZ7fKeEd-4Jj-qDsNhK31WDJmOAxgIAPCTZHBht4TiMGTNKPJ-quwi1f3daeUiv9DLVYL0wZ0qekwei317ydHiBfnuAFh3W7D5nYxfZzIBh_y7G6-AmZPW8S1DimgMU77mUW2qsBYJwUS5CvLGaMAex9E9n1KXxQXrY-Pcx8ryd1MPRYg7QWdoX"
                alt="Aesthete Living Space curation"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-primary/5 mix-blend-overlay" />
              <div className="absolute bottom-4 right-4 bg-brand-bg/80 backdrop-blur-xs py-2 px-3 border border-brand-surface-highest rounded text-[10px] font-mono uppercase tracking-widest text-brand-primary">
                Handcrafted Series 01
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main interactive grid items and filters */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 space-y-12" id="collection-grid">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-brand-surface-highest pb-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-brand-text-muted font-mono block">
              Curated Masterpieces
            </span>
            <h2 className="font-serif text-3xl text-brand-primary">
              Artifacts for the Canny Collector
            </h2>
          </div>

          {/* Categories select row layout */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-brand-text-muted" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mr-1">Filter:</span>
            <div className="flex gap-2 overflow-x-auto max-w-[280px] sm:max-w-md md:max-w-xl custom-scrollbar py-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-sans rounded-full border transition-all duration-300 flex-shrink-0 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-brand-primary border-brand-primary text-white font-semibold"
                      : "bg-white border-brand-surface-highest text-brand-text-muted hover:border-brand-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic masonry/grid of artifacts */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onSelect={onSelectProduct}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-brand-surface rounded-lg border border-brand-surface-highest space-y-3">
            <Compass className="w-12 h-12 text-brand-text-muted mx-auto animate-spin" />
            <p className="font-sans text-sm text-brand-primary">
              No products found in category "{selectedCategory}".
            </p>
          </div>
        )}
      </section>

      {/* Brand Philosophy Narrative Section */}
      <section className="bg-brand-surface border-y border-brand-surface-highest py-20 px-6 md:px-16" id="philosophy">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-brand-secondary font-mono tracking-widest inline-block border-b-2 border-brand-secondary pb-1">
              OUR STATEMENT OF INTENT
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-primary font-normal leading-tight">
              Honesty in Form, Material and Purpose
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            
            {/* Feature card 1 */}
            <div className="bg-brand-bg relative p-8 rounded-xl border border-brand-surface-highest hover:shadow-xl transition-shadow duration-300 space-y-4">
              <div className="w-12 h-12 bg-brand-surface rounded-lg flex items-center justify-center">
                <Compass className="w-5 h-5 text-brand-secondary" />
              </div>
              <h3 className="font-serif text-xl text-brand-primary">Sourcing Quality Materials</h3>
              <p className="text-sm text-brand-text-muted leading-relaxed font-sans">
                True quality sits quietly at the center. We partner purely with local master artisans utilizing 100% organic clay stoneware, organic spun flax, and FSC certified timber frames.
              </p>
            </div>

            {/* Feature card 2 */}
            <div className="bg-brand-bg relative p-8 rounded-xl border border-brand-surface-highest hover:shadow-xl transition-shadow duration-300 space-y-4">
              <div className="w-12 h-12 bg-brand-surface rounded-lg flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-brand-secondary" />
              </div>
              <h3 className="font-serif text-xl text-brand-primary">Design with Absolute Craft</h3>
              <p className="text-sm text-brand-text-muted leading-relaxed font-sans">
                No telemetry details, system widgets, or marketing noise. Our aesthetics honor strict architecture standards and spatial negative voids, crafting peaceful artifacts.
              </p>
            </div>

            {/* Feature card 3 */}
            <div className="bg-brand-bg relative p-8 rounded-xl border border-brand-surface-highest hover:shadow-xl transition-shadow duration-300 space-y-4">
              <div className="w-12 h-12 bg-brand-surface rounded-lg flex items-center justify-center">
                <HeartPulse className="w-5 h-5 text-brand-secondary" />
              </div>
              <h3 className="font-serif text-xl text-brand-primary">Responsible Carbon Stewardship</h3>
              <p className="text-sm text-brand-text-muted leading-relaxed font-sans">
                Packaging constructed from 100% bio-degradable, tree-free parchment sheets. Shipping tracks carbon offsets for pristine ecosystem balancing.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
