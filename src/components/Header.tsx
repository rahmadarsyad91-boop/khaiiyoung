import React, { useState } from "react";
import { Search, ShoppingBag, User, X } from "lucide-react";
import { Product } from "../types";

interface HeaderProps {
  currentView: "home" | "product-detail" | "shop-all";
  setView: (view: "home" | "product-detail" | "shop-all") => void;
  cartCount: number;
  onOpenCart: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export default function Header({
  currentView,
  setView,
  cartCount,
  onOpenCart,
  products,
  onSelectProduct,
}: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSearch = searchQuery.trim()
    ? products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <header className="bg-brand-bg border-b border-brand-surface-highest sticky top-0 z-40 h-20 flex items-center transition-all duration-300">
      <div className="flex justify-between items-center w-full px-6 md:px-16 max-w-7xl mx-auto h-20">
        <div className="flex items-center gap-10">
          <button
            onClick={() => setView("home")}
            className="font-serif text-2xl font-semibold tracking-tighter text-brand-primary cursor-pointer hover:opacity-80 transition-opacity"
            id="brand-header-logo"
          >
            AESTHETE
          </button>
          
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setView("shop-all")}
              className={`font-sans text-sm font-medium tracking-widest uppercase transition-colors duration-300 pb-1 cursor-pointer ${
                currentView === "shop-all"
                  ? "border-b-2 border-brand-primary text-brand-primary"
                  : "text-brand-text-muted hover:text-brand-primary"
              }`}
              id="nav-shop"
            >
              Shop
            </button>
            <button
              onClick={() => setView("home")}
              className={`font-sans text-sm font-medium tracking-widest uppercase transition-colors duration-300 pb-1 cursor-pointer ${
                currentView === "home"
                  ? "border-b-2 border-brand-primary text-brand-primary"
                  : "text-brand-text-muted hover:text-brand-primary"
              }`}
              id="nav-collection"
            >
              Collection
            </button>
            <button
              onClick={() => {
                setView("home");
                setTimeout(() => {
                  const section = document.getElementById("philosophy");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="font-sans text-sm font-medium tracking-widest uppercase text-brand-text-muted hover:text-brand-primary transition-colors duration-300 pb-1 cursor-pointer"
              id="nav-about"
            >
              About
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          {/* Reactive Search Bar Container */}
          <div className="relative">
            {isSearchOpen ? (
              <div className="flex items-center bg-brand-surface border border-brand-surface-highest py-1.5 px-3 rounded-md transition-all duration-300">
                <input
                  type="text"
                  placeholder="Cari produk..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none text-sm focus:outline-none w-36 md:w-48 text-brand-primary"
                  autoFocus
                />
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="p-1 hover:text-brand-secondary text-brand-text-muted cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-brand-primary hover:text-brand-secondary transition-colors duration-300 cursor-pointer p-1"
                aria-label="Cari produk"
                id="search-btn"
              >
                <Search className="w-5 h-5" />
              </button>
            )}

            {/* Micro-search results dropdown */}
            {isSearchOpen && searchQuery.trim() && (
              <div className="absolute right-0 mt-2 w-72 bg-white border border-brand-surface-highest rounded-lg shadow-xl z-50 p-2 max-h-80 overflow-y-auto custom-scrollbar">
                {filteredSearch.length > 0 ? (
                  <div className="space-y-1">
                    <p className="text-xs text-brand-text-muted px-2 py-1 uppercase tracking-widest font-semibold">
                      Produk Ditemukan ({filteredSearch.length})
                    </p>
                    {filteredSearch.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => {
                          onSelectProduct(product);
                          setIsSearchOpen(false);
                          setSearchQuery("");
                        }}
                        className="w-full text-left flex items-center gap-3 p-2 hover:bg-brand-bg rounded-md transition-colors cursor-pointer"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-10 h-12 object-cover rounded bg-brand-surface"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-brand-primary truncate">
                            {product.name}
                          </p>
                          <p className="text-xs text-brand-text-muted">
                            {product.category} • ${product.price}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-brand-text-muted px-3 py-4 text-center">
                    Tidak ada hasil ditemukan
                  </p>
                )}
              </div>
            )}
          </div>

          <button
            onClick={() => {
              setView("shop-all");
            }}
            className="text-brand-primary hover:text-brand-secondary transition-colors duration-300 cursor-pointer p-1"
            aria-label="Akun saya"
            id="account-btn"
          >
            <User className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenCart}
            className="relative text-brand-primary hover:text-brand-secondary transition-colors duration-300 cursor-pointer p-1"
            aria-label="Keranjang belanja"
            id="open-cart-header"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
