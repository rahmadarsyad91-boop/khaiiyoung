import React, { useState, useEffect } from "react";
import { PRODUCTS } from "./data";
import { Product, CartItem, ProductVariant } from "./types";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import ProductDetailView from "./components/ProductDetailView";
import CartDrawer from "./components/CartDrawer";
import { Compass, Sparkles, Filter, CheckCircle } from "lucide-react";

export default function App() {
  const [currentView, setView] = useState<"home" | "product-detail" | "shop-all">("home");
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Prepopulate cart to match EXACT subtotal of $955.00 from mockup (Screenshot 1)
  // 1. Essential Linen Shirt ($185)
  // 2. Sculptural Form Vase ($320)
  // 3. Horizon Minimalist Watch ($450)
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Dynamically pre-load
    const pShirt = PRODUCTS.find((p) => p.id === "essential-linen-shirt");
    const pVase = PRODUCTS.find((p) => p.id === "sculptural-form-vase");
    const pWatch = PRODUCTS.find((p) => p.id === "horizon-minimalist-watch");

    const initialCart: CartItem[] = [];

    if (pShirt) {
      initialCart.push({
        product: pShirt,
        selectedSize: "Medium",
        selectedVariant: pShirt.variants ? pShirt.variants[0] : { name: "Ivory", colorHex: "#F7F5F0" },
        quantity: 1,
      });
    }
    if (pVase) {
      initialCart.push({
        product: pVase,
        selectedSize: "One Size",
        selectedVariant: pVase.variants ? pVase.variants[0] : { name: "Matte Stone", colorHex: "#D2CBC0" },
        quantity: 1,
      });
    }
    if (pWatch) {
      initialCart.push({
        product: pWatch,
        selectedSize: "40mm",
        selectedVariant: pWatch.variants ? pWatch.variants[0] : { name: "Black Leather", colorHex: "#181916" },
        quantity: 1,
      });
    }

    setCartItems(initialCart);
  }, []);

  const triggerToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setView("product-detail");
  };

  const handleAddToCart = (product: Product, size: string, variant: ProductVariant, qty: number) => {
    setCartItems((prev) => {
      // Check if duplicate exists with same size and variant name
      const existingIdx = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === size &&
          item.selectedVariant.name === variant.name
      );

      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx].quantity += qty;
        return next;
      }

      return [
        ...prev,
        {
          product,
          selectedSize: size,
          selectedVariant: variant,
          quantity: qty,
        },
      ];
    });

    triggerToast(`"${product.name}" (${variant.name}) berhasil dimasukkan ke Shopping Bag.`);
    setIsCartOpen(true);
  };

  const handleUpdateQty = (index: number, newQty: number) => {
    if (newQty < 1) {
      handleRemoveItem(index);
      return;
    }
    setCartItems((prev) => {
      const next = [...prev];
      next[index].quantity = newQty;
      return next;
    });
  };

  const handleRemoveItem = (index: number) => {
    const item = cartItems[index];
    setCartItems((prev) => prev.filter((_, i) => i !== index));
    triggerToast(`"${item.product.name}" dikeluarkan dari Shopping Bag.`);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, current) => acc + current.quantity, 0);

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col justify-between selection:bg-brand-primary selection:text-white" id="aesthete-root">
      
      {/* Absolute luxury state notifications toast */}
      {toastMessage && (
        <div className="fixed top-24 right-6 md:right-16 bg-brand-primary text-white py-3.5 px-6 rounded-lg shadow-2xl border border-white/10 flex items-center gap-3 z-50 animate-slide-in font-sans text-xs uppercase tracking-widest font-semibold max-w-sm">
          <CheckCircle className="w-5 h-5 text-brand-secondary animate-bounce" />
          <span className="flex-1 text-white">{toastMessage}</span>
        </div>
      )}

      {/* Main header navbar controller */}
      <Header
        currentView={currentView}
        setView={setView}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        products={PRODUCTS}
        onSelectProduct={handleSelectProduct}
      />

      {/* Core dynamic transitions viewport spacer */}
      <main className="flex-grow">
        {currentView === "home" || currentView === "shop-all" ? (
          <HomeView
            products={PRODUCTS}
            onSelectProduct={handleSelectProduct}
            onExplore={() => {
              const element = document.getElementById("collection-grid");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
        ) : (
          <ProductDetailView
            product={selectedProduct}
            onBack={() => setView("home")}
            onAddToCart={handleAddToCart}
            onSelectProduct={handleSelectProduct}
          />
        )}
      </main>

      {/* Interactive slider Shopping cart drawer panel */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Standard brand footer element */}
      <Footer setView={setView} />
    </div>
  );
}
