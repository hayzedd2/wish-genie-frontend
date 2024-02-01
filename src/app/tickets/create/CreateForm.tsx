"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CreateForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("low");
  const [loading, isLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const dataForm = {
      title,
      body,
      priority,
      user_email: "azeez@gmail.com",
    };

    const res = await fetch("http://localhost:4000/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataForm),
    });
    if (res.status === 201) {
      router.refresh();
      router.push("/tickets");
    }
  };
  return (
    <form className="w-full" onSubmit={handleSubmit}>
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
      <button className="btn btn-primary" disabled={loading}>
        {loading ? <p>Adding ....</p> : <p>Add Ticket</p>}
      </button>
    </form>
  );
};
export default CreateForm;
