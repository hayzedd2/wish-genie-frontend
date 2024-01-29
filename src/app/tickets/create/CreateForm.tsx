"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("low");
  const [loading, isLoading] = useState(false);
  const router = useRouter();
  return (
    <form className="w-full">
      <label>
        <span>Title :</span>
        <input
          type="text"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Body :</span>
        <input
          type="text"
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </label>
      <label>
        <span>Priority :</span>
        <select
          required
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
        >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
        </select>
      </label>
    </form>
  );
};

export default CreateForm;
