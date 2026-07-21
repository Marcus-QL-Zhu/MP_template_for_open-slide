---
name: Michael Page Bilingual
description: Corporate recruitment deck theme with the current Michael Page logo, Aptos typography, deep purple, electric violet, and restrained supporting colours.
---

# Michael Page Bilingual

## Palette

This theme uses the colours embedded in the latest Michael Page PowerPoint source. Deep purple carries the brand and all high-authority text. Electric violet handles navigation and emphasis. Supporting colours are signals for charts, processes, and proof points; they should not compete with the core pair.

| Role     | Value     | Notes                                                  |
| -------- | --------- | ------------------------------------------------------ |
| bg       | `#ffffff` | primary slide background                               |
| text     | `#22174e` | body copy and high-authority headings                  |
| heading  | `#22174e` | Michael Page deep purple                               |
| primary  | `#6864ff` | electric violet for rules, navigation, and key signals |
| mint     | `#abf3ab` | positive or progress signal                            |
| cyan     | `#8fe9ff` | information or comparison signal                       |
| orchid   | `#e19fff` | secondary category signal                              |
| coral    | `#ff7061` | important contrast or exception signal                 |
| apricot  | `#ffc88f` | warm secondary signal                                  |
| lemon    | `#ffffa9` | sparing highlight                                      |
| muted    | `#6f6988` | captions and secondary notes                           |
| rule     | `#d8d5e5` | separators and table rules                             |
| ruleSoft | `#f1f0f6` | pale section dividers                                  |

## Typography

The latest source template resolves primarily to Aptos, with Aptos Display used for display text. Chinese fallbacks follow immediately so bilingual slides remain stable across Windows and macOS.

- Display font: `'Aptos Display', Aptos, 'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', system-ui, sans-serif`.
- Body font: `Aptos, 'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', system-ui, sans-serif`.
- Hero title: 68 px for mixed Chinese/English titles; up to 82 px for short English covers.
- Page heading: 48 px, weight 700, deep purple.
- Section heading: 34 px, weight 700.
- Body text: 25 px, line-height 1.55 for Chinese; 27 px, line-height 1.45 for English.
- Caption / source: 18 px, muted purple-grey.

## Layout

- Canvas is horizontal 1920 x 1080.
- Content padding: 96 px left/right, 82 px top, 86 px bottom.
- Logo grammar: use the official `@assets/logos/michael-page-logo.jpg` wordmark. Keep it on a white field, never recolour, distort, crop, or recreate it. Reserve a fixed, non-shrinking logo area.
- Header grammar: title at top-left; a pale lavender-grey rule sits below the title band. Optional bilingual subtitle sits below the title.
- Footer grammar: deep purple bottom stripe with a thin electric-violet keyline. Page marker sits bottom-right; the wordmark and practice label sit bottom-left.
- Main content families:
  - two-column narrative plus proof object;
  - wide table with deep-purple row labels and hairline rules;
  - circular process or radar diagram with controlled supporting colours;
  - evidence area with a compact caption rail.
- Alignment is left aligned. Center only for circular diagrams or ceremonial cover elements.
- Default imagery is typographic, diagrammatic, or data-led. Do not use portraits or stock photography unless the user explicitly requests and supplies an approved image direction.

## Fixed components

### Title

```tsx
const Title = ({ children }: { children: React.ReactNode }) => (
  <h1
    style={{
      fontFamily:
        "'Aptos Display', Aptos, 'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', system-ui, sans-serif",
      fontSize: 48,
      fontWeight: 700,
      lineHeight: 1.2,
      margin: 0,
      color: '#22174e',
    }}
  >
    {children}
  </h1>
);
```

### Footer

Pull the page number from `useSlidePageNumber()`; never hardcode page values.

```tsx
import { useSlidePageNumber } from '@open-slide/core';
import michaelPageLogo from '@assets/logos/michael-page-logo.jpg';

const Footer = ({ label = 'Expert in recruitment' }: { label?: string }) => {
  const { current, total } = useSlidePageNumber();
  return (
    <>
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 18,
          background: '#22174e',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 18,
          height: 4,
          background: '#6864ff',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 96,
          right: 96,
          bottom: 36,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily:
            "Aptos, 'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', system-ui, sans-serif",
          fontSize: 18,
          color: '#6f6988',
        }}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 18, minWidth: 460 }}>
          <img
            src={michaelPageLogo}
            alt="Michael Page"
            style={{ width: 168, minWidth: 168, height: 'auto', display: 'block', flexShrink: 0 }}
          />
          <span style={{ whiteSpace: 'nowrap' }}>{label}</span>
        </span>
        <span>
          {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>
    </>
  );
};
```

### Eyebrow / accents

```tsx
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      fontFamily:
        "Aptos, 'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', system-ui, sans-serif",
      fontSize: 18,
      fontWeight: 700,
      color: '#6864ff',
    }}
  >
    <span aria-hidden style={{ width: 28, height: 3, background: '#6864ff' }} />
    {children}
  </div>
);
```

## Motion

- Keep motion subtle and limited to staged reveals.
- Static export must always read as a complete business document.

```css
@keyframes mp-fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

## Aesthetic

Clean recruitment consulting with generous white space, deep-purple authority, electric-violet navigation, quiet rules, and evidence-first layouts. Preserve the existing company template's disciplined title band, footer, circular process language, and table structure. Supporting colours are accents, not page backgrounds. Avoid decorative gradients, heavy shadows, rounded SaaS cards, fake logos, portrait photography, stock-photo hero treatments, and dense portrait-page copy pasted into a wide slide.

## Example usage

```tsx
import michaelPageLogo from '@assets/logos/michael-page-logo.jpg';

const Cover: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: '#ffffff',
      color: '#22174e',
      padding: '96px 96px 86px',
      boxSizing: 'border-box',
      fontFamily:
        "Aptos, 'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', system-ui, sans-serif",
      position: 'relative',
    }}
  >
    <img
      src={michaelPageLogo}
      alt="Michael Page"
      style={{ width: 360, minWidth: 360, height: 'auto', display: 'block', marginBottom: 66 }}
    />
    <Eyebrow>Hard Tech Practice</Eyebrow>
    <h1 style={{ margin: '108px 0 0', fontSize: 68, lineHeight: 1.18, color: '#22174e' }}>
      米高蒲志硬科技团队介绍
    </h1>
    <p style={{ margin: '28px 0 0', fontSize: 28, lineHeight: 1.5, color: '#6f6988' }}>
      Bilingual proposal template for China and global client conversations.
    </p>
    <Footer label="Engineering & Manufacturing" />
  </div>
);
```
