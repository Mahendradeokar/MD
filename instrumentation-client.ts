import posthog from "posthog-js";

const VISITOR_ID_STORAGE_KEY = "posthog_distinct_id";

function getVisitorId() {
  const existingVisitorId = window.localStorage.getItem(VISITOR_ID_STORAGE_KEY);

  if (existingVisitorId) return existingVisitorId;

  const visitorId =
    window.crypto?.randomUUID?.() ??
    `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;

  window.localStorage.setItem(VISITOR_ID_STORAGE_KEY, visitorId);
  return visitorId;
}

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN!, {
  api_host: "/ingest",
  ui_host: "https://us.posthog.com",
  defaults: "2026-01-30",
  capture_exceptions: true,
  debug: process.env.NODE_ENV === "development",
});

posthog.identify(getVisitorId());
