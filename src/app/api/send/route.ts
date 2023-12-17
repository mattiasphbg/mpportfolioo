import { EmailTemplate } from "src/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Mattias Petterrson <info@petterssoncreative.se>",
      to: ["mattiasp@hotmail.com"],
      subject: "Tack!",
      text: "",
      react: EmailTemplate({ firstName: "John" }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
