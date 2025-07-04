function CopyIcon({ sizes }) {
  return (
    <svg width={sizes} height={sizes} viewBox="0 0 24 24">
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeWidth="2"
      >
        <path d="M16 3H4v13" />
        <path d="M8 7h12v12a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z" />
      </g>
    </svg>
  );
}

export default CopyIcon;
