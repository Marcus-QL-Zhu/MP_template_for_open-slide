---
name: Michael Page Bilingual
description: Corporate recruitment deck theme - white canvas, Michael Page blue, precise grey rules, bilingual Chinese/English typography.
---

# Michael Page Bilingual

## Palette

The source PPT uses a restrained corporate system: white canvas, Michael Page blue for titles and rules, dark blue-grey body copy, pale grey dividers, and occasional mid-blue rings or chart segments. Public brand-color references consistently place Michael Page blue near `#0055A1` and grey near `#6D6E71`; the source deck itself samples closest to `#004FA3` / `#004FA2`, so this theme uses `#0055A1` as the communications anchor and keeps `#004FA3` for deep stripe/detail work.

| Role       | Value     | Notes                                                        |
| ---------- | --------- | ------------------------------------------------------------ |
| bg         | `#ffffff` | primary slide background                                     |
| text       | `#36444d` | body copy, readable on white                                 |
| heading    | `#0055a1` | Michael Page communication blue; titles, labels, key lines   |
| blueDeep   | `#004fa3` | extracted from source PPT shapes; bottom stripe and emphasis |
| blueLight  | `#b8d2e8` | secondary chart/ring fills                                   |
| grey       | `#6d6e71` | verified Michael Page grey reference                         |
| muted      | `#7f8a92` | captions, secondary notes                                    |
| rule       | `#d8d8d8` | thin separators and table rules                              |
| ruleSoft   | `#eeeeee` | pale section dividers                                        |
| accentDark | `#002840` | high-contrast diagram labels                                 |

## Typography

- Display font: `'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', Arial, Aptos, system-ui, sans-serif` - weight 700 for Chinese titles and 600-700 for English titles.
- Body font: `'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', Arial, Aptos, system-ui, sans-serif` - weight 400 with 600 for labels.
- Type-scale overrides:
  - Hero title: 68 px for Chinese/English mixed titles; use 82 px only for short English covers.
  - Page heading: 48 px, weight 700, Michael Page blue.
  - Section heading: 34 px, weight 700, blue or dark text.
  - Body text: 25 px, line-height 1.55 for Chinese; 27 px, line-height 1.45 for English.
  - Caption / source: 18 px, muted grey.

## Layout

- Canvas is horizontal 1920 x 1080.
- Content padding: 96 px left/right, 82 px top, 86 px bottom. This preserves the generous white space of the portrait template while giving wide layouts room.
- Logo grammar: use the provided `@assets/logos/michael-page-logo.jpg` wordmark on covers and in footers. Keep it on a white field, never recolor it, and do not recreate the mark manually. Reserve a fixed, non-shrinking logo area so the wordmark never wraps, clips, or collapses in narrow flex layouts.
- Header grammar: title at top-left; a pale grey horizontal rule sits below the title band. Optional short kicker or bilingual subtitle sits under the title, not above it.
- Footer grammar: a double blue stripe spans the bottom edge. The page marker sits bottom-right; the Michael Page wordmark plus a short practice label sits bottom-left.
- Main content families:
  - two-column narrative plus proof object;
  - wide table with blue row labels and hairline grey rules;
  - circular process/radar diagram with right-side notes;
  - map or evidence image area with small caption rail.
- Alignment: left aligned. Center only for circular diagrams or ceremonial cover elements.

## Fixed components

These are paste-ready. Copy them verbatim into a slide that uses this theme.

### Title

```tsx
const Title = ({ children }: { children: React.ReactNode }) => (
  <h1
    style={{
      fontFamily:
        "'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', Arial, Aptos, system-ui, sans-serif",
      fontSize: 48,
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: 0,
      margin: 0,
      color: '#0055a1',
    }}
  >
    {children}
  </h1>
);
```

### Footer

Pull the page number from `useSlidePageNumber()` - never hardcode `pageNum` / `total` props.

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
          background: '#004fa3',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 18,
          height: 4,
          background: '#7fb5df',
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
            "'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', Arial, Aptos, system-ui, sans-serif",
          fontSize: 18,
          color: '#6d6e71',
        }}
      >
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 18,
            minWidth: 460,
            whiteSpace: 'nowrap',
          }}
        >
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
        "'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', Arial, Aptos, system-ui, sans-serif",
      fontSize: 18,
      fontWeight: 700,
      color: '#0055a1',
    }}
  >
    <span aria-hidden style={{ width: 28, height: 3, background: '#0055a1' }} />
    {children}
  </div>
);
```

## Motion

- Philosophy: subtle.
- Use motion only for staged reveals in open-slide presentations. Static export should still read as a complete business document.

```css
@keyframes mp-fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

## Aesthetic

Clean corporate recruitment consulting: white space, blue authority, quiet grey information structure, and evidence-first layouts. The design should feel like a premium client proposal, not a marketing splash page. Preserve the source deck's thin separators, top title band, bottom double stripe, circular process language, and table discipline. Avoid decorative gradients, heavy shadows, rounded SaaS cards, fake logos, stock-photo hero treatments, and dense portrait-page copy pasted into a wide slide.

## Example usage

```tsx
import michaelPageLogo from '@assets/logos/michael-page-logo.jpg';

const Cover: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: '#ffffff',
      color: '#36444d',
      padding: '96px 96px 86px',
      boxSizing: 'border-box',
      fontFamily:
        "'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', Arial, Aptos, system-ui, sans-serif",
      position: 'relative',
    }}
  >
    <img
      src={michaelPageLogo}
      alt="Michael Page"
      style={{ width: 360, minWidth: 360, height: 'auto', display: 'block', marginBottom: 66 }}
    />
    <Eyebrow>Hard Tech Practice</Eyebrow>
    <h1 style={{ margin: '108px 0 0', fontSize: 68, lineHeight: 1.18, color: '#0055a1' }}>
      米高蒲志硬科技团队介绍
    </h1>
    <p style={{ margin: '28px 0 0', fontSize: 28, lineHeight: 1.5, color: '#6d6e71' }}>
      Bilingual proposal template for China and global client conversations.
    </p>
    <Footer label="Engineering & Manufacturing" />
  </div>
);
```
