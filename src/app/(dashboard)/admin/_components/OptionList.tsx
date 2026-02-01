import Option, { OptionType } from "./Option";

export interface OptionListType {
  options: OptionType[];
}
export default function OptionList({ options }: OptionListType) {
  return (
    <ul>
      {options.map((o) => (
        <Option key={o.id} {...o} />
      ))}
    </ul>
  );
}
