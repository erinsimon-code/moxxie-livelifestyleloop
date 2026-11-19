// Central brand/content constants for LifecycleLoop Live.
// Keep every page in sync by importing from here instead of hardcoding copy.

export const BRAND = "LifecycleLoop Live";
export const DOMAIN = "lifecyclelooplive.com";
export const SITE_URL = `https://${DOMAIN}`;

// --- Legal / contact details -------------------------------------------
export const LEGAL_NAME = "LifeCycleLoop LLC";
export const ADDRESS = "3 Germay Dr, Unit 4 #3226, Wilmington, DE 19804, United States";
export const PHONE = "+13022080355"; // E.164, used in tel: links
export const PHONE_DISPLAY = "(302) 208-0355";
export const EMAIL = "support@lifecyclelooplive.com";

// Used on /privacy and /terms where the operator must be named explicitly.
export const OPERATOR_LINE = "LifecycleLoop Live, operated by LifeCycleLoop LLC";

// Required addition to the /sms-terms program description section.
export const TOLL_FREE_NOTE = "Messages are sent from a toll-free number.";

export const TAGLINE = "Real-time updates for every step of your work journey.";

export const POSITIONING_PARAGRAPH =
  "LifecycleLoop Live is an internal employee communication program operated by LifeCycleLoop LLC. Current employees of participating employers enroll using a company ID and can choose to receive account notification texts (onboarding steps, training reminders, schedule and shift changes, benefits enrollment deadlines, workplace announcements and one-time verification codes) and/or promotional texts (employee perks and discounts offered by their employer, company events, wellness and recognition programs, and new LifecycleLoop Live features). Promotional messages come only from the employer or LifecycleLoop Live and never include third-party offers. Participation is voluntary and not a condition of employment.";

export const PROMOTIONAL_DISCLOSURE =
  "Promotional messages are optional, come only from your employer or LifecycleLoop Live, and never include third-party offers.";

export const POSITIONING_BULLETS = [
  "Voluntary. Joining is never a condition of employment, and employees can opt out any time.",
  "Promotional messages are optional, come only from your employer or LifecycleLoop Live, and never include third-party offers.",
  "Texts never include pay, SSNs, account numbers or benefit balances. They only point to the portal.",
  "Phone numbers and opt-in consent are never sold, rented or shared with third parties.",
];

export const NO_SHARING_CLAUSE =
  "Phone numbers and opt-in consent are never sold, rented or shared with third parties.";

// Word-for-word legal clause required on /privacy.
export const PRIVACY_NO_SHARING_CLAUSE =
  "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.";

export type MessageType = {
  title: string;
  description: string;
};

// Account notifications — 6 items, used word for word everywhere message
// types are listed.
export const ACCOUNT_MESSAGE_TYPES: MessageType[] = [
  {
    title: "Onboarding steps",
    description: "Guidance on what to complete next when you're new to the team.",
  },
  {
    title: "Training reminders",
    description: "Heads-up notices for required or scheduled training sessions.",
  },
  {
    title: "Schedule and shift changes",
    description: "Updates when a shift is added, changed, or needs coverage.",
  },
  {
    title: "Benefits enrollment deadlines",
    description: "Reminders about open enrollment and benefits elections windows.",
  },
  {
    title: "Workplace announcements",
    description: "Important updates from your employer that apply to your workplace.",
  },
  {
    title: "Verification codes",
    description: "One-time verification codes to confirm your mobile number.",
  },
];

// Promotional messages — 4 items, optional and separate from account
// notifications.
export const PROMOTIONAL_MESSAGE_TYPES: MessageType[] = [
  {
    title: "Employee perks and discounts",
    description: "Perks and discounts offered by your employer.",
  },
  {
    title: "Company events",
    description: "Invitations and details for company events.",
  },
  {
    title: "Wellness and recognition programs",
    description: "Updates on wellness challenges and employee recognition programs.",
  },
  {
    title: "New LifecycleLoop Live features",
    description: "Announcements about new features added to LifecycleLoop Live.",
  },
];

// Combined list — used wherever the site needs every message type together
// (e.g. /sms-terms, /privacy message-type sections).
export const MESSAGE_TYPES: MessageType[] = [
  ...ACCOUNT_MESSAGE_TYPES,
  ...PROMOTIONAL_MESSAGE_TYPES,
];

// Samples 1–4: account notification examples.
export const ACCOUNT_SAMPLE_MESSAGES: string[] = [
  "LifecycleLoop Live: Welcome aboard! Your next onboarding step is ready at lifecyclelooplive.com/portal. Reply HELP for help, STOP to opt out.",
  "LifecycleLoop Live: Reminder: Safety training is Thu 12/3 at 9:00 AM. Details at lifecyclelooplive.com/portal. Reply STOP to opt out.",
  "LifecycleLoop Live: Your shift on Sat 12/5 has changed to 10:00 AM-6:00 PM. View your schedule at lifecyclelooplive.com/portal. Reply STOP to opt out.",
  "LifecycleLoop Live: Your verification code is 482913. Enter it at lifecyclelooplive.com/verify to confirm your number. Reply HELP for help, STOP to opt out.",
];

// Samples 5–6: promotional examples.
export const PROMOTIONAL_SAMPLE_MESSAGES: string[] = [
  "LifecycleLoop Live: New employee perk! Your employer now offers discounted gym memberships. See details at lifecyclelooplive.com/portal. Reply STOP to opt out.",
  "LifecycleLoop Live: Join this month's team wellness challenge and earn recognition points. Sign up at lifecyclelooplive.com/portal. Reply STOP to opt out.",
];

// Combined list (1–6) — used wherever the site needs every sample together.
export const SAMPLE_MESSAGES: string[] = [
  ...ACCOUNT_SAMPLE_MESSAGES,
  ...PROMOTIONAL_SAMPLE_MESSAGES,
];

// Box 1 — account notifications consent (optional, unchecked by default).
export const ACCOUNT_CONSENT_LABEL =
  "Account notifications: I agree to receive recurring text messages from LifecycleLoop Live about my employment, including onboarding steps, training reminders, schedule changes, benefits deadlines, workplace announcements and one-time verification codes, at the number provided. Consent is not a condition of employment. Message frequency varies. Msg & data rates may apply. Reply HELP for help, STOP to opt out.";

// Box 2 — promotional messages consent (optional, unchecked by default).
export const PROMOTIONAL_CONSENT_LABEL =
  "Promotional messages: I agree to receive recurring promotional text messages from LifecycleLoop Live about employee perks and discounts offered by my employer, company events, wellness and recognition programs, and new LifecycleLoop Live features, at the number provided. Consent is not a condition of employment. Up to 4 msgs/month. Msg & data rates may apply. Reply HELP for help, STOP to opt out.";

export const STOP_KEYWORDS = ["STOP", "END", "CANCEL", "UNSUBSCRIBE", "QUIT"];

// /sms-terms, section 3 — replaces the old single-sentence frequency line.
export const FREQUENCY_NOTE =
  "Account notification frequency varies based on your employer and role. Promotional messages: up to 4 msgs/month.";

// /sms-terms, section 3 — added after the opt-out keywords.
export const DUAL_OPT_OUT_NOTE =
  "You can opt in to account notifications, promotional messages, or both. Replying STOP ends all messages from LifecycleLoop Live. To stop only promotional messages, contact support@lifecyclelooplive.com or (302) 208-0355.";

export const CONSENT_MOBILE_REQUIRED_ERROR =
  "Please enter your mobile number to receive text updates, or uncheck the boxes.";

export const CONSENT_MOBILE_INVALID_ERROR =
  "Please enter a valid 10-digit mobile number, or uncheck the boxes.";

export const DEFAULT_TITLE = "LifecycleLoop Live: Employee Updates";
export const DEFAULT_DESCRIPTION =
  "LifecycleLoop Live sends real-time text updates to enrolled employees about onboarding, training, schedules and benefits deadlines.";

// --- /verify copy ---------------------------------------------------------
export const VERIFY_TITLE = "Verify Your Number | LifecycleLoop Live";

export const VERIFY_PHONE_EMPTY_ERROR = "Please enter your mobile number.";
export const VERIFY_PHONE_INVALID_ERROR = "Please enter a valid 10-digit mobile number.";
export const VERIFY_CODE_EMPTY_ERROR = "Please enter the 6-digit code we texted you.";
export const VERIFY_CODE_INVALID_ERROR = "The code must be 6 digits.";

export const VERIFY_RESEND_SECONDS = 30;
