import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MailboxForm({ addBox }) {
  const [formData, setFormData] = useState({
    boxOwner: "",
    boxSize: "Small",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addBox(formData);
    navigate("/mailboxes");
  }

  return (
    <main>
      <h1>New Mailbox</h1>

      <form onSubmit={handleSubmit}>
        <label>Box Owner</label>
        <input
          name="boxOwner"
          value={formData.boxOwner}
          onChange={handleChange}
          required
        />

        <label>Box Size</label>
        <select name="boxSize" value={formData.boxSize} onChange={handleChange}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <button type="submit">Create Mailbox</button>
      </form>
    </main>
  );
}
