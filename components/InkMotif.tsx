type InkMotifProps = {
  className?: string;
};

/**
 * The site's signature mark: a single ink stroke that curls from a coffee
 * ring into a petal — the visual thesis of "café + fleurs" in one line.
 * Reused at small scale as a section divider throughout the page.
 */
export default function InkMotif({ className = "" }: InkMotifProps) {
  return (
    <svg
      viewBox="0 0 72 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`ink-divider ${className}`}
      aria-hidden="true"
    >
      <path
        d="M2 14C2 7.4 7.4 2 14 2s12 5.4 12 12-5.4 12-12 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M34 14c4-6 10-8 14-4s0 10-4 14c4-4 10-6 14-2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
