import React, { useState } from "react";
import { X, Minus, Plus, CreditCard, ShoppingBag, BadgeCheck } from "lucide-react";
import { CartItem, Product } from "../types";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  // Checkout flow state simulation
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [shippingForm, setShippingForm] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    isCompleted: false,
  });

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const isFreeShipping = subtotal >= 500;
  const shippingCost = subtotal === 0 ? 0 : isFreeShipping ? 0 : 25;
  const total = subtotal + shippingCost;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shippingForm.name || !shippingForm.address || !shippingForm.city) {
      alert("Silakan lengkapi informasi pengiriman utama Anda.");
      return;
    }
    setShippingForm((prev) => ({ ...prev, isCompleted: true }));
  };

  const handleFinishPayment = () => {
    // Reset states
    setIsCheckingOut(false);
    setShippingForm({
      name: "",
      address: "",
      city: "",
      postalCode: "",
      phone: "",
      isCompleted: false,
    });
    onClearCart();
    onClose();
    alert("Pesanan Anda berhasil dikirim! Silakan periksa konfirmasi di email rahmadarsyad91@gmail.com.");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      {/* Dimmed backdrop background */}
      <div
        className="absolute inset-0 bg-brand-primary/40 backdrop-blur-sm transition-opacity duration-500 animate-fade-in"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-brand-bg shadow-2xl flex flex-col animate-slide-in h-full relative" id="cart-drawer-panel">
          
          {/* Drawer Header */}
          <div className="p-8 flex justify-between items-center border-b border-brand-surface-highest">
            <h2 className="font-serif text-2xl font-normal text-brand-primary tracking-tight" id="slide-over-title">
              {isCheckingOut ? "Formulir Pengiriman" : "Shopping Bag"}
            </h2>
            <button
              onClick={() => {
                if (isCheckingOut) {
                  setIsCheckingOut(false);
                } else {
                  onClose();
                }
              }}
              className="group flex items-center gap-2 text-brand-text-muted hover:text-brand-primary transition-colors cursor-pointer"
            >
              <span className="font-sans text-xs uppercase tracking-widest font-medium">
                {isCheckingOut ? "Kembali" : "Close"}
              </span>
              <X className="w-5 h-5 transition-transform group-hover:rotate-90 duration-300" />
            </button>
          </div>

          {/* Checkout Steps Simulation View */}
          {isCheckingOut ? (
            <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
              {!shippingForm.isCompleted ? (
                <form onSubmit={handleCheckoutSubmit} className="space-y-6">
                  <div className="border-b border-brand-surface-highest pb-4 mb-4">
                    <p className="text-sm font-medium text-brand-primary uppercase tracking-wider">
                      Ringkasan Pembelian
                    </p>
                    <p className="text-xs text-brand-text-muted mt-1">
                      Total Belanja Anda: <span className="font-semibold text-brand-primary">${total.toFixed(2)}</span>
                    </p>
                  </div>

                  <p className="text-xs font-semibold text-brand-text-muted uppercase tracking-wider">
                    Detail Alamat Penerima
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs uppercase tracking-widest font-bold text-brand-text-muted mb-1">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Arsyad Rahmad"
                        value={shippingForm.name}
                        onChange={(e) => setShippingForm({ ...shippingForm, name: e.target.value })}
                        className="w-full bg-brand-surface border border-brand-surface-highest focus:border-brand-secondary focus:ring-0 p-3 text-sm rounded text-brand-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest font-bold text-brand-text-muted mb-1">
                        Alamat Rumah Lengkap
                      </label>
                      <textarea
                        required
                        rows={2}
                        placeholder="Jl. Thamrin No. 88, Menteng"
                        value={shippingForm.address}
                        onChange={(e) => setShippingForm({  ...shippingForm, address: e.target.value })}
                        className="w-full bg-brand-surface border border-brand-surface-highest focus:border-brand-secondary focus:ring-0 p-3 text-sm rounded text-brand-primary"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-widest font-bold text-brand-text-muted mb-1">
                          Kota
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Jakarta"
                          value={shippingForm.city}
                          onChange={(e) => setShippingForm({ ...shippingForm, city: e.target.value })}
                          className="w-full bg-brand-surface border border-brand-surface-highest focus:border-brand-secondary focus:ring-0 p-3 text-sm rounded text-brand-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest font-bold text-brand-text-muted mb-1">
                          Kode Pos
                        </label>
                        <input
                          type="text"
                          placeholder="10310"
                          value={shippingForm.postalCode}
                          onChange={(e) => setShippingForm({  ...shippingForm, postalCode: e.target.value })}
                          className="w-full bg-brand-surface border border-brand-surface-highest focus:border-brand-secondary focus:ring-0 p-3 text-sm rounded text-brand-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest font-bold text-brand-text-muted mb-1">
                        Nomor Handphone
                      </label>
                      <input
                        type="tel"
                        placeholder="08123456789"
                        value={shippingForm.phone}
                        onChange={(e) => setShippingForm({ ...shippingForm, phone: e.target.value })}
                        className="w-full bg-brand-surface border border-brand-surface-highest focus:border-brand-secondary focus:ring-0 p-3 text-sm rounded text-brand-primary"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-primary text-white text-xs font-semibold uppercase tracking-widest py-4 rounded-sm hover:bg-brand-secondary transition-colors duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer mt-8"
                  >
                    <CreditCard className="w-4 h-4" />
                    Lanjutkan ke Pembayaran
                  </button>
                </form>
              ) : (
                <div className="space-y-6 flex flex-col justify-center py-8">
                  <div className="text-center space-y-3">
                    <BadgeCheck className="w-16 h-16 text-brand-secondary mx-auto animate-pulse" />
                    <h3 className="font-serif text-xl text-brand-primary">
                      Konfirmasi Pembayaran
                    </h3>
                    <p className="text-sm text-brand-text-muted max-w-sm mx-auto">
                      Metode: <span className="font-semibold text-brand-primary">Bank Transfer (Free Admin)</span>
                    </p>
                  </div>

                  <div className="bg-brand-surface p-5 rounded-lg border border-brand-surface-highest space-y-3 text-xs leading-relaxed">
                    <p className="font-bold text-brand-primary uppercase tracking-wider border-b border-brand-surface-highest pb-2 mb-2">
                      Rincian Tagihan Akhir
                    </p>
                    <div className="flex justify-between">
                      <span className="text-brand-text-muted">Nama Pembeli:</span>
                      <span className="font-medium text-brand-primary">{shippingForm.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-text-muted">Alamat Kirim:</span>
                      <span className="font-medium text-brand-primary text-right truncate max-w-[200px]">{shippingForm.address}, {shippingForm.city}</span>
                    </div>
                    <div className="flex justify-between border-t border-brand-surface-highest pt-2 mt-2 font-bold text-brand-primary text-sm">
                      <span>Total Bayar:</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 rounded text-xs text-center">
                    Transfer ke Rekening Mandiri Aesthete: <strong>123-00-987654-2</strong> a.n. PT Aesthete Modern Indonesia.
                  </div>

                  <button
                    onClick={handleFinishPayment}
                    className="w-full bg-brand-primary text-white text-xs font-semibold uppercase tracking-widest py-5 rounded-sm hover:bg-brand-secondary transition-colors duration-300 shadow-md cursor-pointer mt-4"
                  >
                    Konfirmasi Pembayaran Saya
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto custom-scrollbar px-8 py-4">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <ShoppingBag className="w-12 h-12 text-brand-surface-highest stroke-1" />
                    <p className="font-sans text-sm text-brand-text-muted">
                      Your shopping bag is completely empty.
                    </p>
                    <button
                      onClick={onClose}
                      className="border border-brand-primary text-brand-primary px-6 py-2.5 text-xs font-medium uppercase tracking-widest hover:bg-brand-primary hover:text-white transition-all cursor-pointer"
                    >
                      Buka Galeri
                    </button>
                  </div>
                ) : (
                  <div className="space-y-8 py-4">
                    {cartItems.map((item, index) => (
                      <div key={index} className="flex gap-6 items-start">
                        {/* Thumbnail */}
                        <div className="w-24 aspect-[3/4] bg-brand-surface overflow-hidden rounded relative group">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 space-y-1 min-w-0">
                          <div className="flex justify-between items-start gap-2">
                            <h3 className="font-serif text-lg text-brand-primary leading-tight truncate">
                              {item.product.name}
                            </h3>
                            <span className="font-sans text-sm font-semibold text-brand-primary whitespace-nowrap">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </span>
                          </div>

                          <p className="text-brand-text-muted text-xs tracking-wide">
                            {item.selectedVariant.name} / {item.selectedSize}
                          </p>

                          {/* Controls Row */}
                          <div className="pt-4 flex justify-between items-center">
                            {/* Quantity buttons */}
                            <div className="flex items-center border border-brand-surface-highest">
                              <button
                                onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                                className="px-2.5 py-1 text-brand-text-muted hover:bg-brand-surface transition-colors cursor-pointer"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-3.5 py-1 text-xs font-medium text-brand-primary">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                                className="px-2.5 py-1 text-brand-text-muted hover:bg-brand-surface transition-colors cursor-pointer"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            {/* Remove button */}
                            <button
                              onClick={() => onRemoveItem(index)}
                              className="text-xs font-sans text-brand-text-muted hover:text-red-700 transition-colors uppercase tracking-wider font-semibold cursor-pointer border-b border-transparent hover:border-red-700 pb-0.5"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Drawer Footer with calculation summaries */}
              {cartItems.length > 0 && (
                <div className="p-8 bg-brand-bg border-t border-brand-surface-highest space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm text-brand-text-muted">
                      <span>Subtotal</span>
                      <span className="font-medium text-brand-primary">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-brand-text-muted">
                      <span>Shipping</span>
                      <span className={isFreeShipping ? "text-brand-secondary font-medium" : "font-medium text-brand-primary"}>
                        {isFreeShipping ? "FREE" : `$${shippingCost.toFixed(2)}`}
                      </span>
                    </div>

                    <div className="border-t border-brand-surface-highest pt-4 flex justify-between">
                      <span className="font-serif text-2xl font-normal text-brand-primary">Total</span>
                      <span className="font-serif text-2xl font-normal text-brand-primary">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsCheckingOut(true)}
                    className="w-full bg-brand-primary text-white py-5 font-sans text-xs font-semibold uppercase tracking-widest hover:bg-brand-secondary transition-all duration-300 rounded-sm shadow-md active:scale-[0.99] cursor-pointer text-center"
                    id="checkout-btn"
                  >
                    Checkout
                  </button>

                  <p className="text-center text-xs text-brand-text-muted italic leading-relaxed">
                    {isFreeShipping
                      ? "✨ Your order qualifies for free complimentary shipping!"
                      : "Complimentary shipping on orders over $500"}
                  </p>
                </div>
              )}
            </>
          )}

        </div>
      </div>
    </div>
  );
}
