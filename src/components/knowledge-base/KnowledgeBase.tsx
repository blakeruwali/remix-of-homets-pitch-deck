import React, { useState } from "react";
import { kbSections } from "./kbData";
import { KBSection } from "./KBSection";
import { Search, X } from "lucide-react";

interface KnowledgeBaseProps {
  lightMode: boolean;
  searchQuery?: string;
}

export const KnowledgeBase: React.FC<KnowledgeBaseProps> = ({ lightMode, searchQuery: externalQuery }) => {
  const [internalQuery, setInternalQuery] = useState("");
  const searchQuery = externalQuery ?? internalQuery;
  const showSearchBar = externalQuery === undefined;

  return (
    <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
      {showSearchBar && (
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: lightMode ? "#999" : "hsl(0,0%,50%)" }} />
          <input
            type="text"
            value={internalQuery}
            onChange={(e) => setInternalQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full rounded-xl py-2.5 pl-10 pr-10 text-sm outline-none"
            style={{
              background: lightMode ? "hsl(0,0%,96%)" : "hsl(0,0%,11%)",
              color: lightMode ? "#111" : "hsl(0,0%,95%)",
              border: `1px solid ${lightMode ? "hsl(0,0%,88%)" : "hsl(0,0%,18%)"}`,
            }}
          />
          {internalQuery && (
            <button onClick={() => setInternalQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2">
              <X className="w-4 h-4" style={{ color: lightMode ? "#999" : "hsl(0,0%,50%)" }} />
            </button>
          )}
        </div>
      )}
      {kbSections.map((section) => (
        <div key={section.id} id={`kb-${section.id}`}>
          <KBSection
            section={section}
            lightMode={lightMode}
            searchQuery={searchQuery}
          />
        </div>
      ))}
      {searchQuery && kbSections.every((s) => {
        const q = searchQuery.toLowerCase().trim();
        return s.articles.every(
          (a) => !a.title.toLowerCase().includes(q) && !a.keywords.toLowerCase().includes(q)
        );
      }) && (
        <p className={`text-sm text-center py-8 ${lightMode ? "text-gray-400" : "text-white/40"}`}>
          No matching articles found
        </p>
      )}
    </div>
  );
};
