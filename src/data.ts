import { Product } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "minimalist-ceramic-vase",
    name: "Minimalist Ceramic Vase",
    code: "Handcrafted Series 01",
    price: 240,
    category: "Ceramics",
    description: "Sculpted by hand from fine stoneware, this vessel celebrates the beauty of imperfection. Its organic silhouette and matte texture make it a quiet statement piece for any curated interior.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA86GL8_Zq8V3_C8A5rVNUQGCWyB9d7__Je5YpDp0jBmUYIxvQU5SnDt8v39AYLB6AFczlWqwVrV-eyG6qO2HxfARZ7fKeEd-4Jj-qDsNhK31WDJmOAxgIAPCTZHBht4TiMGTNKPJ-quwi1f3daeUiv9DLVYL0wZ0qekwei317ydHiBfnuAFh3W7D5nYxfZzIBh_y7G6-AmZPW8S1DimgMU77mUW2qsBYJwUS5CvLGaMAex9E9n1KXxQXrY-Pcx8ryd1MPRYg7QWdoX",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWJ_B5u7cfzVNP0SStAEkPPYXX-86CjbxBaiZkmJVfvcWqPe23JhHuXq3Acinz0Yzr7yK0TaNCLZEzf1iu8jyM4QvEhijnqagaGlLvoBrxPigG7U54YBToLczmABp9VdswE2NgkB-m2v-SCMfUC5AKY2xhzjOMXR2tiPPd3LhTw4oAn4qsPgDdnqNUcn_HAWpF8Kq9zs4HLRElzr8I_V-kwIXfKts4RIhHcP5U3OQZUmY4X638u5q_Dy_T7NVeLuP29t4bAJy0XMjl",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWJyvKsCTGgQ-2Sw6kZOQcX-uquOf_kWaGEwGUFguv0u6HYNviY9uxepGbSz4H2jqzSuRXGPBiah3QYMqeN6qbGynLMf7hBM-EbSuliZGpGqXJe7YhscJLMXyUxCgZaVWCBXk8U4hLDmp9nHDLrmp35YOnaz3V17Ptwv0NhNzrgKlqvNVyaD2KrKC5PXtONeX5wLyxks8pqq4tc3Dt4Dw3JVkAufC_uVcVIHe8w9Dmx43m6M4TuyP5enxyvGK7XP0dZPU02Jx9DddG",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDYA7w-HnEVng4l5d44GsVuv-SO9PHsiIXRltW9B4X2PE5r5EW917mSro_UI5VXIHJF4dxs802pabgM_FU98OLgt5dirWym9xVHryd3n0oYbY6kOe17wmYCKLljQF6bsIEAZ-nxiJ_oapZPiykdAT2f6UBMcZrM1sRxLsnTckq14iBX7Otqi8Nx4AAilir8tD-qJibRsfT2747LMxP--0LnvfUJfBw_UoDSS6mv2j39C19A47gkIkmL7lOrIW-VCkUBgjqbKgQU25J3",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA86GL8_Zq8V3_C8A5rVNUQGCWyB9d7__Je5YpDp0jBmUYIxvQU5SnDt8v39AYLB6AFczlWqwVrV-eyG6qO2HxfAR7fKeEd-4Jj-qDsNhK31WDJmOAxgIAPCTZHBht4TiMGTNKPJ-quwi1f3daeUiv9DLVYL0wZ0qekwei317ydHiBfnuAFh3W7D5nYxfZzIBh_y7G6-AmZPW8S1DimgMU77mUW2qsBYJwUS5CvLGaMAex9E9n1KXxQXrY-Pcx8ryd1MPRYg7QWdoX"
    ],
    variants: [
      { name: "Bone White", colorHex: "#F5F5F0" },
      { name: "Slate Grey", colorHex: "#474741" },
      { name: "Sandstone", colorHex: "#D4CFC6" }
    ],
    sizes: ["Small", "Medium", "Large"],
    materialsAndCare: "Crafted from 100% locally sourced stoneware clay. Each piece is twice-fired for durability. Hand wash only with mild detergent to preserve the matte finish. Avoid thermal shock by not introducing extreme temperature changes.",
    dimensions: "Small: 15cm H x 10cm W\nMedium: 22cm H x 14cm W\nLarge: 30cm H x 18cm W",
    shippingAndReturns: "Complimentary shipping on all orders over $150. Returns accepted within 14 days of delivery in original packaging. Ships in 100% plastic-free, recyclable packaging.",
    relatedIds: ["handmade-stone-tray", "geometric-sculptural-candle", "the-minimalist-monograph", "pure-linen-napkin-set"]
  },
  {
    id: "essential-linen-shirt",
    name: "Essential Linen Shirt",
    code: "Ivory / Medium",
    price: 185,
    category: "Apparel",
    description: "Made from organic, lightweight flax linen, this shirt offers supreme breathability and visual ease. Featuring a neat collar, button cuffs, and a curved hem, it is perfect for high-key environments and casual styling.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlpucRtifiSUKc_Cqn5oyPaPUw-MfbaRuBhM45ZOyxAPq7kk4cZERVRDUWQzv-qwE7zBaAeEFT_9OvQkxiIhEgUJ55GJxfX6QE2BNcf1rK_9b2tMcxDIPnnwxOoHaRpNEm7PcNwYywRy3NumesdTgi80t3ToN0Sr807odKdf-CnnYiskzlcB9dIefNFF9OQRAi5bqL7PpdCkP4dKPbxF0t2-7e-y7PedzXoOfsoxqbvWNzjGZKezAHWaaAY-9cGG9U8X_o0lkf4zCw",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlpucRtifiSUKc_Cqn5oyPaPUw-MfbaRuBhM45ZOyxAPq7kk4cZERVRDUWQzv-qwE7zBaAeEFT_9OvQkxiIhEgUJ55GJxfX6QE2BNcf1rK_9b2tMcxDIPnnwxOoHaRpNEm7PcNwYywRy3NumesdTgi80t3ToN0Sr807odKdf-CnnYiskzlcB9dIefNFF9OQRAi5bqL7PpdCkP4dKPbxF0t2-7e-y7PedzXoOfsoxqbvWNzjGZKezAHWaaAY-9cGG9U8X_o0lkf4zCw",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBIGSDW_yjf3JuEeoqyCmYypkXkkYcn621Z7vq_Zk82OQICPjIe0I_DlXT08yiVOI9yzP5FwwZsBWh2QCndyNFClampz4Q9h9ln8RDy97b8pITeyWUdhCLJ5ip38_gNfSepB8jSLlJUNHL1e9_Bwovl_hC6Ylz-Ikd8yLW3rZjWOn2YffdZNeaCEeKQqWuhMyj1zJORAaZFhO6qAxbdgX6vquItwJ8nYtP-DnU_KT7llYgT-tZIBp0yai24PUTHbI3VfQIsNJp0rAK"
    ],
    variants: [
      { name: "Ivory", colorHex: "#F7F5F0" },
      { name: "Charcoal", colorHex: "#30302D" }
    ],
    sizes: ["Small", "Medium", "Large", "XL"],
    materialsAndCare: "100% fine flax organic linen. Machine wash cold on a gentle cycle. Dry flat or tumble dry low. Press lightly with warm iron if needed to restore optimal softness.",
    dimensions: "Standard tailored fit. Sized appropriately to fit relaxed silhouettes.",
    shippingAndReturns: "Free lightweight standard shipping. Same-day package preparation. Fully recyclable box packaging.",
    relatedIds: ["pure-linen-napkin-set", "horizon-minimalist-watch", "sculptural-form-vase"]
  },
  {
    id: "sculptural-form-vase",
    name: "Sculptural Form Vase",
    code: "Matte Stone / Large",
    price: 320,
    category: "Ceramics",
    description: "A crescent, organic ceramic ring sculpture that celebrates modern geometry and clean craftsmanship. Individually pressed and finished by hand in stoneware, casting beautiful geometric shadows in high-contrast light.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2ZaDJMdxNxr0t6UMksMUegcFakND_nOjiYjwJIVIX_W522ar4Vx56ow4WwndBBuA1PgzknyPojkDsglApUnCu35S19fFl-NH9UCVZLVie-0LMYqFJq57RFLZ8XLAysJqm-fqRW9IsoCzHbehU8bPVR6eroGGJmN8PcMWUFevwt5UFBRrRFznDWXZwJH8TdiNdyvPu3OGSI01sLb6AwgNIQKharLsPAkSfSrh5USiOqrTJaRkF-WkUyUHE7b-cinJEhnsWLEjMGpu8",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2ZaDJMdxNxr0t6UMksMUegcFakND_nOjiYjwJIVIX_W522ar4Vx56ow4WwndBBuA1PgzknyPojkDsglApUnCu35S19fFl-NH9UCVZLVie-0LMYqFJq57RFLZ8XLAysJqm-fqRW9IsoCzHbehU8bPVR6eroGGJmN8PcMWUFevwt5UFBRrRFznDWXZwJH8TdiNdyvPu3OGSI01sLb6AwgNIQKharLsPAkSfSrh5USiOqrTJaRkF-WkUyUHE7b-cinJEhnsWLEjMGpu8"
    ],
    variants: [
      { name: "Matte Stone", colorHex: "#D2CBC0" },
      { name: "White Ochre", colorHex: "#E8E3DA" }
    ],
    sizes: ["One Size"],
    materialsAndCare: "Organic raw stoneware base with soft matte outer stone slip. Clean with a premium dry cloth occasionally to remove dust.",
    dimensions: "Dimension: 23cm L x 21cm H x 8cm W",
    shippingAndReturns: "Delivered in multi-pane safety secure foam box. Complimented standard shipping apply.",
    relatedIds: ["minimalist-ceramic-vase", "handmade-stone-tray"]
  },
  {
    id: "horizon-minimalist-watch",
    name: "Horizon Minimalist Watch",
    code: "Black Leather / 40mm",
    price: 450,
    category: "Accessories",
    description: "A masterful minimalist timekeeper with a brilliant sapphire crystal glass surface, surgical grade stainless steel body, and premium top-grain Italian black calf leather strap. Pure, uncluttered elegance.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZUaGVfRc0Ulp3gzyGedKUVinHgsFE16r6U-lYesv8VD-yo8hGuLnS_iKWdnVI-JB3LCC0P_my2N6jhKrkggGqrIlU5TPhsxmynkycAUybcRAuQen02Izd8KLiqqxtkohbXlCOtUqH2eXHAS0l-ZfzoUXbm4EoSjKf9Q0mjUh1EFt0GwSsp2RXNz84XhDKC6fnVvOHdUZHE5rDxODjwwXr-FMfrb98-hBgnQ16SxmTF_ftSFaKSxKAPvKGNGkC46s8WmjhJueFSln9",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZUaGVfRc0Ulp3gzyGedKUVinHgsFE16r6U-lYesv8VD-yo8hGuLnS_iKWdnVI-JB3LCC0P_my2N6jhKrkggGqrIlU5TPhsxmynkycAUybcRAuQen02Izd8KLiqqxtkohbXlCOtUqH2eXHAS0l-ZfzoUXbm4EoSjKf9Q0mjUh1EFt0GwSsp2RXNz84XhDKC6fnVvOHdUZHE5rDxODjwwXr-FMfrb98-hBgnQ16SxmTF_ftSFaKSxKAPvKGNGkC46s8WmjhJueFSln9"
    ],
    variants: [
      { name: "Black Leather", colorHex: "#181916" },
      { name: "Tan Leather", colorHex: "#A87C54" }
    ],
    sizes: ["38mm", "40mm"],
    materialsAndCare: "Surgical steel body. Sapphire dial glass face sheet. Real Italian organic calf hide belt straps. Protect from moisture immersion.",
    dimensions: "Case Diameter: 40mm or 38mm. Band width: 20mm.",
    shippingAndReturns: "Exclusive luxury item. Complimentary safety express tracking transport included.",
    relatedIds: ["essential-linen-shirt", "minimalist-ceramic-vase"]
  },
  {
    id: "handmade-stone-tray",
    name: "Handmade Stone Tray",
    code: "Sandstone White",
    price: 85,
    category: "Ceramics",
    description: "A warm white sculptural tray featuring organic, hand-pinched borders that celebrate hand craftsmanship. Ideal for jewelry, key keeping, or displaying single curated dry florals.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDP6-ZtfQyPtEY0btzWArdwSU139CfJflwzkDgQR4tyhqvUsS1i9wwTQ7UwW5leRrdJZWiCv2jS0vYYLSw8epZP2-8TI21alfAVzII0J7ZhQZy7ZmNTqDnjtRjY49XnoXJIjkqzJJ8P9R_RX1eixzY3hhXObVNqypJ8c7JL2M3K-iFXcNt2QCfm5A0rIsuRkZJRF6QtJDBQEQHuuuiJNYldam3Sh2WoBupuql0cJZWPczrcQWvLNfiCh1BQYjFHUpY1g739H9nUQQSp",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDP6-ZtfQyPtEY0btzWArdwSU139CfJflwzkDgQR4tyhqvUsS1i9wwTQ7UwW5leRrdJZWiCv2jS0vYYLSw8epZP2-8TI21alfAVzII0J7ZhQZy7ZmNTqDnjtRjY49XnoXJIjkqzJJ8P9R_RX1eixzY3hhXObVNqypJ8c7JL2M3K-iFXcNt2QCfm5A0rIsuRkZJRF6QtJDBQEQHuuuiJNYldam3Sh2WoBupuql0cJZWPczrcQWvLNfiCh1BQYjFHUpY1g739H9nUQQSp"
    ],
    variants: [
      { name: "Sandstone White", colorHex: "#EDEDE8" },
      { name: "Slate Grey", colorHex: "#595956" }
    ],
    sizes: ["Standard"],
    materialsAndCare: "Warm clay stoneware base with textured, slip-glazed white ochre coating.",
    dimensions: "Dimensions: 28cm L x 18cm W x 2cm H",
    shippingAndReturns: "Standard packing. Ships in 2 days from clean local collections.",
    relatedIds: ["minimalist-ceramic-vase", "sculptural-form-vase"]
  },
  {
    id: "geometric-sculptural-candle",
    name: "Geometric Sculptural Candle",
    code: "Taupe Beige",
    price: 45,
    category: "Home Decor",
    description: "Form meets fragrance in this sculptural geometric column candle. Poured from 100% soy wax with dynamic essential oil aromas of smoked cedarwood and warm vetiver. Beautifully styled.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANd36zZIxOvQL8niZRna11N11x9xWlUJK-A1K4K2It10G_wrrYSGXYbJewpC3aTaUtqnzxoYUGqeq37cUjQwooe2ze_n55_mTMJh8XYJ2QiGO103d4zKD9Fz7jZ-GISMAj8sVFrUGf7CORKRzfzlcBlCKJSboYEIH-X5JGEcdslepn1Kv9o0X9A5rAWEwfgNxBwFeQJfa2sfkqzmXwWWBui9jCDF7oaKFfyisuO9OK4Fcrnof1d8qUbJefvdYAGxrkCXhQ1MCeQyE-",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuANd36zZIxOvQL8niZRna11N11x9xWlUJK-A1K4K2It10G_wrrYSGXYbJewpC3aTaUtqnzxoYUGqeq37cUjQwooe2ze_n55_mTMJh8XYJ2QiGO103d4zKD9Fz7jZ-GISMAj8sVFrUGf7CORKRzfzlcBlCKJSboYEIH-X5JGEcdslepn1Kv9o0X9A5rAWEwfgNxBwFeQJfa2sfkqzmXwWWBui9jCDF7oaKFfyisuO9OK4Fcrnof1d8qUbJefvdYAGxrkCXhQ1MCeQyE-"
    ],
    variants: [
      { name: "Taupe Beige", colorHex: "#C0B7AD" },
      { name: "Cream White", colorHex: "#EDEAE4" }
    ],
    sizes: ["Standard"],
    materialsAndCare: "100% natural organic soy wax. Braided lead-free cotton safety wick. Approx burn time of 45 hours.",
    dimensions: "Dimensions: 12cm H x 8cm W",
    shippingAndReturns: "Ships in climate secure cardboard. Carbon neutral transit guarantee.",
    relatedIds: ["minimalist-ceramic-vase", "the-minimalist-monograph"]
  },
  {
    id: "the-minimalist-monograph",
    name: "The Minimalist Monograph",
    code: "Off-White Cover",
    price: 110,
    category: "Art",
    description: "An editorial high-format art book with pristine minimal strokes and architectural interior photographies. Styled beautifully to elevate heavy walnut tables and marble surfaces.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsCLlG6M8Pm58siBvZFzkrWCaUHuWBavzuOn1GMyv7rE8gEKVu9ex8zhI7odDtIar-cxxBT7-zydP9G80pe8HDP92DYiw-779qO2u1PcQGN5bkNrRuT2VUJSdDIlc4qs-fkBNSiDYpqnmrcZ5Tsoz78B49Iz66_wkwEC293qZ1l4WO8J97QARxtTGHT6StXspsTxpAuXJJ104WlfZu0NCY0A72zBuG8eQ8pGU1M--1Isw_ErSum6fr-T5SND17Zu6vlOVyC8tGGEXJ",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDsCLlG6M8Pm58siBvZFzkrWCaUHuWBavzuOn1GMyv7rE8gEKVu9ex8zhI7odDtIar-cxxBT7-zydP9G80pe8HDP92DYiw-779qO2u1PcQGN5bkNrRuT2VUJSdDIlc4qs-fkBNSiDYpqnmrcZ5Tsoz78B49Iz66_wkwEC293qZ1l4WO8J97QARxtTGHT6StXspsTxpAuXJJ104WlfZu0NCY0A72zBuG8eQ8pGU1M--1Isw_ErSum6vlOVyC8tGGEXJ"
    ],
    variants: [
      { name: "Off-White Cover", colorHex: "#ECEAE4" }
    ],
    sizes: ["Softcover", "Hardcover"],
    materialsAndCare: "Acid-free museum premium linen textured heavy paper. Printed locally in Germany utilizing bio ink.",
    dimensions: "Format: 24cm W x 32cm H. 280 premium pages.",
    shippingAndReturns: "Shrinkwrapped and cleanly cardboard safe bound.",
    relatedIds: ["geometric-sculptural-candle", "handmade-stone-tray"]
  },
  {
    id: "pure-linen-napkin-set",
    name: "Pure Linen Napkin Set",
    code: "Natural Oatmeal",
    price: 60,
    category: "Textiles",
    description: "Four pure flax lightweight linen napkins. Hand folded and packaged beautifully in linen twine. Naturally stain resistant and softened by each clean wash.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBM6d-3zjp9XizzLkeCybAxcF6St12FVk-wZViO2dU0WXmFWkB8nYS0yMXYxIicTynbTZRtd52cFWLkH2shBTHZFN376Lgy3HxSYap36-owDuQOeIam1qHurQXQDJJZBQ4CxGWv7O0-ztLzsAUg3Ahuvh0jibyjmdJaAXA1FvkFfVfEs7YwQ-shOdLL_SN-uRIXQmgREWhj5-ApZLP1kwixz6TcRDmSULKHhJ2WbJjEmtcG_mR06k0uOeus5fgtXI_O9HWs3Y6a-B7i",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBM6d-3zjp9XizzLkeCybAxcF6St12FVk-wZViO2dU0WXmFWkB8nYS0yMXYxIicTynbTZRtd52cFWLkH2shBTHZFN376Lgy3HxSYap36-owDuQOeIam1qHurQXQDJJZBQ4CxGWv7O0-ztLzsAUg3Ahuvh0jibyjmdJaAXA1FvkFfVfEs7YwQ-shOdLL_SN-uRIXQmgREWhj5-ApZLP1kwixz6TcRDmSULKHhJ2WbJjEmtcG_mR06k0uOeus5fgtXI_O9HWs3Y6a-B7i"
    ],
    variants: [
      { name: "Natural Oatmeal", colorHex: "#DFDAD0" },
      { name: "Bleached Flax", colorHex: "#F3F0EC" }
    ],
    sizes: ["Set of 4"],
    materialsAndCare: "100% fine French flax linen. Soft organic texture grade. Mild cold laundry cycles wash.",
    dimensions: "Dimensions: 45cm x 45cm each.",
    shippingAndReturns: "Ships flat wrapped neatly in textured parchment folds.",
    relatedIds: ["handmade-stone-tray", "minimalist-ceramic-vase"]
  },
  {
    id: "sculptural-vase",
    name: "Sculptural Vase",
    code: "Oatmeal Clay",
    price: 180,
    category: "Ceramics",
    description: "A fine organic ceramic vase with a warm, sandy-speckled raw clay finish. Its timeless shape suits minimalist styling and soft wildflower pairings.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBX4xx__WCSwdkWfJsjhh96glvKRPJvPCCXC9mNKmuzSbfARocygvSV84K7A2vmbW5RiriAQpkcLgsGsx6jzU95iM8iIiTdDnB5F_fXfMhzI9T_Kean_vMxFKfS2tZ12AppW-otUcvyqrWT_7oN1T7rwPOp4jVmJSQUAsvkEwxQ-X6Gwoy7D3x9BA83_4767i1OTniJa3nntyxPYoVkQXFRKUSx5UY6qi_-o7p4xy4MRCOdqahjk9gSqsicHjRr_tEC6eGPRPH8iTEw",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBX4xx__WCSwdkWfJsjhh96glvKRPJvPCCXC9mNKmuzSbfARocygvSV84K7A2vmbW5RiriAQpkcLgsGsx6jzU95iM8iIiTdDnB5F_fXfMhzI9T_Kean_vMxFKfS2tZ12AppW-otUcvyqrWT_7oN1T7rwPOp4jVmJSQUAsvkEwxQ-X6Gwoy7D3x9BA83_4767i1OTniJa3nntyxPYoVkQXFRKUSx5UY6qi_-o7p4xy4MRCOdqahjk9gSqsicHjRr_tEC6eGPRPH8iTEw"
    ],
    variants: [
      { name: "Oatmeal Clay", colorHex: "#E6DEC9" }
    ],
    sizes: ["Medium"],
    materialsAndCare: "Organic stoneware with natural raw texture and slight glazing interior seal.",
    dimensions: "Dimensions: 20cm H x 12cm W",
    shippingAndReturns: "Standard local delivery. Secure carton layout structure packaging.",
    relatedIds: ["sculptural-form-vase", "handmade-stone-tray"]
  },
  {
    id: "linear-lamp",
    name: "Linear Lamp",
    code: "Brushed Brass",
    price: 320,
    category: "Lighting",
    description: "A sleek brass dynamic desk lamp with a high line configuration and brushed brass tactile switches. Elegant and minimal task lighting that aligns beautifully with technical drafting tables.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeUxQ8kxWMYvRKamzoChr1_NsBXEz0PYDQCzWtw-fKdxrJrgvZVIuiAKJUwFZ7H17MvnaiKx4apqwll-QO_DIxxWpleppL29qzzXbggKqYPl9hSH1_ns_yiYT1w6a_5oUC3Tv4O5RsSwaSKKmutizVZTkI0y2H4V285eSd9NEvlXusMlzoEkTSLxYsT85dVd4_-q1dzz_RyZnwoQAuhjag4ZwJA--TXBZMnh7c1IlWhEYnKBveTc38ZS3tMWXgR1a3RRyr3xd7UDB6",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDeUxQ8kxWMYvRKamzoChr1_NsBXEz0PYDQCzWtw-fKdxrJrgvZVIuiAKJUwFZ7H17MvnaiKx4apqwll-QO_DIxxWpleppL29qzzXbggKqYPl9hSH1_ns_yiYT1w6a_5oUC3Tv4O5RsSwaSKKmutizVZTkI0y2H4V285eSd9NEvlXusMlzoEkTSLxYsT85dVd4_-q1dzz_RyZnwoQAuhjag4ZwJA--TXBZMnh7c1IlWhEYnKBveTc38ZS3tMWXgR1a3RRyr3xd7UDB6"
    ],
    variants: [
      { name: "Brushed Brass", colorHex: "#D4C4A8" },
      { name: "Brushed Gunmetal", colorHex: "#4B4C4D" }
    ],
    sizes: ["One Size"],
    materialsAndCare: "Brushed anodized metal with matte solid brass layers. Wipe dry with premium microfiber only.",
    dimensions: "Arm extension: 45cm. Base: 12cm width.",
    shippingAndReturns: "Insures high transport safety guarantees. Free parcel return options.",
    relatedIds: ["oak-lounge", "minimalist-ceramic-vase"]
  },
  {
    id: "oak-lounge",
    name: "Oak Lounge",
    code: "Light Oak",
    price: 850,
    category: "Furniture",
    description: "An architecturally pure lounge chair made of pristine solid raw white oak and natural oil finishes. Features traditional Japanese joinery with clean visual profiles.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBw9VJG4rWmUy0m5l9m7m7vuCbvXZ6EyHLfjkWlGxAHlPentcjndedsh0BnIoMWpccoQr5Uc4Kzpp89fuCj2p8XJD0EmFoS3OYm3yKeL2Vyi16Zm6q4udiHFDuldMWyItVPh1qmbYsVd-LU0aNnHvsUL5RhXklvqSY5jPE78-6tRcVpg5yN4qNVv7JgyAPhHxPoB6Ng7pjvhHgg67pd3x1wYlfFmV0W3G53F_74kQAkZGqey64m7TnTi-uW2vBgOMkAxaP6-3w8ivKh",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBw9VJG4rWmUy0m5l9m7m7vuCbvXZ6EyHLfjkWlGxAHlPentcjndedsh0BnIoMWpccoQr5Uc4Kzpp89fuCj2p8XJD0EmFoS3OYm3yKeL2Vyi16Zm6q4udiHFDuldMWyItVPh1qmbYsVd-LU0aNnHvsUL5RhXklvqSY5jPE78-6tRcVpg5yN4qNVv7JgyAPhHxPoB6Ng7pjvhHgg67pd3x1wYlfFmV0W3G53F_74kQAkZGqey64m7TnTi-uW2vBgOMkAxaP6-3w8ivKh"
    ],
    variants: [
      { name: "Light Oak", colorHex: "#DFCBAC" },
      { name: "Darkened Walnut", colorHex: "#5E4F41" }
    ],
    sizes: ["Standard"],
    materialsAndCare: "Pratically solid white oak timber frame. Clean using specialized standard wooden treatments.",
    dimensions: "Dimensions: 75cm H x 68cm W x 70cm D",
    shippingAndReturns: "Heavy furniture delivery rates. Special white glove setups available on demand.",
    relatedIds: ["linear-lamp", "marble-platter"]
  },
  {
    id: "linen-throw",
    name: "Linen Throw",
    code: "Sage Green",
    price: 120,
    category: "Textiles",
    description: "A weighty, coarse linen throw with raw fraying borders that provide beautiful tactical comfort. Pre-washed for extreme softness and styled nicely.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyrDhcXra6_5-7o_1WpaiDP7sfGlc7uX7rkqKSOvr1-CSS76THi2xq9PLZJQzXwdKsYGXPNkWvGavRwF7MoX4n5faOgXIkaGgC3Ovw3Mp5RKHGn07YrQBY_DzzkMllBdPLcVer_vXYpG2ep-dI9b7D0RC-F7SIP0suJTdIXeWxGkvYGG0kRv1Nr9bptho33U65RkgnHM-zQIEZN5j6_DTg9xikXxGOXareWofiJNvtckmhljefwAnzdAfhXIuxjeyiWU03exfiZKMO",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyrDhcXra6_5-7o_1WpaiDP7sfGlc7uX7rkqKSOvr1-CSS76THi2xq9PLZJQzXwdKsYGXPNkWvGavRwF7MoX4n5faOgXIkaGgC3Ovw3Mp5RKHGn07YrQBY_DzzkMllBdPLcVer_vXYpG2ep-dI9b7D0RC-F7SIP0suJTdIXeWxGkvYGG0kRv1Nr9bptho33U65RkgnHM-zQIEZN5j6_DTg9xikXxGOXareWofiJNvtckmhljefwAnzdAfhXIuxjeyiWU03exfiZKMO"
    ],
    variants: [
      { name: "Sage Green", colorHex: "#8A9684" },
      { name: "Warm Sand", colorHex: "#DFD6C6" }
    ],
    sizes: ["Full Range"],
    materialsAndCare: "100% fine organic flax weight linen. Machine wash cold, low spin, air dry naturally.",
    dimensions: "Dimensions: 150cm x 200cm",
    shippingAndReturns: "Wrapped elegantly, shipped within 3 working business days.",
    relatedIds: ["pure-linen-napkin-set", "minimalist-ceramic-vase"]
  },
  {
    id: "marble-platter",
    name: "Marble Platter",
    code: "Noir Veined",
    price: 210,
    category: "Home Decor",
    description: "An exquisite rectangular dark slate-grey marble serving board with complex white crystalline vein paths. Smooth hand beveling around organic corners.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlay-z13QztbbS-o0KOwdEDFnBgFO1NkLYUJ52Tm9rs5ay11QVklUEtpt_2I9A60xMzxyRWrFQlHsLKiKi5RPX7GoynSpFIv-Uf8AE5sZg2zKAV-1-RfVeevpq8FRoTNIwBkUJjwB-oA245bh5GSKDn7DEFJzioKRh4v8Prg7LXJyXIeVrhqIfUyRbftqWPYSipTGCuC-9Aof1w-3WCuRepdA6-NW_8pMGTyRckeSNwg1sBZtYl1etWyOBriCBPYgceUUCQheV6r0X",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlay-z13QztbbS-o0KOwdEDFnBgFO1NkLYUJ52Tm9rs5ay11QVklUEtpt_2I9A60xMzxyRWrFQlHsLKiKi5RPX7GoynSpFIv-Uf8AE5sZg2zKAV-1-RfVeevpq8FRoTNIwBkUJjwB-oA245bh5GSKDn7DEFJzioKRh4v8Prg7LXJyXIeVrhqIfUyRbftqWPYSipTGCuC-9Aof1w-3WCuRepdA6-NW_8pMGTyRckeSNwg1sBZtYl1etWyOBriCBPYgceUUCQheV6r0X"
    ],
    variants: [
      { name: "Noir Veined", colorHex: "#2B2C2D" }
    ],
    sizes: ["One Size"],
    materialsAndCare: "100% natural solid Nero Marquina slate marble. Food-safe seal coated.",
    dimensions: "Dimensions: 35cm x 22cm x 1.8cm",
    shippingAndReturns: "Double buffered shipping container layout ensures shock absorber protection.",
    relatedIds: ["oak-lounge", "handmade-stone-tray"]
  },
  {
    id: "abstract-no-4",
    name: "Abstract No. 4",
    code: "Ink Black on Raw Cream",
    price: 450,
    category: "Art",
    description: "A bold, graphic, high-contrast black ink brushwork painting on warm hemp cotton canvas. Evokes natural flows, silent gestures, and pure mindfulness.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD85DWixdZ8mSb5bnd7kZP3fjpvHy7Um34IVnQSlpCzwG3cT5rUl_PduNMCQq6Yt_LgE_z52hFDz_C4MAG0EzjVxcRFfX-r-hEfOERCm8EaCMljMywpIG2s1NUqpTrjaPVYwvN2wmjVbw39fAKCJGu-G00dyC3DcWwsHZ8X6j7kIpmnNimJ7Jef91T3IqSfb5ZBeJVhOJut8Z_M03cejqdDr4gRA1cNke4MzWmXF5XbloQWHi1N2bfdsI8iQJ4jN3J9oJXBNab5sy_h",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD85DWixdZ8mSb5bnd7kZP3fjpvHy7Um34IVnQSlpCzwG3cT5rUl_PduNMCQq6Yt_LgE_z52hFDz_C4MAG0EzjVxcRFfX-r-hEfOERCm8EaCMljMywpIG2s1NUqpTrjaPVYwvN2wmjVbw39fAKCJGu-G00dyC3DcWwsHZ8X6j7kIpmnNimJ7Jef91T3IqSfb5ZBeJVhOJut8Z_M03cejqdDr4gRA1cNke4MzWmXF5XbloQWHi1N2bfdsI8iQJ4jN3J9oJXBNab5sy_h"
    ],
    variants: [
      { name: "Ink Black on Raw Cream", colorHex: "#E6DEC9" }
    ],
    sizes: ["50 x 70 cm", "70 x 100 cm"],
    materialsAndCare: "Organic hemp natural fibers base, acid-free gallery grade layout card.",
    dimensions: "Dimensions: 50cm x 70cm or 70cm x 100cm",
    shippingAndReturns: "Delivered cleanly rolled and packaged inside impact protective cylinders.",
    relatedIds: ["the-minimalist-monograph", "geometric-sculptural-candle"]
  }
];
