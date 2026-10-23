"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { Room } from "@/lib/data";
import { RoomCard } from "./Cards";

type RoomsExplorerProps = { rooms: Room[]; filters: string[] };

export function RoomsExplorer({ rooms, filters }: RoomsExplorerProps) {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? rooms : rooms.filter((room) => room.category === active);

  return (
    <div>
      <div className="mb-12 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Room categories">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={active === filter}
            onClick={() => setActive(filter)}
            className="relative rounded-full px-6 py-2.5 text-sm font-semibold transition-colors"
          >
            {active === filter && (
              <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-forest" />
            )}
            <span className={`relative ${active === filter ? "text-white" : "text-forest"}`}>{filter}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((room) => (
            <motion.div
              key={room.slug}
              layout
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.45 }}
            >
              <RoomCard room={room} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
