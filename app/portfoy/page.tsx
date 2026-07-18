"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropertyCard from "@/components/PropertyCard";
import Reveal from "@/components/Reveal";
import propertiesData from "@/data/properties.json";
import type { Property } from "@/lib/types";
import { SearchX, ArrowUpDown, Check } from "lucide-react";

const properties = propertiesData as unknown as Property[];

type FilterKey = "Tümü" | "Satılık" | "Kiralık" | "Ticari" | "Konut";
type SortKey = "standart" | "alfabetik" | "fiyat-artan" | "fiyat-azalan";

const filters: FilterKey[] = ["Tümü", "Satılık", "Kiralık", "Ticari", "Konut"];

const sortOptions: { key: SortKey; label: string }[] = [
  { key: "standart", label: "Standart Sıralama" },
  { key: "alfabetik", label: "Alfabetik Sıralama" },
  { key: "fiyat-artan", label: "Fiyata (Düşükten Yükseğe)" },
  { key: "fiyat-azalan", label: "Fiyata (Yüksekten Düşüğe)" },
];

function priceToNumber(price: string): number {
  return Number(price.replace(/[^\d]/g, "")) || 0;
}

export default function PortfoyPage() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("Tümü");
  const [sortKey, setSortKey] = useState<SortKey>("standart");
  const [isSortOpen, setIsSortOpen] = useState(false);

  const filteredProperties = useMemo(() => {
    let list =
      activeFilter === "Tümü"
        ? [...properties]
        : properties.filter(
            (property) =>
              property.type === activeFilter || property.category === activeFilter
          );

    switch (sortKey) {
      case "alfabetik":
        list = list.sort((a, b) => a.title.localeCompare(b.title, "tr"));
        break;
      case "fiyat-artan":
        list = list.sort((a, b) => priceToNumber(a.price) - priceToNumber(b.price));
        break;
      case "fiyat-azalan":
        list = list.sort((a, b) => priceToNumber(b.price) - priceToNumber(a.price));
        break;
      default:
        break;
    }

    return list;
  }, [activeFilter, sortKey]);

  const activeSortLabel =
    sortOptions.find((option) => option.key === sortKey)?.label ?? "Sırala";

  return (
    <div className="mx-auto max-w-6xl px-6 pb-16 pt-10 md:px-8">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
          Portföy
        </p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-navy md:text-4xl">
          Tüm Portföylerim
        </h1>
        <p className="mt-2 text-sm text-navy/60">
          {filteredProperties.length} ilan listeleniyor
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2.5">
            {filters.map((filter) => {
              const isActive = filter === activeFilter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition duration-200 ${
                    isActive
                      ? "border-navy bg-navy text-white shadow-soft"
                      : "border-navy-100 bg-white text-navy hover:border-navy/40"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => setIsSortOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-full border border-navy-100 bg-white px-5 py-2.5 text-sm font-semibold text-navy transition hover:border-navy/40"
            >
              <ArrowUpDown size={15} />
              Sırala
            </button>

            <AnimatePresence>
              {isSortOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsSortOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute right-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-2xl border border-navy-100 bg-white p-2 shadow-lg"
                  >
                    {sortOptions.map((option) => (
                      <button
                        key={option.key}
                        type="button"
                        onClick={() => {
                          setSortKey(option.key);
                          setIsSortOpen(false);
                        }}
                        className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                          sortKey === option.key
                            ? "bg-navy text-white"
                            : "text-navy hover:bg-navy-50"
                        }`}
                      >
                        {option.label}
                        {sortKey === option.key && <Check size={16} />}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        {sortKey !== "standart" && (
          <p className="mt-3 text-xs text-navy/50">
            Sıralama: <span className="font-semibold text-navy/70">{activeSortLabel}</span>
          </p>
        )}
      </Reveal>

      <AnimatePresence mode="wait">
        {filteredProperties.length > 0 ? (
          <motion.div
            key={activeFilter + sortKey}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 flex flex-col items-center justify-center gap-3 text-center"
          >
            <SearchX size={40} className="text-navy/30" />
            <p className="text-sm text-navy/60">
              Bu kritere uygun ilan bulunamadı.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
