"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  imageAlt: string;
  category: string;
};

const business = {
  name: "CapitalChow",
  tagline: "Abuja's home of shawarma",
  phoneDisplay: "07012309774",
  phoneIntl: "2347012309774",
  location: "Opposite Cyplac pharmacy, 3rd avenue",
  hours: "Open 1pm–10pm",
  delivery: "Fast Abuja delivery"
};

const menuGroups: { title: string; subtitle: string; items: MenuItem[] }[] = [
  {
    title: "Classic Shawarma",
    subtitle: "The taste Abuja keeps coming back for",
    items: [
      {
        id: "classic-shawarma",
        name: "Classic Shawarma",
        description: "Juicy chicken, cabbage crunch, fresh onions and CapitalChow sauce.",
        price: 2500,
        image:
          "https://images.unsplash.com/photo-1773620494884-940e0db95e46?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "CapitalChow style shawarma wraps on a wooden board",
        category: "Classic Shawarma"
      }
    ]
  },
  {
    title: "Chicken Shawarma",
    subtitle: "Loaded, smoky and satisfying",
    items: [
      {
        id: "chicken-shawarma",
        name: "Chicken Shawarma",
        description: "Grilled chicken with crunchy veggies, fries and a creamy house drizzle.",
        price: 3000,
        image:
          "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Chicken shawarma with fries and vegetables",
        category: "Chicken Shawarma"
      }
    ]
  },
  {
    title: "Special Shawarma",
    subtitle: "For serious shawarma cravings",
    items: [
      {
        id: "special-shawarma",
        name: "Special Shawarma",
        description: "Double protein, extra sausage, richer sauce and the full CapitalChow vibe.",
        price: 4000,
        image:
          "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Special shawarma loaded with fillings",
        category: "Special Shawarma"
      }
    ]
  },
  {
    title: "Add-ons",
    subtitle: "Upgrade the order, not the stress",
    items: [
      {
        id: "fries",
        name: "Fries",
        description: "Hot, golden fries that pair perfectly with every wrap.",
        price: 1500,
        image:
          "https://images.unsplash.com/photo-1768252452214-38f555002147?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Golden french fries",
        category: "Add-ons"
      },
      {
        id: "extra-chicken",
        name: "Extra Chicken",
        description: "More grilled chicken for the people who do not play with portions.",
        price: 1200,
        image:
          "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Plate of grilled chicken pieces",
        category: "Add-ons"
      },
      {
        id: "extra-cheese",
        name: "Extra Cheese",
        description: "Add a melty cheese layer for a richer shawarma finish.",
        price: 800,
        image: "/extra-cheese.jpg",
        imageAlt: "Fresh cheese board with sliced cheese",
        category: "Add-ons"
      }
    ]
  },
  {
    title: "Drinks",
    subtitle: "Something cold to seal the deal",
    items: [
      {
        id: "coke-50cl",
        name: "Coke (50cl)",
        description: "Ice-cold cola for that proper street-food combo.",
        price: 700,
        image:
          "https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Bottle of Coke",
        category: "Drinks"
      },
      {
        id: "fanta-50cl",
        name: "Fanta (50cl)",
        description: "Bright citrus refreshment when you want something sweeter.",
        price: 700,
        image:
          "https://images.unsplash.com/photo-1652859523553-904b69ba53ef?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Bottle of Fanta",
        category: "Drinks"
      },
      {
        id: "water",
        name: "Water",
        description: "Simple chilled bottled water.",
        price: 400,
        image:
          "https://images.unsplash.com/photo-1561041695-d2fadf9f318c?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Bottle of water",
        category: "Drinks"
      }
    ]
  }
];

const categories = [
  "Classic Shawarma",
  "Chicken Shawarma",
  "Special Shawarma",
  "Add-ons",
  "Drinks"
];

function IconWrapper({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full ${className ?? ""}`}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

function LocationIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 21s6-5.33 6-11a6 6 0 1 0-12 0c0 5.67 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ClockIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function DeliveryIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M3 6h11v8H3z" />
      <path d="M14 10h3l3 3v1h-6z" />
      <circle cx="7.5" cy="17.5" r="1.5" />
      <circle cx="17.5" cy="17.5" r="1.5" />
    </svg>
  );
}

function ChatIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M7 18l-4 3 1.5-4.5A8 8 0 1 1 20 12a8 8 0 0 1-8 8c-1.7 0-3.28-.53-4.57-1.43Z" />
      <path d="M9 12h.01M12 12h.01M15 12h.01" />
    </svg>
  );
}

function BoltIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13 2 5 13h5l-1 9 8-11h-5l1-9Z" />
    </svg>
  );
}

function BarsIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect x="4" y="12" width="4" height="8" rx="1" />
      <rect x="10" y="8" width="4" height="12" rx="1" />
      <rect x="16" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}

function MenuIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .14 5.35.14 11.93c0 2.1.55 4.16 1.6 5.97L0 24l6.3-1.65a11.84 11.84 0 0 0 5.78 1.48h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.18-3.5-8.42Zm-8.44 18.33h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.88 9.88 0 0 1-1.52-5.27c0-5.45 4.44-9.89 9.91-9.89 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 6.99c0 5.46-4.45 9.89-9.89 9.89Zm5.42-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.39-1.46-.88-.78-1.48-1.74-1.65-2.03-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.23-.24-.57-.48-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.48 0 1.46 1.08 2.88 1.23 3.08.15.2 2.11 3.23 5.1 4.52.71.31 1.27.49 1.7.62.71.22 1.35.19 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

function BenefitBadge({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.6rem] bg-brandRed text-white shadow-[0_18px_40px_rgba(211,47,47,0.24)]">
      {children}
    </div>
  );
}

const whyPoints = [
  {
    title: "No more “how much?” messages",
    copy: "Prices, photos and options are already clear before the customer taps WhatsApp."
  },
  {
    title: "Customers order instantly",
    copy: "Each button pre-fills the message so they spend seconds ordering, not minutes chatting."
  },
  {
    title: "Less back and forth, more sales",
    copy: "Your team gets cleaner requests and can move straight to confirming delivery."
  }
];

const steps = [
  "Browse the full menu with prices and photos.",
  "Tap the item you want and send the prefilled order.",
  "Confirm on WhatsApp and get your CapitalChow fix moving."
];

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0
  }).format(price);
}

function buildWhatsAppLink(item?: string, quantity = 2) {
  const message = item
    ? `Hi, I want to order ${quantity} ${item}`
    : "Hi, I want to place an order from CapitalChow";

  return `https://wa.me/${business.phoneIntl}?text=${encodeURIComponent(message)}`;
}

function buildCartWhatsAppLink(items: Array<{ name: string; quantity: number }>) {
  const lines = items.map((item, index) => `${index + 1}. ${item.quantity} x ${item.name}`);
  const message = `Hi, I want to place this order from CapitalChow:\n${lines.join("\n")}`;
  return `https://wa.me/${business.phoneIntl}?text=${encodeURIComponent(message)}`;
}

function slugify(label: string) {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function OrderButton({
  item,
  label,
  className
}: {
  item?: string;
  label: string;
  className?: string;
}) {
  return (
    <a
      href={buildWhatsAppLink(item)}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-extrabold transition hover:scale-[1.01] ${className ?? ""}`}
    >
      <span>{label}</span>
      <WhatsAppIcon className="h-4 w-4" />
    </a>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-2">
      {eyebrow ? (
        <p className="text-xs font-extrabold uppercase tracking-[0.32em] text-brandYellow">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-4xl leading-none text-white">{title}</h2>
      {subtitle ? <p className="max-w-xs text-sm text-white/70">{subtitle}</p> : null}
    </div>
  );
}

export default function Home() {
  const allItems = useMemo(
    () => menuGroups.flatMap((group) => group.items),
    []
  );
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  function updateQuantity(itemId: string, nextQuantity: number) {
    setQuantities((current) => {
      if (nextQuantity <= 0) {
        const { [itemId]: _removed, ...rest } = current;
        return rest;
      }

      return {
        ...current,
        [itemId]: nextQuantity
      };
    });
  }

  const cartItems = allItems
    .map((item) => ({
      ...item,
      quantity: quantities[item.id] ?? 0
    }))
    .filter((item) => item.quantity > 0);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <main className="pb-28">
      <div className="mx-auto min-h-screen max-w-md bg-hero-radial shadow-glow">
        <header className="sticky top-0 z-30 border-b border-white/10 bg-black/95 backdrop-blur">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <Image
                src="/capitalchow-logo.jpg"
                alt="CapitalChow logo"
                width={60}
                height={60}
                className="h-12 w-12 rounded-xl object-cover"
                priority
              />
              <div>
                <p className="text-2xl leading-none text-brandYellow">{business.name}</p>
                <p className="text-[11px] text-white/75">{business.tagline}</p>
              </div>
            </div>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white/80"
            >
              <MenuIcon className="h-4 w-4" />
              Menu
            </a>
          </div>
        </header>

        <section className="px-4 pb-6 pt-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-brandYellow/60 bg-brandYellow/10 px-4 py-2 text-xs font-extrabold text-brandYellow">
            <BoltIcon className="h-4 w-4" />
            NO DM&apos;s — Order instantly
          </div>
          <div className="mt-5 space-y-4">
            <h1 className="text-6xl leading-[0.92] text-white">
              Order Shawarma <span className="text-brandYellow">Without the Wait</span>
            </h1>
            <p className="max-w-sm text-lg leading-8 text-white/80">
              Skip the back and forth. Pick your order and send instantly on WhatsApp.
            </p>
            <div className="grid gap-3">
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-2xl bg-brandYellow px-5 py-4 text-base font-extrabold text-black"
              >
                View Menu
              </a>
              <OrderButton
                label="Order Now"
                className="bg-brandRed text-white"
              />
            </div>
          </div>

          <div className="relative mt-6 overflow-hidden rounded-[2rem] border border-white/10 bg-panel">
            <Image
              src="https://images.unsplash.com/photo-1773620494884-940e0db95e46?auto=format&fit=crop&w=1600&q=80"
              alt="Fresh shawarma wraps ready to order"
              width={1200}
              height={1200}
              className="h-[24rem] w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/80 p-4 backdrop-blur">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <IconWrapper className="h-11 w-11 bg-brandRed/15 text-brandYellow">
                      <LocationIcon />
                    </IconWrapper>
                    <p className="text-sm text-white/90">
                      {business.location}, Abuja
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <IconWrapper className="h-11 w-11 bg-brandRed/15 text-brandYellow">
                      <ClockIcon />
                    </IconWrapper>
                    <p className="text-sm text-white/90">Open 1pm–10pm Mon–Sun</p>
                  </div>
                  <div className="flex gap-3">
                    <IconWrapper className="h-11 w-11 bg-brandRed/15 text-brandYellow">
                      <DeliveryIcon />
                    </IconWrapper>
                    <p className="text-sm text-white/90">Fast delivery across Abuja</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-3 gap-3 px-4 py-2 text-center">
          <div className="rounded-2xl border border-white/10 bg-panelSoft px-3 py-4">
            <IconWrapper className="mx-auto h-10 w-10 bg-brandRed/15 text-brandYellow">
              <LocationIcon />
            </IconWrapper>
            <p className="mt-2 text-xs font-semibold text-white/80">{business.location}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-panelSoft px-3 py-4">
            <IconWrapper className="mx-auto h-10 w-10 bg-brandRed/15 text-brandYellow">
              <ClockIcon />
            </IconWrapper>
            <p className="mt-2 text-xs font-semibold text-white/80">{business.hours}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-panelSoft px-3 py-4">
            <IconWrapper className="mx-auto h-10 w-10 bg-brandRed/15 text-brandYellow">
              <DeliveryIcon />
            </IconWrapper>
            <p className="mt-2 text-xs font-semibold text-white/80">{business.delivery}</p>
          </div>
        </section>

        <section id="menu" className="px-4 py-8">
          <SectionTitle eyebrow="Built to Sell" title="Our Menu" subtitle="A cleaner way for CapitalChow customers to choose, decide and order fast." />
          <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <a
                key={category}
                href={`#${slugify(category)}`}
                className="min-w-fit rounded-2xl border border-brandYellow/30 bg-white/5 px-4 py-3 text-sm font-bold text-white/90"
              >
                {category}
              </a>
            ))}
          </div>

          <div className="mt-6 space-y-8">
            {menuGroups.map((group) => (
              <div key={group.title} id={slugify(group.title)} className="space-y-4">
                <div>
                  <h3 className="text-3xl text-brandYellow">{group.title}</h3>
                  <p className="text-sm text-white/70">{group.subtitle}</p>
                </div>

                <div className="space-y-4">
                  {group.items.map((item) => (
                    <article
                      key={item.name}
                      className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#121212]"
                    >
                      <div className="relative h-52">
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 420px"
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-4 p-4">
                        <div className="space-y-2">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="text-3xl leading-none text-white">{item.name}</p>
                              <p className="mt-2 text-sm leading-6 text-white/70">
                                {item.description}
                              </p>
                            </div>
                            <span className="rounded-full border border-brandYellow/30 bg-brandYellow/10 px-3 py-1 text-xs font-bold text-brandYellow">
                              {item.category}
                            </span>
                          </div>
                          <p className="text-3xl leading-none text-brandYellow">
                            {formatPrice(item.price)}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center rounded-2xl border border-white/10 bg-black/40">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, (quantities[item.id] ?? 0) - 1)}
                              className="h-12 w-12 text-xl font-bold text-white/80"
                              aria-label={`Decrease ${item.name} quantity`}
                            >
                              −
                            </button>
                            <span className="flex h-12 min-w-10 items-center justify-center text-sm font-bold text-white">
                              {quantities[item.id] ?? 0}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, (quantities[item.id] ?? 0) + 1)}
                              className="h-12 w-12 text-xl font-bold text-white"
                              aria-label={`Increase ${item.name} quantity`}
                            >
                              +
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, Math.max(1, quantities[item.id] ?? 1))}
                            className="inline-flex flex-1 items-center justify-center rounded-2xl bg-brandRed px-4 py-3 text-sm font-extrabold text-white transition hover:scale-[1.01]"
                          >
                            {quantities[item.id] ? "Added to order" : "Add to order"}
                          </button>
                        </div>
                        <OrderButton
                          item={item.name}
                          label="Order This on WhatsApp"
                          className="w-full border border-white/10 bg-white/5 text-white"
                        />
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 py-8">
          <SectionTitle title="Why this makes ordering easier" />
          <div className="mt-5 space-y-4">
            {whyPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-[1.75rem] border border-white/10 bg-panelSoft p-5"
              >
                <div className="flex items-start gap-4">
                  <BenefitBadge>
                    {point.title.includes("how much") ? (
                      <ChatIcon className="h-7 w-7" />
                    ) : point.title.includes("instantly") ? (
                      <BoltIcon className="h-7 w-7" />
                    ) : (
                      <BarsIcon className="h-7 w-7" />
                    )}
                  </BenefitBadge>
                  <div className="min-w-0 space-y-1">
                    <h3 className="text-2xl leading-none text-white">{point.title}</h3>
                    <p className="text-sm leading-6 text-white/70">{point.copy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 py-8">
          <SectionTitle title="How it works" />
          <div className="mt-5 space-y-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-[1.75rem] border border-white/10 bg-panelSoft p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brandRed text-xl font-black text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl leading-none text-brandYellow">
                      {index === 0 ? "Browse menu" : index === 1 ? "Select items" : "Order sent instantly"}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/70">{step}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 py-8">
          <div className="overflow-hidden rounded-[2rem] border border-brandRed/40 bg-gradient-to-br from-[#6e0000] via-brandRed to-[#260000]">
            <div className="p-6 pb-0 text-center">
              <h2 className="text-5xl leading-none text-white">Hungry already?</h2>
              <p className="mt-3 text-lg text-white/85">
                Place your order in under 30 seconds
              </p>
            </div>
            <div className="relative mt-5 h-64">
              <Image
                src="https://images.unsplash.com/photo-1773620494884-940e0db95e46?auto=format&fit=crop&w=1600&q=80"
                alt="CapitalChow shawarma close up"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brandRed via-transparent to-transparent" />
            </div>
            <div className="grid gap-3 p-4">
              <OrderButton
                label="Order Now"
                className="w-full bg-brandYellow text-black"
              />
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-4 py-4 text-base font-extrabold text-white ring-1 ring-white/15"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="px-4 pb-2">
          <div className="rounded-[2rem] border border-white/10 bg-[#111111] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brandYellow">
                  Order Preview
                </p>
                <h2 className="mt-2 text-4xl leading-none text-white">Built for faster WhatsApp orders</h2>
              </div>
              <span className="rounded-full border border-brandYellow/30 bg-brandYellow/10 px-3 py-1 text-xs font-bold text-brandYellow">
                {totalItems} item{totalItems === 1 ? "" : "s"}
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {cartItems.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-white/60">
                  Tap the + buttons on any item to build a clean order summary before sending it to WhatsApp.
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <div>
                      <p className="font-bold text-white">
                        {item.quantity} x {item.name}
                      </p>
                      <p className="text-xs text-white/60">{item.category}</p>
                    </div>
                    <p className="font-bold text-brandYellow">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                ))
              )}
            </div>

            <div className="mt-5 flex items-center justify-between rounded-2xl bg-black/40 px-4 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/50">Estimated Total</p>
                <p className="mt-1 text-3xl leading-none text-brandYellow">{formatPrice(totalPrice)}</p>
              </div>
              <a
                href={cartItems.length ? buildCartWhatsAppLink(cartItems) : buildWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-extrabold ${
                  cartItems.length
                    ? "bg-[#1fae4b] text-white"
                    : "bg-white/10 text-white/55"
                }`}
              >
                <WhatsAppIcon className="h-5 w-5" />
                Send order
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 px-4 pb-10 pt-8">
          <div className="flex items-center gap-3">
            <Image
              src="/capitalchow-logo.jpg"
              alt="CapitalChow logo"
              width={54}
              height={54}
              className="h-12 w-12 rounded-xl object-cover"
            />
            <div>
              <p className="text-2xl leading-none text-brandYellow">{business.name}</p>
              <p className="text-sm text-white/70">Abuja&apos;s home of shawarma</p>
            </div>
          </div>
          <div className="mt-6 space-y-3 text-sm text-white/75">
            <p className="flex items-center gap-3">
              <LocationIcon className="h-4 w-4 text-brandYellow" />
              <span>{business.location}, Abuja</span>
            </p>
            <p className="flex items-center gap-3">
              <ChatIcon className="h-4 w-4 text-brandYellow" />
              <span>{business.phoneDisplay}</span>
            </p>
            <p className="flex items-center gap-3">
              <ClockIcon className="h-4 w-4 text-brandYellow" />
              <span>1pm–10pm daily</span>
            </p>
            <p>NO DM&apos;s. Order via WhatsApp.</p>
          </div>
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#1fae4b] px-4 py-4 text-base font-extrabold text-white"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp {business.phoneDisplay}
          </a>
        </footer>
      </div>

      {cartItems.length > 0 ? (
        <div className="fixed inset-x-4 bottom-5 z-40">
          <a
            href={buildCartWhatsAppLink(cartItems)}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-[1.75rem] bg-[#1fae4b] px-5 py-4 text-white shadow-2xl ring-4 ring-white/10"
          >
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/80">
                Ready to send
              </p>
              <p className="mt-1 text-sm font-bold">
                {totalItems} item{totalItems === 1 ? "" : "s"} • {formatPrice(totalPrice)}
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-extrabold">
              <WhatsAppIcon className="h-5 w-5" />
              Send on WhatsApp
            </span>
          </a>
        </div>
      ) : (
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-5 z-40 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#1fae4b] text-white shadow-2xl ring-4 ring-white/10"
        >
          <WhatsAppIcon className="h-8 w-8" />
        </a>
      )}
    </main>
  );
}
