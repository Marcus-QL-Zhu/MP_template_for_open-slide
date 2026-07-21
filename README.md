# MP_template_for_open-slide

The approved Michael Page bilingual template for [open-slide](https://www.npmjs.com/package/@open-slide/core), updated for the current communication colours, logo, and typography.

## Brand system

- Deep purple `#22174E` for headings, authoritative text, and the footer stripe.
- Electric violet `#6864FF` for navigation, rules, and emphasis.
- Aptos Display for display text and Aptos for body text, with Chinese-safe fallbacks.
- The current Michael Page logo image is used directly; it is never rebuilt as text.
- Layouts are typographic, diagrammatic, and data-led. Portraits and stock photography are excluded by default.

## Included files

- `slides/michael-page-template/index.tsx` — editable three-page starter deck with the approved theme selected.
- `themes/michael-page-bilingual.md` — theme guide and source of truth.
- `themes/michael-page-bilingual.demo.tsx` — theme gallery preview used by open-slide.
- `assets/logos/michael-page-logo.jpg` — current approved logo asset.
- `scripts/verify-michael-page-template.mjs` — verifies the current brand signals and theme selection.

## Install and run

```bash
git clone https://github.com/Marcus-QL-Zhu/MP_template_for_open-slide.git
cd MP_template_for_open-slide
pnpm install
pnpm dev
```

Open:

```text
http://localhost:5173/themes/michael-page-bilingual
http://localhost:5173/s/michael-page-template
```

Build and verify:

```bash
pnpm build
pnpm typecheck
pnpm verify:template
```

## Manual theme selection

Every Michael Page deck should use the stable theme ID:

```tsx
import type { Page, SlideMeta } from '@open-slide/core';
import michaelPageLogo from '@assets/logos/michael-page-logo.jpg';

export const meta: SlideMeta = {
  title: 'Your deck title',
  theme: 'michael-page-bilingual',
};

const Cover: Page = () => <div>...</div>;

export default [Cover] satisfies Page[];
```

## Use in the open-slide framework repo

When this template is installed in the open-slide monorepo, the presentation root is `apps/demo`. Keep the same files under:

```text
apps/demo/themes/michael-page-bilingual.md
apps/demo/themes/michael-page-bilingual.demo.tsx
apps/demo/slides/michael-page-template/index.tsx
apps/demo/assets/logos/michael-page-logo.jpg
```

Run `node scripts/verify-michael-page-template.mjs` from the framework root. The verifier resolves `apps/demo` automatically.

## Use in another standalone project

Copy `themes/`, `assets/logos/`, and `slides/michael-page-template/` into the target open-slide project. Keep `theme: 'michael-page-bilingual'` in the deck metadata.

## Deploy

Build output is written to `dist/` and can be deployed to Vercel, Netlify, or any static host:

```bash
pnpm build
pnpm preview
```

## Brand and license notice

The source code in this repository is licensed under MIT. Michael Page names, marks, logos, and visual identity assets belong to their respective owner and should be used only with authorization.

## 中文说明

这是已验收的 open-slide 米高蒲志双语模板。新版以深紫 `#22174E`、电光紫 `#6864FF`、Aptos 字体和最新 Logo 为准，不默认使用真人或图库照片。

通过 skill 或手动创建 slides 时，都必须使用：

```tsx
theme: 'michael-page-bilingual'
```

运行 `pnpm verify:template` 可检查模板文件、品牌色、字体、Logo 和主题选择是否正确。
