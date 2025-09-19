import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { html } = req.body;

    const browser = await puppeteer.launch({
      //   headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"], // needed for serverless
    });
    const page = await browser.newPage();

    // Load HTML content
    await page.setContent(html, { waitUntil: "networkidle0" });

    // Export PDF
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=resume.pdf");
    res.send(pdfBuffer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate PDF" });
  }
}
