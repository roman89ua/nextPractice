"use client";

import { ChangeEvent, useState } from "react";

const TextInput = ({ title }: { title: string }) => {
  const [value, setValue] = useState<string>("");

  return (
    <label htmlFor="anyInput">
      <span>Any value input | {title}</span>
      <input
        className="border-2 border-blue-950"
        type="text"
        value={value}
        id="anyInput"
        name="anyInput"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
    </label>
  );
};

export default TextInput;
