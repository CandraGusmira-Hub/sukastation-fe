const base = "h-5 w-5";

export const IconGamepad = ({ className = base }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path
      d="M7 9h10a4 4 0 0 1 4 4.2l-.6 3a2.4 2.4 0 0 1-4.3.9L15 15H9l-1.1 2.1a2.4 2.4 0 0 1-4.3-.9l-.6-3A4 4 0 0 1 7 9Z"
      strokeLinejoin="round"
    />
    <path d="M8 12h2M9 11v2M16 12h.01M18 10.5h.01" strokeLinecap="round" />
  </svg>
);

export const IconLibrary = ({ className = base }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="4" y="4" width="4" height="16" rx="1" />
    <rect x="10" y="6" width="4" height="14" rx="1" />
    <path d="M16.5 7.2 20 8.4a1 1 0 0 1 .6 1.3L18 19a1 1 0 0 1-1.3.6l-1.4-.5" />
  </svg>
);

export const IconClock = ({ className = base }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconShield = ({ className = base }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 3.5 5 6v5.5c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-2.5Z" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconHeadset = ({ className = base }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M4 13v-1a8 8 0 0 1 16 0v1" strokeLinecap="round" />
    <rect x="3" y="13" width="4" height="6" rx="1.2" />
    <rect x="17" y="13" width="4" height="6" rx="1.2" />
    <path d="M20 19v1a2 2 0 0 1-2 2h-3" strokeLinecap="round" />
  </svg>
);

export const IconCheck = ({ className = base }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconArrowLeft = ({ className = base }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconArrowRight = ({ className = base }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconWhatsapp = ({ className = base }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20Zm4.4-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.1-.3.2-.5.1-.6-.3-1.3-.7-1.9-1.3a7 7 0 0 1-1.3-1.6c-.1-.2 0-.4.1-.5l.4-.4c.1-.1.1-.3.2-.4 0-.1 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.6.6-.9 1.4-.8 2.3.2 1.4 1.2 2.8 2.4 3.7 1.4 1.2 2.6 1.7 3.9 2 .5.1 1 .2 1.5.1.6-.1 1.4-.6 1.6-1.2.2-.5.2-1 .1-1.1-.1-.1-.2-.1-.4-.2Z" />
  </svg>
);

export const IconInstagram = ({ className = base }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const IconTiktok = ({ className = base }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.7 3h2.2c.2 1.5 1 2.9 2.6 3.6.7.3 1.4.5 2.1.5v2.5c-1.4 0-2.7-.4-3.9-1.2v6.1c0 3.2-2.4 5.5-5.5 5.5A5.5 5.5 0 0 1 6.7 14.5c0-2.9 2.2-5.3 5-5.5v2.6a2.9 2.9 0 1 0 2.9 2.9V3Z" />
  </svg>
);

export const IconYoutube = ({ className = base }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
    <path d="M10.5 9.7v4.6l4-2.3-4-2.3Z" fill="currentColor" stroke="none" />
  </svg>
);

export const IconVip = ({ className = base }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M3 8l4.5 4.5L12 5l4.5 7.5L21 8l-1.8 10H4.8L3 8Z" strokeLinejoin="round" />
    <path d="M5 21h14" strokeLinecap="round" />
    <circle cx="3" cy="8" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="5" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="21" cy="8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const IconStar = ({ className = base }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);
