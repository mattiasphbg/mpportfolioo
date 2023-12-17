import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Hey, {firstName}!</h1>
    <p>
      Thank you so much for your interest in working with me. I really
      appreciate it! I will get back to you as soon as possible with more
      information.
    </p>
    <p>Best regards, Mattias Pettersson</p>
  </div>
);
