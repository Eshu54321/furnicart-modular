import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, locality, budget, projectType, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and Phone Number are required" },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    // Primary delivery via Web3Forms
    if (accessKey) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Workspace Inquiry from ${name} - Furnicart Modular`,
          from_name: "Furnicart Website Inquiry",
          name,
          phone,
          email: email || "Not Provided",
          projectLocation: locality || "Not Provided",
          modularSystemNeeded: projectType,
          estimatedBudget: budget,
          details: message || "No additional message",
        }),
      });

      const data = await response.json();
      if (!data.success) {
        console.error("Web3Forms error:", data);
        return NextResponse.json(
          { error: data.message || "Failed to send email" },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true });
    }

    // Fallback if no access key is configured yet (logs lead safely so client gets success)
    console.log("New Lead Received (Add WEB3FORMS_ACCESS_KEY in .env.local to deliver to inbox):", {
      name,
      phone,
      email,
      locality,
      budget,
      projectType,
      message,
    });

    return NextResponse.json({ success: true, simulated: true });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
