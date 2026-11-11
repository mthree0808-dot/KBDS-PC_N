#!/usr/bin/env python3
"""Print only selected numbered sections from design-rules.md."""
import argparse
from pathlib import Path
import re

HEADING = re.compile(r"^(?:##|###)\s+(?P<id>P\d{2}|\d+(?:\.\d+)*)(?=\.?(?:\s|$))")
PATTERN = re.compile(r"^(?:##|###)\s+(?:P\d{2}|\d+(?:\.\d+)*)(?:\.)?\s+")

def sections(lines):
    starts = []
    for index, line in enumerate(lines):
        match = HEADING.match(line)
        if match and PATTERN.match(line):
            starts.append((match.group("id"), index, line.strip()))
    return {
        key: (start, starts[i + 1][1] if i + 1 < len(starts) else len(lines), title)
        for i, (key, start, title) in enumerate(starts)
    }

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--file", type=Path,
                        default=Path(__file__).resolve().parents[1] / "design-rules.md")
    parser.add_argument("--list", action="store_true", help="List section IDs and line ranges")
    parser.add_argument("--section", action="append", default=[], help="Section ID; repeat as needed")
    args = parser.parse_args()
    if not args.list and not args.section:
        parser.error("Use --list or --section; full-document output is intentionally disabled.")
    try:
        lines = args.file.read_text(encoding="utf-8").splitlines(keepends=True)
    except OSError as exc:
        parser.error(str(exc))
    index = sections(lines)
    requested = list(dict.fromkeys(args.section))
    unknown = [key for key in requested if key not in index]
    if unknown:
        parser.error("Unknown section(s): " + ", ".join(unknown) + ". Use --list.")
    if args.list:
        for key, (start, end, title) in index.items():
            print(f"{key}\tL{start + 1}-L{end}\t{title}")
    for key in requested:
        start, end, _ = index[key]
        print("".join(lines[start:end]).rstrip())
        print()

if __name__ == "__main__":
    main()
