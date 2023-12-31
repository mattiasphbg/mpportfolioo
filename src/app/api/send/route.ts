import { EmailTemplate } from "src/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(
  email: string | undefined,
  name?: string | undefined,
  intrest?: string | undefined,
  message?: string | undefined,
  company?: string | undefined,
  phone?: string | undefined,
) {
  try {
    const data = await resend.emails.send({
      from: "Mattias Petterrson <info@petterssoncreative.se>",
      to: [`${email}`],
      subject: `Thanks! ${name}`,
      text: "",
      react: EmailTemplate({ firstName: `${name}` }),
    });

    const selfData = await resend.emails.send({
      from: "Mattias Petterrson <info@petterssoncreative.se>",
      to: ["mattiasp@hotmail.com"],
      subject: `Someone want to hire me at ${company} name ${name}`,
      text: ` Area of Intrest ${intrest},
              ${message}

              Email: ${email}
              phone: ${phone}
                
      `,
    });

    return Response.json({ data, selfData });
  } catch (error) {
    return Response.json({ error });
  }
}
