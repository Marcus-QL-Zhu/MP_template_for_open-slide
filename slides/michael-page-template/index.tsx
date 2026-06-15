import {
  type DesignSystem,
  type Page,
  type SlideMeta,
  useSlidePageNumber,
} from '@open-slide/core';
import michaelPageLogo from '@assets/logos/michael-page-logo.jpg';
import type { ReactNode } from 'react';

export const design: DesignSystem = {
  palette: { bg: '#ffffff', text: '#36444d', accent: '#0055a1' },
  fonts: {
    display:
      "'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', Arial, Aptos, system-ui, sans-serif",
    body: "'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', Arial, Aptos, system-ui, sans-serif",
  },
  typeScale: { hero: 68, body: 26 },
  radius: 2,
};

export const meta: SlideMeta = {
  title: 'Michael Page Template',
  theme: 'michael-page-bilingual',
  createdAt: '2026-06-15T00:00:00.000Z',
};

const styles = `
@keyframes mp-fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
`;

const palette = {
  bg: '#ffffff',
  text: '#36444d',
  heading: '#0055a1',
  blueDeep: '#004fa3',
  blueLight: '#b8d2e8',
  grey: '#6d6e71',
  muted: '#7f8a92',
  rule: '#d8d8d8',
  ruleSoft: '#eeeeee',
  accentDark: '#002840',
};

const pageBase: React.CSSProperties = {
  width: '100%',
  height: '100%',
  background: palette.bg,
  color: palette.text,
  boxSizing: 'border-box',
  padding: '82px 96px 86px',
  position: 'relative',
  overflow: 'hidden',
  fontFamily: 'var(--osd-font-body)',
};

const Title = ({ children }: { children: ReactNode }) => (
  <h1
    style={{
      fontFamily: 'var(--osd-font-display)',
      fontSize: 48,
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: 0,
      margin: 0,
      color: palette.heading,
    }}
  >
    {children}
  </h1>
);

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
          background: palette.blueDeep,
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
          fontFamily: 'var(--osd-font-body)',
          fontSize: 18,
          color: palette.grey,
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

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: 'var(--osd-font-body)',
      fontSize: 18,
      fontWeight: 700,
      color: palette.heading,
    }}
  >
    <span aria-hidden style={{ width: 28, height: 3, background: palette.heading }} />
    {children}
  </div>
);

const Header = ({ title, note }: { title: ReactNode; note?: ReactNode }) => (
  <header>
    <Title>{title}</Title>
    {note ? (
      <p style={{ margin: '10px 0 0', fontSize: 22, lineHeight: 1.45, color: palette.muted }}>
        {note}
      </p>
    ) : null}
    <div
      aria-hidden
      style={{
        height: 8,
        marginTop: 26,
        background: `linear-gradient(180deg, ${palette.ruleSoft}, ${palette.rule})`,
      }}
    />
  </header>
);

const Cover: Page = () => (
  <div
    style={{
      ...pageBase,
      padding: '96px 96px 86px',
    }}
  >
    <style>{styles}</style>
    <div style={{ animation: 'mp-fadeUp 420ms ease-out both' }}>
      <img
        src={michaelPageLogo}
        alt="Michael Page"
        style={{ width: 360, minWidth: 360, height: 'auto', display: 'block', marginBottom: 66 }}
      />
      <Eyebrow>Hard Tech Practice | 硬科技团队</Eyebrow>
      <h1
        style={{
          margin: '108px 0 0',
          maxWidth: 1140,
          fontFamily: 'var(--osd-font-display)',
          fontSize: 'var(--osd-size-hero)',
          fontWeight: 700,
          lineHeight: 1.18,
          letterSpacing: 0,
          color: palette.heading,
        }}
      >
        米高蒲志硬科技团队介绍
      </h1>
      <p
        style={{
          margin: '28px 0 0',
          maxWidth: 960,
          fontSize: 28,
          lineHeight: 1.5,
          color: palette.grey,
        }}
      >
        Bilingual proposal template for China and global client conversations.
      </p>
    </div>
    <div
      aria-hidden
      style={{
        position: 'absolute',
        right: 180,
        top: 300,
        width: 340,
        height: 340,
        borderRadius: '50%',
        border: `72px solid ${palette.heading}`,
        borderRightColor: '#6d6e71',
        borderBottomColor: palette.blueLight,
        opacity: 0.96,
      }}
    />
    <div
      aria-hidden
      style={{
        position: 'absolute',
        right: 284,
        top: 404,
        width: 132,
        height: 132,
        borderRadius: '50%',
        background: palette.bg,
      }}
    />
    <Footer label="Engineering & Manufacturing" />
  </div>
);

const ProofCard = ({
  title,
  body,
  tone = palette.heading,
}: {
  title: string;
  body: string;
  tone?: string;
}) => (
  <div
    style={{
      borderTop: `1px solid ${palette.rule}`,
      paddingTop: 28,
      display: 'flex',
      gap: 22,
      minHeight: 150,
    }}
  >
    <span
      aria-hidden
      style={{
        width: 46,
        height: 46,
        borderRadius: '50%',
        background: tone,
        flex: '0 0 auto',
        boxShadow: `inset 0 0 0 12px ${palette.bg}`,
        border: `3px solid ${tone}`,
      }}
    />
    <div>
      <h3 style={{ margin: 0, fontSize: 28, lineHeight: 1.25, color: tone, fontWeight: 700 }}>
        {title}
      </h3>
      <p style={{ margin: '12px 0 0', fontSize: 22, lineHeight: 1.5, color: palette.text }}>
        {body}
      </p>
    </div>
  </div>
);

const Swatch = ({ name, value, color }: { name: string; value: string; color: string }) => (
  <div>
    <div style={{ height: 84, background: color }} />
    <div
      style={{
        border: `1px solid ${palette.rule}`,
        borderTop: 0,
        padding: '14px 16px 16px',
        minHeight: 84,
      }}
    >
      <div style={{ fontSize: 18, fontWeight: 700, color: palette.text }}>{name}</div>
      <div style={{ marginTop: 8, fontSize: 18, color: palette.muted }}>{value}</div>
    </div>
  </div>
);

const Capabilities: Page = () => (
  <div style={pageBase}>
    <style>{styles}</style>
    <Header
      title="我们的专业服务 | Specialist Practices"
      note="Keep the portrait deck's thin information structure, but translate it into wide two-column client pages."
    />
    <main
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 60,
        marginTop: 56,
        animation: 'mp-fadeUp 420ms ease-out both',
      }}
    >
      <section style={{ display: 'flex', flexDirection: 'column', gap: 34 }}>
        <ProofCard
          title="Page Executive"
          body="Senior leadership search, regional appointments, and confidential market mapping."
        />
        <ProofCard
          title="Michael Page"
          body="Mid-to-senior professional hiring across hard-tech, engineering, digital, finance, HR, and operations."
          tone={palette.blueDeep}
        />
        <ProofCard
          title="Page Outsourcing"
          body="Project hiring, scaled delivery, and flexible recruitment solutions for fast-moving business changes."
          tone={palette.accentDark}
        />
      </section>
      <section
        style={{
          borderLeft: `1px solid ${palette.rule}`,
          paddingLeft: 58,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <Eyebrow>Communication colour</Eyebrow>
          <div
            style={{
              marginTop: 28,
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 18,
            }}
          >
            <Swatch name="Brand blue" value="#0055A1" color="#0055a1" />
            <Swatch name="PPT blue" value="#004FA3" color="#004fa3" />
            <Swatch name="Brand grey" value="#6D6E71" color="#6d6e71" />
          </div>
        </div>
        <p style={{ margin: 0, fontSize: 30, lineHeight: 1.45, color: palette.text }}>
          Use blue for authority and navigation; use grey rules to organize dense bilingual copy
          without making the slide feel boxed in.
        </p>
      </section>
    </main>
    <Footer label="Michael Page Bilingual Theme" />
  </div>
);

const ProcessStep = ({
  label,
  angle,
  active = false,
}: {
  label: string;
  angle: number;
  active?: boolean;
}) => {
  const radius = 238;
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;
  return (
    <div
      style={{
        position: 'absolute',
        left: 300 + x - 58,
        top: 300 + y - 58,
        width: 116,
        height: 116,
        borderRadius: '50%',
        background: active ? palette.heading : '#f1f4f6',
        color: active ? palette.bg : palette.text,
        border: `2px solid ${active ? palette.heading : palette.rule}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 21,
        fontWeight: 700,
        lineHeight: 1.25,
      }}
    >
      {label}
    </div>
  );
};

const ProcessNote = ({ title, body }: { title: string; body: string }) => (
  <div
    style={{
      borderTop: `2px solid ${palette.heading}`,
      paddingTop: 20,
      minHeight: 188,
    }}
  >
    <h3 style={{ margin: 0, fontSize: 28, lineHeight: 1.25, color: palette.heading }}>
      {title}
    </h3>
    <p style={{ margin: '14px 0 0', fontSize: 23, lineHeight: 1.5, color: palette.text }}>
      {body}
    </p>
  </div>
);

const Process: Page = () => (
  <div style={pageBase}>
    <style>{styles}</style>
    <Header
      title="我们的工作流程 | Search Process"
      note="Circular process language from the source deck, rebuilt for a wide executive slide."
    />
    <main
      style={{
        display: 'grid',
        gridTemplateColumns: '640px 1fr',
        gap: 86,
        marginTop: 44,
        animation: 'mp-fadeUp 420ms ease-out both',
      }}
    >
      <section style={{ position: 'relative', width: 640, height: 640 }}>
        <div
          aria-hidden
          style={{
            position: 'absolute',
            left: 92,
            top: 92,
            width: 416,
            height: 416,
            borderRadius: '50%',
            border: `54px solid ${palette.blueLight}`,
            borderTopColor: palette.heading,
            borderRightColor: palette.blueDeep,
            borderBottomColor: palette.grey,
            transform: 'rotate(-18deg)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 190,
            top: 190,
            width: 220,
            height: 220,
            borderRadius: '50%',
            background: palette.bg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: 38,
            lineHeight: 1.22,
            color: palette.text,
            boxShadow: `0 0 0 1px ${palette.rule}`,
          }}
        >
          我们的
          <br />
          工作流程
        </div>
        <ProcessStep label="互动" angle={-90} active />
        <ProcessStep label="搜寻" angle={-18} />
        <ProcessStep label="评估" angle={54} />
        <ProcessStep label="交付" angle={126} />
        <ProcessStep label="支持" angle={198} />
      </section>
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 38 }}>
        <ProcessNote
          title="互动 | Engage"
          body="Clarify role context, success profile, and target candidate universe before search begins."
        />
        <ProcessNote
          title="搜寻 | Search"
          body="Combine market mapping, network reach, database depth, and direct candidate approach."
        />
        <ProcessNote
          title="评估 | Assess"
          body="Evaluate capability, motivation, compensation fit, and cultural alignment with concise evidence."
        />
        <ProcessNote
          title="交付 | Deliver"
          body="Shortlist, feedback cadence, offer support, and onboarding continuity stay visible to the client."
        />
      </section>
    </main>
    <Footer label="Process and delivery model" />
  </div>
);

export default [Cover, Capabilities, Process];
