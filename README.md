# MP_template_for_open-slide

A Michael Page-style bilingual presentation template for [open-slide](https://www.npmjs.com/package/@open-slide/core).

This project gives you a ready-to-edit corporate recruitment deck style: white canvas, Michael Page blue, thin grey rules, bilingual Chinese/English typography, reusable footer/header patterns, and a three-page sample deck.

## What is included

- `slides/michael-page-template/index.tsx` - the editable example deck.
- `themes/michael-page-bilingual.md` - theme guide, palette, typography, layout rules, and copy-paste components.
- `assets/logos/michael-page-logo.jpg` - logo asset used by the sample deck.
- `vercel.json` and `netlify.toml` - static deployment config.

## Requirements

- Node.js 18 or newer.
- pnpm. If you do not have pnpm, run:

```bash
corepack enable
```

## Install

```bash
git clone https://github.com/Marcus-QL-Zhu/MP_template_for_open-slide.git
cd MP_template_for_open-slide
pnpm install
```

## Run locally

```bash
pnpm dev
```

Open:

```text
http://localhost:5173/s/michael-page-template
```

If port `5173` is already in use, change `port` in `open-slide.config.ts`.

## Use in an existing open-slide project

If you already have your own open-slide workspace, you do not need to clone this repo as a standalone project. Copy the template folders into your project:

```bash
cp -r themes/michael-page-bilingual.md /path/to/your-open-slide-project/themes/
cp -r assets/logos /path/to/your-open-slide-project/assets/
cp -r slides/michael-page-template /path/to/your-open-slide-project/slides/
```

On Windows PowerShell:

```powershell
Copy-Item -Recurse themes\michael-page-bilingual.md C:\path\to\your-open-slide-project\themes\
Copy-Item -Recurse assets\logos C:\path\to\your-open-slide-project\assets\
Copy-Item -Recurse slides\michael-page-template C:\path\to\your-open-slide-project\slides\
```

Then open the copied deck:

```text
http://localhost:5173/s/michael-page-template
```

For your own deck, set the slide metadata to use the theme:

```tsx
export const meta: SlideMeta = {
  title: 'Your deck title',
  theme: 'michael-page-bilingual',
};
```

This covers two workflows: new users can clone this repo directly, while existing open-slide users can copy only `themes/`, `assets/`, and `slides/` into their current workspace.

## Edit the deck

Open:

```text
slides/michael-page-template/index.tsx
```

Each page is a React component. The deck exports an array of pages:

```tsx
export default [Cover, Capabilities, Process] satisfies Page[];
```

To add a page:

1. Create a new `const MyPage: Page = () => (...)`.
2. Add it to the exported array.
3. Reuse the built-in `Header`, `Footer`, `Eyebrow`, and palette patterns.

To create a new deck, copy the folder:

```bash
cp -r slides/michael-page-template slides/my-client-deck
```

Then edit the copied `index.tsx`.

## Build

```bash
pnpm build
```

The static output is generated in:

```text
dist/
```

Preview the built site locally:

```bash
pnpm preview
```

## Deploy

### Vercel

1. Import this GitHub repository into Vercel.
2. Use the default framework detection or set:
   - Install command: `pnpm install`
   - Build command: `pnpm build`
   - Output directory: `dist`
3. Deploy.

### Netlify

This repo includes `netlify.toml`, so Netlify can use:

```text
Build command: pnpm build
Publish directory: dist
```

### Any static host

Run:

```bash
pnpm build
```

Then upload the `dist/` folder to your static hosting provider.

## Export files

Generated exports, previews, and scratch files should go under `outputs/`. That folder is ignored by Git.

If you intentionally want to commit a generated artifact, force-add it:

```bash
git add -f outputs/path/to/file.pptx
```

## Brand and license notice

The source code in this repository is licensed under MIT.

Michael Page names, marks, logos, and visual identity assets belong to their respective owner. The included brand asset is provided as a template reference. Replace it with your own authorized asset unless you have permission to use Michael Page branding.

## 中文说明

这是一个可直接运行的 open-slide 米高蒲志风格双语 PPT 模板。

常用命令：

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

本地预览地址：

```text
http://localhost:5173/s/michael-page-template
```

主要编辑文件：

```text
slides/michael-page-template/index.tsx
```

主题规范文件：

```text
themes/michael-page-bilingual.md
```

部署到 Vercel 或 Netlify 时，构建命令使用 `pnpm build`，输出目录使用 `dist`。

如果你已经有自己的 open-slide 项目，也可以直接把本项目里的 `themes/`、`assets/`、`slides/` 复制到现有项目中使用。新用户可以直接 clone 运行，老用户可以把模板搬进自己的项目。
