//src/components/dashboard/NoteCard.tsx
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

interface Note {
  title: string;
  excerpt: string; // ✅ Changed from 'description' to 'excerpt'
  date: string;
  tags: string[];
}

interface NoteCardProps {
  note: Note;
  delay?: number;
}

export function NoteCard({ note, delay = 0 }: NoteCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -4 }}
    >
      <GlassCard className="p-6">
        <h3 className="font-bold text-[#E6E6FF] mb-2">{note.title}</h3>
        <p className="text-sm text-[#A0A0C0] mb-3">{note.excerpt}</p>{" "}
        {/* ✅ Use excerpt */}
        <div className="flex flex-wrap gap-1 mb-3">
          {note.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-[#1F1F29] text-[#A0A0C0] rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-xs text-[#707090]">{note.date}</p>
      </GlassCard>
    </motion.div>
  );
}
