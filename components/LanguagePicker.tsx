"use client";

import { useEffect, useId, useRef, useState } from "react";
import Flag from "@/components/Flag";
import { useLanguage } from "@/components/LanguageProvider";
import { localeLabel, SORTED_LOCALES } from "@/lib/i18n/locales";

export default function LanguagePicker() {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    listRef.current?.focus();
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [open, active]);

  function openList() {
    setActive(Math.max(0, SORTED_LOCALES.findIndex((l) => l.id === locale.id)));
    setOpen(true);
  }

  function choose(index: number) {
    setLocale(SORTED_LOCALES[index].id);
    setOpen(false);
    buttonRef.current?.focus();
  }

  function onListKeyDown(event: React.KeyboardEvent) {
    const last = SORTED_LOCALES.length - 1;
    switch (event.key) {
      case "ArrowDown":
        setActive((i) => Math.min(last, i + 1));
        break;
      case "ArrowUp":
        setActive((i) => Math.max(0, i - 1));
        break;
      case "Home":
        setActive(0);
        break;
      case "End":
        setActive(last);
        break;
      case "Enter":
      case " ":
        choose(active);
        break;
      case "Escape":
      case "Tab":
        setOpen(false);
        buttonRef.current?.focus();
        break;
      default:
        return;
    }
    event.preventDefault();
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`${t.language.label}: ${localeLabel(locale)}`}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            openList();
          }
        }}
        className="flex items-center gap-2 rounded-md border border-white/15 px-2.5 py-1.5 text-sm text-foreground/80 transition-colors hover:bg-white/10 hover:text-foreground"
      >
        <Flag country={locale.country} className="h-4 w-6 shrink-0" />
        <span className="hidden max-w-40 truncate md:inline">{localeLabel(locale)}</span>
        <span className="text-xs text-foreground/50" aria-hidden>
          ▾
        </span>
      </button>
      {open && (
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          tabIndex={-1}
          aria-label={t.language.label}
          aria-activedescendant={`${listId}-${active}`}
          onKeyDown={onListKeyDown}
          className="absolute right-0 z-50 mt-2 max-h-[min(70vh,28rem)] w-64 max-w-[calc(100vw-2rem)] overflow-y-auto rounded-lg border border-white/15 bg-background py-1 shadow-xl shadow-black/50 outline-none"
        >
          {SORTED_LOCALES.map((l, index) => {
            const selected = l.id === locale.id;
            return (
              <li
                key={l.id}
                id={`${listId}-${index}`}
                data-index={index}
                role="option"
                aria-selected={selected}
                lang={l.id}
                onClick={() => choose(index)}
                onPointerMove={() => setActive(index)}
                className={`flex cursor-pointer items-center gap-3 px-3 py-2 text-sm ${
                  index === active ? "bg-white/10 text-foreground" : "text-foreground/75"
                }`}
              >
                <Flag country={l.country} className="h-4 w-6 shrink-0" />
                <span className="flex-1">{localeLabel(l)}</span>
                {selected && (
                  <span className="text-foreground" aria-hidden>
                    ✓
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
