import { EmailTemplate } from "src/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const name = String(formData.get("name"));
  const interest = String(formData.get("interest"));
  const message = String(formData.get("message"));
  const company = String(formData.get("company"));
  const phone = String(formData.get("phone"));
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
      text: ` Area of Intrest ${interest},
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
