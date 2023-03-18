import React, { useState } from "react";
import { ValidationError, useForm } from "@formspree/react";
import { styles } from "./styles";

export const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("mnvnpjrm");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  React.useEffect(() => {
    if (state.succeeded) {
      setName("");
      setEmail("");
      setMessage("");
    }
  }, [state]);

  return (
    <section id="contact" className="contact" style={styles.Section}>
      <div className="container-sm">
        <h2 className="section-heading">Contact</h2>
        <p>
          Required fields are followed by
          <strong>
            <span aria-label="required">*</span>
          </strong>
          .
        </p>
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="name" className="label">
            Name
            <strong>
              <span aria-label="required">*</span>
            </strong>
            <input
              className="input"
              disabled={state.submitting}
              id="name"
              type="text"
              placeholder="First and Last Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label htmlFor="email" className="label">
            Email
            <strong>
              <span aria-label="required">*</span>
            </strong>
            <input
              className="input"
              disabled={state.submitting}
              id="email"
              type="email"
              placeholder="name@email.com"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>

          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message" className="label">
            Message:
            <textarea
              className="input"
              rows={1}
              id="message"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
              disabled={state.submitting}
            />
          </label>

          <button
            className={["button", "contact__submit-btn"].join(" ")}
            type="submit"
            disabled={!email || !message || state.succeeded}
          >
            Send
          </button>
        </form>
        {state.succeeded && <p>Thank you for submitting!</p>}
      </div>
    </section>
  );
};
