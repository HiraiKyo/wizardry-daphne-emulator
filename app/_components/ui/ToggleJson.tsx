import { useState } from 'react';

export const ToggledJson = ({ json } : { json: any }) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setIsToggled(!isToggled)} className="text-sm text-gray-500">
        {isToggled ? "Hide" : "Show"} JSON
      </button>
      {isToggled && <pre className="
        p-4
        bg-gray-100
        text-gray-600
        rounded-lg
        overflow-auto
        text-xs
        whitespace-pre-wrap
        break-all
      ">{JSON.stringify(json, null, 2)}</pre>}
    </div>
  );
}