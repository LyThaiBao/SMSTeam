"use client";
export interface OptionType {
  id?: string | number;
  label: string;
  style?: string;
  action: () => void;
}
export default function Option({ label, action, style }: OptionType) {
  return (
    <button
      type="button"
      className={`cursor-pointer ${style}`}
      onClick={() => {
        action();
      }}
    >
      {label}
    </button>
  );
}
