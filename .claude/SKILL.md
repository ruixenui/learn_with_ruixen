# Learn Ruixen UI - Design Engineering Components

## Project Overview

A Next.js TypeScript application showcasing design engineering components and lessons in the style of Rauno Freiberg. Each lesson focuses on the subtle details that transform ordinary UI elements into refined, tactile experiences.

## Philosophy

> "The details matter."

This project teaches the art of **micro-interactions** and **design refinement**. Each lesson contrasts a "boring" implementation with a "refined" one, annotating the specific details that make the difference.

### Core Principles

1. **Subtlety over flash** - Small, intentional animations (150ms, scale 0.98)
2. **Tactile feedback** - Every interaction should feel physical
3. **Accessibility first** - Focus states, keyboard navigation, screen readers
4. **Dark mode native** - Designed for both light and dark from the start
5. **Typography matters** - Monospace for labels, tight tracking for headers

## Project Structure

```
learn_ruixenui/
├── .claude/
│   └── SKILL.md              # This file
├── app/
│   ├── layout.tsx            # Root layout with fonts
│   ├── page.tsx              # Main page - loads lessons sequentially
│   └── globals.css           # Global styles, CSS variables
├── components/
│   ├── lessons/
│   │   ├── lesson-wrapper.tsx    # Container for each lesson
│   │   ├── lesson-one.tsx        # Buttons lesson
│   │   ├── lesson-two.tsx        # Inputs lesson (future)
│   │   └── ...
│   ├── ui/
│   │   ├── annotation.tsx        # Annotation component
│   │   └── code-block.tsx        # Code display component
│   └── navigation.tsx            # Site navigation
├── lib/
│   └── utils.ts              # Utility functions (cn helper)
├── public/
│   └── ...
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## Design System

### Colors

- **Background**: `white` / `neutral-950`
- **Text Primary**: `neutral-950` / `white`
- **Text Secondary**: `neutral-500` / `neutral-400`
- **Text Muted**: `neutral-400` / `neutral-500`
- **Borders**: `neutral-200` / `neutral-800`
- **Accent**: `neutral-900` / `white`

### Typography

- **Headers**: System font, -0.02em tracking, medium weight
- **Body**: System font, relaxed line height
- **Labels**: Monospace, uppercase, wide tracking, 11-13px
- **Annotations**: Monospace, 11px, muted color

### Spacing

- **Section gap**: 16 (mb-16)
- **Content padding**: 10 (p-10)
- **Annotation gap**: 2.5 (space-y-2.5)

### Animations

- **Duration**: 150ms (fast, responsive)
- **Easing**: `ease-out` (natural deceleration)
- **Hover scale**: 0.98 (subtle intent)
- **Press scale**: 0.96 (tactile depth)

## Lesson Format

Each lesson follows this structure:

1. **Header Section**
   - Category label (monospace, uppercase)
   - Title (provocative statement)
   - Description (explanation of the lesson)

2. **Before/After Grid**
   - Side-by-side comparison
   - Interactive components
   - Annotations explaining differences

3. **Code Section** (optional)
   - Highlighted code showing the implementation

4. **Bottom Note**
   - Closing thought or principle

## Commands

```bash
# Development
pnpm dev

# Build
pnpm build

# Production
pnpm start

# Lint
pnpm lint
```

## Adding New Lessons

1. Create `components/lessons/lesson-[number].tsx`
2. Follow the established structure
3. Export the component
4. Add to the lessons array in `app/page.tsx`

## Style Guidelines

### Annotations

```tsx
<Annotation>description — effect</Annotation>
```

Format: `what you did — what it achieves`

### Comparisons

Always show:
- **Before**: The naive/common approach
- **After**: The refined implementation

### Transitions

```css
transition-all duration-150 ease-out
```

Use `duration-150` for most interactions. Only use longer durations for larger animations.

## Future Lessons

- [ ] Lesson 02: Input Fields
- [ ] Lesson 03: Cards & Containers
- [ ] Lesson 04: Navigation
- [ ] Lesson 05: Loading States
- [ ] Lesson 06: Tooltips
- [ ] Lesson 07: Modals
- [ ] Lesson 08: Tabs
- [ ] Lesson 09: Accordions
- [ ] Lesson 10: Toasts/Notifications

## Credits

Inspired by [Rauno Freiberg](https://rauno.me)'s approach to design engineering.
