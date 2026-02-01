export interface OptionType {
  id: string | number;
  label: string;
  action: () => void;
}
export default function Option({ label, action }: OptionType) {
  return (
    <button
      type="button"
      className="bg-red-400"
      onClick={() => {
        action();
      }}
    >
      {label}
    </button>
  );
}
