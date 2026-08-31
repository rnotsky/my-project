export const runtime = "edge";

import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";


export async function POST(req: Request) {
  try {

    const {
      name,
      email,
      company,
      subject,
      projectType,
      message,
    } = await req.json();



    if (!name || !email || !subject || !message) {

      return NextResponse.json(
        {
          success: false,
          error: "Please fill in all required fields.",
        },
        {
          status: 400,
        }
      );

    }



    const { error } = await resend.emails.send({

      from: "RNOTSKY <onboarding@resend.dev>",

      to: process.env.CONTACT_EMAIL!,

      replyTo: email,

      subject: `🚀 New Contact Form - ${subject}`,



      html: `

      <div
        style="
        font-family:Arial;
        padding:30px;
        background:#0b0b0b;
        color:white;
        "
      >

        <h2 style="color:#a855f7">
          New Contact Form Submission
        </h2>


        <hr/>


        <p>
          <b>Name:</b> ${name}
        </p>


        <p>
          <b>Email:</b> ${email}
        </p>


        <p>
          <b>Company:</b> ${company || "N/A"}
        </p>


        <p>
          <b>Project Type:</b> ${projectType || "N/A"}
        </p>


        <p>
          <b>Subject:</b> ${subject}
        </p>



        <h3>
          Message
        </h3>



        <div
          style="
          padding:20px;
          background:#151515;
          border-radius:10px;
          white-space:pre-wrap;
          "
        >
          ${message}
        </div>


      </div>

      `,

    });




    if (error) {

      console.error(error);


      return NextResponse.json(
        {
          success:false,
          error:error.message,
        },
        {
          status:500,
        }
      );

    }




    return NextResponse.json(
      {
        success:true,
        message:"Email sent successfully.",
      }
    );



  } catch(error) {


    console.error(error);



    return NextResponse.json(
      {
        success:false,
        error:"Internal Server Error",
      },
      {
        status:500,
      }
    );


  }
}