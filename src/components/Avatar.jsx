export function Avatar({ name, color, size = 48 }) {
  const initials = name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-full font-semibold text-white"
      style={{ width: size, height: size, background: color, fontSize: size * 0.36 }}
      aria-hidden
    >
      {initials}
    </span>
  );
}
